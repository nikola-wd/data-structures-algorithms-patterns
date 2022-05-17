// Given a set of time intervals in any order, merge all overlapping intervals into one
// and output the result which should have only mutually exclusive intervals.
// Let the intevrals be represented as paird of integers for simplicity
// For example, let the given set of intervals be [[1,3], [2,4], [5,7], [6,8]]. The intervals
// [1,3] and [2,4] overlap with each other, so they should be merged and become [1,4]
// Similarly [5,7] and [6,8] should be merged and become [5,8]

// Write a fn which produces the set of merged intervals for the given set of intervals

// A simple approach is to start from the first interval and compare it with all other
// intervals for overlapping, if it overlaps with any other interval, then remove the other interval
// from list and merge the other into the first interval.
// Repeat the same steps for remaining intervals after first. This approach cannot be implemented better than O(n^2) time.

let test = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
];
// XXX: Method 1: Brute Force
function mergeOverlappingIntervalsBF(arr) {
  const n = arr.length;
}

// ------------------------------

// Solution 2. Efficient approach is to first sort the intervals according to starting time. Once
// we have the sorted intervals, we can combine all intervals in a linear traversal.
// The idea is, in sorted array of intervals, if interval[i] doesn't overlap with interval[i-1], then interval[i+1] cannot
// overlat with interval[i-1] because starting time of interval[i+1] must be greater than or equal to interval[i]
function mergeOverlappingIntervalsSort(arr) {
  const n = arr.length;
}
