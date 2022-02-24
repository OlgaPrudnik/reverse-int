module.exports = function reverse (n) {
  
  n = Math.abs(n);

  let array = n.toString().split('');

  let revers = array.reverse();

  let numbers = revers.join('');

  numbers = Number(numbers);

  return numbers;

}
