const config = require('../../src/config');

describe('config.js', () => {
  it('has the same exact properties between different languages', () => {
    const { US, JA } = config.lang;

    Object.keys(config.lang.text[US]).forEach((key) => {
      expect(config.lang.text[JA].hasOwnProperty(key)).toBe(true);
    });

    Object.keys(config.lang.text[JA]).forEach((key) => {
      expect(config.lang.text[US].hasOwnProperty(key)).toBe(true);
    });
  });

  it('has the same exact properties between different measurement systems', () => {
    const { IMPERIAL, METRIC } = config.units;

    Object.keys(config.units.text[IMPERIAL]).forEach((key) => {
      expect(config.units.text[METRIC].hasOwnProperty(key)).toBe(true);
    });

    Object.keys(config.units.text[METRIC]).forEach((key) => {
      expect(config.units.text[IMPERIAL].hasOwnProperty(key)).toBe(true);
    });
  })
});
