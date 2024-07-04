import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
    </SafeAreaView>
  );
};

export default Home;
