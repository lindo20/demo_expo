// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// // import { supabase } from '../utils/supabase';

// // const LoginScreen = ({ navigation }) => {
// //   const [identification, setIdentification] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleLogin = async () => {
// //     if (!identification || !password) {
// //       Alert.alert('Validation Error', 'Please enter both email and password.');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const { data, error } = await supabase.auth.signInWithPassword({
// //         email: identification,
// //         password: password,
// //       });

// //       if (error) {
// //         console.error('Login error:', error.message);
// //         Alert.alert('Login Error', error.message);
// //       } else {
// //         console.log('Login successful:', data);
// //         navigation.navigate('Home');
// //       }
// //     } catch (err) {
// //       console.error('Unexpected error during login:', err);
// //       Alert.alert('Unexpected Error', 'An unexpected error occurred. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Log in</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={identification}
// //         onChangeText={setIdentification}
// //         autoCapitalize="none"
// //         keyboardType="email-address"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       <TouchableOpacity
// //         style={[styles.button, loading && styles.buttonDisabled]}
// //         onPress={handleLogin}
// //         disabled={loading}
// //       >
// //         <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Log in'}</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
// //         <Text style={styles.link}>Sign up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#1A2A44',
// //     padding: 20,
// //   },
// //   header: {
// //     fontSize: 24,
// //     color: '#FFF',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     backgroundColor: '#2E3B55',
// //     color: '#FFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     borderRadius: 5,
// //   },
// //   button: {
// //     backgroundColor: '#666',
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   buttonDisabled: {
// //     backgroundColor: '#444',
// //   },
// //   buttonText: {
// //     color: '#FFF',
// //     fontSize: 16,
// //   },
// //   link: {
// //     color: '#00C4B4',
// //     textAlign: 'center',
// //   },
// // });

// // export default LoginScreen;


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { supabase } from '../utils/supabase';

// const LoginScreen = ({ navigation }) => {
//   const [identification, setIdentification] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!identification || !password) {
//       Alert.alert('Validation Error', 'Please enter both email and password.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: identification,
//         password: password,
//       });

//       if (error) {
//         console.error('Login error:', error.message);
//         Alert.alert('Login Error', error.message);
//       } else {
//         // Check if email is verified
//         const { data: userData, error: userError } = await supabase
//           .from('profiles')
//           .select('email_verified_at')
//           .eq('id', data.user.id)
//           .single();

//         if (userError) {
//           console.error('Error checking verification:', userError.message);
//           Alert.alert('Error', 'Unable to verify account status.');
//         } else if (!userData.email_verified_at) {
//           Alert.alert(
//             'Email Not Verified',
//             'Please verify your email address before logging in.'
//           );
//         } else {
//           console.log('Login successful:', data);
//           navigation.navigate('Home');
//         }
//       }
//     } catch (err) {
//       console.error('Unexpected error during login:', err);
//       Alert.alert('Unexpected Error', 'An unexpected error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Log in</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={identification}
//         onChangeText={setIdentification}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity
//         style={[styles.button, loading && styles.buttonDisabled]}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Log in'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.link}>Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A2A44',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     color: '#FFF',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#2E3B55',
//     color: '#FFF',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#666',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   buttonDisabled: {
//     backgroundColor: '#444',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
//   link: {
//     color: '#00C4B4',
//     textAlign: 'center',
//   },
// });

// export default LoginScreen;


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../utils/supabase';

const LoginScreen = ({ navigation }) => {
  const [identification, setIdentification] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!identification || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }

    if (!validateEmail(identification)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: identification,
        password,
      });

      if (error) {
        console.error('Login error:', error.message);
        if (error.message.includes('Email not confirmed')) {
          Alert.alert('Email Not Verified', 'Please verify your email address before logging in.');
        } else if (error.message.includes('Invalid login credentials')) {
          Alert.alert('Login Error', 'Incorrect email or password.');
        } else {
          Alert.alert('Login Error', error.message);
        }
        return;
      }

      console.log('Login successful:', data);
      navigation.navigate('Home');
    } catch (err) {
      console.error('Unexpected error during login:', err);
      Alert.alert('Unexpected Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!identification) {
      Alert.alert('Validation Error', 'Please enter your email address.');
      return;
    }

    if (!validateEmail(identification)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(identification, {
        redirectTo: 'your-app://reset-password', // Update with your app's deep link
      });

      if (error) {
        console.error('Password reset error:', error.message);
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Success', 'Password reset email sent. Check your inbox.');
      }
    } catch (err) {
      console.error('Unexpected error during password reset:', err);
      Alert.alert('Unexpected Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={identification}
        onChangeText={setIdentification}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Log in'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Sign up</Text>
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
  link: {
    color: '#00C4B4',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;