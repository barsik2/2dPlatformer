import React, {useState} from 'react';
import './content.css'



const Сontent = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPassword] = useState('');


    const onSingle = () => {
        console.log('sing in')
        //fetch('/login', {data: data})
      }

    const handleChangeEmail = (e) => {
      setEmailText(e.target.value);
    };
  
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };

    return (
        
        <div className="content">

            <div className="emailForm">
                <input className="EmailFilld"
                type="text"
                placeholder="Email" 
                //value={emailText}
                />
            </div>
            <div className="PasswordFill">
                <input
                    className="passForm"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChangePassword}
                />
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

      
      
    )
}

export default Сontent;