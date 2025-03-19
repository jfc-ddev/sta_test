const extractRemainder = (number, digits) => number % Math.pow(10, digits);
const extractDivision = (number, digits) =>
  Math.round(number / Math.pow(10, digits));

const createLicensePlate = (value) => {
  let licensePlate = "";

  const digitCount = calculateDigitCount(value);

  switch (true) {
    case digitCount === 6:
      licensePlate = value.toString().padStart(6, "0");
      break;
    case digitCount >= 1 && digitCount <= 5:
      licensePlate = calculateLicenseSegment(value, digitCount);
      break;
    case digitCount === 0:
      licensePlate = caculateZeroCase(value, digitCount);
      break;
    default:
      licensePlate = "Invalid input";
  }

  return `${value} => ${licensePlate}`;
};

const caculateZeroCase = (value, digitCount) => {
  const division = extractDivision(value, digitCount);
  return calcularOutOfRange(division);
};

const calculateLicenseSegment = (value, digitLength) => {
  const numericPart = extractRemainder(value, digitLength + 1);
  const letterValue = extractDivision(value, digitLength + 1);

  return (
    numericPart.toString().padStart(digitLength, "0") +
    convertToAlphabet(
      Math.round(letterValue + numericPart / Math.pow(10, digitLength))
    )
  );
};

const calcularOutOfRange = (division) => {
  return division <= Math.pow(26, 6)
    ? convertToAlphabet(division)
    : "Out of range";
};

const calculateDigitCount = (value) => {
  if (value >= Math.pow(26, 6)) {
    return 0;
  }

  for (let i = 6; i >= 0; i--) {
    const threshold = Math.pow(10, i) * Math.pow(26, 6 - i);
    if (value < threshold) {
      return i;
    }
  }

  return 6;
};

const convertToAlphabet = (value) => {
  const result = [];

  while (value > 0) {
    value--;
    result.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[value % 26]);
    value = Math.round(value / 26);
  }

  return result.join("").slice(0, 6);
};
