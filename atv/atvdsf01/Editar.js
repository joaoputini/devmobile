import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Editar({ codigo, estoque, setEstoque, navegar }) {
  const peca = estoque.find((p) => p.codigo === codigo);
  const [quantidade, setQuantidade] = useState(peca.quantidade.toString());

  const salvar = () => {
    const atualizado = estoque.map((p) =>
      p.codigo === codigo ? { ...p, quantidade: parseInt(quantidade) } : p
    );
    setEstoque(atualizado);
    navegar('Estoque');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Peça</Text>
      <Text>Nome: {peca.nome}</Text>
      <Text>Código: {peca.codigo}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});