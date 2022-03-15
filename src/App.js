import React from "react";
import Header from "./layouts/Header";
import heroMobile from "./images/hero-mobile.jpg";
import heroDesktop from "./images/hero-desktop.jpg";
import Form from "./components/Form";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-start-1 to-stop-1">
      {/* wrapper */}
      <div
        className="mx-auto lg:pl-36 lg:flex lg:space-x-64 md:justify-between "
        style={{ maxWidth: "1980px" }}
      >
        {/* LEFT SIDE FOR BIG SCREEN */}
        <div className=" lg:w-1/3 lg:ml-auto lg:pr-28">
          <Header />
          {/* Hero image conatiner */}
          <div style={{ height: "320px" }} className="lg:hidden">
            <img
              alt="hero"
              src={heroMobile}
              className="object-cover object-top w-full h-full"
            />
          </div>

          {/* content area */}
          <main className="px-16 py-16 text-center font-primary lg:px-0 md:px-32 lg:text-left lg:flex lg:items-center lg:justify-start lg:mt-8 ">
            <div>
              <p className="text-4xl tracking-widest uppercase text-red-gray lg:text-6xl ">
                <span className="block font-light text-red-desaturate">
                  we're
                </span>
                <span className="block font-semibold lg:font-bold">
                  coming{" "}
                </span>
                <span className="block font-semibold lg:font-bld">soon</span>
              </p>
              <p className="mt-4 text-base lg:my-8 text-red-desaturate">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
              {/* email here */}
              <Form />
            </div>
          </main>
        </div>
        {/* Image for desktop */}
        <div className="hidden w-1/3 h-screen lg:block justify-self-end lg:w-2/5">
          <img
            alt="hero"
            src={heroDesktop}
            className="object-top w-full h-full bg-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
