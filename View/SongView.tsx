import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SongController } from '../controller/SongController';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/types';

export function SongView() {
  const [nome, setNome] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function handleAdicionar() {
    SongController.adicionarSong(nome,
      () => {
        setNome("");
        navigation.navigate("SongList");
      },
      (mensagemErro) => {
        Alert.alert("Erro", mensagemErro);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Música</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da música..."
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 20, marginTop: 10 },
  input: { backgroundColor: '#1e1e1e', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 12, color: '#ffffff', fontSize: 16, marginBottom: 10 },
});
