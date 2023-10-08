const Project = () => {
  return (
    <div>
      <section id="projects" className="lg:pt-16 pb-16 ">
        <div className="container overflow-hidden">
          <div className="w-full px-4">
            <div className="container md:mx-auto p-5">
              <div
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="800"
              >
                <h1 className="font-bold text-lg text-primary mb-10 uppercase sm:text-3xl lg:text-4xl text-center">
                  Projects
                </h1>
              </div>
              <div className="items-center grid grid-col md:grid-cols-2 gap-8">
                <div
                  className="shadow-lg shadow-gray-300 rounded p-5"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <img
                    alt="Proj"
                    className="rounded-lg border border-gray-300 mb-4"
                    src="/ppdb.png"
                  />
                  <h1 className="text-lg md:text-2xl font-bold mb-1">PPDB</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Laravel"
                        width="16"
                        height="16"
                        src="/Laravel.svg"
                      />
                      <h2 className="text-xs font-semibold inline">Laravel</h2>
                    </div>

                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Javascript"
                        width="16"
                        height="16"
                        src="/javascript.svg"
                      />
                      <h2 className="text-xs font-semibold inline">
                        Javascript
                      </h2>
                    </div>

                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Javascript"
                        width="16"
                        height="16"
                        src="/jquery-vertical.svg"
                      />
                      <h2 className="text-xs font-semibold inline">JQuery</h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/bootstrap.svg"
                      />
                      <h2 className="text-xs font-semibold inline">
                        Bootstrap
                      </h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/mysql.svg"
                      />
                      <h2 className="text-xs font-semibold inline">MySql</h2>
                    </div>
                  </div>
                  <p className="line-clamp-3 text-justify mulish text-xs md:text-base font-semibold mb-4">
                    Aplikasi ini merupakan hasil dari proyek penelitian dan
                    pengembangan yang saya lakukan sebagai tugas akhir atau
                    skripsi dalam studi saya.
                  </p>
                  <a
                    href="https://github.com/fazeelmuhammadzuhdi/PPDB-SKRIPSI"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black"
                    target="blank"
                  >
                    Source Code
                  </a>

                  <a
                    href="https://youtu.be/9pXG3Q5zUBs"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-red-500"
                    target="blank"
                  >
                    Demo Youtube
                  </a>

                  <a
                    href="https://ppdbsmppesisirselatan.cloud"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-blue-500"
                    target="blank"
                  >
                    Preview
                  </a>
                </div>

                <div
                  className="shadow-lg shadow-gray-300 rounded p-5"
                  data-aos="fade-left"
                  data-aos-delay="1400"
                >
                  <img
                    alt="Proj"
                    className="rounded-lg border border-gray-300 mb-4 "
                    src="/e-commerce.png"
                  />
                  <h1 className="text-lg md:text-lg font-bold mb-1">
                    BWA Store E-Commerce
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Laravel"
                        width="16"
                        height="16"
                        src="/Laravel.svg"
                      />
                      <h2 className="text-xs font-semibold inline">Laravel</h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/bootstrap.svg"
                      />
                      <h2 className="text-xs font-semibold inline">
                        Bootstrap
                      </h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Javascript"
                        width="16"
                        height="16"
                        src="/javascript.svg"
                      />
                      <h2 className="text-xs font-semibold inline">
                        Javascript
                      </h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/mysql.svg"
                      />
                      <h2 className="text-xs font-semibold inline">MySql</h2>
                    </div>
                  </div>
                  <p className="text-justify mulish text-xs md:text-base font-semibold mb-4">
                    Dalam proyek ini, saya berhasil merancang dan mengembangkan
                    sebuah website E-Commerce yang memungkinkan pengguna untuk
                    mengelola produk-produk, kategori produk, galeri produk dan
                    transaction. Website ini dirancang untuk mempermudah dan
                    memberikan pengalaman berbelanja yang baik kepada pelanggan.
                  </p>
                  <a
                    href="https://github.com/fazeelmuhammadzuhdi/Toko-Online"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>

                <div
                  className="shadow-lg shadow-gray-300 rounded p-5"
                  data-aos="fade-right"
                  data-aos-delay="1600"
                >
                  <img
                    alt="Proj"
                    className="rounded-lg border border-gray-300 mb-4 "
                    src="/perpustakaan.png"
                  />
                  <h1 className="text-lg md:text-lg font-bold mb-1">
                    Sistem Informasi Perpustakaan
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Perpusakaan"
                        width="16"
                        height="16"
                        src="/Laravel.svg"
                      />
                      <h2 className="text-xs font-semibold inline">Laravel</h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/bootstrap.svg"
                      />
                      <h2 className="text-xs font-semibold inline">
                        Bootstrap
                      </h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Bootstrap"
                        width="16"
                        height="16"
                        src="/mysql.svg"
                      />
                      <h2 className="text-xs font-semibold inline">MySql</h2>
                    </div>
                  </div>
                  <p className="text-justify mulish text-xs md:text-base font-semibold mb-4">
                    Saya telah mengembangkan sebuah website perpustakaan yang
                    memiliki beragam fitur yang sangat berguna. Fitur-fitur
                    tersebut mencakup pengelolaan buku, pencatatan peminjaman
                    dan pengembalian buku, serta pencarian stok dan informasi
                    anggota. Dengan adanya sistem ini, perpustakaan dapat
                    memberikan pelayanan yang lebih efisien kepada penggunanya.
                  </p>
                  <a
                    href="https://github.com/fazeelmuhammadzuhdi/Perpustakaan"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>

                <div
                  className="shadow-lg shadow-gray-300 rounded p-5"
                  data-aos="fade-left"
                  data-aos-delay="1800"
                >
                  <img
                    alt="Proj"
                    className="rounded-lg border border-gray-300 mb-4 "
                    src="/film.png"
                  />
                  <h1 className="text-lg md:text-lg font-bold mb-1">
                    Landing Page Movie Search
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img
                        alt="Landing Page"
                        width="16"
                        height="16"
                        src="/React-icon.svg"
                      />
                      <h2 className="text-xs font-semibold inline">React</h2>
                    </div>
                    <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                      <img alt="CSS" width="16" height="16" src="/css.svg" />
                      <h2 className="text-xs font-semibold inline">Css</h2>
                    </div>
                  </div>
                  <p className="text-justify mulish text-xs md:text-base font-semibold mb-4">
                    Project Movie Search ini merupakan project kecil-kecilan
                    yang dirancang untuk menguji dan meningkatkan kemampuan
                    React Js Saya. Dengan menggunakan API dari IMDB, Movie
                    Search Hub memungkinkan Anda untuk mencari ribuan film
                    dengan cepat dan mudah
                  </p>
                  <a
                    href="https://belajar-react-js-api-film.vercel.app/"
                    className="text-xs md:text-base font-semibold py-1 mx-3 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black"
                  >
                    Preview
                  </a>
                  <a
                    href="https://github.com/fazeelmuhammadzuhdi/Belajar-React-Js-Api-Film"
                    className="text-xs md:text-base font-semibold py-1 px-2 border border-black rounded-md float-right hover:text-white hover:bg-black"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
