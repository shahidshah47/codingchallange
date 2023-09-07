import React from 'react';

import { Provider } from 'react-redux';
import store from './src/utils/store'; 
import AppNavigator from './src/navigation/AppNavigator'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
enableScreens();




const App = () => {
  
  return (

    <SafeAreaProvider >
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;