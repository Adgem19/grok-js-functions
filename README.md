# Grok JavaScript Functions :baby_chick:

## Предисловие

Если у тебя есть сомнения или легкая паника, когда ты слышишь следующие слова: функция, callback, функция обратного вызова, функция внутри функции, параметры, аргументы, вызов функции, тело функции, объявление функции, анонимная функция, именнованная функция, замыкание, контекст функции, композиция функций, асинхронное выполнение функций, - добро пожаловать в данный задачник. :mouse:

## Как с этим работать

Здесь представлены различные упражнения, расположенные в порядке увеличения сложности. :chart_with_upwards_trend:

Чтобы добиться высокого уровня понимания обозначенных в предисловии концепций, необходимо добиться такого состояния разума, чтобы ты мог без посторонней помощи решить все задачи. :man_with_turban:

Соответственно, от тебя потребуется не только написать корректный код, но и объяснить некоторые детали реализации.

Ответы находятся в папке `answers`. Крайне рекомендую выжать из себя по максимуму, прежде чем смотреть туда.
Если же ты все-таки посмотрел, и твой ответ не совпал с ожидаемым, предыдущие 3 упражнения следует проделать **заново**. :rage:

Если тебе кажется, что в задании не хватает какой-то информации, возможно, что просто она не нужна. Многие упражнения не имеют практического значения, а созданы лишь для развития понимания общих концепций.

Если у тебя напечатано больше, чем в ответе, задайся вопросом: "Действительно ли я понял всё, что написал?". Если есть сомнения, начинай заново.

Если в задании тебя просят что-то указать или пояснить, делайте это в самом коде в комментариях. Например, так:
```
Укажите, где происходит сложение.
function summer(a,  b) {
  let c = a + b; // <--- Сложение
  return c;
}
```

Не мешай задания друг с другом, как минимум отделяй их комментариями. **Не копипасти, каждый раз пиши заново.**
**Не переиспользуй код заданий между собой!** Каждое задания начинается с чистого листа.

## Упражнения

## Обычные функции

100. Объявите функцию с именем `foo`.
102. Объявите именнованную функцию `foo` со входящим параметром `x`. Обозначьте границы тела функции и границы объявления параметров.
104. Объявите функцию `foo`, которая возвращает число `42`. Обозначьте границы объявления параметров функции.
106. Объявите анонимную не стрелочную функцию. Где у данной функции имя?
108. Объявите функцию без имени.
110. Объявите стрелочную функцию. Где у данной функции границы тела и границы объявления параметров?
112. Присвойте переменной `f` функцию `foo`. Где у данной функции границы тела? Что находится внутри `f`?
114. Присвойте переменной `f` анонимную не стрелочную функцию.
116. Присвойте переменной `f` стрелочную функцию. Что находится внутри `f`?
118. Объявите функцию `foo` со входящим параметром `x`, которая удваивает то, что ей передали на вход.
120. Объявите функцию `foo` со входящим параметром `x`, которая удваивает то, что ей передали на вход. Вызовите данную функцию со входящим значением `4`. Где у данной функции параметры? А где аргументы? Обозначьте границы тела функции.
122. Объявите анонимную не стрелочную функцию, которая суммирует два входящих значения. Где у данной функции параметры? Где аргументы?
124. Объявите анонимную самовызывающуюся стрелочную функцию, которая суммирует два входящих значения. Передайте ей на вход `3` и `6`. Каков результат выполнения функции? Где у данной функции параметры? Где аргументы?
126. Объявите функцию `foo` со входящим параметром `x`. Вызовите функцию со входящим значением `42`. Каков результат выполнения функции? Где у данной функции параметры? Где аргументы? Чему равно `x`.
128. Объявите функцию `foo` со входящим параметром `x`.  Вызовите функцию со входящими значениями `42` и `7`. Сколько у функции параметров? А сколько аргументов? Чему равен `x`? Каков результат выполнения функции?
130. Объявите функцию `foo` со входящими параметрами `x`, `y`. Вызовите функцию со входящим значением `42`. Сколько у функции параметров? А сколько аргументов? Чему равен `x`? Каков результат выполнения функции?

## Вложенные функции

200. Объявите функцию `foo`. Внутри неё объявите функцию `bar`. Обозначьте границы тела функции `foo`. Обозначьте границы тела функции `bar`.
202. Объявите функцию `foo`. Внутри неё объявите функцию `bar`. Внутри `bar` объявите функцию `baz`. Обозначьте границы тела функции `foo`. Обозначьте границы тела функции `bar`. Обозначьте границы тела функции `baz`.
204. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Обозначьте границы параметров функции `foo`. Обозначьте границы параметров функции `bar`. 
206. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Вызовите функцию `bar` внутри функции `foo`. Каков результат выполнения функции `bar`?
208. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Вызовите функцию `bar` внутри функции `foo`. Каков результат выполнения функции `foo`?
210. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Вызовите функцию `bar` внутри функции `foo`. Вызовите функцию `foo`. Каков результат выполнения функции `bar`? Каков результат выполнения функции `foo`?
212. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Функция `bar` должна удваивать поданное ей на вход значение. Функция `foo` должна суммировать поданное ей на вход значение с результатом выполнения функции `bar`, которой на вход передано значение `3`. Вызовите `foo` со входящим значением `4`. Каков результат выполнения функции `bar`? Каков результат выполнения функции `foo`?
214. Объявите функцию `foo` со входящим параметром `a`. Внутри неё объявите функцию `bar` со входящим параметром `b`. Функция `bar` должна удваивать поданное ей на вход значение. Функция `foo` должна суммировать поданное ей на вход значение с результатом выполнения функции `bar`, которой на вход передано значение, до этого переданое на вход функции `foo`. Вызовите `foo` со входящим значением `4`. Каков результат выполнения функции `bar`? Каков результат выполнения функции `foo`?
