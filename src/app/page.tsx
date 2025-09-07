"use client";

import Link from "next/link";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";
import ComparisonTable from "./components/ComparisonTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-5 backdrop-blur-lg bg-black/20 border-b border-white/10 z-50">
        <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 hover:animate-pulse">
          FairFare
        </div>
        <div className="flex space-x-6">
          <Link href="/feature">
            <button className="cursor-pointer bg-blue-600/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-blue-700/80 transition-all duration-300 hover:scale-105 border border-blue-400/30">
              Features
            </button>
          </Link>

          <Link href="https://fair-fare-phi.vercel.app/signup">
            <button className="cursor-pointer bg-blue-600/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-blue-700/80 transition-all duration-300 hover:scale-105 border border-blue-400/30">
              SignUp
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:space-x-10 px-11 lg:px-10 py-20 relative z-10">
        <div>
          <img
            src="./save.svg"
            className="drop-shadow-2xl"
            alt="Illustration"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <p className="text-gray-400 mb-4">
            Some content on this page might be from previous versions and not
            upto date
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold  p-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 hover:animate-text">
            Split it <br /> Its easy this way.
          </h1>
          <p className="text-gray-400 mb-8">
            Why use Splitwise if we can do the same job but for free.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link href="https://fair-fare-phi.vercel.app/login">
              <button className="cursor-pointer bg-blue-600/80 backdrop-blur-sm text-white py-3 px-6 rounded-lg hover:bg-blue-700/80 transition-all duration-300 hover:scale-105 border border-blue-400/30">
                Login
              </button>
            </Link>
            <button
              className="cursor-pointer bg-transparent border text-white border-white/30 py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const comparisonTable =
                  document.getElementById("comparison-table");
                if (comparisonTable) {
                  comparisonTable.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div id="comparison-table">
        <ComparisonTable />
      </div>

      {/* Documentation Section */}
      <Documentation />

      {/* Testimonials Section */}
      <section className="w-full backdrop-blur-lg bg-[#000000] bg-cover bg-center py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 hover:animate-pulse">
                What Our Users Say
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-400">
                Hear from our satisfied users
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Testimonial Cards */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-lg bg-white/5 w-full mb-8 shadow-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:animate-float">
                <div className="px-4 py-5 flex-auto">
                  <p className="mt-2 mb-4 text-white">
                    &quot;FairFare makes managing expenses with friends so easy!
                    The interface is clean, and splitting bills has never been
                    this hassle-free.&quot;
                  </p>
                  <h6 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                    - Nico Robin
                  </h6>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-lg bg-white/5 w-full mb-8 shadow-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:animate-float">
                <div className="px-4 py-5 flex-auto">
                  <p className="mt-2 mb-4 text-white">
                    &quot;I love how intuitive and fast FairFare is. No more
                    awkward conversations about who owes what—this app does it
                    all!&quot;
                  </p>
                  <h6 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                    - Satoru Gojo
                  </h6>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-lg bg-white/5 w-full mb-8 shadow-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:animate-float">
                <div className="px-4 py-5 flex-auto">
                  <p className="mt-2 mb-4 text-white">
                    &quot;FairFare is a lifesaver for group trips! Tracking
                    expenses and settling up is super simple. Highly recommend
                    it!&quot;
                  </p>
                  <h6 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                    - Naruto Uzumaki
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
