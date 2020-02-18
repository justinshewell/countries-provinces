# Based ON

[git://github.com/substack/provinces.git](git://github.com/substack/provinces.git)

# Countries

Countries list

``` js
const countriesProvinces = require('countries-provinces');
console.log(countriesProvinces.countries);
```

# Provinces

Provincies list

``` js
const countriesProvinces = require('countries-provinces');
console.log(countriesProvinces.provinces);
```

# completeness

This module currently has states and provinces for:

* united states (US)
* united kingdom (GB)
* canada (CA)
* mexico (MX)
* australia (AU)
* china (CN)
* germany (DE)
* belgium (BE)
* netherlands (NL)
* denmark (DK)
* Turkey (TR)
* Indonesia (ID)
* Jordan (JO)
* India (IN)
* Cambodia (KH)
* Ethiopia (ET)
* Peru (PE)
* Cuba (CU)
* Argentina (AR)
* Chile (CL)
* Bolivia (BO)
* Spain (ES)
* Bangladesh (BD)
* Pakistan (PK)
* Nigeria (NG)
* Japan (JP)
* austria (AT)
* brazil (BR)
* Philippines (PH)
* Vietnam (VN)
* Costa Rica (CR)

# methods

## getCountry(code, lang = 'en')

Get countries by code

## getCountries(lang = 'en')

Get all countries

## getCountryCodes(lang = 'en')

Get country codes

## fromCountryCode(code)

Get all provinces from a country

## fromCountry(country)

Get all provinces from a country

# provinces data format

Each row consists of:

* row.name - full name of the province or state
* row.country - country abbreviation
* row.short - optional 2 or 3 character short name
* row.alt - optional array of additional names and abbreviations
* row.region - optional region of a country (for example: "Wales")

# install

With [npm](https://npmjs.org) do:

```
npm install countries-provinces
```

# license

MIT
