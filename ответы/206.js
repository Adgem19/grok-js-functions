// Объявите функцию foo со входящим параметром a. 
// Внутри неё объявите функцию bar со входящим параметром b. 
// Вызовите функцию bar внутри функции foo. 
// Каков результат выполнения функции bar?

function foo(a) {
  bar();
  function bar(b) {}
}

// результата нет , так как нет алгоритма у ф-й

