import React, { useState } from "react";
import './../index.css'
import { requestResetPassword } from "../api/ApiFunction";

const ResetPass = () => {
  const [email, setEmail] = useState('');
  
  const handleChangeEmail = (email) => {
    console.log(email)
    setEmail(email)
  }

  async function handleRequest(email){
    if (email !== ''){
        const status = await requestResetPassword(email)
        if (status === 200){
          setEmail('')          
          alert('Email został wysłany na Twoje konto. Uwaga! W razie braku emaila, sprawdź również folder spamu.')                  
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
            <h1>
                Witaj ponownie!
            </h1>
            <h2>
                Pomożemy Ci odzyskać Twoje hasło! Wpisz swój adres e-mail poniżej,
                        a my wyślemy ci na niego link resetujący hasło.
                        Upewnij się, że mail nie wylądował w spamie.
            </h2>
            <div className="reset-pass-btns">
              <input
                id='email'
                placeholder="Podaj swój adres e-mail"
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
              />
              <button 
                id='send-email'
                className="reset-pass-btns"                
                onClick={() => handleRequest(email)}>
                Wyślij
              </button>
            </div>
        </section>
    </React.Fragment>
  );
};

export default ResetPass;
