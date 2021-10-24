import logo from './logo.svg'
import React, {useState} from 'react';
import './App.css';

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

const onSingle = () => {
  console.log('sing in')
  fetch('/login', {data: data})
}


function App() {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmailText(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="AppPage">
      <header className="headerblok">Блок Header </header>
      <div className="content">
        <div className="emailForm">
          <input className="EmailFilld" type="text" placeholder="Email" />
        </div>
        <div className="PasswordFill">
          <input
            className="passForm"
            type="password"
            placeholder="Введите пароль"
            onChange={handleChangePassword}
          />
        </div>
      </div>

      <div>
        <button 
        className = "Registation"
        onChange={handleChangeEmail}
        //disabled = {true} // нельзя нажимать на кнопку
        >
          Зарегистрироваться
        </button>
      </div>
      <div>
        <button 
        className = "SingIn"
        onClick={onSingle}
        disabled = {!passwordText && !emailText} //если пароль не введен то кнопку не нажмем
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default App;
