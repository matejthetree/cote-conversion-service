const cote = require('cote');

const requester = new cote.Requester({ name: 'currency conversion requester', key:'conversion' });

const request = { type: 'convert', from: 'usd', to: 'eur', amount: 100 };

requester.send(request, (res) => {
  console.log(res);
  process.exit(1);
});
