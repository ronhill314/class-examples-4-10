const catalog = [
  {
    id: "1",
    name: "shirt",
    price: 4.0,
    category: "clothing",
  },
  {
    id: "2",
    name: "burger",
    price: 6.0,
    category: "food",
  },
  {
    id: "3",
    name: "radio",
    price: 10.0,
    category: "electronics",
  },
  {
    id: "4",
    name: "steak",
    price: 16.0,
    category: "food",
  },
  {
    id: "5",
    name: "socks",
    price: 7.0,
    category: "clothing",
  },
];

// const user = {
//   username: "tyler3point0",
//   cart: [],
// };

// console.log(catalog, user);

console.log(catalog[2].price.toFixed(2));

function add2Numbers(num1, num2) {
  return num1 + num2;
}

const total = add2Numbers(1, 2);

console.log(total);
