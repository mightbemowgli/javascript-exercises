const convertToCelsius = (fInput) => {
  // x °F ≘ (x − 32) × 5/9 °C 
  let degC = (fInput - 32) * (5/9);
  let degCRounded = Math.round(degC * 10) / 10;
  return degCRounded;

};

const convertToFahrenheit = (cInput) => {
  // x °C ≘ (x × 9/5 + 32) °F 
  let degF = (cInput * (9/5) + 32);
  let degFRounded = Math.round(degF * 10) / 10;
  return degFRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
