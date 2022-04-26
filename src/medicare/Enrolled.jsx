import React, { Component } from "react";
import NavBarMedicare from "./NavBarMedicare";
import MedicareBanner from "./MedicareBanner";
import FooterMedicare from "./FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import { LinkWithQuery } from '../BackButton';
import BottomPhoneMedicare from './BottomPhone'



class Enrolled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Yes",
      progress: 16,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setEnrolled(val);

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = urlParams.get("formType");
    const age = urlParams.get('age');
    const enrolled = val;

    localStorage.setItem('formType', formType)

    this.props.history.push("/gender"
      + "?gclid=" + gclid
      + "&lp=" + lp
      + "&zipcode=" + zipCode
      + "&city=" + city
      + "&state=" + state
      + "&formType=" + formType
      + "&age=" + age
      + "&enrolled=" + val
    );
  }



  render() {
    let buttonsTitles = [
      { title: "Yes", id: "Yes", value: "Yes" },
      { title: "No", id: "No", value: "No" },
    ];

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');

    if (fType === 'medicare') {
      this.state.progress = 16;
    }

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
        <NavBarMedicare />
        <MedicareBanner setProgress={this.state.progress} />
        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Are you currently enrolled in both Medicare Part A & Part B?

                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="w-full space-y-6 relative flex justify-center leading-5">
                  <div className=" leading-5 buttonBlock">{buttonList}</div>
                </div>
                <LinkWithQuery to='/age'>Back</LinkWithQuery>

              </form>
            </div>
          </div>
          <BottomPhoneMedicare />
        </Fade>
        <FooterMedicare />
      </div>
    );
  }
}

export default withRouter(Enrolled);
