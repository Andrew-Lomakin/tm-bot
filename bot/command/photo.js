const dayjs = require('dayjs');
const getPage = require('../utils/getPage');
const { photo: asset } = require('../assets/data');

let prevDate = dayjs().subtract(1, 'day').format('YYYY/MM/DD');

function random(l) {
  return Math.floor(Math.random() * l);
}

function randomDate() {
  return dayjs().subtract(random(dayjs().valueOf() - dayjs('2007/01/02').valueOf()), 'SSS').format('YYYY/MM/DD');
}

const photo = async (ctx) => {
  try {
    const yesterday = dayjs().subtract(1, 'day').format('YYYY/MM/DD');
    const html = await getPage(`${asset}${
      yesterday !== prevDate ? yesterday : randomDate()
    }/`);
    const url = html.split('everiday-page-content-image')[1].split('src="')[1].split('"')[0];
    ctx.telegram.sendPhoto(ctx.chat.id, url, { disable_notification: true });
    prevDate = yesterday;
  } catch (e) {
    console.log('Error');
  }
};

module.exports = photo;
