import { View, Text, StyleSheet } from 'react-native';

export function SobreView() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
  texto: { color: '#ffffff', fontSize: 24 },
});
