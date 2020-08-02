import React from "react";
import Logo from "../../assests/SvgIcon/Logo";
export default function Footer() {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo />
          <span className="ml-3 text-xl">RoyalStats</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 RoyalStats —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Sniperdevil
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="hover:text-black">
            <span
              class="iconify text-lg"
              data-icon="ant-design:github-filled"
              data-inline="false"
              data-width="40px"
              data-height="30px"
            />
          </a>
          <a className="ml-3 hover:text-black">
            <span
              class="iconify text-lg"
              data-icon="feather:codesandbox"
              data-inline="false"
              data-width="40px"
              data-height="30px"
            />
          </a>
          <a className="ml-3 hover:text-black">
            <span
              class="iconify text-lg"
              data-icon="cib:netlify"
              data-inline="false"
              data-height="30px"
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
