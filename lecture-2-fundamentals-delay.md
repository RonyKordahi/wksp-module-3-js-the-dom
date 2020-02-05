# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
//takes a function as a paramater and a number
setTimeout(function() {
    console.log("HELLO");
}, 3000); //unit is miliseconds
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
setInterval(function() {
    console.log("here!");
}, 3000);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example
const myTimer = setInterval(function() {
    console.log("here!");
}, 3000);

clearInterval(myTimer);
```

---


