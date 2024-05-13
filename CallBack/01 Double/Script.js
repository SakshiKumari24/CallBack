function doubleWithCallback(arr, callback) {
    let doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
      let doubledValue = callback(arr[i]);
      doubledArray.push(doubledValue);
    }
    return doubledArray;
  }
  function double(num) {
    return num * 2;
  }
  let arr = [1, 2, 3, 4, 5];
  let doubledArr = doubleWithCallback(arr, double);
  console.log(doubledArr);
  