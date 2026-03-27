import React, { useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { Song } from '../models/Song';
import { SongController } from '../controller/SongController';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export function SongListView() {
  const [songs, setSongs] = useState<Song[]>([]);

  useFocusEffect(
    useCallback(() => {
      setSongs(SongController.carregarSongs());
    }, [])
  );

  function handleRemover(id: number) {
    SongController.removerSong(id,
      (listaAtualizada) => { setSongs(listaAtualizada); },
      (mensagemErro) => { Alert.alert("Erro", mensagemErro); }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Músicas</Text>
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
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 20 },
  item: { backgroundColor: '#1e1e1e', borderRadius: 8, padding: 12, marginBottom: 8 },
  itemTexto: { color: '#ffffff', fontSize: 16 },
});
