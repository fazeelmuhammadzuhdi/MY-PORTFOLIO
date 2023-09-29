function App() {
  return (
    <>
      {/* Hero Section Start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4">
              <h1 className="text-base font-semibold text-primary">
                Halo 👋, Saya{" "}
                <span className="block font-bold text-4xl text-dark mt-1">
                  Fazeel Muhammad Zuhdi
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5">
                Fresh Graduated
              </h2>
              <p className="font-medium text-slate-500 mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, maxime.
              </p>
              <a
                href=""
                className="bg-primary text-base font-semibold text-white px-6 py-3 rounded-full hover:opacity-90 shadow-lg transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4">
              <div className="mt-10">
                <img
                  src="/public/profile.png"
                  alt=""
                  className="max-w-full mx-auto"
                />
                <span>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#FF0066"
                      d="M48.9,-12.1C56.2,6.6,50.1,33.5,35.2,43C20.4,52.5,-3,44.5,-18.5,31.8C-34,19,-41.4,1.6,-37,-13.2C-32.6,-27.9,-16.3,-39.9,2.3,-40.7C20.8,-41.4,41.6,-30.8,48.9,-12.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    </>
  );
}

export default App;
