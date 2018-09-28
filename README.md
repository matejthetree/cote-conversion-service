# Arbitration service

## Installation

run `npm install`

## Demo

Open terminal. In one tab run `node conversion-service.js`
In another tab run `node arbitration-service.js`

Now our services are running. To test that, lest start our client.
In another tab run `node client.js`

Your output should be

 `100 usd => 91 eur`



Let us try to change the `usd_eur` rate.
run `node admin.js`
Your output should be

 `changed usd_eur rate to 0.88`

To verify that the conversion-service is indeed subscribed to arbitration service, let us run `node client.js` one more time.

If your output was indeed

 `100 usd => 88 eur`

 your conversion-service was aware of arbitration-service changes.


## Service segmentation
Since we have two responders, one in arbitration-service and another in conversion-service, we introduced two different keys `conversion` and `arbitration`

In case we used no keys, some of the requests from client.js would end up in arbitration service, and the request would be lost.


