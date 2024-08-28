const p1 = Promise.resolve(3);
const p2 = Promise.resolve(42);
const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
}).catch((error) => {
  console.error(error);
});
