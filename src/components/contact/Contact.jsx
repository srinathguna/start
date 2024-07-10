import React from 'react';

const Contact = () => {
    return (
      <div className="container mx-auto">
        <div className="text-center my-7">
          <h4 className="font-worksans text-base font-bold uppercase tracking-[5px] text-[#74C69D]">
            Contact Us
          </h4>
          <p className="font-worksans text-xl font-normal mt-4 leading-6">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elits.
          </p>
        </div>
        <div className="flex flex-wrap justify-between mb-24 items-center">
          <div className="w-full sm:w-1/2 p-2 order-2 sm:order-1">
            <div className="form-control mt-5">
              <label htmlFor="" className="block">
                Name
              </label>
              <input className="border-2 border-black rounded h-9 w-full mt-2" type="text" name="" id="" />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="" className="block">
                Email
              </label>
              <input className="border-2 border-black rounded h-9 w-full mt-2" type="text" name="" id="" />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="" className="block">
                Message
              </label>
              <input className="border-2 border-black rounded h-9 w-full mt-2" type="text" name="" id="" />
            </div>
            <button className=" font-worksans bg-black text-white text-xl px-8 py-4 mt-5 w-full rounded-md">
              Submit
            </button>
          </div>
          <div className="w-full sm:w-1/2 p-3 order-1 sm:order-2 sm:p-4 md:p-10 lg:p-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.866201483878!2d78.55563607563631!3d12.48532110238746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac53f1f6cfe2cb%3A0x818bcb6267e1d0e5!2s505%2C%20First%20Cross%20Road%2C%20T.N.H.B.Phase-1%2C%20Tirupathur%2C%20Tamil%20Nadu%20635601!5e0!3m2!1sen!2sin!4v1720547082867!5m2!1sen!2sin"
                width={"100%"}
                height={300}
                style={{ "border": "0" }}
                allowfullscreen={{}}
                loading={"lazy"}
            />
          </div>
        </div>
      </div>
    );
};

export default Contact;