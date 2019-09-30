const { roulette: asset } = require('../assets/data');

function random(l) {
  return Math.floor(Math.random() * l + 1);
}

const roulette = (ctx) => {
  const shot = random(20);
  if (shot === 1) {
    ctx.reply(asset.first, { disable_notification: true });
  } else if (shot <= 5) {
    ctx.reply(asset.second, { disable_notification: true });
  } else if (shot >= 18) {
    ctx.reply(asset.third, { disable_notification: true });
  } else {
    ctx.reply(asset.fourth, { disable_notification: true });
  }
};

module.exports = roulette;
