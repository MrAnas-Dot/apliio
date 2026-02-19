import Hero from '@/components/fiscalacts/Hero'
import ServicesList from '@/components/fiscalacts/ServicesList'
import ContactInfo from '@/components/contact/ContactInfo'

export default function FiscalactsHome() {
  return (
    <main>
      <Hero />
      <ServicesList />
      <section className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="mb-4">Founded in 2019, we provide accounting, tax and advisory services across Abu Dhabi and the UAE. Our team helps companies stay compliant, optimize processes, and unlock growth.</p>
            <h3 className="text-xl font-medium mb-2">Why choose us</h3>
            <ul className="list-disc pl-5">
              <li>Experienced local specialists</li>
              <li>Technology-driven workflows</li>
              <li>Compliance-first approach</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  )
}
