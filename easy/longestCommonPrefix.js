/* 
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

const stringList = ["flowers", "floors", "flooms"];

const longestCommonPrefix = (stringList) => {
  let matchedPrefix = "";
  let testPrefix = "";
  for (let i = 0; i < stringList[0].length; i++) {
    testPrefix = stringList[0].substring(0, i + 1);
    for (let y = 1; y < stringList.length; y++) {
      if (stringList[y].substring(0, i + 1) === testPrefix) continue;
      return matchedPrefix;
    }
    matchedPrefix = testPrefix;
  }

  return matchedPrefix;
};

console.log(longestCommonPrefix(stringList));
