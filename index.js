const provinces = require('./data/provinces.json');

const countries = {
  es: require('./data/countries/es.json'),
  en: require('./data/countries/en.json')
};

const fromCountryCode = code => provinces.filter(province => province.country == code);

/**
 * Get countries by code
 * @param {string} code Country short name
 * @param {string} [lang='en']
 * @returns {array} countries
 */
exports.getCountry = (code, lang = 'en') =>
  lang == 'en' || lang == 'es' ? countries[lang].find(country => country.short == code) : [];

/**
 * Get all countries
 * @param {string} [lang='en']
 * @returns {array} countries
 */
exports.getCountries = (lang = 'en') => (lang == 'es' || lang == 'en' ? [].concat(countries[lang]) : []);

/**
 * Get country codes
 * @param {string} [lang='en']
 * @returns {array} country codes
 */
exports.getCountryCodes = (lang = 'en') =>
  lang == 'es' || lang == 'en' ? countries[lang].map(country => country.short) : [];

/**
 * Get all provinces from a country
 * @param {string} code
 * @returns {array} provinces
 */
exports.fromCountryCode = fromCountryCode;

/**
 * Get all provinces from a country
 * @param {string} code
 * @returns {array} provinces
 */
exports.fromCountry = country => fromCountryCode(country.short);

exports.countries = countries;
exports.provinces = provinces;
