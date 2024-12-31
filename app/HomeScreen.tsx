import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Absensi" onPress={() => navigation.navigate('Absensi')} />
      <Button title="Data Absensi" onPress={() => navigation.navigate('DataAbsensi')} />
      <Button title="Pengaturan" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;