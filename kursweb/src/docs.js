// фронт энд - клиентское приложение для ui состовляюще
// бэк энд - прокси сервер, сервер, база данных {sql - реляционные, nosql - не реляционные}, сторонее хранилище {яндекс облако}

// node - программная платформа для выполнения js на стороне сервера
// express - фраймворк для node, отвечающий за структуру, облегчающую маршрутизацию
// структура сервера 
// маршрутизация
// /login - авторизация пользователя
// /post - добавить пост в базу даннных
// /logout - выход из системы

//струкрура запроса
// token - уникальный идентификатор пользователя - строка
// получаем например посты - get 
// шлем данные и что-то получаем post. - 200 ок, 404 - not found, 500 - ошибки сервера

// request - входящий запрос, содержащий данные о пользователе



// html  теги
// div - блочный , header - блочный
// p, span - строчный
// input - блочный

// блочный - занимает всю доступную ширину
// строчный - отображается в строчку


// типы данных в js
const number = 2; // число
const string = 'строка'; // строка
const TRUE = true; // булевые
const FALSE = false; // булевые
// объект
const user = {
  name: 'Nickname',
  password: '*********',
  number: '899923232121',
};
// Массив
const array = [user, user, user];
// функция
function sum(a, b) {
  return a + b;
}