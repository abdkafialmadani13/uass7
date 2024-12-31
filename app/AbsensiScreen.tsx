import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const AbsensiScreen = ({ navigation }) => {
  const handleAbsensi = (status) => {
    if (!status) {
      alert('Status tidak valid');
      return;
    }
    alert(`Absensi: ${status}`); // String template untuk alert
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi Hari Ini</Text>
      <View style={styles.buttonContainer}>
        <Button title="Hadir" onPress={() => handleAbsensi('Hadir')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Tidak Hadir" onPress={() => handleAbsensi('Tidak Hadir')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 10, // Memberi jarak antar tombol
    width: '80%', // Menjadikan tombol lebih proporsional
  },
});

export default AbsensiScreen;
