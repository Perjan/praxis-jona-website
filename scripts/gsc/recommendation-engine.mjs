const HIGH_IMPRESSIONS = 1500;
const MEDIUM_IMPRESSIONS = 750;

const defaultOpportunityByCluster = {
  commercial: ['meta-description', 'internal-linking', 'stats-addition'],
  how_to: ['content-structure', 'faq-schema', 'internal-linking'],
  other: ['content-structure', 'internal-linking', 'stats-addition']
};

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
}

function proposalId(row, type, cluster) {
  return 'gsc-' + slugify(cluster) + '-' + slugify(type) + '-' + slugify(row.page);
}

function opportunityPriority(signal) {
  if (signal.impressions >= HIGH_IMPRESSIONS || signal.position <= 8) return 'high';
  if (signal.impressions >= MEDIUM_IMPRESSIONS || signal.position <= 12) return 'medium';
  return 'low';
}

function expectedOutcome(type) {
  switch (type) {
    case 'title':
      return 'Lift CTR on high-impression pages already ranking near page one.';
    case 'meta-description':
      return 'Improve click intent match in the search snippet.';
    case 'faq-schema':
      return 'Increase eligibility for long-tail FAQ coverage and answer extraction.';
    case 'content-structure':
      return 'Improve answer extraction and reduce searcher friction.';
    case 'internal-linking':
      return 'Strengthen cluster authority and reinforce the target page.';
    case 'geo-citation':
      return 'Improve AI answer trust with authoritative references.';
    case 'stats-addition':
      return 'Improve trust and answer quality with concrete evidence.';
    default:
      return 'Clarify the page so search and AI engines can extract a stronger answer.';
  }
}

function buildOpportunity(type, row, cluster) {
  switch (type) {
    case 'title':
      return {
        opportunityType: 'title',
        proposedChange: row.suggestedTest || 'Test a sharper answer-first title with one concrete promise.',
        reason: 'Page is already visible (' + row.impressions + ' impressions, position ' + row.position.toFixed(1) + '), so CTR is the cleanest upside.'
      };
    case 'meta-description':
      return {
        opportunityType: 'meta-description',
        proposedChange: 'Rewrite the meta description to lead with the user outcome, intent, or comparison angle and add one trust signal.',
        reason: 'The "' + cluster + '" cluster likely needs a clearer promise before the click.'
      };
    case 'faq-schema':
      return {
        opportunityType: 'faq-schema',
        proposedChange: 'Add a concise FAQ block with 3-4 answer-first questions and FAQPage schema matching the exact query intent.',
        reason: 'Answer-first FAQ structure improves long-tail coverage and extractability.'
      };
    case 'content-structure':
      return {
        opportunityType: 'content-structure',
        proposedChange: 'Refactor the top section so it gives a direct answer, then follows with a short checklist, table, or decision framework.',
        reason: 'This page is close to winning but may need stronger extractable structure.'
      };
    case 'internal-linking':
      return {
        opportunityType: 'internal-linking',
        proposedChange: 'Add 2-3 contextual internal links from related "' + cluster + '" pages using intent-matching anchor text.',
        reason: 'Near-win pages often benefit from stronger topical reinforcement.'
      };
    case 'geo-citation':
      return {
        opportunityType: 'geo-citation',
        proposedChange: 'Add one short cited source block with primary or official references and a visible References section.',
        reason: 'Authoritative references improve answer trust and AI citation readiness.'
      };
    case 'stats-addition':
      return {
        opportunityType: 'stats-addition',
        proposedChange: 'Add one externally sourced data point or benchmark with an inline link and matching References section.',
        reason: 'Concrete evidence can improve trust and make the answer easier to quote.'
      };
    default:
      return {
        opportunityType: 'content-structure',
        proposedChange: 'Improve the page with a clearer answer-first opening and stronger supporting detail.',
        reason: 'The page has measurable search demand but needs a more extractable answer.'
      };
  }
}

function uniqueByPageAndType(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.page + '::' + item.opportunityType;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function proposalKey(item) {
  return item.page + '::' + (item.opportunityType || item.changeType);
}

export function buildRecommendations({ report, titleCandidates, existingRecommendations, config = {} }) {
  const pageClusterMap = new Map((report.pageClusters || []).map((item) => [item.page, item.cluster]));
  const changes = Array.isArray(existingRecommendations?.changes) ? existingRecommendations.changes : [];
  const changeIndex = new Map(changes.map((change) => [change.proposalId || proposalKey(change), change]));
  const limits = config.recommendationLimits || {};
  const maxCandidatePages = Number(limits.maxCandidatePages || 8);
  const maxActiveProposals = Number(limits.maxActiveProposals || 12);
  const opportunityByCluster = { ...defaultOpportunityByCluster, ...(config.clusterOpportunities || {}) };

  const sortedCandidates = [...titleCandidates]
    .sort((a, b) => (b.impressions - a.impressions) || (a.position - b.position))
    .slice(0, maxCandidatePages);

  const proposals = [];
  for (const row of sortedCandidates) {
    const cluster = pageClusterMap.get(row.page) || 'other';
    const types = ['title', ...(opportunityByCluster[cluster] || opportunityByCluster.other)].slice(0, 4);
    for (const type of types) {
      const opportunity = buildOpportunity(type, row, cluster);
      proposals.push({
        id: proposalId(row, opportunity.opportunityType, cluster),
        page: row.page,
        cluster,
        priority: opportunityPriority(row),
        opportunityType: opportunity.opportunityType,
        reason: opportunity.reason,
        currentSignal: {
          clicks: row.clicks,
          impressions: row.impressions,
          ctr: row.ctr,
          position: row.position
        },
        proposedChange: opportunity.proposedChange,
        expectedOutcome: expectedOutcome(opportunity.opportunityType),
        status: 'proposed'
      });
    }
  }

  const activeProposals = uniqueByPageAndType(proposals)
    .map((proposal) => {
      const existingChange = changeIndex.get(proposal.id) || changeIndex.get(proposalKey(proposal));
      return existingChange ? { ...proposal, status: existingChange.status } : proposal;
    })
    .filter((proposal) => !['shipped', 'rejected'].includes(proposal.status))
    .slice(0, maxActiveProposals);

  return {
    generatedAt: new Date().toISOString(),
    sourceReport: 'data/gsc/reports/cluster-report-latest.json',
    sourceTitleTests: 'data/gsc/dashboard/title-test-candidates.csv',
    mode: 'seo-geo-hybrid',
    proposals: activeProposals,
    changes
  };
}
