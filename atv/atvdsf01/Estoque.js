import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Estoque({ estoque, setTelaAtual, setCodigoEditar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de Peças</Text>
      <Button title="Adicionar Peça" onPress={() => setTelaAtual('Adicionar')} />
      <FlatList
        data={estoque}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setCodigoEditar(item.codigo);
              setTelaAtual('Editar');
            }}
          >
            <Text style={styles.nome}>{item.nome} ({item.quantidade})</Text>
            <Text style={styles.codigo}>Código: {item.codigo}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Sair" color="red" onPress={() => setTelaAtual('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },
  item: { backgroundColor: '#fff', padding: 15, borderRadius: 5, marginVertical: 5 },
  nome: { fontWeight: 'bold', fontSize: 16 },
  codigo: { color: 'red' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 15 }
});