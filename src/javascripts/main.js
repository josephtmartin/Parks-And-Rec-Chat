import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';
import selectUser from './components/selectUser';
import add from './components/addMessage';
import clear from './components/clearMessage';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  selectUser.userSelectionClick();
  dark.darkMode();
  add.addMessage();
  clear.clearMessage();
};

init();
