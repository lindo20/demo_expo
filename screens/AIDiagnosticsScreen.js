import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AIDiagnosticsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI Dental Diagnostic</Text>
      <View style={styles.section}>
        <Text style={styles.placeholder}>[X-Ray Image Placeholder]</Text>
        <Text style={styles.placeholder}>[Teeth Chart Placeholder]</Text>
      </View>
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
  placeholder: {
    color: '#FFF',
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

export default AIDiagnosticsScreen;