import React, { useState } from "react";
import { requestChangePassword } from "../api/ApiFunction";
import { useParams } from 'react-router-dom';

const NewPass = (props) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { token } = useParams();
  const handleChangePassword = (obj, pass) => {
    if (obj === 'password'){
      setPassword(pass)
    } else {
      setRepeatPassword(pass)
    }
  }
  
  async function handleRequest(password, repeatPassword){
    if (password === repeatPassword && password !== ''){
        const status = await requestChangePassword(password, token)
        if (status === 200){
          setRepeatPassword('')
          setPassword('')
          alert('Hasło zmienione.')                  
        } 
        else if (status===400){
          alert('Zbyt słabe hasło. Powinno zawierać cyfrę i małą literę. 8 znaków jest wymaganych.')                  
        } 
        else if (status===402){
          alert('Podany link wygasł lub nie istnieje.')                  
        }
        else {
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
              Podaj nowe hasło:
            </h2>
            <input 
              name="password"
              value={password}
              onChange={(e) => handleChangePassword(e.target.name, e.target.value)}
              placeholder="hasło" />
            <h2>
              Potwierdź hasło:
            </h2>
            <input 
              name="repeatPassword"            
              value={repeatPassword}
              onChange={(e) => handleChangePassword(e.target.name, e.target.value)}
              placeholder="powtórz hasło" />
             <button 
                id='send-email'
                className="reset-pass-btns"                
                onClick={() => handleRequest(password, repeatPassword)}>
                Wyślij
              </button>
        </section>
    </React.Fragment>
  );
};

export default NewPass;
