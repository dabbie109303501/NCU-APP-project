import React, { useState } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Icon, NativeBaseProvider } from 'native-base';
import AwesomeIcon from '@expo/vector-icons/FontAwesome5';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AuthScreen from './screens/Auth';
import DashboardScreen from './screens/Dashboard';
import CalendarScreen from './screens/Calendar';
import MapScreen from './screens/Map';
import SaleScreen from './screens/Sale';
import EventScreen from './screens/Event';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA8GH6yj1i4gJM0H_ZTsurYG3Dqn4-nIS8',
//   authDomain: 'ncu-app-test.firebaseapp.com',
//   projectId: 'ncu-app-test',
//   storageBucket: 'ncu-app-test.appspot.com',
//   messagingSenderId: '739839700130',
//   appId: '1:739839700130:web:37591d0118a440488cfbfb',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyBAdIwqHbhRHs7pgEukVCc2uXUwRAmJu8w',
  authDomain: 'active-e1014.firebaseapp.com',
  projectId: 'active-e1014',
  storageBucket: 'active-e1014.appspot.com',
  messagingSenderId: '1030625507659',
  appId: '1:1030625507659:web:3665e92f26f92e7bc850ce',
  measurementId: 'G-YR1M91G56B',
};
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            tabBarStyle: { height: '8%' },
          }}
          tabBarOptions={{
            activeTintColor: '#E5EBF1',
            inactiveTintColor: '#28527A',
            activeBackgroundColor: '#28527A',
            inactiveBackgroundColor: '#E5EBF1',
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              headerShown: false,
              tabBarLabel: '??????',
              tabBarIcon: ({ focused }) => (
                <Icon
                  as={MaterialCommunityIcons}
                  name="home-outline"
                  color={focused ? '#E5EBF1' : '#28527A'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              headerShown: false,
              tabBarLabel: '?????????',
              tabBarIcon: ({ focused }) => (
                <Icon
                  as={MaterialCommunityIcons}
                  name="calendar-month"
                  color={focused ? '#E5EBF1' : '#28527A'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Event"
            component={EventScreen}
            options={{
              headerShown: false,
              tabBarLabel: '??????',
              tabBarIcon: ({ focused }) => (
                <Icon
                  as={Ionicons}
                  name="game-controller-outline"
                  color={focused ? '#E5EBF1' : '#28527A'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
              tabBarLabel: '??????',
              tabBarIcon: ({ focused }) => (
                <Icon
                  as={MaterialCommunityIcons}
                  name="map-outline"
                  color={focused ? '#E5EBF1' : '#28527A'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sales"
            component={SaleScreen}
            options={{
              headerShown: false,
              tabBarLabel: '??????',
              tabBarIcon: ({ focused }) => (
                <Icon
                  as={MaterialCommunityIcons}
                  name="cart-outline"
                  color={focused ? '#E5EBF1' : '#28527A'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [auth, setAuth] = useState();
  firebase.auth().onAuthStateChanged((user) => {
    setAuth(user);
  });

  if (auth === undefined) {
    return (<View />);
  }

  return (
    <PaperProvider
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      { auth ? <MainApp /> : <AuthScreen />}
    </PaperProvider>
  );
}
