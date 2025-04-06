import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // Correct import




interface Symptom {
  date: string;
  symptom: string;
  severity: string;
  testType?: string;
  peakFlowValue?: string;
}


const Symptoms = () => {
  const [symptom, setSymptom] = useState('');
  const [severity, setSeverity] = useState('');
  const [date, setDate] = useState('');
  const [testType, setTestType] = useState('');
  const [peakFlowValue, setPeakFlowValue] = useState('');
  const [log, setLog] = useState<Symptom[]>([]);


  // Fetch stored symptom logs from AsyncStorage when the component mounts
  React.useEffect(() => {
    const fetchSymptomLogs = async () => {
      const savedLogs = await AsyncStorage.getItem('symptomLogs');
      if (savedLogs) {
        setLog(JSON.parse(savedLogs));
      }
    };


    fetchSymptomLogs();
  }, []);


  // Save a new symptom entry
  const saveSymptom = async () => {
    if (!symptom || !severity || !date || !testType || !peakFlowValue) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }


    const newLog: Symptom = { date, symptom, severity, testType, peakFlowValue };
    const updatedLog = [...log, newLog];


    try {
      await AsyncStorage.setItem('symptomLogs', JSON.stringify(updatedLog));
      setLog(updatedLog); // Update the state with the new log
      setSymptom('');
      setSeverity('');
      setDate('');
      setTestType('');
      setPeakFlowValue('');
      Alert.alert('Success', 'Symptom logged!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save symptom log.');
    }
  };


  // Render each symptom log item in a FlatList
  const renderItem = ({ item }: { item: Symptom }) => (
    <View style={styles.logItem}>
      <Text style={styles.logText}>Date: {item.date}</Text>
      <Text style={styles.logText}>Symptom: {item.symptom}</Text>
      <Text style={styles.logText}>Severity: {item.severity}</Text>
      <Text style={styles.logText}>Test Type: {item.testType}</Text>
      <Text style={styles.logText}>Peak Flow Value: {item.peakFlowValue}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Symptom"
        value={symptom}
        onChangeText={setSymptom}
      />
      <TextInput
        style={styles.input}
        placeholder="Severity (e.g., mild, moderate, severe)"
        value={severity}
        onChangeText={setSeverity}
      />
     
      {/* <Text style={styles.label}>Select Spirometry Test Type:</Text>
      <Picker
        selectedValue={testType}
        onValueChange={(itemValue) => setTestType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Test Type" value="" />
        <Picker.Item label="FEV" value="FEV" />
        <Picker.Item label="FVC" value="FVC" />
      </Picker> */}


      <TextInput
        style={styles.input}
        placeholder="Peak Flow Value"
        value={peakFlowValue}
        onChangeText={setPeakFlowValue}
        keyboardType="numeric"
      />


      <Button title="Log Symptom" onPress={saveSymptom} />
     
      <Text style={styles.subtitle}>Logged Symptoms:</Text>
      <FlatList
        data={log}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  logItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  logText: {
    fontSize: 16,
    marginBottom: 5,
  },
});


export default Symptoms;


/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Symptom {
  date: string;
  symptom: string;
  severity: string;
}


const Symptoms  = () => {
  const [symptom, setSymptom] = useState('');
  const [severity, setSeverity] = useState('');
  const [date, setDate] = useState('');
  const [log, setLog] = useState<Symptom[]>([]);


  // Fetch stored symptom logs from AsyncStorage when the component mounts
  React.useEffect(() => {
    const fetchSymptomLogs = async () => {
      const savedLogs = await AsyncStorage.getItem('symptomLogs');
      if (savedLogs) {
        setLog(JSON.parse(savedLogs));
      }
    };


    fetchSymptomLogs();
  }, []);


  // Save a new symptom entry
  const saveSymptom = async () => {
    if (!symptom || !severity || !date) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }


    const newLog: Symptom = { date, symptom, severity };
    const updatedLog = [...log, newLog];


    try {
      await AsyncStorage.setItem('symptomLogs', JSON.stringify(updatedLog));
      setLog(updatedLog); // Update the state with the new log
      setSymptom('');
      setSeverity('');
      setDate('');
      Alert.alert('Success', 'Symptom logged!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save symptom log.');
    }
  };


  // Render each symptom log item in a FlatList
  const renderItem = ({ item }: { item: Symptom }) => (
    <View style={styles.logItem}>
      <Text style={styles.logText}>Date: {item.date}</Text>
      <Text style={styles.logText}>Symptom: {item.symptom}</Text>
      <Text style={styles.logText}>Severity: {item.severity}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Symptom"
        value={symptom}
        onChangeText={setSymptom}
      />
      <TextInput
        style={styles.input}
        placeholder="Severity (e.g., mild, moderate, severe)"
        value={severity}
        onChangeText={setSeverity}
      />
      <Button title="Log Symptom" onPress={saveSymptom} />
     
      <Text style={styles.subtitle}>Logged Symptoms:</Text>
      <FlatList
        data={log}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  logItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  logText: {
    fontSize: 16,
    marginBottom: 5,
  },
});


export default Symptoms;*/


