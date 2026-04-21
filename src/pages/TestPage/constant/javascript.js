export const javascript = {
  title: 'Разработка web-приложений на языке JavaScript',
  questions: [
    {
      id: 1,
      type: 'single',
      text: 'Тип и формат содержимого документа определяет тег …',
      options: [
        { id: 'А', text: '<!Doctype>' },
        { id: 'Б', text: '<base>' },
        { id: 'В', text: '<body>' },
        { id: 'Г', text: '<spad>' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 2,
      type: 'single',
      text: 'Что будет результатом выполнения выражения? "23"+17-"10"+20',
      options: [
        { id: 'А', text: '50' },
        { id: 'Б', text: '2327' },
        { id: 'В', text: '1297' },
        { id: 'Г', text: 'ошибка' }
      ],
      correctAnswer: 'Б'
    },
    {
      id: 3,
      type: 'single',
      text: 'Какому году соответствует выражение с new Date()? new Date(parseInt("2020-10-03"))',
      options: [
        { id: 'А', text: '1970' },
        { id: 'Б', text: '2019' },
        { id: 'В', text: '2020' },
        { id: 'Г', text: '2003' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 4,
      type: 'single',
      text: 'Что будет результатом выполнения выражения? 3>4 ? 5:6',
      options: [
        { id: 'А', text: '3' },
        { id: 'Б', text: '4' },
        { id: 'В', text: '5' },
        { id: 'Г', text: '6' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 5,
      type: 'single',
      text: 'Что вернёт функция sum? function sum(a,b=3){ a+b; } console.log(sum(2));',
      options: [
        { id: 'А', text: '2' },
        { id: 'Б', text: '3' },
        { id: 'В', text: '5' },
        { id: 'Г', text: 'undefined' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 6,
      type: 'single',
      text: 'Какой оператор определяет тип переменной?',
      options: [
        { id: 'А', text: 'instanceof' },
        { id: 'Б', text: 'typeof' },
        { id: 'В', text: '!' },
        { id: 'Г', text: 'in' }
      ],
      correctAnswer: 'Б'
    },
    {
      id: 7,
      type: 'single',
      text: 'С какой версии ECMAScript для объявления переменной стали использовать let?',
      options: [
        { id: 'А', text: 'ES7' },
        { id: 'Б', text: 'ES8' },
        { id: 'В', text: 'ES6' },
        { id: 'Г', text: 'ES4' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 8,
      type: 'single',
      text: 'Сколько операторов return может содержать функция?',
      options: [
        { id: 'А', text: '0' },
        { id: 'Б', text: '1' },
        { id: 'В', text: '2' },
        { id: 'Г', text: 'сколько угодно' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 9,
      type: 'single',
      text: 'Чему будет равно значение переменной i после выполнения следующего кода? let i=1; i=(i==1)?100:200;',
      options: [
        { id: 'А', text: '1' },
        { id: 'Б', text: '100' },
        { id: 'В', text: '101' },
        { id: 'Г', text: '200' }
      ],
      correctAnswer: 'Б'
    },
    {
      id: 10,
      type: 'single',
      text: 'Какой результат даст вычисление логического выражения (на втором месте строка с символом пробела) : false || " " || !0 ?',
      options: [
        { id: 'А', text: 'строка с символом пробела' },
        { id: 'Б', text: 'false' },
        { id: 'В', text: 'true' },
        { id: 'Г', text: '0' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 11,
      type: 'single',
      text: 'Что будет результатом выражения 67 + "45"?',
      options: [
        { id: 'А', text: '"6745"' },
        { id: 'Б', text: '"112"' },
        { id: 'В', text: '112' },
        { id: 'Г', text: '6745' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 12,
      type: 'single',
      text: 'Какой из операторов конкатенирует (склеивает) строки?',
      options: [
        { id: 'А', text: '%' },
        { id: 'Б', text: '/' },
        { id: 'В', text: '*' },
        { id: 'Г', text: '+' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 13,
      type: 'single',
      text: 'Какой из операторов находит остаток от деления?',
      options: [
        { id: 'А', text: '*' },
        { id: 'Б', text: '/' },
        { id: 'В', text: '%' },
        { id: 'Г', text: '+' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 14,
      type: 'single',
      text: 'Сколько переменных определено в записи: let myVar, myvar, _myvar?',
      options: [
        { id: 'А', text: '1' },
        { id: 'Б', text: '2' },
        { id: 'В', text: '3' },
        { id: 'Г', text: '4' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 15,
      type: 'single',
      text: 'Какой результат дает логическое выражение: !0 && "privet" && 56?',
      options: [
        { id: 'А', text: 'true' },
        { id: 'Б', text: '"privet"' },
        { id: 'В', text: '56' },
        { id: 'Г', text: 'false' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 16,
      type: 'single',
      text: 'Какое значение переменной i первым выводит следующий цикл? let i=0; while (i>5){ i++; }',
      options: [
        { id: 'А', text: '0' },
        { id: 'Б', text: '4' },
        { id: 'В', text: '5' },
        { id: 'Г', text: '6' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 17,
      type: 'single',
      text: 'Какой метод изменяет порядок элементов массива, не копируя его?',
      options: [
        { id: 'А', text: 'unshift' },
        { id: 'Б', text: 'push' },
        { id: 'В', text: 'reverse' },
        { id: 'Г', text: 'concat' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 18,
      type: 'single',
      text: 'Какой метод используется для объединения двух, или более массивов в один?',
      options: [
        { id: 'А', text: 'unshift' },
        { id: 'Б', text: 'push' },
        { id: 'В', text: 'reverse' },
        { id: 'Г', text: 'concat' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 19,
      type: 'single',
      text: 'Что называют функциональными литералами?',
      options: [
        { id: 'А', text: 'функциональные выражения' },
        { id: 'Б', text: 'стрелочные функции' },
        { id: 'В', text: 'классические функции' },
        { id: 'Г', text: 'паттерн IIFE' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 20,
      type: 'single',
      text: 'Задает ширину текстового поля в символах аттрибут …',
      options: [
        { id: 'А', text: 'cols' },
        { id: 'Б', text: 'rows' },
        { id: 'В', text: 'readonly' },
        { id: 'Г', text: 'size' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 21,
      type: 'single',
      text: 'Флаг в регулярном выражении, который позволяет искать все совпадения, без него будет найдено только первое',
      options: [
        { id: 'А', text: 's' },
        { id: 'Б', text: 'm' },
        { id: 'В', text: 'g' },
        { id: 'Г', text: 'i' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 22,
      type: 'single',
      text: 'C помощью тега <img> в HTML-документе можно разместить …',
      options: [
        { id: 'А', text: 'объект мультимедиа' },
        { id: 'Б', text: 'таблицу' },
        { id: 'В', text: 'графический объект' },
        { id: 'Г', text: 'гиперссылку' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 23,
      type: 'single',
      text: 'Какое значение свойства display позволит сделать из блока грид-контейнер',
      options: [
        { id: 'А', text: 'display: block' },
        { id: 'Б', text: 'display:flex' },
        { id: 'В', text: 'display: inline' },
        { id: 'Г', text: 'display: grid' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 24,
      type: 'single',
      text: 'Флаг в регулярном выражении, который задаёт режим поиска на конкретной позиции в тексте',
      options: [
        { id: 'А', text: 's' },
        { id: 'Б', text: 'm' },
        { id: 'В', text: 'y' },
        { id: 'Г', text: 'i' }
      ],
      correctAnswer: 'В'
    },
    {
      id: 25,
      type: 'single',
      text: 'Какой из следующих методов используется для добавления нового элемента в конец массива в JavaScript?',
      options: [
        { id: 'А', text: 'array.push()' },
        { id: 'Б', text: 'array.add()' },
        { id: 'В', text: 'array.insert()' },
        { id: 'Г', text: 'array.append()' }
      ],
      correctAnswer: 'А'
    },
    {
      id: 26,
      type: 'single',
      text: 'Где верно указан запуск всплывающего окна?',
      options: [
        { id: 'А', text: 'new alert ("Hi")' },
        { id: 'Б', text: 'info ("Hi")' },
        { id: 'В', text: 'Нет верных вариантов' },
        { id: 'Г', text: 'alert ("Hi")' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 27,
      type: 'single',
      text: 'В чем отличие между локальной и глобальной переменной?',
      options: [
        { id: 'А', text: 'Локальные видны повсюду, глобальные только в функциях' },
        { id: 'Б', text: 'Глобальные можно переопределять, локальные нельзя' },
        { id: 'В', text: 'Локальные можно переопределять, глобальные нельзя' },
        { id: 'Г', text: 'Глобальные видны повсюду, локальные только в функциях' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 28,
      type: 'single',
      text: 'Где верно указан вывод данных?',
      options: [
        { id: 'А', text: 'print(Hello);' },
        { id: 'Б', text: 'prompt("Hello")' },
        { id: 'В', text: 'write("Hello");' },
        { id: 'Г', text: 'console.log("Hello");' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 29,
      type: 'single',
      text: 'Какая переменная записана неверно?',
      options: [
        { id: 'А', text: 'var num = "STRING";' },
        { id: 'Б', text: 'var isDone = 0;' },
        { id: 'В', text: 'var b = false;' },
        { id: 'Г', text: 'var number = 12,5;' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 30,
      type: 'single',
      text: 'Какие циклы есть в языке JavaScript?',
      options: [
        { id: 'А', text: 'or, forMap, foreach, while' },
        { id: 'Б', text: 'for, forMap, foreach, while, do while' },
        { id: 'В', text: 'for, while, do while, foreach' },
        { id: 'Г', text: 'for, while, do while' }
      ],
      correctAnswer: 'Г'
    },
    {
      id: 31,
      type: 'multiple',
      text: 'Какие методы используются для обработки строк?',
      options: [
        { id: 'А', text: 'toUpperCase()' },
        { id: 'Б', text: 'replace()' },
        { id: 'В', text: 'parse' },
        { id: 'Г', text: 'верного ответа нет' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 32,
      type: 'multiple',
      text: 'Укажите утверждения верные для функций в JavaScript',
      options: [
        { id: 'А', text: 'функция может содержать несколько операторов return' },
        { id: 'Б', text: 'аргументам функции можно задавать значения по умолчанию' },
        { id: 'В', text: 'внутри функции можно использовать arguments' },
        { id: 'Г', text: 'функция не может принимать в качестве аргументов другую функцию' }
      ],
      correctAnswer: ['А', 'Б', 'В']
    },
    {
      id: 33,
      type: 'multiple',
      text: 'Какие методы используются для работы с таймерами?',
      options: [
        { id: 'А', text: 'setTimeout()' },
        { id: 'Б', text: 'typeof()' },
        { id: 'В', text: 'setInterval()' },
        { id: 'Г', text: 'Number()' }
      ],
      correctAnswer: ['А', 'В']
    },
    {
      id: 34,
      type: 'multiple',
      text: 'Как обратиться к свойству name объекта? const user={ name:"Иван" }',
      options: [
        { id: 'А', text: 'user.name' },
        { id: 'Б', text: 'user["name"]' },
        { id: 'В', text: 'user[name]' },
        { id: 'Г', text: 'user(name)' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 35,
      type: 'multiple',
      text: 'Дана переменная let n = 0. Как увеличить переменную на 5?',
      options: [
        { id: 'А', text: 'n = n + 5' },
        { id: 'Б', text: 'n += 5' },
        { id: 'В', text: 'n = n - 5' },
        { id: 'Г', text: 'n -= 5' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 36,
      type: 'multiple',
      text: 'Преобразует строку в число',
      options: [
        { id: 'А', text: 'Number()' },
        { id: 'Б', text: '+' },
        { id: 'В', text: 'true' },
        { id: 'Г', text: 'false' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 37,
      type: 'multiple',
      text: 'Какие типы данных есть в JavaScript?',
      options: [
        { id: 'А', text: 'integer' },
        { id: 'Б', text: 'string' },
        { id: 'В', text: 'boolean' },
        { id: 'Г', text: 'number' }
      ],
      correctAnswer: ['Б', 'В', 'Г']
    },
    {
      id: 38,
      type: 'multiple',
      text: 'Какие варианты задания переменных/констант есть в JavaScript?',
      options: [
        { id: 'А', text: 'declare' },
        { id: 'Б', text: 'var' },
        { id: 'В', text: 'let' },
        { id: 'Г', text: 'constant' }
      ],
      correctAnswer: ['Б', 'В', 'Г']
    },
    {
      id: 39,
      type: 'multiple',
      text: 'Какое из следующих свойств используется для заливки фона блочных элементов?',
      options: [
        { id: 'А', text: 'background-color' },
        { id: 'Б', text: 'color' },
        { id: 'В', text: 'background' },
        { id: 'Г', text: 'font-color' }
      ],
      correctAnswer: ['А', 'В']
    },
    {
      id: 40,
      type: 'multiple',
      text: 'Какие методы используются для работы с элементом <canvas>?',
      options: [
        { id: 'А', text: 'getContext()' },
        { id: 'Б', text: 'fillRect()' },
        { id: 'В', text: 'array.add()' },
        { id: 'Г', text: 'map()' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 41,
      type: 'multiple',
      text: 'Какие методы добавляют элементы в массив?',
      options: [
        { id: 'А', text: 'unshift' },
        { id: 'Б', text: 'push' },
        { id: 'В', text: 'reverse' },
        { id: 'Г', text: 'concat' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 42,
      type: 'multiple',
      text: 'Директива, которая указывает режим загрузки кода JavaScript',
      options: [
        { id: 'А', text: 'use strict' },
        { id: 'Б', text: 'defer' },
        { id: 'В', text: '#ifdef' },
        { id: 'Г', text: 'async' }
      ],
      correctAnswer: ['Б', 'Г']
    },
    {
      id: 43,
      type: 'multiple',
      text: 'Что является атрибутом однострочного поля ввода?',
      options: [
        { id: 'А', text: 'placeholder' },
        { id: 'Б', text: 'required' },
        { id: 'В', text: 'selected' },
        { id: 'Г', text: 'checked' }
      ],
      correctAnswer: ['А', 'Б']
    },
    {
      id: 44,
      type: 'multiple',
      text: 'Укажите арифметические операторы в JavaScript',
      options: [
        { id: 'А', text: '+' },
        { id: 'Б', text: '&&' },
        { id: 'В', text: '>=' },
        { id: 'Г', text: '*' }
      ],
      correctAnswer: ['А', 'Г']
    },
    {
      id: 45,
      type: 'multiple',
      text: 'Укажите флаги для регулярного выражения',
      options: [
        { id: 'А', text: 'b' },
        { id: 'Б', text: 'с' },
        { id: 'В', text: 'g' },
        { id: 'Г', text: 'i' }
      ],
      correctAnswer: ['В', 'Г']
    },
    {
      id: 46,
      type: 'multiple',
      text: 'Параметр href является обязательным для тегов',
      options: [
        { id: 'А', text: '<a>' },
        { id: 'Б', text: '<ol>' },
        { id: 'В', text: '<link>' },
        { id: 'Г', text: '<img>' }
      ],
      correctAnswer: ['А', 'В']
    },
    {
      id: 47,
      type: 'multiple',
      text: 'Какой из следующих операторов нельзя использовать для сравнения в JavaScript?',
      options: [
        { id: 'А', text: '==' },
        { id: 'Б', text: '===' },
        { id: 'В', text: '=' },
        { id: 'Г', text: '!=' }
      ],
      correctAnswer: ['В', 'Г']
    },
    {
      id: 48,
      type: 'multiple',
      text: 'Где можно использовать JavaScript?',
      options: [
        { id: 'А', text: 'Веб-приложения' },
        { id: 'Б', text: 'Серверные приложения' },
        { id: 'В', text: 'Прикладное программное обеспечение' },
        { id: 'Г', text: 'Системное программирование' }
      ],
      correctAnswer: ['А', 'Б', 'В']
    },
    {
      id: 49,
      type: 'multiple',
      text: 'Где верно указано имя переменной?',
      options: [
        { id: 'А', text: 'var 2num' },
        { id: 'Б', text: 'ver num' },
        { id: 'В', text: 'let num2' },
        { id: 'Г', text: 'var num1' }
      ],
      correctAnswer: ['В', 'Г']
    },
    {
      id: 50,
      type: 'multiple',
      text: 'Какой метод используется для работы с числами?',
      options: [
        { id: 'А', text: 'isInteger()' },
        { id: 'Б', text: 'toString()' },
        { id: 'В', text: 'Number()' },
        { id: 'Г', text: 'Все вышеперечисленные' }
      ],
      correctAnswer: ['А', 'В']
    },
    {
      id: 51,
      type: 'matching',
      text: 'Поставьте в соответствие методы JavaScript и их действия',
      matchItems: [
        { id: '1', text: 'querySelectorAll' },
        { id: '2', text: 'createElement' },
        { id: '3', text: 'innerHTML' },
        { id: '4', text: 'remove' }
      ],
      matchTargets: [
        { id: 'А', text: 'позволяет удалить элемент (применяется к тому элементу, который нужно удалить)' },
        { id: 'Б', text: 'позволяет создать новый элемент, передав в параметре имя тега' },
        { id: 'В', text: 'позволяет добавить или изменить элементу текст' },
        { id: 'Г', text: 'возвращает все элементы, удовлетворяющие CSS-селектору' }
      ],
      correctAnswer: { 1: 'Г', 2: 'Б', 3: 'В', 4: 'А' }
    },
    {
      id: 52,
      type: 'matching',
      text: 'Поставьте в соответствие события JavaScript и их действия',
      matchItems: [
        { id: '1', text: 'onFocus' },
        { id: '2', text: 'onKeyDown' },
        { id: '3', text: 'onDblClick' },
        { id: '4', text: 'onLoad' }
      ],
      matchTargets: [
        { id: 'А', text: 'Двойной щелчок' },
        { id: 'Б', text: 'Закончена загрузка документа' },
        { id: 'В', text: 'Нажата и отпущена клавиша на клавиатуре' },
        {
          id: 'Г',
          text: 'Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции)'
        }
      ],
      correctAnswer: { 1: 'Г', 2: 'В', 3: 'А', 4: 'Б' }
    },
    {
      id: 53,
      type: 'matching',
      text: 'Поставьте в соответствие операторы JavaScript и их обозначение',
      matchItems: [
        { id: '1', text: 'Побитовое И' },
        { id: '2', text: 'Побитовое ИЛИ' },
        { id: '3', text: 'Побитовое исключающее ИЛИ' },
        { id: '4', text: 'Побитовый сдвиг влево' }
      ],
      matchTargets: [
        { id: 'А', text: '&' },
        { id: 'Б', text: '|' },
        { id: 'В', text: '^' },
        { id: 'Г', text: '<<' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 54,
      type: 'matching',
      text: 'Поставьте в соответствие методы JS и их назначение',
      matchItems: [
        { id: '1', text: 'toUpperCase()' },
        { id: '2', text: 'indexOf()' },
        { id: '3', text: 'substr()' },
        { id: '4', text: 'shift()' }
      ],
      matchTargets: [
        { id: 'А', text: 'используется для преобразования всех символов в строке в верхний регистр' },
        { id: 'Б', text: 'возвращает индекс первого вхождения указанного значения в строке' },
        { id: 'В', text: 'возвращает указанное количество символов из строки, начиная с указанной позиции' },
        { id: 'Г', text: 'удаляет первый элемент из массива и возвращает его значение' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 55,
      type: 'matching',
      text: 'Поставьте в соответствие методы объекта Math и их назначение',
      matchItems: [
        { id: '1', text: 'абсолютная величина аргумента' },
        { id: '2', text: 'наименьшее/большее или равное целое' },
        { id: '3', text: 'наибольшее/наименьшее/равное число' },
        { id: '4', text: 'округление до целого' }
      ],
      matchTargets: [
        { id: 'А', text: 'abs' },
        { id: 'Б', text: 'ceil' },
        { id: 'В', text: 'floor' },
        { id: 'Г', text: 'round' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 56,
      type: 'matching',
      text: 'Поставьте в соответствие методы для работы с объектами в JavaScript и их назначение',
      matchItems: [
        { id: '1', text: 'Object.values()' },
        { id: '2', text: 'Object.keys()' },
        { id: '3', text: 'Object.freeze()' },
        { id: '4', text: 'Object.seal()' }
      ],
      matchTargets: [
        { id: 'А', text: 'Позволяет получить все значения, заключённые в объекте' },
        { id: 'Б', text: 'Возвращает массив, содержащий все ключи внутри объекта' },
        { id: 'В', text: 'Позволяет заморозить объект, передаваемый ему в качестве аргумента' },
        { id: 'Г', text: 'Предотвращает добавление новых свойств к объекту' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 57,
      type: 'matching',
      text: 'Поставьте в соответствие методы для работы с объектами в JavaScript и их назначение',
      matchItems: [
        { id: '1', text: 'Object.values()' },
        { id: '2', text: 'Object.keys()' },
        { id: '3', text: 'Object.create()' },
        { id: '4', text: 'Object.assign()' }
      ],
      matchTargets: [
        { id: 'А', text: 'Позволяет получить все значения, заключённые в объекте' },
        { id: 'Б', text: 'Возвращает массив, содержащий все ключи внутри объекта' },
        { id: 'В', text: 'Позволяет создавать новые объекты и соединять их с прототипами существующих объектов' },
        { id: 'Г', text: 'Копирует значения из одного объекта в другой' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 58,
      type: 'matching',
      text: 'Поставьте в соответствие операции сравнения и их обозначение',
      matchItems: [
        { id: '1', text: 'равенство' },
        { id: '2', text: 'строгое равенство' },
        { id: '3', text: 'неравенство' },
        { id: '4', text: 'строгое неравенство' }
      ],
      matchTargets: [
        { id: 'А', text: '==' },
        { id: 'Б', text: '===' },
        { id: 'В', text: '!=' },
        { id: 'Г', text: '!==' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 59,
      type: 'matching',
      text: 'Поставьте в соответствие операторы и их обозначение',
      matchItems: [
        { id: '1', text: 'увеличивает значение переменной на единицу' },
        { id: '2', text: 'уменьшают значение переменной на единицу' },
        { id: '3', text: 'используется для сокращённой записи условных выражений' },
        { id: '4', text: 'позволяет выполнить несколько выражений в одной строке кода' }
      ],
      matchTargets: [
        { id: 'А', text: '++' },
        { id: 'Б', text: '--' },
        { id: 'В', text: '? :' },
        { id: 'Г', text: ',' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 60,
      type: 'matching',
      text: 'Подставьте в соответствие свойства элемента form и их назначение',
      matchItems: [
        { id: '1', text: 'Тип содержимого, используемый для отправки формы на сервер' },
        {
          id: '2',
          text: 'Имя окна или фрейма для загрузки документа, сгенерированного сценарием на основании принятых из формы данных'
        },
        { id: '3', text: 'Количество элементов формы' },
        { id: '4', text: 'Массив элементов формы' }
      ],
      matchTargets: [
        { id: 'А', text: 'encoding' },
        { id: 'Б', text: 'etype' },
        { id: 'В', text: 'length' },
        { id: 'Г', text: 'elements[]' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 61,
      type: 'matching',
      text: 'Поставьте в соответствие обработчики событий и их описание',
      matchItems: [
        { id: '1', text: 'onClick' },
        { id: '2', text: 'onDblClick' },
        { id: '3', text: 'onFocus' },
        { id: '4', text: 'onKeyDown' }
      ],
      matchTargets: [
        { id: 'А', text: 'Одинарный щелчок (нажата и отпущена кнопка мыши)' },
        { id: 'Б', text: 'Двойной щелчок' },
        {
          id: 'В',
          text: 'Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции)'
        },
        { id: 'Г', text: 'Нажата клавиша на клавиатуре' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 62,
      type: 'matching',
      text: 'Подставьте в соответствие основные атрибуты элемента form и их назначение',
      matchItems: [
        { id: '1', text: 'список кодировок символов ввода данных, которые будут обрабатываться сервером' },
        { id: '2', text: 'тип содержимого, используемый для отправки формы на сервер' },
        { id: '3', text: 'метод передачи данных серверу' },
        { id: '4', text: 'адрес файла серверного сценария, который будет обрабатывать заполненную и переданную форму' }
      ],
      matchTargets: [
        { id: 'А', text: 'accept-charset' },
        { id: 'Б', text: 'enctype' },
        { id: 'В', text: 'method' },
        { id: 'Г', text: 'action' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 63,
      type: 'matching',
      text: 'Поставьте в соответствие обработчики событий и их описание',
      matchItems: [
        { id: '1', text: 'onMouseDown' },
        { id: '2', text: 'onMouseMove' },
        { id: '3', text: 'onMouseOut' },
        { id: '4', text: 'onMouseOver' }
      ],
      matchTargets: [
        { id: 'А', text: 'Нажата кнопка мыши в пределах текущего элемента' },
        { id: 'Б', text: 'Перемещение курсора мыши в пределах текущего элемента' },
        { id: 'В', text: 'Курсор мыши выведен за пределы текущего элемента' },
        { id: 'Г', text: 'Курсор мыши наведен на текущий элемент' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 64,
      type: 'matching',
      text: 'Поставьте в соответствие обработчики событий и их описание',
      matchItems: [
        { id: '1', text: 'onMouseUp' },
        { id: '2', text: 'onKeyPress' },
        { id: '3', text: 'onKeyUp' },
        { id: '4', text: 'onFocus' }
      ],
      matchTargets: [
        { id: 'А', text: 'Отпущена кнопка мыши в пределах текущего элемента' },
        { id: 'Б', text: 'Нажата и отпущена клавиша на клавиатуре' },
        { id: 'В', text: 'Отпущена клавиша на клавиатуре' },
        {
          id: 'Г',
          text: 'Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции)'
        }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 65,
      type: 'matching',
      text: 'Приведите в соответствие операторы и их группы',
      matchItems: [
        { id: '1', text: 'Арифметические' },
        { id: '2', text: 'Логические' },
        { id: '3', text: 'Операторы инкремента' },
        { id: '4', text: 'Операторы сравнения' }
      ],
      matchTargets: [
        { id: 'А', text: '%' },
        { id: 'Б', text: '&&' },
        { id: 'В', text: '++' },
        { id: 'Г', text: '!=' }
      ],
      correctAnswer: { 1: 'А', 2: 'Б', 3: 'В', 4: 'Г' }
    },
    {
      id: 66,
      type: 'sequence',
      text: 'Установите последовательность появления тегов в HTML-документе',
      options: [
        { id: 'А', text: '<head>' },
        { id: 'Б', text: '<body>' },
        { id: 'В', text: '<title>' },
        { id: 'Г', text: '</div>' },
        { id: 'Д', text: '</html>' }
      ],
      correctAnswer: ['А', 'В', 'Б', 'Г', 'Д']
    },
    {
      id: 67,
      type: 'sequence',
      text: 'Установите верную последовательность появления фреймворков JS',
      options: [
        { id: 'А', text: 'Angular' },
        { id: 'Б', text: 'React' },
        { id: 'В', text: 'Vue' },
        { id: 'Г', text: 'jQuery' }
      ],
      correctAnswer: ['Г', 'А', 'Б', 'В']
    },
    {
      id: 68,
      type: 'sequence',
      text: 'Установите верную последовательность появления версий ECMAScript',
      options: [
        { id: 'А', text: 'ES2015' },
        { id: 'Б', text: 'ES7' },
        { id: 'В', text: 'ES8' },
        { id: 'Г', text: 'ES3' }
      ],
      correctAnswer: ['Г', 'А', 'Б', 'В']
    },
    {
      id: 69,
      type: 'sequence',
      text: 'Установите приоритет выполнения операций в JavaScript (по возрастанию)',
      options: [
        { id: 'А', text: 'Присваивание' },
        { id: 'Б', text: 'Деление' },
        { id: 'В', text: 'Возведение в степень' },
        { id: 'Г', text: 'Унарный минус' }
      ],
      correctAnswer: ['А', 'Б', 'В', 'Г']
    },
    {
      id: 70,
      type: 'sequence',
      text: 'Установите приоритет выполнения операций в JavaScript (по возрастанию)',
      options: [
        { id: 'А', text: 'Возведение в степень' },
        { id: 'Б', text: 'Сложение' },
        { id: 'В', text: 'Умножение' },
        { id: 'Г', text: 'Унарный плюс' }
      ],
      correctAnswer: ['Б', 'В', 'А', 'Г']
    },
    {
      id: 71,
      type: 'sequence',
      text: 'Установите последовательность появления в HTML-документах тегов',
      options: [
        { id: 'А', text: '<head>' },
        { id: 'Б', text: '<!Doctype>' },
        { id: 'В', text: '<html>' },
        { id: 'Г', text: '</html>' }
      ],
      correctAnswer: ['Б', 'В', 'А', 'Г']
    },
    {
      id: 72,
      type: 'sequence',
      text: 'Установите последовательность появления в HTML-документах тегов',
      options: [
        { id: 'А', text: '<head>' },
        { id: 'Б', text: '<title>' },
        { id: 'В', text: '<html>' },
        { id: 'Г', text: '<h1>' }
      ],
      correctAnswer: ['В', 'А', 'Б', 'Г']
    },
    {
      id: 73,
      type: 'sequence',
      text: 'Установите последовательность появления в HTML-документах тегов',
      options: [
        { id: 'А', text: '<body>' },
        { id: 'Б', text: '<title>' },
        { id: 'В', text: '</body>' },
        { id: 'Г', text: '<nav>' }
      ],
      correctAnswer: ['Б', 'А', 'Г', 'В']
    },
    {
      id: 74,
      type: 'sequence',
      text: 'Установите последовательность появления версий языка разметки HTML',
      options: [
        { id: 'А', text: 'XHTML1.0' },
        { id: 'Б', text: 'HTML2' },
        { id: 'В', text: 'HTML4.01' },
        { id: 'Г', text: 'HTML5.0' }
      ],
      correctAnswer: ['Б', 'В', 'А', 'Г']
    },
    {
      id: 75,
      type: 'sequence',
      text: 'Установите последовательность появления тегов в HTML-документе',
      options: [
        { id: 'А', text: 'title' },
        { id: 'Б', text: 'head' },
        { id: 'В', text: 'header' },
        { id: 'Г', text: 'footer' }
      ],
      correctAnswer: ['Б', 'А', 'В', 'Г']
    },
    {
      id: 76,
      type: 'sequence',
      text: 'Установите последовательность появления тегов в HTML-документе',
      options: [
        { id: 'А', text: 'meta' },
        { id: 'Б', text: 'head' },
        { id: 'В', text: 'h1' },
        { id: 'Г', text: 'body' }
      ],
      correctAnswer: ['Б', 'А', 'Г', 'В']
    },
    {
      id: 77,
      type: 'sequence',
      text: 'Установите последовательность появления тегов в HTML-документе',
      options: [
        { id: 'А', text: 'meta' },
        { id: 'Б', text: '/head' },
        { id: 'В', text: '/h1' },
        { id: 'Г', text: '/body' }
      ],
      correctAnswer: ['А', 'Б', 'В', 'Г']
    },
    {
      id: 78,
      type: 'sequence',
      text: 'Установите последовательность появления тегов в HTML-документе',
      options: [
        { id: 'А', text: '/nav' },
        { id: 'Б', text: 'head' },
        { id: 'В', text: 'html' },
        { id: 'Г', text: 'body' }
      ],
      correctAnswer: ['В', 'Б', 'Г', 'А']
    },
    {
      id: 79,
      type: 'sequence',
      text: 'Установите последовательность появления технологий раскладки объектов на веб-странице',
      options: [
        { id: 'А', text: 'табличная верстка' },
        { id: 'Б', text: 'flexbox' },
        { id: 'В', text: 'стиль float' },
        { id: 'Г', text: 'вёрстка фреймами' }
      ],
      correctAnswer: ['А', 'Г', 'В', 'Б']
    },
    {
      id: 80,
      type: 'sequence',
      text: 'Установите последовательность появления технологий раскладки объектов на веб-странице',
      options: [
        { id: 'А', text: 'табличная верстка' },
        { id: 'Б', text: 'вёрстка фреймами' },
        { id: 'В', text: 'CSS Grid' },
        { id: 'Г', text: 'раскладка с помощью position' }
      ],
      correctAnswer: ['А', 'Б', 'Г', 'В']
    },
    {
      id: 81,
      type: 'open',
      text: 'Какое значение переменной i первым выводит следующий цикл?\nlet i=0;\nwhile (i>5){\ni++;\n}',
      correctAnswer: '0'
    },
    {
      id: 82,
      type: 'open',
      text: 'Как правильно в переменную d поместить температуру человеческого тела тридцать шесть целых и шесть десятых?',
      correctAnswer: 'let d=36.6;//разделитель - точка'
    },
    {
      id: 83,
      type: 'open',
      text: 'Чему будет равно значение переменной i после выполнения следующего кода?\nlet i=1;\ni=(i==1)?100:200;',
      correctAnswer: '100'
    },
    {
      id: 84,
      type: 'open',
      text: 'Что будет результатом выполнения выражения? 3>4 ? 5:6',
      correctAnswer: '6'
    },
    {
      id: 85,
      type: 'open',
      text: 'Что вернёт функция sum?\nfunction sum(a,b=3){\na+b;\n}\nconsole.log(sum(2));',
      correctAnswer: 'undefined'
    },
    {
      id: 86,
      type: 'open',
      text: 'Какой оператор определяет тип переменной?',
      correctAnswer: 'typeof'
    },
    {
      id: 87,
      type: 'open',
      text: 'Что будет результатом выполнения выражения? "23"+17-"10"+20',
      correctAnswer: '2327'
    },
    {
      id: 88,
      type: 'open',
      text: 'Какому году соответствует выражение с new Date()? new Date(parseInt("2020-10-03"))',
      correctAnswer: '1970'
    },
    {
      id: 89,
      type: 'open',
      text: 'Что будет результатом выполнения выражения? 3>4 ? 5:6',
      correctAnswer: '6'
    },
    {
      id: 90,
      type: 'open',
      text: 'Чему будет равно значение переменной i после выполнения следующего кода?\nlet i=1;\ni=(i==1)?100:200;',
      correctAnswer: '100'
    }
  ]
}
