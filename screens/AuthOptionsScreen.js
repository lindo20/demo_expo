import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function AuthOptionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In or Register</Text>
      <Button title="Login as Dentist" onPress={() => navigation.navigate('Login', { role: 'Dentist' })} />
      <Button title="Login as Patient" onPress={() => navigation.navigate('Login', { role: 'Patient' })} />
      <Button title="Sign Up via Email" onPress={() => navigation.navigate('Register')} />
      <Button title="Recover Password" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 30 },
});

