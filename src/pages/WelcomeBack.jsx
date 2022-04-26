import React, { Component } from "react";

import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import WelcomeBackNav from "../WelcomeBackNav";
import MedicareCM from "../medicare/MedicareCM";
import MedicareMA from "../medicare/MedicareMA";
import CallCTA from './CallCTA'



class WelcomeBack extends Component {

  componentDidMount() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formType");




  }

  render() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');
    const name = urlParams.get('first_name');
    const tele = urlParams.get('home_phone')





    return (
      <div className="bg-[#F3F5FF] ">
        <WelcomeBackNav />


        <Fade>
          <div className=" mx-auto flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4" id="content" >
            <div className=" w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Congratulations! You have been matched with these partners...

                </h2>
              </div>

              <CallCTA />


              <div className="w-full space-y-6 relative flex justify-center leading-5">


                <MedicareMA />
              </div>


            </div>
          </div>
        </Fade>

        <MedicareCM moduleId="1739" phoneNumber={tele} />
      </div>
    );
  }
}

export default withRouter(WelcomeBack);
