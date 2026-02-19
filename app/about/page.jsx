import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Counter from '@/components/shared/Counter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TeamMembers from '@/components/shared/TeamMembers'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import AboutFeature from '@/data/aboutFeaturesData'

export const metadata = {
  title: 'About',
}
const About = () => {
  const { AboutFeaturesData } = AboutFeature
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle="ABOUT FISCALACTS"
          title="Your Trusted Partner in <br> Tax & Accounting Solutions"
          paragraph="Since 2019, we've been empowering entrepreneurs and businesses by providing expert-led accounting, compliance, and tax solutions that let you focus on what matters most - your business growth."
        />
        <AboutDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={'OUR VALUE'}
          sectionTitle={'Our business is steered by our core values'}
          className={'relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25'}
        />
        <AboutCoreValue />
        <TestimonialSlider />
        <Counter />
        <TeamMembers />
        <CallToAction title="Start your best payment experience now!" />
      </main>
      <Footer />
    </>
  )
}

export default About
