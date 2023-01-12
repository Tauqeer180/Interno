import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Services", href: "#", current: false },
    { name: "Pages", href: "#", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];
  return (
    <div className="container mx-auto">
      <nav>
        <div className="mx-auto px-2">
          <div className="relative flex items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-white "
                aria-controls="mobile-menu"
                aria-expended="false"
              >
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}

            <div className="flex flex-1 items-center justify-between my-6 mx-8">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="  h-13.5 w-auto"
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      href="/"
                      className={
                        (item.current ? "text-theme-gold" : "text-black",
                        "   hover:text-theme-gold px-3 py-2 rounded-md text-xl font-sans")
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
