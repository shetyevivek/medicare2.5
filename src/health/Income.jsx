import React, { Component } from "react";
import NavBarHealth from "./NavBarHealthCare";
import HealthBanner from "./HealthBanner";
import HealthFooter from './FooterHealthCare'
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import { LinkWithQuery } from '../BackButton'
import BottomPhoneHealth from './BottomPhoneHealth';




class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Immediatley",
      progress: 16,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setIncome(val);

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

    localStorage.setItem('formType', formType)

    console.log('before push')

    this.props.history.push("/height-weight"
      + "?gclid=" + gclid
      + "&lp=" + lp
      + "&zipcode=" + zipCode
      + "&city=" + city
      + "&state=" + state
      + "&formType=" + formType
      + "&age=" + age
      + "&coverage=" + coverage
      + "&income=" + val
    );

    console.log('after push')
  }



  render() {
    let buttonsTitles = [
      { title: "$0-$15k", id: "10000", value: "10000" },
      { title: "$16k-$39k", id: "39000", value: "39000" },
      { title: "$40k-50k", id: "50000", value: "50000" },
      { title: "$51k-65k", id: "60000", value: "60000" },
      { title: "$65k-$100k+", id: "100000", value: "100000" },

    ];

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');

    if (fType === 'medicare') {
      this.state.progress = 16;
    }
    if (fType === 'health') {
      this.state.progress = 25
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
        <NavBarHealth />
        <HealthBanner setProgress={this.state.progress} />
        <Fade>
          <div className="formArea flex flex-row items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What is your total household income?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="w-full space-y-6 relative flex justify-center leading-5">
                  <div className=" leading-5 buttonBlock">{buttonList}</div>
                </div>
                <LinkWithQuery to='/coverage-time'>Back</LinkWithQuery>

              </form>
            </div>
          </div>
          <BottomPhoneHealth />
        </Fade>
        <HealthFooter />
      </div>
    );
  }
}

export default withRouter(Income);
