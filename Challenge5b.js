const myOb = {
  nestedObject: {
    price: 100,
    quantity: 5,
  },
  nestedObject2: {
    price: 150,
    quantity: 2,
  },
};

const myAr = [myOb.nestedObject, myOb.nestedObject2];
console.log(myAr);
//breakdown
const eval1 = myAr[0].price * myAr[0].quantity; // 100 * 5 = 500
const eval2 = myAr[1].price * myAr[1].quantity; // 150 * 2 = 500

const response = eval1 > eval2;
console.log(response);
