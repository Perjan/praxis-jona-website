'use client';

import { FaInstagram } from 'react-icons/fa';
import { HiMiniCheckBadge } from "react-icons/hi2";

interface InstagramCardProps {
  isEnglish?: boolean;
}

export default function InstagramCard({ isEnglish = false }: InstagramCardProps) {
  const text = isEnglish
    ? "Follow me on Instagram for evidence-based content about nutrition, health, and longevity"
    : "Auf Instagram mir folgen für evidenzbasierte Inhalte über Ernährung, Gesundheit und Langlebigkeit";

  return (
    <a
      href="https://www.instagram.com/doc.jona/"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-2xl mx-auto my-8 p-6 rounded-xl transition-transform hover:scale-[1.02] border shadow-lg"
      style={{
        background: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)"
      }}
    >
      <div className="flex items-center space-x-4 text-white">
        <FaInstagram className="text-3xl flex-shrink-0" />
        <div className="flex flex-col">
          <div className="flex items-center space-x-1 mb-1">
            <span className="bg-white/90 text-[#833AB4] px-3 py-1 rounded-lg font-medium text-sm flex items-center">
              @doc.jona
              <HiMiniCheckBadge className="ml-1 text-[#833AB4] text-lg" />
            </span>
          </div>
          <p className="text-lg font-medium">{text}</p>
        </div>
      </div>
    </a>
  );
} 