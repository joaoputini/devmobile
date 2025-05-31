import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    carregarUsuario();
  }, []);

  const salvarUsuario = async () => {
    const novoUsuario = { nome: 'João', idade: 22, email: 'joao@email.com' };
    try {
      const jsonValue = JSON.stringify(novoUsuario);
      await AsyncStorage.setItem('usuarioInfo', jsonValue);
      setMensagem('Usuário salvo!');
      carregarUsuario();
    } catch (error) {
      setMensagem('Erro ao salvar o usuário: ' + error);
    }
  };

  const carregarUsuario = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('usuarioInfo');
      if (jsonValue !== null) {
        setUsuario(JSON.parse(jsonValue));
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.error('Erro ao carregar o usuário:', error);
      setMensagem('Erro ao carregar o usuário.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Informações do Usuário:</Text>

      {usuario ? (
        <>
          <Text>Nome: {usuario.nome}</Text>
          <Text>Idade: {usuario.idade}</Text>
          <Text>Email: {usuario.email}</Text>
        </>
      ) : (
        <Text>Nenhum usuário salvo.</Text>
      )}

      <Button title="Salvar Usuário" onPress={salvarUsuario} />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mensagem: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
