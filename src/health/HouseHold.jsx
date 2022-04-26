import React, { Component } from "react";
import NavBarHealth from "./NavBarHealthCare";
import HealthBanner from "./HealthBanner";
import HealthFooter from './FooterHealthCare'
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import { LinkWithQuery } from '../BackButton';
import BottomPhoneHealth from './BottomPhoneHealth';




class HouseHold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Immediatley",
      progress: 50,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setAmount(val);

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
    let feet = urlParams.get('feet');
    let inches = urlParams.get('inches');
    let weight = urlParams.get('weight')

    this.props.history.push("/preexist"
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
      + "&household=" + val

    );
  }



  render() {
    let buttonsTitles = [
      { title: "1", id: "1", value: "1" },
      { title: "2", id: "2 ", value: "2 " },
      { title: "3", id: "3", value: "3" },
      { title: "4", id: "4", value: "4" },
      { title: "5", id: "5", value: "5" },
      { title: "6", id: "6", value: "6" },
      { title: "7", id: "7", value: "7" },
      { title: "8", id: "8", value: "8" },
      { title: "9", id: "9", value: "9" },
      { title: "10", id: "10", value: "10" },
    ];

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');

    if (fType === 'medicare') {
      this.state.progress = 16;
    }
    if (fType === 'health') {
      this.state.progress = 50
    }

    let buttonList = buttonsTitles.map((buttonTitle, index) => {
      return (
        <button
          className="dateButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold justify-center m-auto"
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
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  How Many Individuals Live In Your House?
                </h2>
              </div>
              <form className="mt-8 space-y-6 justify-center m-auto">
                <div className="buttonBlockRow justify-center m-auto">
                  <div className="grid justify-center lg:grid-cols-5 lg:gap-2 md:grid-cols-3 grid-cols-3 m-auto">
                    {buttonList}



                  </div>
                </div>
                <LinkWithQuery to='/height-weight'>Back</LinkWithQuery>

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

export default withRouter(HouseHold);
