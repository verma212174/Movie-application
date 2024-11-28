import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-600  py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          <div>
            <h3 className=" font-semibold text-gray-200 uppercase tracking-wider text-2xl ">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl  font-semibold text-gray-200 uppercase tracking-wider">
              Help
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Account
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl  font-semibold text-gray-200 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl  font-semibold text-gray-200 uppercase tracking-wider">
              Social
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between">
          <p className="text-sm">© 2024 Netflix Clone. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ by Arjun Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
