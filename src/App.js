
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddComentury from './components/AddComentury/AddComentury';
import TodosContextProvider from './contexts/TodosComtext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TodosContextProvider>
        <AddComentury />
      </TodosContextProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
