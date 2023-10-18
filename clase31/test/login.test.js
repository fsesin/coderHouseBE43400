import { login } from "../src/login.js";

let testsPassed = 0;
const totalTests = 5;

// 1. Password vacio
const response1 = login("coderUser");
if (response1 === "No se ha proporcionado un password") {
  testsPassed++;
  console.log("Test 1 passed");
} else {
  console.log("Test 1 failed");
}

//2. Usuario vacio
const response2 = login(null, "123");
if (response2 === "No se ha proporcionado un usuario") {
  testsPassed++;
  console.log("Test 2 passed");
} else {
  console.log("Test 2 failed");
}

// 3. Password incorrecto
const response3 = login("coderUser", "abcd");
if (response3 === "Contrasena incorrecta") {
  testsPassed++;
  console.log("Test 3 passed");
} else {
  console.log("Test 3 failed");
}

// 4. Usuario incorrecto
const response4 = login("coderUser2", "123");
if (response4 === "Credenciales incorrectas") {
  testsPassed++;
  console.log("Test 4 passed");
} else {
  console.log("Test 4 failed");
}

// 5. Usuario y password coinciden
const response5 = login("coderUser", "123");
if (response5 === "logueado") {
  testsPassed++;
  console.log("Test 5 passed");
} else {
  console.log("Test 5 failed");
}

console.log(`Passed ${testsPassed} of ${totalTests} tests`);
