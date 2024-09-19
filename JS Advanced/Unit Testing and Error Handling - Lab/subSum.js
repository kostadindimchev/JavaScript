function subSum(array, start, end) {
  if (!Array.isArray(array)) {
    return NaN;
  }

  if (Number(start) < 0) {
    start = 0;
  }

  if (Number(end) >= array.length) {
    end = array.length;
  }

  const sumArr = array
    .slice(start, end + 1)
    .map((x) => Number(x))
    .reduce((acc, num) => (acc += num), 0);

  return sumArr;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([10, "twenty", 30, 40], 0, 2);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([], 1, 2);
