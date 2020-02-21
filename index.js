let arr = [
    5,
    [-10, 3, 0, 5, -4],
    [2, -1, 0, 2, -8],
    [9, -2, -5, 6, 0],
    [9, -7, 4, 8, -2],
    [3, 7, 8, -5, 0]
];


let r = 1, c = 0;
let sum1 = 0, sum2 = 0;

let rowCount = arr[0];
let columnCount = arr[0];
let rc = columnCount - 1;

while (arr[r] != null && arr[r][c] != null && arr[r][rc] != null) {
    sum1 += arr[r][c];
    sum2 += arr[r][rc];
    r++;c++;rc--;
}

console.log(Math.abs(sum1 - sum2))