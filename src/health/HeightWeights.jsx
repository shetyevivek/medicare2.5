import React, { Component } from "react";
import NavBarHealth from "./NavBarHealthCare";
import HealthBanner from "./HealthBanner";
import HealthFooter from './FooterHealthCare'
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from "../BackButton";
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";
import BottomPhoneHealth from './BottomPhoneHealth';



class HeightWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",

      progress: 10,
    };
    this.handleClick = this.handleClick.bind(this);

  }

  setHeight = (value) => {

    let feet = document.getElementById('feet').value;
    let inch = document.getElementById('inches').value;

    let height = feet + '\'' + inch;

    this.state.height = height;
    console.log(height)

    this.props.setHeight(height)

  }

  setWeight = (value) => {

    let weight = document.getElementById('weight').value;

    this.state.weight = weight
    this.props.setWeight(weight)
  }

  handleClick = (value) => {

    value.preventDefault();

    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let weight = document.getElementById('weight').value;


    // this.state.height;
    // this.state.weight;


    toast.dismiss();



    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = urlParams.get("formType");
    const age = urlParams.get('age');
    const coverage = urlParams.get('coverage');
    const income = urlParams.get('income');

    this.props.history.push("/household"
      + "?gclid=" + gclid
      + "&lp=" + lp
      + "&zipcode=" + zipCode
      + "&city=" + city
      + "&state=" + state
      + "&formType=" + formType
      + "&age=" + age
      + "&coverage=" + coverage
      + "&income=" + income
      + "&feet=" + feet
      + "&inches=" + inches
      + "&weight=" + weight

    );
  };

  render() {


    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);



    const fType = urlParams.get("formType");

    if (fType === "health") {
      this.state.progress = 35;
    }

    return (
      <div className="bg-[#F3F5FF] ">

        <NavBarHealth />
        <HealthBanner setProgress={this.state.progress} />
        <ToastContainer limit={1} position="top-center" theme="colored" />
        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What is your Height & Weight?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className=" space-y-6  relative w-3/4 items-center justify-center m-auto align-middle">
                  <div className=" leading-5 flex flex-row">
                    <input
                      className="appearance-none p-3 mr-2 text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="feet"
                      placeholder="Feet"
                      id="feet"
                      pattern="\d*"
                      onChange={this.setHeight}
                      maxLength={1}
                      required

                    />


                    <input
                      className="appearance-none p-3  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="inches"
                      placeholder="Inches"
                      pattern="\d*"
                      required
                      id="inches"
                      onChange={this.setHeight}
                      maxLength={2}

                    />

                  </div>
                  <input
                    className="appearance-none p-3  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                    type="text"
                    name="weight"
                    placeholder="Weight"
                    id="weight"
                    onChange={this.setWeight}
                    pattern="\d*"
                    required
                    maxLength={3}

                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="pounds">
                      LBS
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 ripple-bg-blue-200 text-lg bg-blue-400 hover:shadow-lg hover:shadow-blue-300/50 text-white rounded transition duration-200 zipSubmit disabled cursor-not-allowed items-center align-middle flex flex-row text-center justify-center "
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

                <LinkWithQuery to="/income">Back</LinkWithQuery>
              </form>
            </div>
          </div >
          <BottomPhoneHealth />
        </Fade >

        <HealthFooter />
      </div >
    );
  }
}

export default withRouter(HeightWeight);
