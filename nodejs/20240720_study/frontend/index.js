// let a = "Hello";


// function first() {
//   console.log('이게 첫번째?');
//   second()
//   console.log(' 다시 된 함수');

// }

// function second() {
//   console.log('inside second function');
// }

// first();
// console.log('inside global context');

//실행 컨텍스트 이해하기위한 코드

//step 1
function first() {
  console.log('first'); // step 3, step 4
  second(); //step 5 // step 8
}

function second() {
  console.log('second'); // step 6, step 7
}

first(); //step 2 // step 9
//step 10