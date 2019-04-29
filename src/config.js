const US = 'American English'
const JA = '日本語'

const IMPERIAL = 'Imperial';
const METRIC = 'Metric';

module.exports = {
  lang: {
    US,
    JA,
    text: {
      [US]: {
        imperial: 'Imperial',
        metric: 'Metric',
        fiveDayForecast: 'Five Day Forecast',
        humidity: 'Humidity',
        cloudiness: 'Cloudiness',
        wind: 'Wind',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
      },
      [JA]: {
        imperial: '米',
        metric: 'メートル',
        fiveDayForecast: '週間',
        humidity: '湿度',
        cloudiness: '雲量',
        wind: '風',
        sunrise: '日の出',
        sunset: '日の入り',
      }
    }
  },
  units: {
    IMPERIAL,
    METRIC,
    text: {
      [IMPERIAL]: {
        temperature: 'F',
        wind: 'mph',
      },
      [METRIC]: {
        temperature: 'C',
        wind: 'kph',
      }
    }
  }
}
