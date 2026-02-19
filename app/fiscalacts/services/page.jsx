import ServicesList from '@/components/fiscalacts/ServicesList'

export default function FiscalactsServices() {
  return (
    <main>
      <section className="pt-12 pb-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Services</h1>
          <p className="mb-6">Comprehensive financial and advisory services tailored for UAE businesses.</p>
        </div>
      </section>
      <ServicesList />
    </main>
  )
}
