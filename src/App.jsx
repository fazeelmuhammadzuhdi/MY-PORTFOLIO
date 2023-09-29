import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* Navbar Start*/}
      <nav className=" top-0 bg-white w-full shadow">
        <div className="container m-auto flex justify-between items-center text-secondary">
          <h1 className="pl-8 py-4 text-xl font-bold text-primary">
            Fazeel Muhammad Zuhdi
          </h1>
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className="hover:bg-primary hover:text-white py-4 px-6">
              <a href="">Home</a>
            </li>
            <li className="hover:bg-primary hover:text-white py-4 px-6">
              Contact
            </li>
            <li className="hover:bg-primary hover:text-white py-4 px-6">
              <a href="">About</a>
            </li>
            <li className="hover:bg-primary hover:text-white py-4 px-6">
              Project
            </li>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="absolute top-0 -right-full h-screen w-8/12 bg-white opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:text-primary py-4 px-6 w-full">
                  <a href="">Home</a>
                </li>
                <li className="hover:text-primary py-4 px-6 w-full">
                  <a href="">Contact</a>
                </li>
                <li className="hover:text-primary py-4 px-6 w-full">
                  <a href="">About</a>
                </li>
                <li className="hover:text-primary py-4 px-6 w-full">
                  <a href="">Project</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>

      {/* Navbar End */}

      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}

      {/* About Start*/}
      <About />
      {/* About End */}
    </>
  );
}

export default App;
