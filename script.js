//your JS code here. If required.
for (let i = 1; i <= 20; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // If the output string is still empty, it means the number is not a multiple of 3 or 5
  if (output === '') {
    output = i.toString();
  }

  // Output each result using alert
  alert(output);
}
