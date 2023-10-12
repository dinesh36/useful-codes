```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}
const person = new Person();
```

```javascript
var x = 10;
function foo() {
  console.log(x);
  var x = 5;
}
foo();
```

```javascript
console.log(undefined == null);
```

```javascript
Promise.reject("Error message")
  .then(() => console.log("Resolved"))
  .catch((error) => console.log(error));
```

```javascript
function log(target: any, key: string) {
  console.log(`Logged ${key}`);
}
class Example {
  @log
  greet() {
    console.log("Hello, TypeScript!");
  }
}
```

```javascript
const value: any = "Hello, TypeScript!";
const length1 = (value as string).length;
const length2 = (<string>value).length;
```
