'use client'

import ServiceList from '@/data/serviceData'
import businessSetupSubServices from '@/data/businessSetupServices'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const ServiceContent = ({ data }) => {
  const { ServiceData } = ServiceList

  return (
    <section className="relative pt-[200px] pb-150 max-md:overflow-hidden max-md:pt-25 max-md:pb-20">
      <div className="relative z-10 container">
        <div className="grid auto-rows-max grid-cols-12 gap-y-15 md:gap-8 lg:gap-16">

          {/* Categories Sidebar */}
          <div className="rounded-medium shadow-nav dark:bg-dark-200 self-start bg-white p-2.5 max-md:static max-md:col-span-full max-md:hidden md:sticky md:top-20 md:col-span-6 lg:col-span-4">
            <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 px-10 pt-9 pb-7">
              <h3 className="mb-3">Categories</h3>
              <ul className="dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100">
                {ServiceData?.map((services) => (
                  <li
                    className={`group ${services.slug === data.slug ? 'tabActive' : ''}`}
                    key={services.id}
                  >
                    <Link
                      className="before:bg-paragraph relative flex items-center justify-between py-5 font-medium before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                      href={`/services/${services.slug}`}
                    >
                      {services.title}
                      <FaAngleRight className="hidden group-[.tabActive]:block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative max-md:col-span-full md:col-span-6 lg:col-span-8">
            <div className="singlePage relative max-md:mt-20">

              <h2>{data.title}</h2>
              <p>{data.serviceDetails}</p>

              <h3>What to Expect</h3>
              <p>{data.serviceExpectation}</p>
              <ul>
                {data.serviceExpectationList?.map((items, idx) => (
                  <li key={idx}>{items.item}</li>
                ))}
              </ul>

              <h3>Qualifications & Requirements</h3>
              <p>{data.serviceQualifications}</p>
              <ul>
                {data.serviceQualificationsList?.map((items, idx) => (
                  <li key={idx}>{items.item}</li>
                ))}
              </ul>

              {/* Business Setup Extra Section */}
              {data.slug === 'business-setup' && (
                <div className="mt-15">
                  <h3>Our Business Setup Services</h3>
                  <div className="grid gap-8 mt-8">
                    {businessSetupSubServices?.map((service, idx) => (
                      <div key={idx} className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-8">
                        <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                        <p className="mb-5">{service.description}</p>
                        <ul className="space-y-2">
                          {service.points?.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start">
                              <span className="mr-3 text-primary-200">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceContent
