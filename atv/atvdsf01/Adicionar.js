import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Adicionar({ estoque, setEstoque, navegar }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState('');

  const adicionar = () => {
    setEstoque([...estoque, { nome, quantidade: parseInt(quantidade), codigo }]);
    navegar('Estoque');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Peça</Text>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Quantidade" keyboardType="numeric" style={styles.input} onChangeText={setQuantidade} />
      <TextInput placeholder="Código" style={styles.input} onChangeText={setCodigo} />
      <Button title="Salvar Peça" onPress={adicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});