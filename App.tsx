import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Intro1,
  Intro2,
  Intro3,
  Home,
  Note,
  Hama,
  KutuDaun,
} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hama"
          component={Hama}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="KutuDaun"
          component={KutuDaun}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
