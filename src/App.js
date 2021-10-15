import { User } from "./User";
import  './App.css';
import { Citi } from "./Citi";
function App() {
  let arr =["..Images/1543919169.jpg",
  "../Images/unnamed.jpg",
  "../Images/unnamed (1).jpg"]
  let user = new User("Григорьев","Андрей","Викторович","0684267002","Email@.com");
  let citi = new Citi("Кривой Рог","Украина","24 августа 1991 г", arr)
  return (
    <div>
      <h2 className="Text">Hello, React</h2>
      <div className="Conteiner">
      {user.getUser()}
      <div>
        {citi.getSiti()}
        {citi.getPaths()}
      </div>
      </div>
    </div>
  );
}

export default App;
