let num1;
let num2;

for (; true; ) {
  num1 = +prompt("Get height");

  if (!isNaN(num1)) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

for (; true; ) {
  num2 = +prompt("Get width");

  if (!isNaN(num2)) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function resultNumber(a, b) {
  if (a <= 0 && b > 0) {
    return b * b;
  } else if (b <= 0 && a > 0) {
    return a * a;
  } else if (a <= 0 && b <= 0) {
    return "ERROR";
  } else if (a > 0 && b > 0) {
    return a * b;
  }
}

document.write(`square = ${resultNumber(num1, num2)}`);
