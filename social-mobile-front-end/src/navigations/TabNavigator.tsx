import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "screens/home";
import Messengers from "screens/messengers";
import Friends from "screens/friends";
import { Notifications } from "screens/notifications";
import { Setting } from "screens/settings";
import { greyPrimary, primary } from "utils/colors/commons";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Trang chủ"
                component={Home}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="home"
                                size={24}
                                color={tabInfo.focused ? primary : greyPrimary}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Bạn bè"
                component={Friends}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="person"
                                size={24}
                                color={tabInfo.focused ? primary : greyPrimary}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Trò chuyện"
                component={Messengers}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="chatbubble-ellipses"
                                size={24}
                                color={tabInfo.focused ? primary : greyPrimary}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Thông báo"
                component={Notifications}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="notifications"
                                size={24}
                                color={tabInfo.focused ? primary : greyPrimary}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Tải khoản"
                component={Setting}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="person-circle"
                                size={24}
                                color={tabInfo.focused ? primary : greyPrimary}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;