import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importando as telas da raiz do projeto
import Login from './Login';
import Recuperar from './Recuperar';
import Estoque from './Estoque';
import Adicionar from './Adicionar';
import Editar from './Editar';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recuperar" component={Recuperar} />
        <Stack.Screen name="Estoque" component={Estoque} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
