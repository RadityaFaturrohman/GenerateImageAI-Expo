import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"; 
import { View, Image, TouchableOpacity, Text, useAnimatedValue, Dimensions } from "react-native"; 
import { HomeNavigator ,DiscoverNavigator, NotificationNavigator, ProfileNavigator } from "./navigators" 
import { useRef } from 'react'; 
import { Animated } from 'react-native'; 
import { COLORS, icons } from '../utils'
 
const Tab = createBottomTabNavigator() 
 
const Other = () => { 
    return ( 
        <View> 
 
        </View> 
    ) 
} 
 
const Items = [ 
    { name:"Home", component: HomeNavigator, key:0, source: icons.home }, 
    { name:"Discover", component: DiscoverNavigator, key:1, source: icons.discover }, 
    { name:"Other", component: Other, key:2, source: icons.other}, 
    { name:"Notification", component: NotificationNavigator, key:3, source: icons.notification }, 
    { name:"Profile", component: ProfileNavigator, key:4, source: icons.profile } 
] 
 
 
 
const Tabs = () => { 
    const animation = useAnimatedValue(0) 
    const tabOffsetValue = useRef(animation).current 
    return ( 
    <> 
        <Tab.Navigator 
            initialRouteName="Profile" 
        > 
            { 
                Items.map(item => ( 
                    <Tab.Screen  
                        key={item.key} 
                        name={item.name}  
                        component={item.component}  
                        options={{ ...tabBarOptions, tabBarIcon: ({ focused }) => ( 
                            <View style={{ alignItems:"center", justifyContent: "center" }}> 
                                <Image 
                                    source={item.source} 
                                    resizeMode="contain" 
                                    style={{  
                                        width: item.name == "Other" ? 33 : 24, 
                                        height: item.name == "Other" ? 33 : 24, 
                                        tintColor: focused ? COLORS.primary() : COLORS.inactive_tabBar(), 
                                        borderBottomWidth: 1 
                                    }} 
                                /> 
                            </View> 
                        ) }} 
                        listeners={({navigation, route}) => ({ 
                            tabPress: e => { 
                                Animated.spring(tabOffsetValue, { 
                                    toValue: getWidth() * item.key, 
                                    useNativeDriver: true 
                                }).start() 
                            } 
                        })} 
                    /> 
                )) 
            } 
        </Tab.Navigator> 
        <Animated.View 
        style={{  
            width: getWidth() - 16, 
            height: 2.5, 
            backgroundColor: "#8E4EC6", 
            position: "absolute", 
            borderRadius: 5, 
            bottom: 10, 
            left:17, 
            transform: [ 
                { translateX: tabOffsetValue } 
            ] 
        }} 
        > 
        </Animated.View> 
    </> 
    ) 
} 
 
const getWidth = () => { 
    let width = Dimensions.get("window").width 
    width = width - 18 
    return width / 5 
} 
 
export default Tabs 
 
const tabBarOptions = { 
    headerShown:false, 
    tabBarShowLabel: false, 
    tabBarStyle: { 
        position: "absolute", 
        bottom: 9, 
        left: 9, 
        right: 9, 
        elevation: 0, 
        opacity: .85, 
        backgroundColor: "#1A1A1A", 
        borderWidth: 1, 
        borderColor: "#1A1A1A", 
        borderRadius: 15, 
        height: 69, 
    } 
}