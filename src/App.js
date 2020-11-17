import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <TodoForm />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
