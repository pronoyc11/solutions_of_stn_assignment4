// PROBLEM 1 Solution.
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  let str = "";

  for (var i = 0; i < n; i++) {
    var newStr = "#".repeat(i + 1);
    str = str.concat(newStr + "\n");
  }

  return str;
};
//PROBLEM 2 Solution
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  let newArr = [];
  for (var i = 0; i < grades.length; i++) {
    let forOne = (grades[i] + 1) % 5;
    let forTwo = (grades[i] + 2) % 5;
    if (grades[i] < 38 && grades[i] >= 0) {
      newArr.push(grades[i]);
    } else {
      if (grades[i] <= 100) {
        if (!forOne) {
          newArr.push(grades[i] + 1);
        } else if (!forTwo) {
          newArr.push(grades[i] + 2);
        } else {
          newArr.push(grades[i]);
        }
      }
    }
  }

  return newArr;
};
//PROBLEM 3 Solution
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  const timePart = s.slice(0, -2);
  const period = s.slice(-2);

  const [h, m, second] = timePart.trim().split(":").map(Number);

  let hour = h;

  if (period === "PM" && hour != 12) hour += 12;
  if (period === "AM" && hour == 12) hour = 0;

  const pad = (n) => String(n).padStart(2, 0);

  return `${pad(hour)}:${pad(m)}:${pad(second)}`;
};
//PROBLEM 4 Solution
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  let newS = s.repeat(n);
  return newS;
};
//PROBLEM 5 Solution
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  let newStr = str.trim().split("").reverse().join("");
  return newStr;
};
//PROBLEM 6 Solution
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  return arr.reduce((acc, curr) => {
    if (curr > 0) acc += curr;
    return acc;
  }, 0);
};

// PROBLEM 7 Solution
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  return (num * (num + 1)) / 2;
};
// PROBLEM 8 Solution
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return String(b);
};
// PROBLEM 9 Solution
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};
// PROBLEM 10 Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newArr = [];
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    newArr[i] = sum;
  }
  return newArr;
};
// PROBLEM 11 Solution
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (var i = 0; i < accounts.length; i++) {
    let rowSum = accounts[i].reduce((acc, curr) => acc + curr, 0);
    maxWealth = Math.max(maxWealth, rowSum);
  }
  return maxWealth;
};
// PROBLEM 12 Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let i = 0,
//     j = i + 1;
//   while (j < nums.length) {
//     if (nums[j] > nums[i]) {
//       i++;
//       j++;
//     } else {
//       j++;
//       if (j >= nums.length) break;
//       while (nums[j] <= nums[i]) {
//         j++;
//       }
//       i++;
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   }
//   return nums;
// };
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // write pointer (first element is always unique)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return nums;
};

//PROBLEM 13 Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let seen = new Set();

  for (var i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
  }
  return false;
};
//PROBLEM 14 Solution
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  for (; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
};
//PROBLEM 15 Solution
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // last valid element in nums1
  let j = n - 1; // last element in nums2
  let k = m + n - 1; // last position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};
//PROBLEM 16 Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Early exit: if the smallest element is positive, no triplet can sum to 0
    if (nums[i] > 0) break;

    // Skip duplicate values for the fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // need a larger sum
      } else {
        right--; // need a smaller sum
      }
    }
  }

  return result;
};
//PROBLEM 17 Solution
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0; // 9 + 1 = 10 → write 0, carry 1
  }

  // All digits were 9 → prepend a 1
  return [1, ...digits];
};
//PROBLEM 18 Solution
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
//PROBLEM 19 Solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === " ") i--;

  // Count the last word
  let count = 0;
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};
//PROBLEM 20 Solution
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];

};


