import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import Home from './src/screens/Home';

const App: React.FC = () => {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Home />
    </>
  );
};

export default App;
