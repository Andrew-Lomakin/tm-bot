const weather = require('weather-js');

function getSmile(text) {
  switch (text) {
    case 'Sunny':
      return ':sunny:';
    case 'Cloudy':
      return '⛅️';
    case 'Mostly Cloudy':
      return '☁️';
    default:
      return text;
  }
}

function get(search) {
  return new Promise((resolve) => {
    weather.find({ search, degreeType: 'C' }, (err, result) => {
      if (err) resolve('Ошибка');
      if (result[0] && result[0].location && result[0].current && result[0].forecast) {
        resolve(`${result[0].location.name}, ${result[0].current.temperature} градусов ${getSmile(result[0].current.skytext)}.  Завтра от ${result[0].forecast[0].low} до ${result[0].forecast[0].high} градусов.`);
      } else {
        resolve('Ошибка');
      }
    });
  });
}

async function getWeather(cb) {
  try {
    const moscow = get('Moscow, Russia');
    const kyrsk = get('Kursk, Russia');
    const kamyshin = get('Kamyshin, Russia');

    Promise.all([moscow, kyrsk, kamyshin]).then((values) => {
      cb(values.join('\n'), { disable_notification: true });
    });
  } catch (e) {
    cb('Ошибка была', { disable_notification: true });
  }
}

module.exports = getWeather;
