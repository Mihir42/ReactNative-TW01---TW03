import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IndexScreen from './src/screens/indexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './src/screens/screenOne';
import ScreenTwo from './src/screens/screenTwo';
import AddItemScreen from './src/AddItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='View'>
        <Stack.Screen
          name='IndexScreen'
          component={IndexScreen}
          options={{ title: "Mario Characters"}}
        />

        <Stack.Screen
          name='ScreenOne'
          component={ScreenOne}
          Options={{title: "This is screen one"}}
        />

        <Stack.Screen
          name='ScreenTwo'
          component={ScreenTwo}
          Options={{title: "This is screen two"}}
        />

        <Stack.Screen
          name='Add'
          component={AddItemScreen}
          options={{title: "Add a new item"}}
        />

        <Stack.Screen
          name='List'
          component={ListViewScreen}
          options={{ title: "View all items"}}
        />

        <Stack.Screen
          name='View'
          component={ViewItemScreen}
          options={{title: "View Item"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


