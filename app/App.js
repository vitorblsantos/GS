import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons'

import { StatusBar } from 'react-native'

import Home from './src/views/home'
import Service from './src/views/service'

import { Provider } from './src/context'

const Tab = createBottomTabNavigator()

export default function () {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Provider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => (<Foundation name="home" size={24} color="black" />) }} />
          <Tab.Screen name="Entrega" component={Service} options={{ tabBarIcon: () => (<MaterialCommunityIcons name="drone" size={24} color="black" />) }} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
