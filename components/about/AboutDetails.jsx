import Image from 'next/image'

const AboutDetails = () => {
  return (
    <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>

        <div className="grid grid-cols-12">
          <div className="max-md:col-span-full md:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Who we are</p>
              <h2>FTA Approved Tax partners</h2>
              <p className="mt-8">
                Fiscalacts is an establishment started in the year 2019 with the noble intention to ease the business process for the entrepreneurs and to let them concentrate in their prime objective of business development.Therefore, it ventured into the field of initial Business Start-up & Execution and Administration vide the implementation of various process and Policies & Procedures in compliance with count
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Expert-Led Accounting & Compliance Solutions</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Smart, Tech-Driven Accounting Systems</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Cost-Effective & Time-Saving Financial Management</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Reliable Support with 100% Client Satisfaction Focus</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
            <Image 
              src="/images/about/fta-approved.png" 
              alt="FTA Approved Tax partners" 
              className="h-auto w-full rounded" 
              width={590} 
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
