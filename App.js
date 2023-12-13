import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './App/Pages/Home';
import Splash from './App/Pages/Splash';
import { UserProvider } from './App/Context/UserContext';
import ListData from './App/Pages/ListData';
import ListData2 from './App/Pages/ListData2';
import InsertData from './App/Pages/InsertData';
import PostList from './App/Pages/PostList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/> 
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ListData' component={ListData}/>
          <Stack.Screen name='ListData2' component={ListData2}/>
          <Stack.Screen name='InsertData' component={InsertData}/>
          <Stack.Screen name='PostList' component={PostList}/>
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
