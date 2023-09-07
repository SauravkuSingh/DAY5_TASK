var JSON = [
  {
    name: "saurav",
    Task: "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  },
];
//forEach
JSON.forEach(function (obj) {
  console.log(obj.name, obj.Task);
});
//for loop
for (var i = 0; i < JSON.length; i++) {
  var obj = JSON[i];
  console.log(obj.name);
  console.log(obj.Task);
}
//for in
for (var key in JSON) {
  if (JSON.hasOwnProperty(key)) {
    console.log(JSON[key].name, JSON[key].Task);
  }
}
//forof
let text = "";
for (let index of JSON[key].name) {
  text += index;
}
console.log(text);
