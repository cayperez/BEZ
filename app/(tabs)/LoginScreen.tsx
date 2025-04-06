import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


// Define the types for the form input
interface LoginFormData {
  username: string;
  password: string;
}


const LoginScreen = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);


  // Handle form input change
  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };


  // Handle login logic
  const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }


    setLoading(true);


    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: formData.username,
        password: formData.password,
      });


      // If login is successful, store the JWT token in AsyncStorage
      const { token } = response.data;
      await AsyncStorage.setItem('jwtToken', token);


      // Call the function to update login state
      onLoginSuccess();


      // Navigate to Home
      //navigation.navigate("index");


      Alert.alert('Login Successful', 'You are logged in!');
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Login Failed', error?.response?.data || 'Invalid credentials');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <Button title={loading ? 'Logging In...' : 'Login'} onPress={handleLogin} disabled={loading} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


export default LoginScreen;


/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


// Define the types for the form input
interface LoginFormData {
  username: string;
  password: string;
}


const LoginScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });


  const [loading, setLoading] = useState<boolean>(false);


  const LoginScreen = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
    const navigation = useNavigation();
 
    const handleLogin = () => {
      onLoginSuccess();
      navigation.replace("Home");
    };


  // Handle form input change
  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };


  // Handle login logic
  /*const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }


    setLoading(true);


    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: formData.username,
        password: formData.password,
      });


      // If login is successful, store the JWT token in AsyncStorage
      const { token } = response.data;


      // Save the token (you can also use a more secure storage method like react-native-keychain)
      await AsyncStorage.setItem('jwtToken', token);


      // Navigate to a different screen after successful login
      navigation.navigate('Home'); // You can navigate to your main screen


      Alert.alert('Login Successful', 'You are logged in!');
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Login Failed', error?.response?.data || 'Invalid credentials');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <Button title={loading ? 'Logging In...' : 'Login'} onPress={handleLogin} disabled={loading} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


export default LoginScreen;*/
