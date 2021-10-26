//import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';


// const onSingle = () => {
//   console.log('sing in')
//   //fetch('/login', {data: data})
// }


function App() {
  // const [emailText, setEmailText] = useState('');
  // const [passwordText, setPassword] = useState('');

  // const handleChangeEmail = (e) => {
  //   setEmailText(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div className="AppPage">
      
      <Header />

      <Content />
      
    </div>
  );
}

export default App;
