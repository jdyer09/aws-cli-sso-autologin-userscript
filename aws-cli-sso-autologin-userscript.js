// ==UserScript==
// @name        SSO Login1.3
// @namespace   Violentmonkey Scripts
// @match       https://device.sso.us-east-1.amazonaws.com/*
// @match       https://airdna.awsapps.com/*
// @grant       window.close
// @run-at      document-idle
// @version     1.3
// @author      https://github.com/jdyer09, https://github.com/johnjeffers
// @description A userscript for automating the login to AWS from the CLI for SSO pages.
// ==/UserScript==


// Configure all of the below
// SSO login page
const SSO_URL = "device.sso.us-east-1.amazonaws.com";    // URL of the SSO login page, probably looks like device.sso.us-east-1.amazonaws.com
// Portal page
const PORTAL_URL = "REPLACEME.awsapps.com";             // URL of the portal page, probably looks like yourcompany.awsapps.com
const APP_NAME = "botocore-client-REPLACME";            // Text to search for on the portal page, probably looks like botocore-client-yourcompany

// Leave the ones below here alone
const CLICK_EL = '[data-testid="allow-access-button"]';  // ID of the element to find to click the allow button
const CLOSE_EL = 'div[class="awsui-context-alert"]';     // ID of the element to find to close the page
const SSO_EL = "cli_verification_btn";                   // ID of the button to click on the SSO login page


if(window.location.host === SSO_URL) {
  document.getElementById(SSO_EL).click();
}

function findSpanByPartialText(partialText) {
  const spans = document.getElementsByTagName('span');
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].textContent.includes(partialText)) {
      return spans[i];
    }
  }
  return null; // Return null if no matching span is found
}

function clickAllowAccess() {
  if(findSpanByPartialText(APP_NAME)) {
    document.querySelector(CLICK_EL).click();
  }
}

if(window.location.host === PORTAL_URL) {
  setInterval(function() {
    var elems = document.querySelectorAll(CLICK_EL);
    if(elems.length < 1) {
      return false;
    }
    clickAllowAccess()
  }, 100);

  // If the browser doesn't allow scripts to use window.close(), this will be ignored
  setInterval(function() {
    if (document.querySelector(CLOSE_EL)) {
      window.close();
    }
  }, 100);
}


