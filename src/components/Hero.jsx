const Hero = () => {
  return (
    <>
      <section id="home" className="pt-12 lg:pt-36 pb-24">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="w-full self-center px-4 lg:w-1/2"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="text-base font-semibold text-primary lg:text-2xl">
                Halo 👋, Saya{" "}
                <span className="block font-bold text-4xl text-dark mt-1 lg:text-5xl">
                  Fazeel Muhammad Zuhdi
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-xl mt-2">
                Fresh Graduategi
              </h2>
              {/* <p className="font-medium text-secondary mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, maxime.
              </p> */}
              <a
                href=""
                className="bg-primary text-base font-semibold text-white px-6 py-3 rounded-full hover:opacity-90 shadow-lg transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div
                className="relative mt-10 lg:mt-0 right-0"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="/profile.png"
                  alt="Fazeel Muhammad Zuhdi"
                  className="max-w-full mx-auto"
                  width="250"
                />
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2">
                  <svg
                    width="350"
                    height="530"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0369a1"
                      d="M48.9,-12.1C56.2,6.6,50.1,33.5,35.2,43C20.4,52.5,-3,44.5,-18.5,31.8C-34,19,-41.4,1.6,-37,-13.2C-32.6,-27.9,-16.3,-39.9,2.3,-40.7C20.8,-41.4,41.6,-30.8,48.9,-12.1Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
