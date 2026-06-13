'use client'

interface Review {
  author: string
  rating: number
  text: string
  date: string
}

const REVIEWS: Review[] = [
  {
    author: 'Иван П.',
    rating: 5,
    text: 'Отличное казино! На Apex casino играю уже 3 месяца. Быстрые выводы, надежные платежи и крутые слоты. Апекс казино регистрация заняла минуту, и сразу получил бонус 250%.',
    date: '2026-06-01',
  },
  {
    author: 'Мария К.',
    rating: 5,
    text: 'Лучшее казино на рынке! Apex casino официальный сайт очень удобен, большой выбор игр. VIP программа супер, получаю постоянные кэшбэки. При Apex casino вход всегда все быстро работает.',
    date: '2026-05-28',
  },
  {
    author: 'Сергей М.',
    rating: 4,
    text: 'На Apex casino играю в основном слоты. Хорошие RTP, честная игра. Апекс казино официальный сайт имеет все необходимое. Поддержка быстро отвечает на вопросы. Рекомендую!',
    date: '2026-05-25',
  },
  {
    author: 'Елена Л.',
    rating: 5,
    text: 'Apex casino - это настоящее казино! Играю в лайв-рулетку, очень крутые дилеры и атмосфера. При Apex casino регистрация все было четко, верификация быстрая. Апекс казино официальный - надежный партнер!',
    date: '2026-05-22',
  },
  {
    author: 'Алексей В.',
    rating: 5,
    text: 'Чемпионат по слотам на Apex casino был супер! Классные призы и интересные турниры. На Apex casino играть выгодно за счет бонусов и кэшбэка. Apex casino вход - все просто и понятно.',
    date: '2026-05-18',
  },
]

export function Reviews() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '5000+',
    bestRating: '5',
    worstRating: '1',
  }

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Апекс казино',
    review: REVIEWS.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <section className="px-4 md:px-8 py-12 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Отзывы игроков об Apex casino
        </h2>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-lg font-bold text-white">4.8 из 5.0</span>
          <span className="text-slate-400">(5000+ отзывов)</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-slate-600 transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {review.author}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm">
                    {new Date(review.date).toLocaleDateString('ru-RU')}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold rounded-lg transition">
            Оставить отзыв об Apex casino
          </button>
        </div>
      </section>
    </>
  )
}
