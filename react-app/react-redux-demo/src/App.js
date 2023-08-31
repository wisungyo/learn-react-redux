import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import BundleCakeContainer from './components/BundleCakeContainer';
import BundleHooksCakeContainer from './components/BundleHooksCakeContainer';
import Separator from './components/Separator';
import BundleHooksIceCreamContainer from './components/BundleHooksIceCreamContainer';
import HooksUsersComponent from './components/HooksUsersComponent';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <Separator />

        <HooksIceCreamContainer />
        <BundleHooksIceCreamContainer />
        <Separator />

        <BundleCakeContainer />
        <BundleHooksCakeContainer /> */}

        <HooksUsersComponent />
        {/* <UsersComponent /> */}
      </div>
    </Provider>
  );
}

export default App;
