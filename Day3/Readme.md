

# JS Event Loop
- Javascript is a single-threaded asynchronous programming language.
- [http://latentflip.com/loupe/](http://latentflip.com/loupe/)
- [https://www.sohamkamani.com/blog/2016/03/14/wrapping-your-head-around-async-programming/](https://www.sohamkamani.com/blog/2016/03/14/wrapping-your-head-around-async-programming/)

# Code Snippets
- Case 1 :
```javascript
setTimeout(function() { console.log(1); }, 1000)
```
- Case 2 :
```javascript
setTimeout(function() { console.log(1); }, 1000)
console.log(2);
```
- Case 3 :
```javascript
console.log(1);
setTimeout(function() { console.log(2); }, 5000);
setTimeout(function() { console.log(3); }, 5000);
console.log(4);
```
- Case 4 :
```javascript
console.log(1);
setTimeout(function() { console.log(2); }, 0);
console.log(3);
```

# Advantages of Angular
- Relatively easier.
- Uses typescript which is strongly types and similar syntax to other class based languages.
- Built by Google. Used more by more established companies. 

# Advantages of React
- Uses javascript and less boilerplate.
- Better integration with state management libraries.
- More popular among startups and newer players.