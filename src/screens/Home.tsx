import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';
import TabView from '../components/TabView';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <TabView />
    </SafeAreaView>
  );
};

export default Home;
