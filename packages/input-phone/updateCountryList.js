const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const countries = require("world-countries");
const { getCountryCallingCode } = require("libphonenumber-js");

const getNativeNames = (names, englishName) => {
  const nativeNames = Array.from(
    new Set(Object.keys(names).map(lang => names[lang].common)),
  )
    .filter(nativeName => nativeName !== englishName)
    .join("; ");

  return nativeNames;
};

const trimmedList = countries
  .map(country => {
    let callingCode;
    try {
      callingCode = getCountryCallingCode(country.cca2);
    } catch (error) {
      // Countries that don't have a calling code don't need to be on the list
      return null;
    }

    return {
      name: country.name.common,
      nativeNames: getNativeNames(country.name.native, country.name.common),
      flag: country.flag,
      code: country.cca2,
      callingCode,
      altSpellings: country.altSpellings,
    };
  })
  .filter(country => country !== null)
  .sort((a, b) => a.name.localeCompare(b.name, "en"));

const flags = trimmedList.reduce((acc, country) => {
  acc[country.code] = country.flag;
  return acc;
}, {});

fs.writeFileSync(
  "./src/countries.js",
  `export const countries = ${JSON.stringify(trimmedList)};
  export const flags = ${JSON.stringify(flags)};
  `,
);
