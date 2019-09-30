const { help: asset } = require('../assets/data');

const help = (ctx) => ctx.reply(asset, { disable_notification: true });

module.exports = help;
