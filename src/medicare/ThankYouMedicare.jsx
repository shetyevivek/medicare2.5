import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import $ from 'jquery'
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';

import MedicareCM from "../medicare/MedicareCM";
import MedicareMA from "../medicare/MedicareMA";
import CallCTA from '../pages/CallCTA'


class ThankYouMedicare extends Component {

  componentDidMount() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formType");

    if (fType === 'health') {

      let hideNav = document.getElementById('medicare-nav');
      let hideBanner = document.getElementById('medicare-banner');

      $(hideNav).hide()
      $(hideBanner).hide();

    }
    if (fType === 'medicare') {

      let hideNav = document.getElementById('health-nav');
      let hideBanner = document.getElementById('health-banner');

      $(hideNav).hide();
      $(hideBanner).hide();
    }


  }

  render() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');
    const name = urlParams.get('first_name');
    const tele = urlParams.get('home_phone')



    return (
      <div className="bg-[#F3F5FF] ">
        <NavBarMedicare />


        <Fade>
          <div className=" mx-auto flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4" id="content" >
            <div className=" w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Congratulations {name}! You have been matched with these partners...

                </h2>
              </div>
              <section className="py-10  ">
                <div className="container px-4 mx-auto">
                  <div className="py-12 px-6 md:p-20 w-full md:w-3/4 mx-auto bg-blue-500 text-white border-3 border-blue-500 shadow-sm rounded-2xl">
                    <div className="flex flex-wrap -mx-4 items-center text-center md:text-left">
                      <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                        <span className="text-lg font-extrabold text-white mb-4">Get Your Quote Over The Phone</span>
                        <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-4">Liscensed Insurance Agents Are Waiting For Your Call</h1>

                      </div>
                      <div className="w-full lg:w-2/5 px-4">
                        <div className="flex flex-wrap items-center lg:justify-end"><a className="inline-block w-full 2xl:w-auto py-4 px-6 mb-4 2xl:mb-0 2xl:mr-4 text-center leading-6 text-2xl text-blue-500 font-extrabold bg-white hover:bg-blue-500 border-3 border-indigo-900 shadow rounded transition duration-200" href="tel:+18884261036">Call Now</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="w-full space-y-6 relative flex justify-center leading-5">

                <MedicareMA />
              </div>


            </div>
          </div>
        </Fade>

        <MedicareCM moduleId="1658" phoneNumber={tele} />

      </div>
    );
  }
}

export default withRouter(ThankYouMedicare);
