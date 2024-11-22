import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Intro1,
  Intro2,
  Intro3,
  Diseases,
  Layu,
  BercakDaun,
  LayuBakteri,
  Mosaik,
  BuahBusuk,
  BusukDaun,
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
          name="Diseases"
          component={Diseases}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Layu"
          component={Layu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BercakDaun"
          component={BercakDaun}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LayuBakteri"
          component={LayuBakteri}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mosaik"
          component={Mosaik}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuahBusuk"
          component={BuahBusuk}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BusukDaun"
          component={BusukDaun}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
