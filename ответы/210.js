// Объявите функцию foo со входящим параметром a. 
// Внутри неё объявите функцию bar со входящим параметром b. 
// Вызовите функцию bar внутри функции foo. Вызовите функцию foo. 
// Каков результат выполнения функции bar? Каков результат выполнения функции foo?

function foo(a) {
  bar();
  function bar(b) {
  }
}
 foo();

// результат ф-и bar ,его нет
// результат ф-и foo = undefined
