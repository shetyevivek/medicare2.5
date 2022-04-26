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
import axios from 'axios';
import PhoneInput from "react-phone-number-input/input";
import BottomPhoneHealth from "../health/BottomPhoneHealth";
import BottomPhoneMedicare from "../medicare/BottomPhone";
import CryptoJS from 'crypto-js';

var encryptedPhone = "U2FsdGVkX19YtndClI2zdSGpKvCVE2rUCMhYWFgVu345xWr6VmFLrw2TUjae25+XVOw8Pzm4N9HlsOU+vgGBUDeC+HWt0wsG/KWJettoINfE7YmKGl7Yj0P2gJiYVfQB";
var decryptedPhone = CryptoJS.AES.decrypt(encryptedPhone, "APIKey");
var decryptedPhoneKey = decryptedPhone.toString(CryptoJS.enc.Utf8);

var encryptedEmail = "U2FsdGVkX1+txazCwBQnS0p9QCJxf697lPLNg8cGEqQLK9qotOSBXsZ2BZc+iFISlsIYTON743ssGXRKF0e2cSmldwHS+cjlicPWJtcgCBwbwuwaaK8Io63X5WU+BMlN";
var decryptedEmail = CryptoJS.AES.decrypt(encryptedEmail, "APIKey");
var decryptedEmail = decryptedEmail.toString(CryptoJS.enc.Utf8);


class EmailPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      phone: " ",
      submitDisabled: true,
      progress: 10,
      error: "",
      loading: false,
      response: "",
    };
    this.timer = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.phone !== this.state.phone) {
      this.handleCheck();
    }

    if(prevState.email !== this.state.email) {
      this.handleCheck();
    }
  }
  
  onChange = e => {
    this.setState({
      phone: e.target.value,
      email: e.target.value
    });
  };

  componentDidMount() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formType");

    if (fType === 'health') {

      let hideNav = document.getElementById('medicare-nav');
      let hideBanner = document.getElementById('medicare-banner');
      let ctaMedicare = document.getElementById('medicare-cta')

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

  postEmail = (values) => {

    let email = document.getElementById('email').value;

    this.state.email = email;

    // Clears running timer and starts a new one each time the user types
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const data = {
        email: email
      };
      
      const options = {
        headers: {
          'Authorization': 'Bearer ' + decryptedEmail,
          'Content-Type': 'application/json'
        }
      };
  
      axios.post('https://api.sendgrid.com/v3/validations/email', data, options)
      .then((res) => {
        if(res.data.result.verdict !== 'Valid')
        {
          toast.error('😬 Please Enter A Valid Email!');
  
          this.setState({
            submitDisabled: true
          })
        }
        else
        {
          this.setState({
            submitDisabled: false
          })
        }
      });
    }, 1000);

    this.props.setEmail(email);
  }

  postPhone = (values) => {

    let phone = document.getElementById('phone_home').value;

    var realPhone = phone.replace(/\D/g, "");

    // Clears running timer and starts a new one each time the user types
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const phoneGetRequest = async () => {
        try {
          const res = await axios.get('https://lookups.twilio.com/v1/PhoneNumbers/+1' + realPhone + '?Type=carrier', {
            headers: {
              'Authorization': 'Basic ' + btoa(decryptedPhoneKey)
            }
          }).then(res => {
            const type = res.data.carrier.type;
            if(!(type === 'mobile' || type === 'voip'))
            {
              toast.error("Please Enter A Valid Phone Number!");
  
              this.setState({
                submitDisabled: true
              })
            }
            else
            { 
              this.setState({
                submitDisabled: false
              })
            }
          });
        }
        catch (err)
        {
          toast.error("😬 Please Enter A Valid Phone Number!");
  
          this.setState({
            submitDisabled: true
          })
        }
      };
  
      phoneGetRequest();
    }, 1000);

    this.props.setPhone(realPhone);

  }


  handleClick = (value) => {

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_home').value;

    if (phone.length < 14) {
      toast.error('Please Enter A Valid Phone Number');
      return;
    }

    if (email.length < 5) {
      toast.error('Please Enter A Valid Email!');
      return;
    }

    let realPhone = phone.replace(/\D/g, "");


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
    const fType = urlParams.get('formType');

    this.setState({
      loading: true
    }, this.postMedicare(this.props.postData))


    this.props.history.push(
      "/confirm" +
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
      "&email=" + email +
      "&home_phone=" + realPhone

    );
  };

  postMedicare = (postData) => {
    console.log(postData);

    axios.post('https://quotehound.leadspediatrack.com/post.do', null, {
      params: postData,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            loading: false,
          });
        }
      })
      .catch((err) => {
        if (err) {
          toast.error('there was an error submiting your form!');
        }
      })
  }



  render() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fName = urlParams.get('first_name');

    const fType = urlParams.get("formType");

    if (fType === "medicare") {
      this.state.progress = 100;
    }

    return (
      <div className="bg-[#F3F5FF] ">

        <NavBarMedicare id='medicare' />
        <MedicareBanner id='medicare' setProgress={99} />

        {/* Healthcare components */}
        <NavBarHealthCare id='health' />
        <HealthBanner id='health' setProgress={99} />
        <ToastContainer limit={1} position="top-center" theme="colored" />
        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Almost there {fName}, what is your email & Phone Number?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className=" space-y-6 relative w-full items-center justify-center m-auto">
                  <div className=" leading-5 ">
                    <input
                      className="appearance-none p-3 mb-5  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="email"
                      value={this.state.email}
                      name="email"
                      placeholder="Email"
                      id="email"
                      autoComplete="email"
                      onChange={this.postEmail}
                      required

                    />

                    <PhoneInput

                      country="US"
                      className="appearance-none p-3 mb-5  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      id="phone_home"
                      placeholder="Phone Number"
                      name="phone_home"
                      value={this.state.phone}
                      onChange={this.postPhone}
                      minLength={10}
                      maxLength={14}
                      required
                    />


                  </div>

                  <p className="tcpa w-full text-sm text-gray-700">
                    <label htmlFor="leadid_tcpa_disclosure">
                      <input type="hidden" id="leadid_tcpa_disclosure" /> By pressing  Get Your No Obligation Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our <a className='font-medium text-blue-400 decoration-blue-300' href="https://www.quotehound.com/partners"> marketing partners </a>  (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages.  I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies or prerecorded or artificial voices. (1) I consent to electronic video monitoring and recordation of my activities on this Site. I may call <a className='font-medium text-blue-400 decoration-blue-300' href='tel:18884261036'> (888) 426-1036 </a> to speak with someone about obtaining an insurance quote.   I acknowledge that I may revoke my consent by emailing “STOP” to <a className='underline  decoration-blue-300' href="mailto:optout@quotehound.com" >optout@quotehound.com.</a>  (2) I agree to this websites <a className='font-medium text-blue-400 decoration-blue-300' href="https://www.quotehound.com/privacy-policy"> Privacy Policy </a> and  <a className='font-medium text-blue-400 decoration-blue-300' href="https://www.quotehound.com/terms-conditions">Terms & Conditions</a>

                    </label>
                  </p>

                  <button
                    type="submit"
                    className="px-6 py-4 ripple-bg-blue-200 text-lg bg-blue-400 hover:shadow-lg hover:shadow-blue-300/50 text-white rounded transition duration-200 zipSubmit items-center align-middle flex flex-row text-center justify-center "
                    id="submit"
                    disabled={this.state.submitDisabled}
                    onClick={this.handleClick}
                  >
                    Get Your No Obligation Quote!

                  </button>
                </div>

                <LinkWithQuery to="/name">Back</LinkWithQuery>
              </form>
            </div>
          </div >
          <BottomPhoneHealth />
          <BottomPhoneMedicare />
        </Fade >

        <FooterMedicare />
      </div >
    );
  }
}

export default withRouter(EmailPhone);
