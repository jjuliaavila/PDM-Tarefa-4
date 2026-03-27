import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './navigation/types';
import { SongView } from './View/SongView';
import { SongListView } from './navigation/SongListView';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddSong">
        <Stack.Screen name="AddSong" component={SongView} />
        <Stack.Screen name="SongList" component={SongListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
