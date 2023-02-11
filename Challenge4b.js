const myObj = {
  prop1: "first value",
  prop2: 20,
};

const myArr = [40, 50, 2];
//lets breakdown
const as1 = myObj.prop2; //20
const as2 = myArr[0] / myArr[2]; // 40 / 2 = 20

const res = myObj.prop2 === myArr[0] / myArr[2];

console.log(res);
