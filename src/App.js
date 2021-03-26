import logo from './logo.svg';
import './App.css';
import APIGEN from './component/APIGEN';
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App" >
     <APIGEN />
    </div>
    </Provider>
  );
}

export default App;
