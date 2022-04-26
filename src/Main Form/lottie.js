import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import $ from 'jquery'
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';
import sending from '../images/sending.json'



class LottieAnim extends Component {



  componentDidMount() {
    setTimeout(() => {

      const urlSearch = window.location.search;
      const urlParams = new URLSearchParams(urlSearch);
      const gclid = urlParams.get("gclid");
      const lp = urlParams.get("lp_request_id");
      const zipCode = localStorage.getItem("zipCode");
      const city = localStorage.getItem("city");
      const state = localStorage.getItem("state");
      const formType = localStorage.getItem("formType");
      const age = urlParams.get("age");
      const enrolled = urlParams.get("enrolled");
      const month = urlParams.get("month")
      const day = urlParams.get("day")
      const year = urlParams.get("year");
      const address = urlParams.get('address')
      const fName = urlParams.get('first_name');
      const lName = urlParams.get('lName');
      const phone = urlParams.get('home_phone')

      if (formType === 'medicare') {

        window.location.href = ('/thank-you-medicare' +
          "?gclid=" +
          gclid +
          "&lp=" +
          lp +
          "&zipcode=" +
          zipCode +
          "&city=" +
          city +
          "&state=" +
          state +
          "&formType=" +
          formType +
          "&age=" +
          age +
          "&enrolled=" +
          enrolled +
          "&month=" +
          month +
          "&day=" +
          day +
          "&year=" +
          year +
          "&address=" +
          address +
          "&first_name=" + fName +
          "&last_name=" + lName +
          "&home_phone=" + phone)

      }

      if (formType === 'health') {
        window.location.href = ('/thank-you-health' +
          "?gclid=" +
          gclid +
          "&lp=" +
          lp +
          "&zipcode=" +
          zipCode +
          "&city=" +
          city +
          "&state=" +
          state +
          "&formType=" +
          formType +
          "&age=" +
          age +
          "&enrolled=" +
          enrolled +
          "&month=" +
          month +
          "&day=" +
          day +
          "&year=" +
          year +
          "&address=" +
          address +
          "&first_name=" + fName +
          "&last_name=" + lName +
          "&home_phone=" + phone)
      }



    }, 5000)

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

        <section className="py-8 w-full mx-auto" id='lottie'>
          <div className="container px-4 mx-auto">
            <div className="py-5 bg-blue-500   overflow-hidden rounded-lg">
              <div className="flex flex-wrap align-middle">
                <div className="w-full md:w-full px-6 md:pl-12 lg:pr-0 mb-10 md:mb-0 text-center m-auto">
                  <h3 className="mb-2 lg:text-4xl sm:text-lg font-medium text-white text-center">
                    <span className="text-white" data-config-id="header-p1">{name}, </span>
                    <span data-config-id="header-p2">We are matching you with your best options!</span>
                  </h3>
                  <p className="lg:text-xl sm:text-sm font-medium text-blue-100 text-center justify-center" data-config-id="desc">Please wait while we match you with your best plans for {fType}!</p>
                </div>

              </div>
            </div>

            <Lottie animationData={sending} loop={true} className="lottie" />

          </div>

        </section>



        <FooterMedicare />

      </div>
    );
  }
}

export default withRouter(LottieAnim);
