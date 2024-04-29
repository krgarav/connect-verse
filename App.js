import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './pages/Auth';
import Homepage from './pages/Homepage';
const Stack = createNativeStackNavigator();
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Auth} options={{ headerShown: false }} />
      <Stack.Screen name="homepage" component={Homepage} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
}
