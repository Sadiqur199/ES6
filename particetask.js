// first qus odd to even array

const array = [ 1, 3, 5, 7, 9];
const even = array.map(odd=>odd+1);
console.log(even);

// filter divison by 10

const newArray = [33, 50, 79, 78, 90, 101, 30 ];
const divisionBy10 = newArray.filter(arra=>arra/10)
console.log(divisionBy10);


// find divison by 10

const newarray = [33, 50, 79, 78, 90, 101, 30 ];
const divisionBy10useFind = newarray.find(array=>array/10)
console.log(divisionBy10useFind);

// use the reduce

const reduceArray = [ 1, 9, 17, 22,10 ];
const useReduce = reduceArray.reduce((accumulator, currentValue)=>accumulator+currentValue);
console.log(useReduce)

// object value
const student = {
  name:'sadiq',
  age:22
}
 const{age} = student;
// const age = student.age;
console.log(age)