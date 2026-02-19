'use client'
import Link from 'next/link'

const services = [
  { id: 1, title: 'Non-Comprehensive Accounting', desc: 'Support for specific accounting functions like bookkeeping, VAT filing, and financial review.' },
  { id: 2, title: 'Statutory & Compliance', desc: 'Ensure your records and systems meet UAE regulatory requirements.' },
  { id: 3, title: 'VAT Services', desc: 'VAT registration, filing, reconciliation and advisory support.' },
  { id: 4, title: 'Corporate Tax', desc: 'Corporate tax registration, filing and advisory to minimize risk.' },
  { id: 5, title: 'Audit Services', desc: 'Comprehensive audit support and preparation assistance.' },
  { id: 6, title: 'Business Setup', desc: 'End-to-end company formation services for Mainland and Free Zone.' },
]

const ServicesList = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="p-6 rounded shadow-sm bg-white">
              <h3 className="font-medium text-lg mb-2">{s.title}</h3>
              <p className="text-sm mb-4">{s.desc}</p>
              <Link href={`/fiscalacts/services#${s.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-primary-500">Learn more</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
