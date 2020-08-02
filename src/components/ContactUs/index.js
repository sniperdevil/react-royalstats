import React from "react";

export default function ContactUs() {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-19 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <div class="flex justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-900 inline-flex" />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
                Send
                <span
                  class="iconify m-1"
                  data-icon="cil:send"
                  data-inline="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
