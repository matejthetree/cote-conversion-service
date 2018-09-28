const cote = require('cote');

const responder = new cote.Responder({ name: 'currency conversion responder', key:'conversion' });
const subscriber = new cote.Subscriber({ name: 'arbitration subscriber' });

const rates = { usd_eur: 0.91, eur_usd: 1.10 };

subscriber.on('rate updated', (update) => {
  rates[update.currencies] = update.rate;
});

responder.on('convert', (req, cb) => {
  const convertedRate = req.amount * rates[`${req.from}_${req.to}`];
  cb(`${req.amount} ${req.from} => ${convertedRate} ${req.to}`);
});
