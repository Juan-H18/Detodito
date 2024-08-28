const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'Success'));

Promise.any([p1, p2, p3]).then((value) => {
  console.log(value); // 'Success'
}).catch((error) => {
  console.error(error);
});
