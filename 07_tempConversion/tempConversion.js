const ftoc = function(temp) {
  const result = (temp - 32) * (5/9);

  if (!Number.isInteger(result)) {
    return Number(result.toFixed(1));
  }

  return result;
};

const ctof = function(temp) {
  const result = (temp * (9/5)) + 32;

  if (!Number.isInteger(result)) {
    return Number(result.toFixed(1));
  }

  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
