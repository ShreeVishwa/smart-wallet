import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './components/HomeScreen'
import CardScreen from './components/CardScreen'
import ProfileScreen from './components/ProfileScreen'
import StatsScreen from './components/StatsScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName
            if(route.name === 'Home') {
              iconName = 'md-home'
            } else if(route.name === 'Card') {
              iconName = 'ios-card'
            } else if(route.name === 'Profile') {
              iconName = 'md-person'
            } else if(route.name === 'Stats') {
              iconName = 'ios-stats'
            }
            return <Ionicons name={iconName} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#ff9966',
          showLabel: false,
          inactiveTintColor: 'grey'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Card" component={CardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />  
      </Tab.Navigator>
    </NavigationContainer>
  )
}