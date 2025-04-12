import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navegar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
 
  const autenticar = () => {
    if (usuario === 'aluno' && senha === '1234') {
      navegar('Estoque');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Usuário" onChangeText={setUsuario} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <Button title="Entrar" onPress={autenticar} />
      <Text style={styles.link} onPress={() => navegar('Recuperar')}>Esqueceu a senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f2f2f2' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 },
  link: { color: '#007bff', marginTop: 10, textAlign: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});