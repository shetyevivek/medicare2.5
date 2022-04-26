//* Import Libraries
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ChevronRightIcon } from "@heroicons/react/outline";
import loadZipCode from "./api/preLoadZip";
import { withRouter } from "react-router";

import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

//* Import Pages
import "./LandingPage.css";
import NavBarMedicare from "./medicare/NavBarMedicare";
import LandingPageCheckBox from "./LandingPageCheckbox";
import FooterMedicare from "./medicare/FooterMedicare";

import axios from "axios";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: "",
    };
  }

  //* This Component did catch is the only way we were able to bypass polyfills and allow the api to run correctly.
  //* The way we have it is on initial load, we load the api from the loadZipCode api
  //* Then we let it stay as an intial value which goes into the component did catch button click on submit
  //* then we update local storage, and value inputs to the api based call

  componentDidCatch(values) {
    const zipVal = document.getElementById("zipCode").value;

    axios.get("https://ziptasticapi.com/" + zipVal).then((res) => {
      const z = res;
      if (res.data.error) {
        toast.error("😬 Please enter a valid zip code!");
      } else {
        toast.dismiss();
        let zipcode = zipVal;
        let city = res.data.city;
        let state = res.data.state;
        localStorage.setItem("zipCode", zipcode);
        localStorage.setItem("state", state);
        localStorage.setItem("city", city);
        this.nextStep();
      }
    });
    toast.clearWaitingQueue();
  }

  validateZipCode = (values) => {
    values.preventDefault();
    let value = document.getElementById("zipCode").value;

    if (isNaN(value)) {
      toast.error("😬 Please enter only numbers!");
      return;
    }
    if (value.length < 5) {
      toast.error("😬 Please enter a zip code!");
      return;
    }

    toast.clearWaitingQueue();
    this.componentDidCatch(value);
  };

  nextStep() {
    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);

    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = localStorage.getItem("formType");

    localStorage.setItem("lp", lp);
    this.props.setZipCode(zipCode);
    this.props.setCity(city);
    this.props.setUState(state);
    this.props.setFormType(formType);
    this.props.setLP(lp);

    this.props.history.push(
      "/age" +
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
        formType
    );
  }

  render() {
    loadZipCode();
    let zipCode = localStorage.getItem("zipCode");
    let city = localStorage.getItem("city");
    let state = localStorage.getItem("state");

    return (
      <div>
        <ToastContainer limit={1} position="top-center" theme="colored" />
        <NavBarMedicare />
        <Fade>
          <div className=" header bg-blend-overlay bg-blue-600 ">
            <div className="mx-auto max-w-7xl content-center">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 content-center">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <a
                      href="tel:+18884261036"
                      className="inline-flex items-center text-white bg-blue-500 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-300 rounded-full">
                        Call Now
                      </span>
                      <span className="ml-4 text-sm">
                        Get Your Quote Over Phone
                      </span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </a>
                    <h1 className="mt-4 tracking-tight font-extrabold text-3xl text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-6xl md:text-3xl">
                      <span className="md:block">Get Your No Obligation</span>{" "}
                      <span className="text-blue-300 md:block">
                        Medicare Quote
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Fill out our form or give us a call and start your no
                      obligation medicare quote today!
                    </p>
                  </div>
                </div>
                <Fade>
                  <div className="mt-16 sm:mt-24 sm:px-10 lg:mt-0 lg:col-span-6">
                    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                      <div className="px-4 py-8 sm:px-10">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-700 text-center">
                            Start Your Quote Today
                          </h3>
                        </div>
                        <div className="mt-6">
                          <form className="space-y-6">
                            <div>
                              <label htmlFor="name" className="sr-only">
                                Zip Code
                              </label>
                              <input
                                className=" w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                                type="text"
                                name="zipCode"
                                placeholder="Zip Code"
                                pattern="\d*"
                                id="zipCode"
                                defaultValue={zipCode}
                                minLength={5}
                                maxLength={5}
                              />
                              <p
                                className="text-sm pt-2 text-gray-400"
                                id="city"
                              >
                                Quotes available in{" "}
                                <span className="text-blue-300 font-bold">
                                  {city}, {state}
                                </span>
                              </p>
                            </div>
                            {/* <LandingPageCheckBox /> */}
                            <div>
                              <button
                                type="submit"
                                className="px-6 py-4 ripple-bg-blue-200  m-2 text-lg bg-blue-400 hover:shadow-lg text-white rounded transition duration-200 zipSubmit "
                                onClick={this.validateZipCode}
                                id="submit"
                              >
                                Start My Quote
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <section className="py-10 bg-gray-100">
            <div className="container px-4 mx-auto">
              <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
                <span
                  className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-300 font-medium uppercase rounded-lg shadow-sm"
                  data-config-id="auto-txt-1-3"
                >
                  How it works
                </span>
                <h2
                  className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter"
                  data-config-id="auto-txt-2-3"
                >
                  See How You Can Get Matched
                </h2>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
                  <div className="relative h-full px-8 pt-14 pb-8 bg-white rounded-2xl shadow-lg">
                    <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-xl font-semibold text-white"
                        data-config-id="auto-txt-4-3"
                      >
                        1
                      </div>
                    </div>
                    <h3
                      className="mb-4 text-lg md:text-xl text-center  font-bold"
                      data-config-id="auto-txt-5-3"
                    >
                      Fill Out Our Form
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-6-3"
                    >
                      Our Form is simple and easy! Finish it in 2 minutes.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
                  <div className="relative h-full px-8 pt-14 pb-8 bg-white rounded-2xl shadow-lg">
                    <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-xl font-semibold text-white"
                        data-config-id="auto-txt-7-3"
                      >
                        2
                      </div>
                    </div>
                    <h3
                      className="text-center mb-4 text-lg md:text-xl font-bold"
                      data-config-id="auto-txt-8-3"
                    >
                      Get Connected
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-9-3"
                    >
                      Connect to get real rates across our partners matched for
                      you.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
                  <div className="relative h-full px-8 pt-14 pb-8 bg-white rounded-2xl shadow-lg">
                    <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-xl font-semibold text-white"
                        data-config-id="auto-txt-10-3"
                      >
                        3
                      </div>
                    </div>
                    <h3
                      className="text-center mb-4 text-lg md:text-xl font-bold"
                      data-config-id="auto-txt-11-3"
                    >
                      Potential Savings
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-12-3"
                    >
                      Explore current rates in your area, and see if you can
                      save today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section End */}

          <section className="relative py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="w-full lg:w-1/2 mb-12">
                <div className="lg:max-w-md">
                  <h2
                    className="mb-4 lg:mb-6 text-4xl md:text-5xl mt-3 font-bold font-heading"
                    data-config-id="header"
                  >
                    Compare the right plan for you
                  </h2>
                  <p
                    className="mb-8 text-2xl text-black leading-loose"
                    data-config-id="desc"
                  >
                    So you can enjoy the simple things in life.
                  </p>
                  <div className="flex items-start py-4">
                    <div className="mr-5 text-gray-500">
                      <svg
                        className="w-10 h-10 check"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
                      </svg>
                    </div>
                    <div className="max-w-sm">
                      <h3
                        className="mb-2 text-xl leading-loose text-gray-600"
                        data-config-id="header1"
                      >
                        <b>Online form </b>
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="mr-5 text-gray-500">
                      <svg
                        className="w-10 h-10 check"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
                      </svg>
                    </div>
                    <div className="max-w-sm">
                      <h3
                        className="mb-2 text-xl leading-loose text-gray-600"
                        data-config-id="header2"
                      >
                        <b>Licensed </b> sales agents
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="mr-5 text-gray-500">
                      <svg
                        className="w-10 h-10 check"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
                      </svg>
                    </div>
                    <div className="max-w-sm">
                      <h3
                        className="mb-2 text-xl leading-loose text-gray-600"
                        data-config-id="header3"
                      >
                        <b>No</b> Pushy Agents Or Hidden Fees
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-96 lg:h-auto lg:absolute top-0 right-0 bottom-0 lg:w-1/2 bg-no-repeat bg-cover lastSec"
              data-config-id="image"
            />
          </section>
        </Fade>
        <FooterMedicare />
      </div>
    );
  }
}

export default withRouter(LandingPage);
