const FirstName = "yasser";
const FatherName = "anas";
const LastName = "alreshoodi";

// 2nd

console.log(typeof FirstName);

// 3rd
let sum = (a, b, c) => {
  return a + b + c;
};

console.log(sum("yasser ", "anas ", "alreshoodi "));

// 4rd

let evenNumber = (i) => {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
};

// evenNumber();

// 5th

let addnumbers = (a, b) => {
  if (a + b < 100) {
    console.log(a + b);
    return false;
  } else {
    console.log(a + b);
    return true;
  }
};

console.log(addnumbers(92, 9));

// 6th

let math = (a, b) => {
  console.log(a + b);
  console.log(a * b);
  console.log(a / b);
  console.log(a - b);
};

math(10, 5);

//7th

let mean = (a, b) => {
  return (a + b) / 2;
};

console.log(mean(5, 5));

//8th

let Vat = (price) => {
  const vat = 0.15;
  const vatAmount = price * vat;
  const totalAmount = price + vatAmount;
  return totalAmount;
};

console.log(Vat(100));
console.log("_________________________");

//9th

function isEven(num) {
  switch (true) {
    case num % 2 === 0:
      return true;
    default:
      return false;
  }
}

console.log(isEven(19));
console.log("_________________________-");

//10th

function Grade(score) {
  if (score >= 95) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 85) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 75) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(Grade(98));

//11th

let squared = () => {
  for (i = 0; i <= 10; i++) {
    console.log(i * i);
  }
};

squared();

//12th

let oddNumber = () => {
  for (let i = 0; i <= 20; i += 1) {
    console.log(i);
  }
};

oddNumber();

// 13th

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(1993));

//14th

let stairs = () => {
  for (let i = 1; i <= 8; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j ;
    }
    console.log(num);
  }
};

stairs();
