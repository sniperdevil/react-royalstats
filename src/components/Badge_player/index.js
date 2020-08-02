import React from "react";
import ProgressBar from "react-animated-progress-bar";
function Badge() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Player Badge
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-gray-800 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Badge Test
                </h2>
                <div className="flex w-full flex-col">
                  <div className="flex">
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Level:{" "}
                      </span>
                      <span> 1 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Max-lavel:{" "}
                      </span>
                      <span> 10 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Progress:{" "}
                      </span>
                      <span> 3 </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <ProgressBar
                      className=""
                      width="w-full"
                      height="10px"
                      rect
                      fontColor="Black"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      bgColor="#00000"
                      trackBorderColor="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Badge Test
                </h2>
                <div className="flex w-full flex-col">
                  <div className="flex">
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Level:{" "}
                      </span>
                      <span> 1 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Max-lavel:{" "}
                      </span>
                      <span> 10 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Progress:{" "}
                      </span>
                      <span> 3 </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <ProgressBar
                      className=""
                      width="w-full"
                      height="10px"
                      rect
                      fontColor="Black"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      bgColor="#00000"
                      trackBorderColor="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Badge Test
                </h2>
                <div className="flex w-full flex-col">
                  <div className="flex">
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Level:{" "}
                      </span>
                      <span> 1 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Max-lavel:{" "}
                      </span>
                      <span> 10 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Progress:{" "}
                      </span>
                      <span> 3 </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <ProgressBar
                      className=""
                      width="w-full"
                      height="10px"
                      rect
                      fontColor="Black"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      bgColor="#00000"
                      trackBorderColor="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Badge Test
                </h2>
                <div className="flex w-full flex-col">
                  <div className="flex">
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Level:{" "}
                      </span>
                      <span> 1 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Max-lavel:{" "}
                      </span>
                      <span> 10 </span>
                    </div>
                    <div className="flex mx-3">
                      <span className="mr-4 text-base text-black">
                        {" "}
                        Progress:{" "}
                      </span>
                      <span> 3 </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <ProgressBar
                      className="text-black"
                      width="w-full"
                      height="10px"
                      rect
                      fontColor="text-gray-800"
                      percentage="70"
                      rectPadding=".1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      bgColor="#00000"
                      trackBorderColor="black"
                      defColor={{
                        fair: "orangered",
                        good: "yellow",
                        excellent: "#226089",
                        poor: "red"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Badge;
