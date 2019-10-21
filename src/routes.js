import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/Login';
import Book from './pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Book,
  }),
);

export default Routes;
