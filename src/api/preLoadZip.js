import React from 'react';
import $ from 'jquery';

export default function loadZipCode() {

  var requestOptions = {
    async: true,
    crossDomain: true,
    method: 'GET',
    redirect: 'follow',
    url: 'https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0',
  };

  $.ajax(requestOptions).done(function (res) {
    console.log(res);

    var parse = JSON.parse(res);

    let zip = parse.postal;
    let city = parse.city;
    let state = parse.state;
    let ip = parse.IPv4;

    localStorage.setItem('zipCode', zip);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('ip', ip)

    //document.getElementById('zipCode').value = zip;
    
  })


}