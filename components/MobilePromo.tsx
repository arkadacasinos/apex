'use client'

import Image from 'next/image'

export function MobilePromo() {
  return (
    <section className="px-4 md:px-8 mb-12">
      <div className="bg-gradient-to-r from-slate-900 via-blue-900/30 to-slate-900 rounded-2xl border border-green-500/20 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-12 items-center">
          {/* Left - Mobile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-40 h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="/android-phone.png"
                alt="Апекс Casino мобильное приложение Android"
                className="relative w-full h-full object-cover rounded-3xl border border-green-500/30"
              />
            </div>
          </div>

          {/* Center - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Скачай Апекс приложение
            </h2>
            <p className="text-slate-400 mb-6">
              Апекс казино на телефоне всегда с тобой
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-8 py-3 rounded-lg font-bold text-white transition transform hover:scale-105">
              Скачать приложение
            </button>
          </div>

          {/* Right - QR Code */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-4 rounded-xl">
              <img
                src="/qr-code.png"
                alt="QR Code"
                className="w-40 h-40 md:w-48 md:h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
