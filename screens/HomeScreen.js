import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const appointments = [
    { id: '1', type: 'Checkup', date: 'dd/mm/yyyy', time: 'hh:mm' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appointment Calendar</Text>
        <Text style={styles.placeholder}>[Calendar Placeholder]</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appointment</Text>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{`${item.date} ${item.time}`}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Records')}>
                <Text style={styles.link}>SEE</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Records</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Records')}>
          <Text style={styles.link}>SEE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="#00C4B4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
          <Ionicons name="alarm" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Management')}>
          <Ionicons name="person" size={30} color="#666" />
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
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
  placeholder: {
    color: '#FFF',
    textAlign: 'center',
  },
  link: {
    color: '#00C4B4',
    textAlign: 'center',
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

export default HomeScreen;