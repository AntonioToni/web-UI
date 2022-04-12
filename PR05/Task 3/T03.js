let arr = [];

for (let i = 0; i < 10; i++) {
  let number = (Math.random() * 100 + 50).toFixed(0);
  arr.push(number)
}

const minMax = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  const minInd = (element) => element == minValue;
  const maxInd = (element) => element == maxValue;
  
  console.log(`Max value: ${maxValue} at index ${arr.findIndex(minInd)}`)
  console.log(`Min value: ${minValue} at index ${arr.findIndex(maxInd)}`)
}
minMax(arr);