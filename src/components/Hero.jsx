import React from "react";
import { Download } from "lucide-react"; // Assuming you're using Lucide icons
import chromeLogo from "/chrome-logo.svg"; // Make sure to import your Chrome logo

const Hero = () => {
  return (
    <main className="font-sans flex flex-col items-center mt-8 min-h-screen gap-1 max-w-4xl mx-auto text-center">
      {/* Chrome Logo */}
      <img src={chromeLogo} alt="Chrome Logo" className="h-15 w-15 mb-2" />

      {/* Main Heading */}
      <h1 className="text-7xl  font-bold mb-8  text-gray-800">
        The browser <br/>built to be yours
      </h1>

      {/* Primary Action Button */}
      <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-5 px-10 rounded-full shadow-md transition-colors duration-200 mb-4">
        <Download className="h-5 w-5" />
        Download Chrome
      </button>

      {/* Secondary Action Button */}
      <button className="text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors duration-200">
        I want to update Chrome
      </button>

      {/* System Requirements */}
      <p className="text-gray-600 mb-6 text-sm">For Windows 11/10 64-bit</p>
      <div className="max-w-md space-y-4 text-sm w-200">
        {/* Privacy Consent Checkbox */}
        <div className="flex items-start gap-3 text-center">
          <input
            type="checkbox"
            id="privacy-consent"
            className="h-6 w-6 mt-1  text-blue-600 rounded bg-blue-600"
            defaultChecked
          />
          <label
            htmlFor="privacy-consent"
            className=" text-gray-600 text-left text-[11px]"
          >
            Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
            <a href="#" className="">
              Learn more
            </a>
          </label>
        </div>

        {/* Terms Consent Checkbox */}
        <div className="flex items-center gap-3 text-[11px]">
          <label
            htmlFor="terms-consent"
            className=" text-gray-600 text-center"
          >
            By downloading Chrome, you agree to the
            <a href="#" className="text-blue-600 hover:text-blue-700 mx-1">
              Google Terms of Service
            </a>
            and
            <a href="#" className="text-blue-600 hover:text-blue-700 mx-1">
              Chrome and ChromeOS Additional Terms of Service
            </a>
          </label>
        </div>
      </div>
    </main>
  );
};

export default Hero;
