// Объявите функцию foo со входящим параметром wow. Функция foo должна возвращать результат вызова wow как функции. 
// Вызовите foo со входящим значением равным анонимной функции, которая возвращает 42. 
// Каков результат выполнения функции foo? Почему?

function foo(wow) {
return wow();
}

foo(()=> 42);

// вернет 42 , потому что вернет введенный аргумент
