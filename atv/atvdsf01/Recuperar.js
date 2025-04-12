import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function Recuperar({ navegar }) {
  const [usuario, setUsuario] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput style={styles.input} placeholder="Nome de usuário" onChangeText={setUsuario} />
      <Button title="Recuperar Senha" onPress={() => alert('Nova senha: 1234')} />
      <Button title="Voltar" onPress={() => navegar('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f2f2f2' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});