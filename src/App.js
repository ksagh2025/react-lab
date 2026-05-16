import logo from './logo.svg';
import './App.css';

function App() {
    let email = 'ReactTest@agh.edu.pl';

    function handleChange(event) {
        console.log(event.target.value);
    }
  return (
    <div>
        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email.toUpperCase()}</h2>
        <h3>{2+2}</h3>
        <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
