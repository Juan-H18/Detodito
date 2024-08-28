const p1 = Promise.resolve(3);
const p2 = Promise.reject('Error');
const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 'Error' },
  //   { status: 'fulfilled', value: 'foo' }
  // ]
});
