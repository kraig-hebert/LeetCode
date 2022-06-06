const x = 7821;

const isPalindrome = (x) => {
  const stringToList = x.toString().split("");
  const reverseList = x.toString().split("").reverse();
  for (let i = 0; i < stringToList.length; i++) {
    if (stringToList[i] === reverseList[i]) continue;
    return false;
  }
  return true;
};

console.log(isPalindrome(x));
