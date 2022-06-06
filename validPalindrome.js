const s = "A man, a plan , a canal: Panam";

const isPalindrome = (s) => {
  const cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reverseString = cleanedString.split("").reverse().join("");
  if (cleanedString === reverseString) return true;
  return false;
};

console.log(isPalindrome(s));
