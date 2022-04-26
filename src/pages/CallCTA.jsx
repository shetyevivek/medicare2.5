import React from 'react'

export default function CallCTA() {
  return (
    <section className="py-10  ">
      <div className="container px-4 mx-auto">
        <div className="py-12 px-6 md:p-20 w-full md:w-3/4 mx-auto bg-blue-500 text-white border-3 border-blue-500 shadow-sm rounded-2xl">
          <div className="flex flex-wrap -mx-4 items-center text-center md:text-left">
            <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
              <span className="text-lg font-extrabold text-white mb-4">Get Your Quote Over The Phone</span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-4">Liscensed Insurance Agents Are Waiting For Your Call</h1>

            </div>
            <div className="w-full lg:w-2/5 px-4">
              <div className="flex flex-wrap items-center lg:justify-end"><a className="inline-block w-full 2xl:w-auto py-4 px-6 mb-4 2xl:mb-0 2xl:mr-4 text-center leading-6 text-2xl text-blue-500 font-extrabold bg-white hover:bg-blue-500 border-3 border-indigo-900 shadow rounded transition duration-200" href="tel:+18883520887">Call Now</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
