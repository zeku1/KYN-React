import React from "react";

import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[20vh] w-full bg bg-forrest relative flex justify-center px-5"
        
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-slate-100 drop-shadow-lg text-center">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-slate-200 px-6 mt-8 bg bg-base">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <form className="flex flex-col space-y-5 p-10 border-primary rounded-lg  bg bg-zinc-900">
              <h2 className="font-medium text-xl ml-1">Concerns</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="px-3 py-2 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Topic"
                className="px-3 py-2 rounded"
              />
              <button type="submit" className=" btn btn-orange-500 bg bg-orange-500 mt-3 rounded py-3">
                Submit
              </button>
            </form>
            <div className="flex flex-col space-y-5 p-5 border-primary shadow text-lg bg-zinc-900">
              <div className="text-center space-y-2">
                <i className="fa-sharp fa-solid fa-location-dot text-4xl" />
                <p>Philippines, Davao</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-regular fa-envelope text-4xl" />
                <p>admin@kyn.com</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-solid fa-phone text-4xl" />
                <p>+69696969696, 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default ContactPage;
