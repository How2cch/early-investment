export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatNumber = (
  num,
  { withAbbreviation = false, decimalPlace = 0, rounding = false } = {
    decimalPlace: 0,
    withAbbreviation: false,
    rounding: false
  }
) => {
  const fixedMethod = rounding ? Math.round : Math.floor;
  const fixedNumberString = (fixedMethod(num * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace)).toFixed(decimalPlace);
  const integerString = fixedNumberString.split(".")[0];
  let decimalString = fixedNumberString.split(".")[1];
  decimalString = decimalString ? `.${decimalString}` : "";

  if (withAbbreviation) {
    const integer = Number(integerString)
    const abbreviationString = toDigitalCommaAndAbbreviation(integer);
    const isAbbreviation = abbreviationString.includes("K") || abbreviationString.includes("M");
    return isAbbreviation ? abbreviationString : `${abbreviationString}${decimalString}`;
  } else {
    const integerToComma = toComma(integerString);
    return `${integerToComma}${decimalString}`;
  }
}

export const toComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toDigitalCommaAndAbbreviation = (num) => {
  const value = Math.round(num * 100) / 100;
  if (value / 10000000000 >= 1) {
    return toComma(value / 1000000) + "M";
  }
  if (value / 10000000 >= 1) {
    return toComma(value / 1000) + "K";
  }
  return toComma(value);
};