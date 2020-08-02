import React from "react";

function Arena() {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container my-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full lg:h-auto h-32 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PLAYER ARENA
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Challenger I
            </h1>
            <p className="leading-relaxed">
              <div className="flex my-2">
                <span className="mr-4"> Type :-</span>
                <span> League </span>
              </div>
              <div className="flex my-2">
                <span className="mr-4"> Trophie Required :-</span>
                <span> 4000+ </span>
              </div>
              <div className="flex flex-col flex-wrap w-1/2 my-2">
                <h3>Unlocked cards</h3>
                <div className="my-3 flex">
                  <img
                    className="mx-2"
                    src="https://dummyimage.com/60x60"
                    alt="dummy"
                  />
                  <img
                    className="mx-2"
                    src="https://dummyimage.com/60x60"
                    alt="dummy"
                  />
                  <img
                    className="mx-2"
                    src="https://dummyimage.com/60x60"
                    alt="dummy"
                  />
                  <img
                    className="mx-2"
                    src="https://dummyimage.com/60x60"
                    alt="dummy"
                  />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arena;
