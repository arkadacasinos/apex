import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { HeroSection } from '@/components/HeroSection'
import { PromoBanners } from '@/components/PromoBanners'
import { GamesSection } from '@/components/GamesSection'
import { MobilePromo } from '@/components/MobilePromo'
import { Footer } from '@/components/Footer'
import { HiddenSeoContent } from '@/components/HiddenSeoContent'
import { PlatformCharacteristics } from '@/components/PlatformCharacteristics'
import { FaqSection } from '@/components/FaqSection'
import { AboutUs } from '@/components/AboutUs'
import { SearchGames } from '@/components/SearchGames'
import { TagsCloud } from '@/components/TagsCloud'
import { RelatedGames } from '@/components/RelatedGames'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Reviews } from '@/components/Reviews'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Header />

      <div className="flex relative">
        <Sidebar />

        <main className="flex-1 w-full">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Apex casino' },
            ]}
          />

          {/* Search bar for mobile */}
          <div className="md:hidden px-4 py-4">
            <input
              type="text"
              placeholder="Искать игры"
              className="w-full px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-green-500/50"
            />
          </div>

          {/* Navigation tabs for desktop */}
          <div className="hidden md:flex px-8 py-4 border-b border-slate-800/50 gap-8 overflow-x-auto">
            {[
              'Горячие',
              'Новые',
              'Топ',
              'Слоты',
              'Лавы',
              'Крави',
              'Отчёты бонусов',
              'Слот рулетка',
              'World Cup',
            ].map((tab, idx) => (
              <button
                key={idx}
                className="text-slate-400 hover:text-green-400 whitespace-nowrap text-sm md:text-base transition pb-2 border-b-2 border-transparent hover:border-green-400"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="py-6 md:py-8">
            <HeroSection />
            <PromoBanners />
            <SearchGames />
            <GamesSection />
            <RelatedGames />
            <TagsCloud />
            <Reviews />
            <MobilePromo />
            <PlatformCharacteristics />
            <FaqSection />
            <AboutUs />
            <HiddenSeoContent />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}
