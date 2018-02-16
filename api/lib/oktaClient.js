//This file will configure a Client object from Okta's Node SDK using the dev API token
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: "https://dev-180238.oktapreview.com/",
    token: "00sTChi9JB3f-JsrUAKda6OdtcCaQ5UbVX9tU2uiT1"
});

module.exports = client;