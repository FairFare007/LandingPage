"use client";

import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./feature.css"; // Import the external CSS file

const Features = () => {
 const router = useRouter();

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    {/* Back to Landing Page Icon */}
    <div className="absolute cursor-pointer mt-3.5 z-50 top-4 left-4">
      <button
        onClick={() => router.push("/")} // Navigate to the landing page route
        className="p-2 rounded-full shadow-lg backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300 ease-in-out"
        aria-label="Go to Landing Page"
      >
        <FaHome className="text-white text-xl cursor-pointer" />
      </button>
    </div>

    {/* Background Animation */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-30">
        <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    {/* Title Section */}
    <h1 className="text-center text-3xl mt-8 sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-text">
      Explore Our Features
    </h1>

    <div className="w-full max-w-7xl mx-auto">
  <div className="features-grid">
      {/* Feature 1 */}
      <div className="div1 feature-item">
        <h2>Interactive Event Cards</h2>
        <p>
        Event cards with detailed information, enhanced interactivity, and a user-friendly design significantly improve usability, making it easier to track, organize, and manage expenses effectively and efficiently.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="div2 feature-item">
        <h2>Unlimited Events</h2>
        <p>
        Unlike Splitwise, which imposes limitations on free-tier features, our app empowers users to create unlimited events without any restrictions, offering greater flexibility, convenience, and freedom to manage their expenses effectively.        </p>
      </div>

      {/* Feature 3 */}
      <div className="div3 feature-item">
        <h2>Expense Tracking</h2>
        <p>
        Our app offers a comprehensive expense tracking system that allows users to add detailed descriptions for better context, and specify beneficiaries to clarify who owes what. Whether splitting bills, tracking shared group expenses, or managing personal finances.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="div4 feature-item">
        <h2>Personal AI Assisstant</h2>
        <p>
        Your Personal AI Assistant simplifies expense management with smart insights, automated calculations, and seamless organization, making group finances effortless.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="div5 feature-item">
        <h2>User-Centric Features</h2>
        <p>We prioritize privacy, offer unlimited events, and ensure no credit checks, providing users with a secure and hassle-free experience.</p>
      </div>

      {/* Feature 6 */}
      <div className="div6 feature-item">
        <h2>Enhanced Aesthetics</h2>
        <p>
        A modern, visually appealing UI with intuitive navigation, vibrant aesthetics, and seamless functionality could attract users who value design, usability, and an exceptional user experience.
        </p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Features;
