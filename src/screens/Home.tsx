import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import TabView from '../components/TabView';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView className="flex-1 bg-app-grey">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header />
        <TabView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
