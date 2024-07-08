import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDribbble,
} from 'react-icons/ai';
import HeadingText from '@/components/HeadingText';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

const Contact = () => {
  return (
    <AnimateOnScroll noScale y={40} duration={0.8} threshold={0.4}>
      <section
        id="contact"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="Contact Me" />
        <AnimateOnScroll noScale y={40} duration={0.8} threshold={0.4}>
          <div className="ContactForm inline-flex w-full flex-col items-start justify-start gap-7 laptop:flex-row laptop:items-stretch">
            <div className="Content flex w-full flex-col items-center justify-start gap-11 rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 px-6 py-8 dark:bg-gradient-to-br dark:from-primary-700 dark:to-secondary-500 tablet:gap-16 laptop:w-5/12 laptop:items-start laptop:justify-between">
              <div className="Headingand contact details flex w-full flex-col items-center justify-start gap-9 tablet:gap-16">
                <div className="Headingand supporting text flex w-full flex-col items-center justify-start gap-4 laptop:items-start">
                  <p className="Heading w-full text-center text-xl font-bold leading-7 text-gray-900 dark:text-gray-50 tablet:text-[28px] tablet:leading-8 laptop:text-start">
                    Say Hello!
                  </p>
                  <p className="Supportingtext w-full max-w-[460px] text-center text-base font-semibold leading-6 text-gray-600 dark:text-gray-300 tablet:text-lg tablet:leading-6 laptop:max-w-[360px] laptop:text-start">
                    Interested in working together or just have a question?
                    Let&apos;s connect and make things happen.
                  </p>
                </div>
                <div className="Content inline-flex w-full items-start justify-center gap-8 laptop:flex-col">
                  <div className="Content inline-flex flex-1 flex-col items-center justify-start space-y-2 laptop:gap-4">
                    <div className="Textand supporting text w-full">
                      <p className="Text w-full text-center text-lg font-medium text-gray-900 dark:text-gray-100 tablet:text-xl tablet:font-semibold tablet:leading-7 laptop:text-start">
                        Email
                      </p>
                    </div>
                    <p className="Text text-center text-sm font-medium text-primary-700 dark:text-primary-300 tablet:text-base tablet:font-semibold laptop:text-start">
                      email@gmail.com
                    </p>
                  </div>
                  <div className="Content inline-flex flex-1 flex-col items-center justify-start space-y-2 laptop:gap-4">
                    <div className="Textand supporting text w-full">
                      <p className="Text w-full text-center text-lg font-medium leading-normal text-gray-900 dark:text-gray-100 tablet:text-xl tablet:font-semibold tablet:leading-7 laptop:text-start">
                        Phone
                      </p>
                    </div>
                    <p className="Text text-center text-sm font-medium text-primary-700 dark:text-primary-300 tablet:text-base tablet:font-semibold laptop:text-start">
                      +20 01012345678
                    </p>
                  </div>
                </div>
              </div>
              <div className="Sociallinks inline-flex w-full items-center justify-center gap-8">
                <AiOutlineTwitter className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
                <AiFillLinkedin className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
                <AiFillYoutube className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300  dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
                <AiOutlineDribbble className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
              </div>
            </div>
            <div className="w-full rounded-3xl bg-secondary-50/60 px-4 py-6 dark:bg-dark-1 tablet:px-7 tablet:py-12 laptop:w-7/12 laptop:py-8">
              <div className="w-full tablet:flex tablet:justify-center">
                <form className="w-full space-y-6 tablet:max-w-[512px]">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200 tablet:text-base"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="flex-1 rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none dark:border-2 dark:bg-gray-200 dark:focus:border-secondary-500 dark:focus:shadow-secondary-400"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200 tablet:text-base"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex-1 rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none dark:border-2 dark:bg-gray-200 dark:focus:border-secondary-500 dark:focus:shadow-secondary-400"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200 tablet:text-base"
                      htmlFor="phone"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex-1 rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none dark:border-2 dark:bg-gray-200 dark:focus:border-secondary-500 dark:focus:shadow-secondary-400"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+20 01012345678"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200 tablet:text-base"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-32 w-full resize-none rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none dark:border-2 dark:bg-gray-200 dark:focus:border-secondary-500 dark:focus:shadow-secondary-400"
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      className="inline-flex w-full items-center justify-center rounded-xl border border-primary-600 bg-primary-600 px-4 py-2.5 text-base font-bold text-gray-50 shadow transition-all duration-300 ease-out hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default Contact;
