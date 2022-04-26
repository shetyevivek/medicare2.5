import React, { Component } from 'react';

class MedicareMA extends Component {



  componentDidMount() {

    const renderScript = document.createElement("script");

    const zip = localStorage.getItem('zipCode');

    renderScript.innerHTML = "window.MediaAlphaExchange = { data: { zip: localStorage.getItem('zipCode'), text: 'By pressing Get My Free Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our marketing partners (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages. I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies or prerecorded or artificial voices. (1) I consent to electronic video monitoring and recordation of my activities on this Site. I may call (888) 426-1036 to speak with someone about obtaining an insurance quote. I acknowledge that I may revoke my consent by emailing “STOP” to optout@quotehound.com. (2) I agree to this websites Privacy Policy and Terms & Conditions' , url: 'usmedicarequotes.com' }, placement_id: 'vLKzTdoPTUxy-P7jysaC7AwW18kMVA', sub_1: 'test sub id', type: 'ad_unit', version: '17' };  MediaAlphaExchange__load('mediaalpha_placeholder');"



    document.body.appendChild(renderScript);

    const script = document.createElement("script");

    script.src = "//insurance.mediaalpha.com/js/serve.js";
    script.async = true;
    document.body.appendChild(script);
  }


  render() {
    return (



      <div id='mediaalpha_placeholder' />



    )
  }
}

export default MedicareMA;