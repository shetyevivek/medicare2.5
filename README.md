<p align="center">
  <a href="" rel="noopener">
 <img src="https://assets.website-files.com/5dfd95f78d0e1ee3b32e0f58/5dfd965f8d0e1e23372e0fad_Quotehound%2520Primary%2520Logo%2520-%2520transparent%2520rasterized%2520(1)-p-2600.png" alt="Project logo"></a>
</p>
<h3 align="center">Medicare Form</h3>

<p align="center"> Details About The Form & Code Base.
    <br> 
</p>

# LATEST UPDATES:

- [Click here to view latest push](#latest)

- [Click Here To View All Push Updates](#updates)

- [Click here to view known bugs](#bugs)
- [Click here to view Roadmap](#roadmaps)
- [Click here to view fixed bugs](#fixed)

## 📝 Table of Contents

- [Dependencies / Limitations](#limitations)

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- Zipcode API (on load)
- Address Validator
- Router v6
- React Script 5.0
- Tailwind CSS 3.0
- axios POST
- Lottie Files (animations)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

git clone the repository

```
git clone git@gitlab.com:forms7/medicare-form.git
```

open terminal and install all neccesary libraries

```
npm i
```

## Updates <a name= "updates" > </a>

- ## v2.5.0.0 <a name='latest'></a>

  - Created initial template from create-react-app
  - fixed multifolder issue
  - installed tailwind
  - installed following libraries:
    - tailwind
    - axios
    - react-number-format
    - react-toastify
    - react-router
    - react-router-dom
    - ziptastic
    - jquery
    - lottie player
  - Added in custom font for ThiccBoi
  - Added Headless UI
  - installed Hero Icons
  - Created Landing Page jsx & css files

- ## v2.5.0.1

  - created landing page
  - added function for adding more elements in the landing page
  - added banner on top
  - started function for zipcode validation
  - added function for state passs between components

- ## v2.5.0.2

  - Finalized Initial design
  - added how it works
  - added CTA
  - added navbar
  - added footer

- ## v2.5.0.3
  - Changed Navbar height
  - Optimized landing page
  - added button interactions
  - changed "how it works" section
  - fixed footer
- ## v2.5.0.4

  - Finalized landing page
  - updated navbar
  - started api call for zipcode verification which produced a bug
  - created a webpack config file
  - started a congif ovverrides file

- ## v2.5.0.5

  - Added support for routes

    - still not done, currently figuring out how to render and switch/navigate
    - fixed API bug <a href="api-bug"> Click here to view fix </a>
    - Got initital first step post done
    - fixed issues with polyfill bug <a href='polyfill'> Click here to view fix </a>
    - New bug with React Router 6 <a href='react-router'> View Here for details </a>

- ## v2.5.0.6

  - Fixed React Router Bug
  - Changed package.json file to remove redundent and neglected libraries
  - Created first step for Age
  - Added functionality for mapping for buttons
  - Fixed styling issues
  - Added dynamic footer/header
  - fixed preload and verifcation zipcode issues
  - Added functionality for verification

- ## v2.5.0.7

  - Added animation for steps
  - Added back buttons for forms
  - Added Gender Questions
  - Aded Enrolled Questions
  - Added dynamic header

- ## v2.5.0.8

  - Fixed bug for viewing

- ## v2.5.0.9

  - Added Month question
  - Added Day Question
  - Added Year Question
  - Fixed errors with showing correct dates based on months
  - Added dynamic filter for months

- ## v2.5.0.10

  - Fixed remaining issues with the month/day/year
  - Added name question
  - added address question
  - added email + phone question
  - wrapped up all post data updates
  - wrapped up data gathering for post
  - started post but there are issues
    - first name does not show
    - form type does not show
    - gclid params data is incorrect
    - phone number does not show
    - year does now show
  - added all original scripts from v2 code base for GTM - etc
  - Started questions for health

- ## v2.5.0.11

  - Fixed missing bracket issue

- ## v.2.5.0.12

  - Finalized the post from medicare route
  - fixed dynamic header from medicare
  - Shows correct % in progress bar now
  - started thank you page
  - started animation for lottie
  - started thank you page
  - Added script for media alpha
  - added script for connect me module
  - added final questions and posting for medicare route

- ## v2.5.0.13

  - Added thank you page
  - Added dynamic MA and CM modules

- ## v2.5.0.14

  - Added all health care routes
    - Coverage
    - Height Weight
    - Income
    - Household total
    - Pre Existing
  - Added dynamic header / footer
  - finalzed post questions
  - Need to figure out how to hold routes from health to main form questions
  - need to figure out dynamic header for main form questions
  - need to figure out MA + CM dynamic

- ## v2.5.0.15

  - quick fix for wrong pattern type on certain fields

- ## v2.5.0.16

  - Quick fix for css issues on confirm page

- ## v2.5.0.18

  - attempted to fix bug that doesnt allow users to go to next step for these steps
    - first last name
    - email phone

- ## v2.5.0.19

  - Added dynamic header + banner
  - just need to figure out bug with input fields

- ## v2.5.0.20

  - Added and fixed package.json with tpyogrpahy for tailwind
  - fixed issues with input fields
  - fixed issue with dynamic header/banner
  - added new photo
  - fixed lottie animation
  - added two thank you pages
  - added CCPA
  - added Privacy Policy
  - added Terms & Condition
  - added dynamic MA to thank you Med
  - added dynamic CM to thank you Med
  - added dynamic MA to thank you health
  - added dytnamic CM to thank you health

- ## v2.5.0.21

  - fixed issue with progress bar
  - fixed issue with skip button
  - finalized form

- ## v2.5.1.0

  - deployed production level code

- ## v2.5.1.0-1

  - fixed buged with allowance on email with null value
  - fixed landing page edits

- ## v2.5.1.0-2

  - added click2call page
  - added welcome back page

- ## v2.5.1.0-3

  - added skip buttons to remaining DOB questions
  - added skip to address

- ## v2.5.1.0-4

  - fixed skip issue on DOB
  - fixed issue with dead click

- ## v2.5.1.0-5

  - fixed CTA on jumbo intro
  - Adujusted Call only pages
  - added call now cta in welcome back
  - fixed auto complete not working for first and last name
  - fixed navbar number TTY
  - Added entrance url to post
  - Added Phone to bottom of form in Medicare Route
  - Added DOB bug fix for skip

- ## v2.5.1.1
  - Finalized all fixes
  - optimized for production level

## Known Bugs <a name = "bugs"></a>

## Roadmap <a name = "roadmap"></a>

## Fixed Bugs <a name='fixed' id='fixed'></a>

### API get bug: Present on v2.5.0.4 <a name='api-bug' id='api-bug'></a>

## Status: FIXED on v2.5.0.5

- How we fixed: This Component did catch is the only way we were able to bypass polyfills and allow the api to run correctly.
  The way we have it is on initial load, we load the api from the loadZipCode api. Then we let it stay as an intial value which goes into the component did catch button click on submit. Then we update local storage, and value inputs to the api based call

### Polyfill Bug: Present on v2.5.0.4 <a name='polyfill' id='polyfill' ></a>

    ## Status: FIXED on v2.5.0.5

- Is tied with API bug but when we make api calls or use a library that uses react 5 or polyfills we need to make sure the library is updated, or need to figure out a work aroud.

### React Router Bug present on v.2.5.0.5 <a name='router-bug' id='router-bug'></a>

    ## Status: FIXED on v2.5.0.6

- How we fixed: React Router v6 is really functional based, 2.5 is writen component based. We reverted back to 5.3.1 version to utilize component based rendering and routes. Perhaps we may update once we come with a fix or a workaround to use v6.
