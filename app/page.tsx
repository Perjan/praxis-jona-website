import Image from "next/image";
import { ArrowsRightLeftIcon, ChatBubbleLeftRightIcon, MapPinIcon, ShieldCheckIcon, UserIcon, UsersIcon, BanknotesIcon, CurrencyDollarIcon, HeartIcon, PaintBrushIcon, ClockIcon } from '@heroicons/react/20/solid'

import RTSTHeroImage from "/public/images/rtst-hero-image.png"
import RTSTWellbeing from "/public/images/rtst-wellbeing.png"
import RTSTPhones from "/public/images/rtst-all-devices.png"
import RTSTProductivity from "/public/images/rtst-productivity.png"
import RTSTLeaderboards from "/public/images/rtst-leaderboards.png"
import { Metadata } from "next";
import { Constants } from "./Constants";
import WhoIsItForSection from "./WhoIsItForSection"
import Link from "next/link";

import HeroSection from './HeroSection'
import QuoteSection from "./QuoteSection";
import ClinicSection from './ClinicSection'

export const metadata: Metadata = {
    alternates: {
      canonical: "/",
    }
}

const feature1 = [
    {
        name: "Manage Family Finances.",
        description: "Create budgets, accounts or spaces and share them with your partner. Tracking couple expenses has never been easier.",
        icon: HeartIcon,
    },
    {
        name: "Set Up Allowances.",
        description: "Easily set up allowances for your kids and track how they spend their money.",
        icon: CurrencyDollarIcon,
    }
]

const feature2 = [
    {
        name: "Manage Debts.",
        description: "Create shared spaces, invite your friends and keep track of who owes who.",
        icon: ArrowsRightLeftIcon,
    },
    {
        name: "Plan Vacations.",
        description: "Use MoneySpaces to plan the perfect trip with shared expenses. Collaborate and engage in conversations for the best deals.",
        icon: MapPinIcon,
    }
]

const feature3 = [
    {
        name: "Personal Space.",
        description: "Create your personal and private spaces and track all of your daily expenses.",
        icon: UserIcon,
    },
    {
        name: "Shared Space.",
        description: "Create a shared space, invite your roommate and track all of the split expenses.",
        icon: UsersIcon,
    }
]

const rtstFeatures = [
    {
        name: 'Actually Benefitial',
        description:
            "Realtime Screen Time is perfect for keeping track of how much you are using your apps and games.",
        href: '#',
        icon: ClockIcon,
    },
    {
        name: 'Private & Secure',
        description:
            "Realtime Screen Time does not require any registration or login. Your information is securely stored on your private iCloud.",
        href: '#',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Personalizable',
        description:
            "Realtime Screen Time lets you personalize the look of the Dynamic Island and Live Activity widgets plus custom app icons.",
        href: '#',
        icon: PaintBrushIcon,
    },
]

const whoIsItForSectionInfo = [
    {
      title: "Social Media Addiction",
      description: "Be more mindful about how much time you actually spend doomscrolling on TikTok, X, Instagram, Facebook, Snapchat etc.",
      image: "/images/social-media-di.png",
    },
    {
      title: "Streaming Apps Addiction",
      description: "Check in real time how much time you have spent watching that show nobody likes, but you are two episodes in and you have to just finish it.",
      image: "/images/shopping-di.png",
    },
    {
      title: "Gaming Addiction",
      description: "See how much time you are wasting just waiting for that energy bar to fill so that you can do one simple action in one of those boring games.",
      image: "/images/games-di.png",
    },
  ]

export default function Features() {
    return (
        <>
            <HeroSection 
            title="PRAXIS JONA"
            description="Ganzheitliche Betreuung für ein gesundes Leben – Bei uns bist du mehr als nur ein weiterer Patient"
            />

            <QuoteSection
            quote='"Mein Ziel ist es, nicht nur Symptome zu lindern, sondern auch die zugrundeliegenden Ursachen von Gesundheitsproblemen gezielt anzugehen. Gemeinsam mit meinen Patienten möchte ich individuelle Wege entwickeln, die ihre Bedürfnisse und Ziele berücksichtigen. Dabei steht im Mittelpunkt, die Gesundheit und Lebensqualität nachhaltig zu verbessern."'
            />

            <ClinicSection
            title="Besuchen Sie uns in unserer Praxis"
            description1="Herzlich willkommen in unserer allgemeinmedizinisch-internistischen Praxis am Rosenthaler Platz. Wir behandeln auf der Basis moderner Diagnostik sowie dem Wissen und der langjährigen Erfahrung in universitärer Schulmedizin, um für jeden einzelnen Patienten den optimalen Weg zur Erhaltung und Wiederherstellung der Gesundheit zu finden."
            description2="Besondere Schwerpunkte unserer Praxis sind die Behandlung von Schilddrüsenkrankheiten, Bluthochdruck und Fettstoffwechselstörungen."
            description3="Wir freuen uns, Sie persönlich in unserer Praxis in Berlin Mitte begrüßen zu dürfen und gemeinsam mit Ihnen an Ihrer Gesundheit zu arbeiten. "/>

            
        </>
    );
}
