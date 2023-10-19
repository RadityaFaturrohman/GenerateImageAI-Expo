import { createStackNavigator } from '@react-navigation/stack'; 
import Home from "../app/screens/Home";
import Discover from "../app/screens/Discover/Discover"; 
import Notification from "../app/screens/Notification/Notification"; 
import Profile from "../app/screens/Profile/Profile"; 
import { COLORS } from '../utils';
 
const Stack = createStackNavigator() 
 
export const HomeNavigator = () => { 
    return ( 
        <Stack.Navigator
          screenOptions={{ 
            
           }}
        > 
            <Stack.Screen 

                name="HomeNavigator" 
                component={Home} 
                options={{ headerShown:false, headerTintColor:"#222" }}
                style={{backgroundColor: COLORS.dark_bg()}}
            > 
            </Stack.Screen> 
        </Stack.Navigator> 
    ) 
} 
 
export const DiscoverNavigator = () => { 
    return ( 
        <Stack.Navigator> 
            <Stack.Screen 
                name="DiscoverNavigator" 
                component={Discover} 
                options={{ headerShown:false }} 
            > 
            </Stack.Screen> 
        </Stack.Navigator> 
    ) 
} 
 
export const NotificationNavigator = () => { 
    return ( 
        <Stack.Navigator> 
            <Stack.Screen 
                name="NotificationNavigator" 
                component={Notification} 
                options={{ headerShown:false, headerTintColor:"#222" }} 
            > 
            </Stack.Screen> 
        </Stack.Navigator> 
    ) 
} 
 
export const ProfileNavigator = () => { 
    return ( 
        <Stack.Navigator> 
            <Stack.Screen 
                name="ProfileNavigator" 
                component={Profile} 
                options={{ headerShown:false, headerTintColor:"#222" }} 
            > 
            </Stack.Screen> 
        </Stack.Navigator> 
    ) 
}