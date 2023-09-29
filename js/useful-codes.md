# Set the sleep function 

```javascript
const sleep = (timeout = 5000) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
```
