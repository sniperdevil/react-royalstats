import React from "react";

function About() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              Leader
            </h2>
            <p className="leading-relaxed">Clan Role</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              90000
            </h2>
            <p className="leading-relaxed">Trophies</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              3500
            </h2>
            <p className="leading-relaxed">Best Trophies</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              40
            </h2>
            <p className="leading-relaxed">Star Pointes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
