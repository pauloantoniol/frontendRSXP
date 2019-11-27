import Reactotron from 'reactotron-react-js';

const isFirefox = typeof InstallTrigger !== 'undefined';

if (process.env.NODE_ENV === 'development' && !isFirefox) {
  const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
