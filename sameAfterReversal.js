const num = 52600;

const isSameAfterReversal = (num) => {
  const newNum = parseFloat(num.toString().split("").reverse().join(""));
  const reverse = parseFloat(newNum.toString().split("").reverse().join(""));
  if (num === reverse) return true;
  return false;
};

console.log(isSameAfterReversal(num));
