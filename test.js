const arr = ["here", 10, 1000, 200, true, "flase", "false", false];

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains(arr, "20000"));
