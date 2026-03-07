"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from 'app/lib/utils';
import { TeamMembersDE, TeamMembersEN } from './TeamData';

interface TeamSectionProps {
    locale?: 'de' | 'en';
}

export default function TeamSection({ locale = 'de' }: TeamSectionProps) {
    const isGerman = locale === 'de';
    const teamMembers = isGerman ? TeamMembersDE : TeamMembersEN;

    const title = isGerman ? 'Unser interdisziplinäres Team' : 'Our Interdisciplinary Team';
    const subtitle = isGerman
        ? 'Gemeinsam arbeiten wir mit einem Ziel: Deine Gesundheit langfristig zu stärken.'
        : 'Together we work with one goal: to strengthen your health in the long term.';

    const readMoreText = isGerman ? 'Weiterlesen' : 'Read more';
    const closeText = isGerman ? 'Schließen' : 'Close';

    return (
        <div className="bg-lightBeige py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-primaryLighter">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-24">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={member.id}
                            member={member}
                            index={index}
                            readMoreText={readMoreText}
                            closeText={closeText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface TeamMemberCardProps {
    member: typeof TeamMembersDE[0];
    index: number;
    readMoreText: string;
    closeText: string;
}

function TeamMemberCard({ member, index, readMoreText, closeText }: TeamMemberCardProps) {
    const [expanded, setExpanded] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            {/* Image - Left on even, right on odd */}
            <div className={cn(
                "flex justify-center lg:pt-4",
                isEven ? "lg:order-first" : "lg:order-last"
            )}>
                <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    width={800}
                    height={800}
                />
            </div>

            {/* Content */}
            <div className="lg:flex lg:items-start lg:justify-center">
                <div className="lg:max-w-lg">
                    <h3 className="text-2xl font-serif tracking-tight text-primary sm:text-3xl">
                        {member.name}
                    </h3>

                    <p className="mt-4 text-lg italic leading-8 text-primaryLighter border-l-4 border-primary pl-4">
                        "{member.quote}"
                    </p>

                    <p className="mt-6 text-base font-semibold text-primary uppercase tracking-wider">
                        {member.role}
                    </p>

                    <p className="mt-4 text-lg leading-8 text-primaryLighter">
                        {member.description}
                    </p>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="rounded-lg mt-6 bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 inline-flex justify-center hover:bg-primaryLighter hover:shadow-md"
                    >
                        {expanded ? closeText : readMoreText}
                    </button>

                    <div
                        className={cn(
                            expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                            "overflow-hidden transition-all duration-700 ease-in-out"
                        )}
                    >
                        <div className="mt-8 text-lg leading-8 text-primaryLighter whitespace-pre-line">
                            {member.extendedDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
