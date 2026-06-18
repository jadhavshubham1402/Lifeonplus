import withBasePath from "@/utils/basePath";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section
      id="join-section"
      className="pt-12 pb-20 md:pb-32 -mb-12 md:-mb-64"
    >
      <div className="relative z-10">
        <div className="mx-auto max-w-2xl md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-orange rounded-3xl overflow-hidden bg-newsletter bg-contain bg-no-repeat bg-right-bottom relative">
            <div className="px-6 py-12 md:py-16 lg:py-20 xl:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="max-w-lg">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    Join Our Newsletter
                  </h3>
                  <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-8">
                    Subscribe to our newsletter for exclusive discounts,
                    promotions, and updates.
                  </h4>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      name="email"
                      className="w-full py-4 px-5 text-base bg-white rounded-2xl border border-transparent focus:border-[#02BE0F] focus:outline-none transition-all duration-300 placeholder:text-gray-400"
                      placeholder="Enter your email address"
                      autoComplete="off"
                    />
                    <button className="bg-[#02BE0F] hover:bg-white hover:text-[#02BE0F] border-2 border-[#02BE0F] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 whitespace-nowrap text-base">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Right Image / Decorative Area */}
                <div className="hidden lg:block relative">
                  <div className="absolute -top-12 -right-6 md:-right-12 lg:-right-8 xl:-right-4">
                    <Image
                      src={withBasePath("/images/newsletter/Free.svg")}
                      alt="Free illustration"
                      width={180}
                      height={180}
                      className="w-36 md:w-44 lg:w-48 xl:w-52 drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Decorative Image */}
            <div className="lg:hidden absolute bottom-6 right-6 opacity-80">
              <Image
                src={withBasePath("/images/newsletter/Free.svg")}
                alt="Free illustration"
                width={120}
                height={120}
                className="w-28 sm:w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
