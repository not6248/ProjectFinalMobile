import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Prism from './Prism';
import Pyramid from './Pyramid';
import Cylinder from './Cylinder';
import Funnel from './Funnel';
import Ball from './Ball';
import Quiz from './Quiz';
const Stack = createStackNavigator();  // creates object for Stack Navigator

const HOME = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Prism"
                component={Prism}
            />
            <Stack.Screen
                name="Pyramid"
                component={Pyramid}
            />
            <Stack.Screen
                name="Cylinder"
                component={Cylinder}
            />
            <Stack.Screen
                name="Funnel"
                component={Funnel}
            />
            <Stack.Screen
                name="Ball"
                component={Ball}
            />
        </Stack.Navigator>
    )
}

export {HOME}

const QuizTab = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Quiz"
                component={Quiz}
            />
        </Stack.Navigator>
    )
}

export {QuizTab}