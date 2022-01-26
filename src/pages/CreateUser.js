import React, { useState } from "react";
import { requestUser } from "../api/ApiFunction";

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const handleChangeEmail = (email) => {
    setEmail(email)
  }
  
  const handleChangePassword = (pass) => {
    setPassword(pass)
  }

  async function handleRequest(email, password){
    if (email !== '' && password !== ''){
        const status = await requestUser(email, password)
        console.log(status)
        if (status === 200){
          setEmail('')
          setPassword('')
          alert('Dzięki za załozenie konta w naszym serwisie.')                  
        } else {
          alert('Coś poszło nie tak... Spróbuj raz jeszcze')
        }
    } else {
      alert('Wprowadź poprawnie dane.')
    }
  }

  return (
    <React.Fragment>
        <section>            
            <h2>
              Podaj swój email:
            </h2>
            <input
             placeholder="Podaj swój adres e-mail"
             value={email}
             onChange={(e) => handleChangeEmail(e.target.value)}
            />
            <h2>
              Podaj hasło:
            </h2>
            <input
             placeholder="Podaj swoje hasło"
             value={password}
             onChange={(e) => handleChangePassword(e.target.value)}
            />
            <button 
                id='send-email'
                className="reset-pass-btns"                
                onClick={() => handleRequest(email, password)}>
                Wyślij
            </button>
        </section>
    </React.Fragment>
  );
};

export default CreateUser;
