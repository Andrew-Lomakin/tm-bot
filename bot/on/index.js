const { on: asset } = require('../assets/data');

let messages = [];

const on = (ctx) => {
  messages = [...messages.slice(-2), ctx.message];
  const text = ctx.message.text.toLowerCase();

  if (text.match(new RegExp(asset.searchPoll.in.join('|'), 'g'))) {
    ctx.telegram.sendPoll(ctx.chat.id, text, asset.searchPoll.out);
  }
  if (text.match(asset.math1.in)) {
    setTimeout(() => ctx.reply(asset.math1.out, { disable_notification: true }), 3333);
  }
};

module.exports = on;
