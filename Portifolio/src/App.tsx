import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Bem-vindo à Home!</h1>
        <p>Essa é a página principal do seu site.</p>
      </main>
    </>
  );
}

export default App;
