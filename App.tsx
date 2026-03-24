import { StyleSheet, View, SafeAreaView } from 'react-native';
import { SongView } from './View/SongView';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <SongView />
      </SafeAreaView>
  );
}
