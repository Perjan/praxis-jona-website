import Link from "next/link";
import type { ReactNode } from "react";
import { Constants, type AppointmentBookingUrls } from "app/Constants";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import { TreatmentBodySection } from "app/components/TreatmentDetailTemplate";
import german from "app/content/clinic-treatment-updates.json";
import english from "app/content/clinic-treatment-updates-en.json";

export type EditorialTreatmentKey = keyof typeof german;
export type EditorialBlock = {
  type: string;
  text?: string;
  href?: string;
  headers?: string[];
  rows?: string[][];
  items?: string[];
};
export function getTreatmentEditorialContent(
  pageKey: EditorialTreatmentKey,
  locale: "de" | "en",
) {
  const page = (locale === "de" ? german : english)[pageKey];
  const blocks = page.blocks as EditorialBlock[];
  const introEnd = pageKey === "weightLoss" ? 2 : 3;
  const firstBooking = blocks.find((block) => block.type === "booking");
  const links = blocks.filter((block) => block.type === "link");
  const contact = pageKey === "nutrition" ? links[links.length - 1] : undefined;
  const body = blocks.slice(
    introEnd + (blocks[introEnd]?.type === "booking" ? 1 : 0),
  );
  return {
    page,
    title: blocks[0].text!,
    paragraphs: blocks.slice(1, introEnd).map((block) => block.text!),
    body,
    heroLabel: firstBooking?.text ?? contact?.text!,
    contactHref: contact?.href,
    bookingUrls:
      Constants.appointmentUrlsByService[
        page.service as keyof typeof Constants.appointmentUrlsByService
      ],
    table: blocks.find((block) => block.type === "table"),
  };
}

export function editorialFaqs(blocks: EditorialBlock[]) {
  const start = blocks.findIndex(
    (block) =>
      block.type === "h2" &&
      /^(Häufige Fragen|Frequently asked questions)/i.test(block.text ?? ""),
  );
  if (start < 0)
    return {
      before: blocks,
      title: "",
      items: [] as { question: string; answer: EditorialBlock[] }[],
      after: [] as EditorialBlock[],
    };
  const items: { question: string; answer: EditorialBlock[] }[] = [];
  let cursor = start + 1;
  while (
    cursor < blocks.length &&
    blocks[cursor].type === "h2" &&
    blocks[cursor].text?.endsWith("?")
  ) {
    const question = blocks[cursor++].text!;
    const answer: EditorialBlock[] = [];
    while (
      cursor < blocks.length &&
      ["p", "list", "ordered"].includes(blocks[cursor].type)
    )
      answer.push(blocks[cursor++]);
    items.push({ question, answer });
  }
  return {
    before: blocks.slice(0, start),
    title: blocks[start].text!,
    items,
    after: blocks.slice(cursor),
  };
}

function ReferenceText({
  text,
  pageKey,
  locale,
}: {
  text: string;
  pageKey: EditorialTreatmentKey;
  locale: "de" | "en";
}) {
  const intake =
    locale === "de" ? "medizinischen Fragebogen" : "medical questionnaire";
  const followUp =
    locale === "de" ? "Online-Folgeformular" : "online follow-up form";
  const phrase =
    pageKey === "weightLoss"
      ? [intake, followUp].find((value) => text.includes(value))
      : undefined;
  if (!phrase) return <>{text}</>;
  const offset = text.indexOf(phrase);
  const href = `${locale === "en" ? "/en" : ""}/glp-1-check${phrase === followUp ? "/follow-up" : ""}`;
  return (
    <>
      {text.slice(0, offset)}
      <Link
        href={href}
        className="underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
      >
        {phrase}
      </Link>
      {text.slice(offset + phrase.length)}
    </>
  );
}

function EditorialTable({
  block,
  caption,
  comparison = false,
}: {
  block: EditorialBlock;
  caption: string;
  comparison?: boolean;
}) {
  const table = (
    <div className="rounded-lg border border-primary/10 bg-white p-4 shadow-sm sm:p-6">
      <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
        <caption className="sr-only">{caption}</caption>
        <colgroup>
          <col className="w-[40%] sm:w-[48%]" />
          <col className="w-[30%] sm:w-[26%]" />
          <col className="w-[30%] sm:w-[26%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-primary/25 text-xs uppercase tracking-wide text-primary/70">
            {block.headers!.map((header) => (
              <th
                key={header}
                scope="col"
                className="break-words px-1 py-3 first:pl-0 [&:not(:first-child)]:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows!.map((row) => (
            <tr
              key={row[0]}
              className="border-b border-primary/10 last:border-0"
            >
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={index}
                    scope="row"
                    className="break-words py-4 pr-2 align-top font-semibold text-primary"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={index}
                    className="break-words px-1 py-4 text-right align-top text-primary"
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  if (!comparison) return table;
  return (
    <>
      <div
        className="space-y-4 sm:hidden"
        data-comparison-cards
        aria-label={caption}
      >
        {block.rows!.map((row) => (
          <section
            key={row[0]}
            className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm"
          >
            <h3 className="font-serif text-xl font-semibold leading-7 text-primary">
              {row[0]}
            </h3>
            <dl className="mt-5 space-y-5">
              {row.slice(1).map((value, index) => (
                <div key={index}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                    {block.headers![index + 1]}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-primaryLighter">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <div className="hidden sm:block">{table}</div>
    </>
  );
}

function EditorialBlocks({
  blocks,
  pageKey,
  locale,
  bookingUrls,
}: {
  blocks: EditorialBlock[];
  pageKey: EditorialTreatmentKey;
  locale: "de" | "en";
  bookingUrls: AppointmentBookingUrls;
}) {
  return (
    <div className="space-y-5 text-lg leading-8 text-primaryLighter">
      {blocks.map((block, index): ReactNode => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="pt-2 font-serif text-2xl font-semibold text-primary"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={index} className="leading-7 text-primaryLighter">
                <ReferenceText
                  text={block.text!}
                  pageKey={pageKey}
                  locale={locale}
                />
              </p>
            );
          case "table":
            return (
              <EditorialTable
                key={index}
                block={block}
                comparison={pageKey === "weightLoss"}
                caption={
                  blocks[index - 1]?.type === "h2"
                    ? blocks[index - 1].text!
                    : locale === "de"
                      ? "Betreuung und Preise"
                      : "Care and prices"
                }
              />
            );
          case "booking":
            return (
              <div key={index} className="pt-3">
                <AppointmentBookingButton
                  locale={locale}
                  urls={bookingUrls}
                  trackingPlacement="treatment-detail-content"
                  className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
                >
                  {block.text}
                </AppointmentBookingButton>
              </div>
            );
          case "link":
            return (
              <p key={index}>
                <Link
                  href={block.href!}
                  className="underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
                >
                  {block.text}
                </Link>
              </p>
            );
          case "list":
            return (
              <ul key={index} className="space-y-2 text-primaryLighter">
                {block.items!.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ordered":
            return (
              <ol key={index} className="list-decimal space-y-3 pl-6">
                {block.items!.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          default:
            throw new Error(
              `Unsupported treatment content block: ${block.type}`,
            );
        }
      })}
    </div>
  );
}

export function TreatmentEditorialBody({
  blocks,
  pageKey,
  locale,
  bookingUrls,
}: {
  blocks: EditorialBlock[];
  pageKey: EditorialTreatmentKey;
  locale: "de" | "en";
  bookingUrls: AppointmentBookingUrls;
}) {
  const faq = editorialFaqs(blocks);
  return (
    <>
      <TreatmentBodySection>
        <EditorialBlocks
          blocks={faq.before}
          pageKey={pageKey}
          locale={locale}
          bookingUrls={bookingUrls}
        />
      </TreatmentBodySection>
      {faq.items.length > 0 && (
        <TreatmentBodySection>
          <h2 className="font-serif text-3xl font-semibold text-primary">
            {faq.title}
          </h2>
          <div className="mt-8 space-y-4">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">
                  {item.question}
                </summary>
                <div className="mt-4">
                  <EditorialBlocks
                    blocks={item.answer}
                    pageKey={pageKey}
                    locale={locale}
                    bookingUrls={bookingUrls}
                  />
                </div>
              </details>
            ))}
          </div>
        </TreatmentBodySection>
      )}
      {faq.after.length > 0 && (
        <TreatmentBodySection>
          <EditorialBlocks
            blocks={faq.after}
            pageKey={pageKey}
            locale={locale}
            bookingUrls={bookingUrls}
          />
        </TreatmentBodySection>
      )}
    </>
  );
}
