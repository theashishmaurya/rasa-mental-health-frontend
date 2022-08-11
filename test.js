var start = +Date.now();

function Add(a, b) {
  return a + b;
}

for (let i = 0; i < 10000000; i++) {
  Add(i, i + 1);
}
Add("12", 12);

var end = +Date.now();
console.log(end - start);
