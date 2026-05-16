import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleClick(){
        if (isLoggedIn === false && email.length>0)
        {setIsLoggedIn(true)}
        else {setIsLoggedIn(false);}
    }

    let message;
    if (email.length < 5) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 10) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    let logMessage;
    let logHello = 'Witaj '+ email;
    if (isLoggedIn)
        {logMessage = 'Zalogowany';}
    else
        {logMessage = 'Niezalogowany';}


  return (
      <div>
          <h1>System do zapisów na zajęcia</h1>

          {/*<h2>Twój e-mail to {email.toUpperCase()}</h2>*/}
          {/*{!isLoggedIn && email.length > 0 && message}*/}
          {!isLoggedIn &&
          <div>
            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>Zaloguj</button>
          </div>
          }
          {/*<button type="button" onClick={() => alert(email)}>*/}
          {/*    Wyświetl mój e-mail w alercie*/}
          {/*</button>*/}
          {isLoggedIn &&
          <div>
          <h1>Witaj {email}</h1>
          <button type="button" onClick={handleClick}>Wyloguj</button>
              <br/><br/>
          <a href="#" onClick={() => handleClick()}> Wyloguj </a>
              <br/><br/>
          </div>
          }
          <br/>
          {logMessage}


      </div>
  );
}

export default App;
