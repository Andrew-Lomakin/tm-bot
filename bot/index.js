const Telegraf = require('telegraf');

const { token, startMessage } = require('./assets/data');

const getWeather = require('./command/weather');
const help = require('./command/help');
const free = require('./command/free');
const roulette = require('./command/roulette');
const photo = require('./command/photo');
const on = require('./on');

const bot = new Telegraf(token);

let now = Date.now();

const spam = (cb) => (ctx) => {
  if ((Date.now() - now) > 2000) cb(ctx);
  now = Date.now();
};

bot.catch((err) => {
  console.log('Ooops', err);
});
bot.start((ctx) => ctx.reply(startMessage));
bot.command('help', spam(help));
bot.command('free', spam(free));
bot.command('weather', spam((ctx) => getWeather(ctx.reply)));
bot.command('roulette', spam(roulette));
bot.command('manda', spam(photo));

bot.on('text', spam(on));

bot.launch();
console.log('OK');
