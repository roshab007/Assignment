import {StatusBar} from 'react-native';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Home />
    </>
  );
};

export default App;
