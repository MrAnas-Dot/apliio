'use client'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-white to-gray-50">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-4xl font-bold mb-4">Empowering UAE Businesses with Smart Accounting</h1>
            <p className="text-lg mb-6">Trusted financial, tax and audit services tailored for companies across Abu Dhabi and the UAE—helping you stay compliant and grow with confidence.</p>
            <div className="flex gap-4">
              <Link href="/fiscalacts/contact" className="btn btn-primary">Get Consultation</Link>
              <a href="https://fiscalacts.com/services" target="_blank" rel="noreferrer" className="btn btn-outline">View Services</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <img src="https://fiscalacts.com/storage/envato-labs-image-edit-1.webp" alt="Fiscalacts" className="rounded shadow-md w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
