// merging two arrays

const arr1 = [0,1,2,3,4,5]
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(arr1.push(arr2))

const arr3 = [0,1,2,3,4,5]

const resArr = arr3.concat(arr2);
console.log(resArr);

const spreadArr = [...arr3, ...arr2]
console.log(spreadArr);