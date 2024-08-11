export default function () {
  return (
    <footer className="border-t border-gray-line  bg-navi text-green-tx">
      {/* Top part */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap -mx-4">
          {/* Menu 1 */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul>
              <li>
                <a href="/shop.html" className="hover:text-testing">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-testing"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a href="/shop.html" className="hover:text-testing">
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-testing"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-testing"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu 3 */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul>
              <li>
                <a href="/register.html" className="hover:text-testing">
                  Registration
                </a>
              </li>
              <li>
                <a href="/register.html" className="hover:text-testing">
                  Login
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <img
                  src="/assets/images/social_icons/facebook.svg"
                  alt="Facebook"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Facebook
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/assets/images/social_icons/twitter.svg"
                  alt="Twitter"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Twitter
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/assets/images/social_icons/instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Instagram
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/assets/images/social_icons/pinterest.svg"
                  alt="Instagram"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Pinterest
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/assets/images/social_icons/youtube.svg"
                  alt="Instagram"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full sm:w-2/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              <img
                src="assets/images/template-logo.png"
                alt="Logo"
                className="h-[60px] mb-4"
              />
            </p>
            <p>123 Street Name, Paris, France</p>
            <p className="text-xl font-bold my-4">Phone: (123) 456-7890</p>
            <a href="mailto:info@company.com" className="underline">
              Email: info@company.com
            </a>
          </div>
        </div>
      </div>
      {/* Bottom part */}
      <div className="py-6 border-t border-gray-line">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Copyright and Links */}
          <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
            <p className="mb-2 font-bold">
              © 2024 Your Company. All rights reserved.
            </p>
            <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-testing">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-testing">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-testing">
                  FAQ
                </a>
              </li>
            </ul>
            <p className="text-sm mt-4">
              Your shop's description goes here. This is a brief introduction to
              your shop and what you offer.
            </p>
          </div>
          {/* Payment Icons */}
          <div className="w-full lg:w-1/4 text-center lg:text-right">
            <img
              src="/assets/images/social_icons/paypal.svg"
              alt="PayPal"
              className="inline-block h-8 mr-2"
            />
            <img
              src="/assets/images/social_icons/stripe.svg"
              alt="Stripe"
              className="inline-block h-8 mr-2"
            />
            <img
              src="/assets/images/social_icons/visa.svg"
              alt="Visa"
              className="inline-block h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
