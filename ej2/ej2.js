function getLicensePlate(n) {
  const totalChars = 26;
  const unicodeCharA = 65;
  const licenseDigits = 6;
  const limitLicense = 1000000;

  const buildOnlyNumbers = n < limitLicense;

  if (buildOnlyNumbers) {
    return n.toString().padStart(licenseDigits, "0");
  }

  n -= limitLicense;

  let alphaPart = "";

  let numberPart = n % 100000;
  let alphaIndex = Math.floor(n / 100000);

  while (alphaIndex >= 0) {
    alphaPart =
      String.fromCharCode((alphaIndex % totalChars) + unicodeCharA) + alphaPart;
    alphaIndex = Math.floor(alphaIndex / totalChars) - 1;
  }

  let formatNumberPart = numberPart
    .toString()
    .padStart(licenseDigits - alphaPart.length, "0");

  return `${formatNumberPart}${alphaPart}`;
}

console.log(getLicensePlate(0)); // "000000"
console.log(getLicensePlate(999999)); // "999999"
console.log(getLicensePlate(1000000)); // "00000A"
console.log(getLicensePlate(1000001)); // "00001A"
console.log(getLicensePlate(1099999)); // "99999A"
console.log(getLicensePlate(1100000)); // "00000B"
