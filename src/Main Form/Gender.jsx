import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import MedicareBanner from "../medicare/MedicareBanner";
import FooterMedicare from "../medicare/FooterMedicare";
import NavBarHealthCare from '../health/NavBarHealthCare';
import HealthBanner from '../health/HealthBanner';
import BottomPhoneHealth from "../health/BottomPhoneHealth";
import BottomPhoneMedicare from "../medicare/BottomPhone";

import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import $ from 'jquery'
import { LinkWithQuery } from '../BackButton'

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Male",
      progress: 10,
      show: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.skipStep = this.skipStep.bind(this);
  }

  componentDidMount() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formType");

    if (fType === 'health') {

      let hideNav = document.getElementById('medicare-nav');
      let hideBanner = document.getElementById('medicare-banner');
      let skip = document.getElementById('skip');
      let ctaMedicare = document.getElementById('medicare-cta')

      $(skip).hide();
      $(ctaMedicare).hide();
      $(hideNav).hide()
      $(hideBanner).hide();

    }
    if (fType === 'medicare') {

      let hideNav = document.getElementById('health-nav');
      let hideBanner = document.getElementById('health-banner');
      let ctaHealth = document.getElementById('health-cta');


      $(ctaHealth).hide();
      $(hideNav).hide();
      $(hideBanner).hide();
    }


  }

  skipStep(event) {

    event.preventDefault();
    const { param } = 'opt_out'
    this.state.value = 'opt_out';

    let val = 'opt_out';

    console.log(val)

    this.props.setGender(val);

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = urlParams.get("formType");
    const age = urlParams.get("age");
    const enrolled = urlParams.get("enrolled");
    const gender = val;

    this.props.history.push(
      "/month" +
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
      "&gender=" +
      val
    );

  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setGender(val);

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = urlParams.get("formType");
    const age = urlParams.get("age");
    const enrolled = urlParams.get("enrolled");
    const gender = val;

    this.props.history.push(
      "/month" +
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
      "&gender=" +
      val
    );
  }

  render() {
    let buttonsTitles = [
      { title: "Male", id: "Male", value: "Male" },
      { title: "Female", id: "Female", value: "Female" },
      { title: "Non-Binary", id: "Non-Binary", value: "Non-Binary" },
    ];


    let buttonList = buttonsTitles.map((buttonTitle, index) => {
      return (
        <button
          className="chooseButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold"
          key={buttonTitle.id}
          data-param={buttonTitle.id}
          id={buttonTitle.id}
          value={buttonTitle.value}
          onClick={this.handleClick}
        >
          {buttonTitle.title}
        </button>
      );
    });
    return (
      <div className="bg-[#F3F5FF] ">

        {/* Medicare Components */}
        <NavBarMedicare id='medicare' />
        <MedicareBanner id='medicare' setProgress={75} />

        {/* Healthcare components */}
        <NavBarHealthCare id='health' />
        <HealthBanner id='health' setProgress={75} />

        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What Is Your Gender?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="w-full space-y-6 relative flex justify-center leading-5">
                  <div className=" leading-5 buttonBlock">{buttonList}</div>
                </div>

                <button className="w-full space-y-6 relative flex justify-center leading-5 underline text-gray-400" id="skip" onClick={this.skipStep}>Skip</button>
                <LinkWithQuery to='/enrolled'>Back</LinkWithQuery>
              </form>
            </div>
          </div>
          <BottomPhoneHealth />
          <BottomPhoneMedicare />
        </Fade>

        <FooterMedicare />
      </div>
    );
  }
}

export default withRouter(Gender);
