import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import RemindersScreen from './screens/RemindersScreen';
import RecordsScreen from './screens/RecordsScreen';
import AIDiagnosticsScreen from './screens/AIDiagnosticsScreen';
import PatientRecordsScreen from './screens/PatientRecordsScreen';
import SearchScreen from './screens/SearchScreen';
import ManagementScreen from './screens/ManagementScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="Records" component={RecordsScreen} />
        <Stack.Screen name="AIDiagnostics" component={AIDiagnosticsScreen} />
        <Stack.Screen name="PatientRecords" component={PatientRecordsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Management" component={ManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}