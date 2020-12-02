import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Investimentos from './../component/investimentos/Investimentos';
import Resgate from './../component/resgate/Resgate';

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
          <Stack.Screen
            name="Resgate"
            component={Resgate}
            options={{
              title: 'RESGATE',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppStack;