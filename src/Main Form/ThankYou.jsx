import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import $ from 'jquery'
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';
import sending from '../images/sending.json'
import MedicareCM from "../medicare/MedicareCM";
import MedicareMA from "../medicare/MedicareMA";



class ThankYou extends Component {

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

    if (fType === 'medicare') {

      let CM = <MedicareCM />
      let MA = <MedicareMA />

    }



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

export default withRouter(ThankYou);
