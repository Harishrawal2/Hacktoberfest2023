//Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  fizzBuzz(n);
}

// For testing, you can replace readLine with a value
function readLine() {
  return "15"; // Replace with your desired input value
}

main();
