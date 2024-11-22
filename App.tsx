import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Intro1,
  Intro2,
  Intro3,
  WelcomePage,
  Home,
  Note,
  Hama,
  KutuDaun,
  UlatBuah,
  KutuAphis,
  CacingTanah,
  LalatBuah,
  KutuKebul,
  EditNote,
  AccountPage,
  FavoritePage,
  Option,
  Diseases,
} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';

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
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="EditNote"
          component={EditNote}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="AccountPage"
          component={AccountPage}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="FavoritePage"
          component={FavoritePage}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Option"
          component={Option}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Diseases"
          component={Diseases}
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
        <Stack.Screen
          name="UlatBuah"
          component={UlatBuah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="KutuAphis"
          component={KutuAphis}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CacingTanah"
          component={CacingTanah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LalatBuah"
          component={LalatBuah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="KutuKebul"
          component={KutuKebul}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
