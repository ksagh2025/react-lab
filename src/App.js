import logo from './logo.svg';
import './App.css';
import "milligram";
import LoginForm from "./LoginForm";
import {useState} from 'react';
import UserPanel from "./UserPanel";

function App() {
    // const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [loggedInUsername, setIsLoggedInUsername] = useState(null);

    // function handleChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handleClick(){
    //     if (loggedInUsername === false && email.length>0)
    //     {setLoggedInUsername(email)}
    //     else {setLoggedInUsername(email);}
    // }

    // function handleLogin(email){
    //     setIsLoggedIn(true);
    //     setEmail(email);
    // }

    // let message;
    // if (email.length < 5) {
    //     message = <div>Ale masz krótki adres!</div>;
    // } else if (email.length < 10) {
    //     message = <div>Twój adres e-mail jest w sam raz.</div>;
    // } else {
    //     message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    // }
    //
    // let logMessage;
    // let logHello = 'Witaj '+ email;

  return (

      <div className="container">
          <h1>System do zapisów na zajęcia</h1>
          {
              loggedInUsername ?
                  <UserPanel email={loggedInUsername} onLogout={() => setIsLoggedInUsername(null)} /> :
                  <LoginForm onLogin={(email) => setIsLoggedInUsername(email)} />
          }
          {/*{!isLoggedIn && <LoginForm onLogin ={handleLogin} />}*/}

          {/*{isLoggedIn && <UserPanel email={email} onLogout={() => setIsLoggedIn(false)} />*/}
          {/*// <div>*/}
          {/*// <h1>Witaj {email}</h1>*/}
          {/*// <button type="button" onClick={handleClick}>Wyloguj</button>*/}
          {/*//     <br/><br/>*/}
          {/*// <a href="#" onClick={() => handleClick()}> Wyloguj </a>*/}
          {/*//     <br/><br/>*/}
          {/*// </div>*/}
          {/*}*/}
          {/*<br/>*/}
          {/*{logMessage}*/}


      </div>
  );
}

export default App;
