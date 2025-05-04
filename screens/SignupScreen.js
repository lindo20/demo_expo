import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../utils/supabase';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [identification, setIdentification] = useState('');
  const [email, setEmail] = useState('');
  const [cellNo, setCellNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const handleSignup = async () => {
    // Validate all required fields
    if (!firstName) {
      Alert.alert('Validation Error', 'First name is required.');
      return;
    }
    if (!lastName) {
      Alert.alert('Validation Error', 'Last name is required.');
      return;
    }
    if (!identification) {
      Alert.alert('Validation Error', 'Identification is required.');
      return;
    }
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
    if (!cellNo) {
      Alert.alert('Validation Error', 'Cell number is required.');
      return;
    }
    if (!validatePhone(cellNo)) {
      Alert.alert('Validation Error', 'Please enter a valid cell number.');
      return;
    }
    if (!password) {
      Alert.alert('Validation Error', 'Password is required.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
      return;
    }
    if (!confirmPassword) {
      Alert.alert('Validation Error', 'Please confirm your password.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            identification: identification,
            cell_no: cellNo,
          },
        },
      });

      if (error) {
        console.error('Signup error:', error.message);
        // Provide specific error messages for common issues
        if (error.message.includes('User already registered')) {
          Alert.alert('Signup Error', 'This email is already registered.');
        } else if (error.message.includes('Invalid format')) {
          Alert.alert('Signup Error', 'Invalid email or password format.');
        } else {
          Alert.alert('Signup Error', error.message);
        }
      } else {
        Alert.alert(
          'Verification Email Sent',
          'Please check your email to verify your account before logging in.'
        );
        navigation.navigate('Login');
      }
    } catch (err) {
      console.error('Unexpected error during signup:', err);
      Alert.alert('Signup Error', 'An unexpected error occurred. Please check your connection and try again.');
    } finally
     {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Identification"
        value={identification}
        onChangeText={setIdentification}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Cell no"
        value={cellNo}
        onChangeText={setCellNo}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Signing up...' : 'Sign up'}</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: '#2E3B55',
    color: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SignupScreen;