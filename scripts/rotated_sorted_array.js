// given a sorted array that's been rotated n times, find the minimum value in the array
// e.g. original sorted array is [1,2,3,4,5], when rotated by 3 you get [3,4,5,1,2]
// the values do not have to be sequential or evenly spaced, e.g. [18, 24, -10, -4, 5, 6, 10]

/*
# jude @ Macquentin in ~ [23:44:17]
$ node NodeJS\ Scripts/rotated_sorted_array.js
case 0
depth 0: 1,2,3,4,5,6,7
depth 0: first: 1, last: 7, midIndex: 4, midValue: 5
depth 1:  1,2,3,4,5
depth 1:  first: 1, last: 5, midIndex: 3, midValue: 4
depth 2:   1,2,3,4
depth 2:   first: 1, last: 4, midIndex: 2, midValue: 3
depth 3:    1,2,3
{
  min: 1,
  arr: [
    1, 2, 3, 4,
    5, 6, 7
  ],
  calc: 1,
  result: true
}


case 1
depth 0: 7,1,2,3,4,5,6
depth 0: first: 7, last: 6, midIndex: 4, midValue: 4
depth 1:  7,1,2,3,4
depth 1:  first: 7, last: 4, midIndex: 3, midValue: 3
depth 2:   7,1,2,3
depth 2:   first: 7, last: 3, midIndex: 2, midValue: 2
depth 3:    7,1,2
{
  min: 1,
  arr: [
    7, 1, 2, 3,
    4, 5, 6
  ],
  calc: 1,
  result: true
}


case 2
depth 0: 6,7,1,2,3,4,5
depth 0: first: 6, last: 5, midIndex: 4, midValue: 3
depth 1:  6,7,1,2,3
depth 1:  first: 6, last: 3, midIndex: 3, midValue: 2
depth 2:   6,7,1,2
depth 2:   first: 6, last: 2, midIndex: 2, midValue: 1
depth 3:    6,7,1
{
  min: 1,
  arr: [
    6, 7, 1, 2,
    3, 4, 5
  ],
  calc: 1,
  result: true
}


case 3
depth 0: 5,6,7,1,2,3,4
depth 0: first: 5, last: 4, midIndex: 4, midValue: 2
depth 1:  5,6,7,1,2
depth 1:  first: 5, last: 2, midIndex: 3, midValue: 1
depth 2:   5,6,7,1
depth 2:   first: 5, last: 1, midIndex: 2, midValue: 7
depth 3:    7,1
{
  min: 1,
  arr: [
    5, 6, 7, 1,
    2, 3, 4
  ],
  calc: 1,
  result: true
}


case 4
depth 0: 4,5,6,7,1,2,3
depth 0: first: 4, last: 3, midIndex: 4, midValue: 1
depth 1:  4,5,6,7,1
depth 1:  first: 4, last: 1, midIndex: 3, midValue: 7
depth 2:   7,1
{
  min: 1,
  arr: [
    4, 5, 6, 7,
    1, 2, 3
  ],
  calc: 1,
  result: true
}


case 5
depth 0: 3,4,5,6,7,1,2
depth 0: first: 3, last: 2, midIndex: 4, midValue: 7
depth 1:  7,1,2
{
  min: 1,
  arr: [
    3, 4, 5, 6,
    7, 1, 2
  ],
  calc: 1,
  result: true
}


case 6
depth 0: 2,3,4,5,6,7,1
depth 0: first: 2, last: 1, midIndex: 4, midValue: 6
depth 1:  6,7,1
{
  min: 1,
  arr: [
    2, 3, 4, 5,
    6, 7, 1
  ],
  calc: 1,
  result: true
}


case 7
depth 0: 11,13,15,17
depth 0: first: 11, last: 17, midIndex: 2, midValue: 15
depth 1:  11,13,15
{ min: 11, arr: [ 11, 13, 15, 17 ], calc: 11, result: true }


case 8
depth 0: 17,11,13,15
depth 0: first: 17, last: 15, midIndex: 2, midValue: 13
depth 1:  17,11,13
{ min: 11, arr: [ 17, 11, 13, 15 ], calc: 11, result: true }


case 9
depth 0: 15,17,11,13
depth 0: first: 15, last: 13, midIndex: 2, midValue: 11
depth 1:  15,17,11
{ min: 11, arr: [ 15, 17, 11, 13 ], calc: 11, result: true }


case 10
depth 0: 13,15,17,11
depth 0: first: 13, last: 11, midIndex: 2, midValue: 17
depth 1:  17,11
{ min: 11, arr: [ 13, 15, 17, 11 ], calc: 11, result: true }


case 11
depth 0: 18,24,4,13,14,15,16,17
depth 0: first: 18, last: 17, midIndex: 4, midValue: 14
depth 1:  18,24,4,13,14
depth 1:  first: 18, last: 14, midIndex: 3, midValue: 13
depth 2:   18,24,4,13
depth 2:   first: 18, last: 13, midIndex: 2, midValue: 4
depth 3:    18,24,4
{
  min: 4,
  arr: [
    18, 24,  4, 13,
    14, 15, 16, 17
  ],
  calc: 4,
  result: true
}
*/

/*
  more optimal solution that has O(1) space complexity
*/
const findMin = (arr) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let iters = 10; // anti infinite loop
  while (leftIdx < rightIdx && --iters > 0) {
    console.log({
      leftIdx, rightIdx
    })
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const midVal = arr.at(midIdx);
    const rightVal = arr.at(rightIdx);
    if (midVal < rightVal) {
      rightIdx = midIdx;
    } else {
      leftIdx = midIdx + 1;
    }
  }

  return arr[rightIdx];
};

/*
  not as optimal 1st pass of solution
  - kind of cheats with the Math.min when array is size 3 or less to avoid anymore weird cases
  - uses recursion + slicing the array, e.g. space complexity is *not* O(1)
*/
// const findMin = (arr, depth = 0) => {
//   console.log(`depth ${depth}:${(new Array(depth)).fill(" ").join("")} ${arr}`)

//   if (arr.length <= 3) {
//     return Math.min(...arr);
//   }

//   // get values
//   const firstValue = arr.at(0);
//   const lastValue = arr.at(-1);
//   const midIndex = Math.round(arr.length / 2);
//   const midValue = arr[midIndex];
//   console.log(`depth ${depth}:${(new Array(depth)).fill(" ").join("")} first: ${firstValue}, last: ${lastValue}, midIndex: ${midIndex}, midValue: ${midValue}`)

//   if (midValue < lastValue) {
//     // check left subarray, inclusive midValue
//     return findMin(arr.slice(0, midIndex + 1), depth + 1);
//   } else {
//     // check right subarray, inclusive midValue
//     return findMin(arr.slice(midIndex), depth + 1);
//   }
// };

const cases = [
  [1, [1, 2, 3, 4, 5, 6, 7]],
  [1, [7, 1, 2, 3, 4, 5, 6]],
  [1, [6, 7, 1, 2, 3, 4, 5]],
  [1, [5, 6, 7, 1, 2, 3, 4]],
  [1, [4, 5, 6, 7, 1, 2, 3]],
  [1, [3, 4, 5, 6, 7, 1, 2]],
  [1, [2, 3, 4, 5, 6, 7, 1]],
  [11, [11, 13, 15, 17]],
  [11, [17, 11, 13, 15]],
  [11, [15, 17, 11, 13]],
  [11, [13, 15, 17, 11]],
  [4, [18, 24, 4, 13, 14, 15, 16, 17]],
];

cases.forEach(([min, arr], idx) => {
  console.log("case", idx)
  const calc = findMin(arr);
  console.log({
    min,
    arr,
    calc,
    result: min === calc,
  })
  console.log()
  console.log()
});
