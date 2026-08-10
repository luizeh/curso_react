import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{name: "Otavio", email: "otaio.silva1661@gmail.com", bio: "Meu nome é otavio e eu tenho aurex", role: "admin"}}/>
    </div>
  );
}

export default App;
