import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ManagementScreen = ({ navigation }) => {
  const managementOptions = [
    'Appointment Management',
    'Patient Records',
    'Setting Appointment',
    'Appointment Stats',
    'Billing',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Management</Text>
      <FlatList
        data={managementOptions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
          <Ionicons name="alarm" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Management')}>
          <Ionicons name="person" size={30} color="#00C4B4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2A44',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#2E3B55',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#1A2A44',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ManagementScreen;