import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DentistDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dentist Dashboard</Text>
      <Text>Welcome, Doctor! Here’s your schedule, appointments, and tools.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
