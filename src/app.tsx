import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';

const App = (): ReactElement => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
