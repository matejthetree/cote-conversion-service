const cote = require('cote');

const requester = new cote.Requester({ name: 'arbitration API - admin', key:'arbitration' });

const request = { type: 'update rate', currencies: 'usd_eur', rate: 0.88 };

requester.send(request, (res) => {
  console.log(res);
});
