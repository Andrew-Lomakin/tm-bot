const quotes = require('../assets/quotes').default;

function random(l) {
  return Math.floor(Math.random() * l);
}

const free = (ctx) => ctx.reply(quotes[random(quotes.length)], { disable_notification: true });

module.exports = free;
