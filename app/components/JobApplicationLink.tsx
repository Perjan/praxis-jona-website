"use client";

import { getJobApplicationMailTo } from "app/data/jobs";
import type { JobDetailContent } from "app/data/jobs";

type JobApplicationLinkProps = {
    job: JobDetailContent;
    className: string;
};

function getFacebookClickIdentifier() {
    const clickId = new URLSearchParams(window.location.search).get("fbclid");
    if (!clickId || !/^[A-Za-z0-9_-]{1,500}$/.test(clickId)) return undefined;

    return `fb.1.${Date.now()}.${clickId}`;
}

export function JobApplicationLink({ job, className }: JobApplicationLinkProps) {
    function trackApplicationClick() {
        const fbc = getFacebookClickIdentifier();
        if (!fbc) return;

        const eventId = globalThis.crypto?.randomUUID?.();
        if (!eventId) return;

        void fetch("/api/meta-conversion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId, jobId: job.id, fbc }),
            keepalive: true,
        }).catch(() => undefined);
    }

    return (
        <a
            href={getJobApplicationMailTo(job)}
            className={className}
            onClick={trackApplicationClick}
        >
            {job.applyCta}
        </a>
    );
}
