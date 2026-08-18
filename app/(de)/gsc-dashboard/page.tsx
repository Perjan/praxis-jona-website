import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Row = {
  key: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

type QueryInsightRow = Row & {
  query: string;
  previousClicks: number;
  clickDelta: number;
  clickChange: number | null;
  previousImpressions?: number;
  impressionDelta?: number;
  previousCtr?: number;
  ctrDelta?: number;
  previousPosition?: number;
  positionDelta?: number;
};

type QueryInsights = {
  metric?: string;
  currentStartDate?: string;
  currentEndDate?: string;
  previousStartDate?: string | null;
  previousEndDate?: string | null;
  top?: QueryInsightRow[];
  trendingUp?: QueryInsightRow[];
  trendingDown?: QueryInsightRow[];
};

type Dashboard = {
  generatedAt?: string;
  source?: string;
  site?: string;
  startDate?: string;
  endDate?: string;
  summary?: {
    totalRows?: number;
    brandClicks?: number;
    nonBrandClicks?: number;
    nonBrandShare?: number;
  };
  byCluster?: Row[];
  byPage?: Row[];
  byQuery?: Row[];
  queryInsights?: QueryInsights;
  byCountry?: Row[];
  byDevice?: Row[];
  bySearchType?: Row[];
  implementationHistory?: ImplementationHistoryEntry[];
};

type ImplementationHistoryEntry = {
  implementedAt?: string;
  summary?: string;
  why?: string;
  source?: string;
  pages?: string[];
  gscSignals?: string[];
  changes?: string[];
  expectedOutcome?: string;
};

type RecommendationProposal = {
  id: string;
  page: string;
  cluster: string;
  priority: string;
  opportunityType: string;
  reason: string;
  proposedChange: string;
  expectedOutcome: string;
  status: string;
  currentSignal: {
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
};

type Recommendations = {
  generatedAt?: string;
  mode?: string;
  proposals?: RecommendationProposal[];
};

const dashboardPath = path.join(process.cwd(), 'data/gsc/dashboard/dashboard-latest.json');
const recommendationsPath = path.join(process.cwd(), 'data/gsc/dashboard/recommendations-latest.json');

function readDashboard(): Dashboard | null {
  try {
    if (!fs.existsSync(dashboardPath)) return null;
    return JSON.parse(fs.readFileSync(dashboardPath, 'utf8')) as Dashboard;
  } catch {
    return null;
  }
}

function readRecommendations(): Recommendations {
  try {
    if (!fs.existsSync(recommendationsPath)) return {};
    return JSON.parse(fs.readFileSync(recommendationsPath, 'utf8')) as Recommendations;
  } catch {
    return {};
  }
}

function fmtNumber(value = 0) {
  return new Intl.NumberFormat('en-US').format(value);
}

function fmtPct(value = 0) {
  return (value * 100).toFixed(2) + '%';
}

function fmtWholePct(value = 0) {
  return Math.round(value * 100) + '%';
}

function fmtSignedNumber(value = 0) {
  return (value > 0 ? '+' : '') + fmtNumber(value);
}

function fmtDate(value?: string) {
  if (!value) return 'missing';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function Table({ title, rows = [] }: { title: string; rows?: Row[] }) {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {!rows.length ? (
        <p className="mt-3 text-sm text-slate-600">No data yet.</p>
      ) : (
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-medium">Key</th>
                <th className="py-2 pr-4 text-right font-medium">Clicks</th>
                <th className="py-2 pr-4 text-right font-medium">Impressions</th>
                <th className="py-2 pr-4 text-right font-medium">CTR</th>
                <th className="py-2 text-right font-medium">Position</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, 25).map((row) => (
                <tr key={title + '-' + row.key} className="border-b border-slate-100 align-top text-slate-700">
                  <td className="py-2 pr-4 font-medium text-slate-900">{row.key}</td>
                  <td className="py-2 pr-4 text-right">{fmtNumber(row.clicks)}</td>
                  <td className="py-2 pr-4 text-right">{fmtNumber(row.impressions)}</td>
                  <td className="py-2 pr-4 text-right">{fmtPct(row.ctr)}</td>
                  <td className="py-2 text-right">{row.position.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function fallbackQueryInsights(dashboard: Dashboard): QueryInsights {
  const top = (dashboard.byQuery || []).slice(0, 25).map((row) => ({
    ...row,
    query: row.key,
    previousClicks: 0,
    clickDelta: row.clicks,
    clickChange: null,
  }));

  return {
    metric: 'clicks',
    currentStartDate: dashboard.startDate,
    currentEndDate: dashboard.endDate,
    previousStartDate: null,
    previousEndDate: null,
    top,
    trendingUp: [],
    trendingDown: [],
  };
}

function QueryTrendValue({ row }: { row: QueryInsightRow }) {
  const isUp = row.clickDelta > 0;
  const color = isUp ? 'text-emerald-700' : 'text-red-700';
  const arrow = isUp ? '↑' : '↓';
  const change = row.clickChange === null
    ? isUp ? 'New' : 'Lost'
    : fmtWholePct(Math.abs(row.clickChange));

  return (
    <div className="flex items-center justify-end gap-3 tabular-nums">
      <span aria-hidden="true" className={'text-2xl leading-none ' + color}>{arrow}</span>
      <span className="text-slate-700">{change}</span>
      <span className="min-w-[3rem] text-right text-slate-900">{fmtSignedNumber(row.clickDelta)}</span>
    </div>
  );
}

function QueryInsightRows({ rows = [], mode }: { rows?: QueryInsightRow[]; mode: 'top' | 'trend' }) {
  if (!rows.length) {
    return <p className="px-6 py-8 text-sm text-slate-600">No query data for this view yet.</p>;
  }

  return (
    <div className="divide-y divide-slate-200">
      {rows.slice(0, 25).map((row) => (
        <div key={mode + '-' + row.query} className="grid grid-cols-[minmax(0,1fr)_6.75rem] items-center gap-3 px-6 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(7rem,12rem)] sm:gap-4">
          <p className="min-w-0 truncate text-base text-slate-950 md:text-lg">{row.query}</p>
          {mode === 'top' ? (
            <p className="text-right text-base tabular-nums text-slate-900 md:text-lg">{fmtNumber(row.clicks)}</p>
          ) : (
            <QueryTrendValue row={row} />
          )}
        </div>
      ))}
    </div>
  );
}

function QueryInsightsCard({ insights }: { insights: QueryInsights }) {
  const top = insights.top || [];
  const trendingUp = insights.trendingUp || [];
  const trendingDown = insights.trendingDown || [];
  const hasComparison = insights.previousStartDate && insights.previousEndDate;

  return (
    <section className="query-insights mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <style>{`
        .query-tab-input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .query-insight-panel {
          display: none;
        }
        .query-panel-top {
          display: block;
        }
        .query-tab-list label[for=query-tab-top] {
          color: #0b57d0;
          border-bottom-color: #0b57d0;
        }
        #query-tab-up:checked ~ .query-tab-list label[for=query-tab-top],
        #query-tab-down:checked ~ .query-tab-list label[for=query-tab-top] {
          color: #334155;
          border-bottom-color: transparent;
        }
        #query-tab-top:checked ~ .query-tab-list label[for=query-tab-top],
        #query-tab-up:checked ~ .query-tab-list label[for=query-tab-up],
        #query-tab-down:checked ~ .query-tab-list label[for=query-tab-down] {
          color: #0b57d0;
          border-bottom-color: #0b57d0;
        }
        #query-tab-up:checked ~ .query-panels .query-panel-top,
        #query-tab-down:checked ~ .query-panels .query-panel-top {
          display: none;
        }
        #query-tab-top:checked ~ .query-panels .query-panel-top,
        #query-tab-up:checked ~ .query-panels .query-panel-up,
        #query-tab-down:checked ~ .query-panels .query-panel-down {
          display: block;
        }
      `}</style>
      <div className="px-6 pt-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-slate-950">Queries leading to your site</h2>
            <p className="mt-2 text-sm text-slate-600">
              Clicks for {insights.currentStartDate || 'current range'} to {insights.currentEndDate || 'latest data'}
              {hasComparison ? ` compared with ${insights.previousStartDate} to ${insights.previousEndDate}` : ''}.
            </p>
          </div>
          <p className="text-sm text-slate-500">Metric: {insights.metric || 'clicks'}</p>
        </div>
      </div>

      <input className="query-tab-input" defaultChecked id="query-tab-top" name="query-tabs" type="radio" />
      <input className="query-tab-input" id="query-tab-up" name="query-tabs" type="radio" />
      <input className="query-tab-input" id="query-tab-down" name="query-tabs" type="radio" />

      <div className="query-tab-list mt-6 grid grid-cols-[minmax(0,1fr)_4rem] items-end gap-3 border-b border-slate-200 px-6 sm:grid-cols-[minmax(0,1fr)_minmax(7rem,12rem)] sm:gap-4">
        <div className="flex min-w-0 gap-5 overflow-visible sm:gap-8 sm:overflow-x-auto">
          <label className="cursor-pointer whitespace-nowrap border-b-4 border-transparent pb-4 text-lg font-medium text-slate-700" htmlFor="query-tab-top">Top</label>
          <label className="cursor-pointer whitespace-nowrap border-b-4 border-transparent pb-4 text-lg font-medium text-slate-700" htmlFor="query-tab-up">
            <span className="hidden sm:inline">Trending up</span>
            <span className="sm:hidden">Up</span>
          </label>
          <label className="cursor-pointer whitespace-nowrap border-b-4 border-transparent pb-4 text-lg font-medium text-slate-700" htmlFor="query-tab-down">
            <span className="hidden sm:inline">Trending down</span>
            <span className="sm:hidden">Down</span>
          </label>
        </div>
        <p className="pb-4 text-right text-lg font-medium text-slate-700">Clicks</p>
      </div>

      <div className="query-panels">
        <div className="query-insight-panel query-panel-top">
          <QueryInsightRows mode="top" rows={top} />
        </div>
        <div className="query-insight-panel query-panel-up">
          <QueryInsightRows mode="trend" rows={trendingUp} />
        </div>
        <div className="query-insight-panel query-panel-down">
          <QueryInsightRows mode="trend" rows={trendingDown} />
        </div>
      </div>
    </section>
  );
}

export default function GscDashboardPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  const dashboard = readDashboard();
  const recommendations = readRecommendations();
  const proposals = recommendations.proposals || [];

  if (!dashboard) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">GSC Dashboard</h1>
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Missing <code>data/gsc/dashboard/dashboard-latest.json</code>. Run <code>npm run gsc:weekly</code>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">GSC Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600">
          Local dashboard rendered from persisted <code>data/gsc</code> artifacts.
        </p>
      </header>

      <section className="mt-6 grid gap-3 md:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-500">Rows</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{fmtNumber(dashboard.summary?.totalRows || 0)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-500">Brand Clicks</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{fmtNumber(dashboard.summary?.brandClicks || 0)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-500">Non-brand Clicks</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{fmtNumber(dashboard.summary?.nonBrandClicks || 0)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-500">Non-brand Share</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{fmtPct(dashboard.summary?.nonBrandShare || 0)}</p>
        </div>
      </section>

      <section className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p><span className="font-semibold">Site:</span> {dashboard.site || 'missing'}</p>
        <p><span className="font-semibold">Range:</span> {dashboard.startDate || 'missing'} to {dashboard.endDate || 'missing'}</p>
        <p><span className="font-semibold">Generated:</span> {fmtDate(dashboard.generatedAt)}</p>
        <p><span className="font-semibold">Source:</span> {dashboard.source || 'missing'}</p>
      </section>

      <QueryInsightsCard insights={dashboard.queryInsights || fallbackQueryInsights(dashboard)} />

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Table title="Clicks by Cluster" rows={dashboard.byCluster} />
        <Table title="Top Pages" rows={dashboard.byPage} />
        <Table title="Top Queries" rows={dashboard.byQuery} />
        <Table title="Priority Countries" rows={dashboard.byCountry} />
      </div>

      <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Recommendations</h2>
            <p className="text-sm text-slate-600">Cluster-based proposals generated from near-win GSC pages.</p>
          </div>
          <div className="text-xs text-slate-500">
            <p>Mode: {recommendations.mode || 'missing'}</p>
            <p>Generated: {fmtDate(recommendations.generatedAt)}</p>
          </div>
        </div>
        {!proposals.length ? (
          <p className="mt-3 text-sm text-slate-600">No recommendations yet. Run <code>npm run gsc:weekly</code>.</p>
        ) : (
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {proposals.map((proposal) => (
              <article key={proposal.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase">
                  <span className="rounded-full bg-white px-2 py-1 text-slate-700">{proposal.status}</span>
                  <span className="rounded-full bg-white px-2 py-1 text-slate-700">{proposal.priority}</span>
                  <span className="rounded-full bg-white px-2 py-1 text-slate-700">{proposal.opportunityType}</span>
                  <span className="rounded-full bg-white px-2 py-1 text-slate-700">{proposal.cluster}</span>
                </div>
                <p className="mt-3 break-all font-mono text-xs text-slate-500">{proposal.id}</p>
                <p className="mt-2 break-all text-sm font-semibold text-slate-900">{proposal.page}</p>
                <p className="mt-2 text-sm text-slate-700">{proposal.proposedChange}</p>
                <p className="mt-2 text-sm text-slate-600">{proposal.reason}</p>
                <p className="mt-3 text-xs text-slate-500">
                  {fmtNumber(proposal.currentSignal.clicks)} clicks · {fmtNumber(proposal.currentSignal.impressions)} impressions · {fmtPct(proposal.currentSignal.ctr)} CTR · position {proposal.currentSignal.position.toFixed(2)}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Implementation History</h2>
            <p className="text-sm text-slate-600">SEO/GEO changes recorded in <code>data/gsc/implementation-history.jsonl</code>.</p>
          </div>
          <p className="text-xs text-slate-500">{dashboard.implementationHistory?.length || 0} recorded changes</p>
        </div>
        {!dashboard.implementationHistory?.length ? (
          <p className="mt-3 text-sm text-slate-600">No implementation history yet.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {dashboard.implementationHistory.slice(0, 12).map((entry, index) => (
              <article key={(entry.implementedAt || '') + index} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">{entry.summary || 'Untitled change'}</h3>
                  <span className="text-xs text-slate-500">{fmtDate(entry.implementedAt)}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{entry.why || 'No reason recorded.'}</p>
                {!!entry.gscSignals?.length && (
                  <p className="mt-2 text-xs text-slate-500">Signals: {entry.gscSignals.join(' | ')}</p>
                )}
                {!!entry.pages?.length && (
                  <p className="mt-2 break-all text-xs text-slate-500">Pages: {entry.pages.join(', ')}</p>
                )}
                {!!entry.changes?.length && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {entry.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                )}
                {entry.expectedOutcome && (
                  <p className="mt-3 text-sm text-slate-600"><span className="font-semibold">Expected outcome:</span> {entry.expectedOutcome}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
