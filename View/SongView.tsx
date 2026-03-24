import React, {useState} from 'react';
import { FlatList, Text, View, TextInput, SafeAreaView, Button, Alert, StyleSheet } from 'react-native';
import { Song } from "../models/Song";
import { SongController } from "../controller/SongController"

export function SongView() {
  const [nome, setNome] = useState("");
  const [songs, setSongs] = useState<Song[]>(
    SongController.carregarSongs()
 );

 function handleAdicionar() {
  SongController.adicionarProduto(nome,(listaAtualizada) => {
    setSongs(listaAtualizada); 
    setNome("");
  },
 (mensagemErro) => {
    Alert.alert("Erro", mensagemErro);
  }
 );
}

function handleRemover(id: number) {
  SongController.removerProduto(id,(listaAtualizada) => {
    setSongs(listaAtualizada);
  },
 (mensagemErro) => {
    Alert.alert("Erro", mensagemErro);
  }
 );
}

return (
  <View style={{ flex: 1, backgroundColor: '#121212', padding: 20 }}>
      <Text style={styles.titulo}>Lista de Músicas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da música..."
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Adicionar" onPress={handleAdicionar} />
      <FlatList
        data={songs}
        keyExtractor={(item: Song) => item.id.toString()}
        renderItem={({ item }: { item: Song }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
          <Button title="Remover" color="#e53935" onPress={() => handleRemover(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  itemTexto: {
    color: '#ffffff',
    fontSize: 16,
  },
});
