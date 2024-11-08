import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IntroPage from '../screens/IntroPage/IntroPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Intro' component={IntroPage} />
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='SignUp' component={SignUpPage} />
    </Stack.Navigator>
  )
}

export default AuthNavigation