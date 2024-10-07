let arr=[1,2,4,5,7]
console.log(arr)
console.log("Length of array : "+arr.length)
//array is mutable...can be changed...while strings are immutable...can not be changed
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr[5])
arr[0]=566
console.log(arr)
//typeof array is object
console.log(arr.toString())
console.log(arr.join(" and "))// ,--> and
//arr.pop  removes the last element of the array..
//
arr.pop()
console.log(arr)
arr.push(3)
console.log(arr)
arr.push("Abhinav")
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(2)
console.log(arr)
//pop removes from last...
//push insert element in last...
//shift removes element from starting...
//unshift insert element in starting...
//pop is brother of shift....and push is brother of unshift...
delete arr[2]
console.log(arr)
let arr2=[1,2,3]
let arr3=["four","five",6]
let arr4=arr.concat(arr2,arr3)
// console.log(arr.concat(arr2,arr3))
console.log(arr4)
//arr.sort()   sort the elements

let numbers=[1,2,3,4,5]
console.log(numbers)
// numbers.splice(1,3)//starting from index 1 remove 3 elements
// console.log(numbers)
numbers.splice(1,3,22,55,66)//remove then add 22,55,66
console.log(numbers)
let n1 = numbers.slice(1)
let n2 = numbers.slice(2,4)//starting from 2nd index, till index<4...(4th index will not be added/printed)
console.log(n1)
console.log(n2)
numbers.reverse()
console.log(numbers)
//17:34...
