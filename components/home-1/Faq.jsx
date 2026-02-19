import Questions from './Questions'

const Faq = () => {
  return (
    <section className=" relative overflow-hidden bg-gray pb-[130px] pt-150 dark:bg-dark max-md:py-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 1xl:gap-x-24 ">
          <div>
            <p className="section-tagline">Faq&rsquo;s</p>
            <h2 className="mb-8">
              Frequently Asked <br />
              Question
            </h2>
            <p>
              Quick answers to questions you may have. Can't find what you're looking for?
              <br />Get in touch with us.


            </p>
          </div>
          <Questions />
        </div>
      </div>
    </section>
  )
}

export default Faq
