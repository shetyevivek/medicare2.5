import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import NavBarHealthCare from '../health/NavBarHealthCare';
import HealthBanner from "../health/HealthBanner";
import MedicareBanner from "../medicare/MedicareBanner";
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from "../BackButton";
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";


class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      progress: 10,
    };
    this.setFirstName = this.setFirstName.bind(this)
    this.setLastName = this.setLastName.bind(this);

  }

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
  setFirstName = (value) => {

    let fName = document.getElementById('firstName').value;

    this.state.first_name = fName
    this.props.setFName(fName)
  }

  setLastName = (value) => {
    let lName = document.getElementById('lastName').value;

    this.state.last_name = lName

    this.props.setLName(lName)



  }
  handleClick = (value) => {

    let fName = this.state.first_name
    let lName = this.state.last_name


    if (fName.length < 2 || lName.length < 2) {
      toast.error('Please Enter A Valid Name');

      return
    }

    toast.dismiss();
    console.log('came');

    $('#submit').prop("disabled", false);

    $('#submit').removeClass("disabled cursor-not-allowed");


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


    this.props.history.push(
      "/email-phone" +
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
      "&last_name=" + lName

    );
  };

  render() {


    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);


    const fType = urlParams.get("formType");

    if (fType === "medicare") {
      this.state.progress = 91;
    }

    return (
      <div className="bg-[#F3F5FF] ">

        <NavBarMedicare id='medicare' />
        <MedicareBanner id='medicare' setProgress={98} />

        {/* Healthcare components */}
        <NavBarHealthCare id='health' />
        <HealthBanner id='health' setProgress={98} />
        <ToastContainer limit={1} position="top-center" theme="colored" />
        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What is your Name?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className=" space-y-6 relative w-3/4 items-center justify-center m-auto">
                  <div className=" leading-5 ">
                    <input
                      className="appearance-none p-3 mb-10  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      id="firstName"
                      autoComplete="given-name"
                      value={this.state.value}
                      onChange={this.setFirstName}
                      required

                    />

                    <input
                      className="appearance-none p-3  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      id="lastName"
                      autoComplete="family-name"
                      value={this.state.value}
                      onChange={this.setLastName}
                      required

                    />

                  </div>
                  <button
                    className="px-6 py-4 ripple-bg-blue-200 text-lg bg-blue-400 hover:shadow-lg hover:shadow-blue-300/50 text-white rounded transition duration-200 zipSubmit items-center align-middle flex flex-row text-center justify-center "
                    id="submit"
                    onClick={this.handleClick}
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-auto pl-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                <LinkWithQuery to="/address">Back</LinkWithQuery>
              </form>
            </div>
          </div >
        </Fade >

        <FooterMedicare />
      </div >
    );
  }
}

export default withRouter(Name);
