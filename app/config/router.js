import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Investimentos from './../component/investimentos/Investimentos';

const Stack = createStackNavigator();

function AppStack() {
    
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Investimentos" headerMode="float">
          <Stack.Screen
            name="Investimentos"
            component={Investimentos}
            options={{
              title: 'RESGATE',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppStack;