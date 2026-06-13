'use client'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteUrl}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav className="px-4 md:px-8 py-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="text-green-400 hover:text-green-300 transition">
                  {item.label}
                </a>
              ) : (
                <span className="text-slate-400">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-slate-500">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
