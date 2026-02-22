import formatCurrency from "../script/utils/money.js";

console.log("test case 1");

if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("test case 2");

if (formatCurrency(2005) === "20.05") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("test case 3");

if (formatCurrency(2000) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("test case 4");

if (formatCurrency(1899) === "18.99") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("test case 5");

if (formatCurrency(799) === "7.99") {
  console.log("passed");
} else {
  console.log("failed");
}
