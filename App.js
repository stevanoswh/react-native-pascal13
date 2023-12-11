import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Welcome from './App/Pages/Welcome';
import Splash from './App/Pages/Splash';
import { UserProvider } from './App/Context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/> 
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Welcome' component={Welcome}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
