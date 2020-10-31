
const sumItems = function(array) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
};

console.log(sumItems([1,2,[3,4],5,[6,7]]));
module.exports = sumItems;

