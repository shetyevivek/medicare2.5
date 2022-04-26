import React, { Component } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export default class MedicareBanner extends Component {
  render() {
    return (
      <section className="w-full m-w-1/2 bg-blueGray-50" id='medicare-banner'>
        <div className=" w-full">
          <div className="relative p-10 md:py-10 xl:px-10 bg-blue-600 overflow-hidden">

            <div className="relative lg:w-1/2 md:w-full sm:w-full m-auto text-center">
              <h2 className="mb-4 lg:text-3xl md:text-2xl sm:text-lg text-white  font-semibold" data-config-id="auto-txt-1-4">Get Your No Obligation Quote</h2>

              <ProgressBar percent={this.props.setProgress} filledBackground="linear-gradient(to right, #ffff, #ffff)"
                height={15} />
            </div>
          </div>
        </div>
      </section>

    )
  }
}
