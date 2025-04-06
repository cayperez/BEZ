//CODE FROM PREVIOUS
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


const HomeScreen = () => {
  const heartRate = 100; // Heart rate of the patient
  const airQuality = 70; // Air quality status; 0-100= Good, 100-200= Bad, 200 or more = Dangerous
  const pollenCount = 250; // Pollen count (example value)
  const value = 400 //value based on wheezing algo from MATLAB and Arduino
  //test values: Green (50), Yellow (120), Red (1000)

  //Conditions for AQI 
  let airQualityStatus: string;

  if (airQuality >= 0 && airQuality < 100) {
    airQualityStatus = "Good";
  } else if (airQuality >= 100 && airQuality < 200) {
    airQualityStatus = "Bad";
  } else if (airQuality >= 200) {
    airQualityStatus = "Dangerous";
  } else {
    airQualityStatus = "Invalid"; // In case the air quality value is out of expected bounds (negative numbers)
  }

  // Zone based on heart rate (this can be dynamic in a real app)
  const zone = value < 60 ? 'Green' : value < 100 ? 'Yellow' : 'Red';

  //Colors for HR 
  const colorHR= heartRate < 100 ? 'Green' : heartRate < 200 ? 'Yellow' : 'Red';

  //Colors for AQI
  const colorAQI = airQuality < 100? 'Green': airQuality < 200? 'Yellow': 'Red';

  //Colors for Pollen Count 
  const colorPC = pollenCount < 100? 'Green': pollenCount < 200? 'Yellow': 'Red';

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')} // Update path if needed
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcomeTitle}>WELCOME TO BREATHE EASY!</Text>


      <View style={styles.card}>
        <Text style={styles.title}>Wheezing Zone</Text>
        <Text style={[styles.value, getZoneStyle(zone)]}>{zone}</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.title}>Heart Rate</Text>
        <Text style={[styles.value, getZoneStyle(colorHR)]}>{heartRate} bpm</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.title}>Air Quality</Text>
        <Text style={[styles.value, getZoneStyle(colorAQI)]}>{airQualityStatus}</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.title}>Pollen Count</Text>
        <Text style={[styles.value, getZoneStyle(colorPC)]}>{pollenCount}</Text>
      </View>
    </ScrollView>
  );
};


// Helper function to style the zone text
const getZoneStyle = (zone: string) => {
  switch (zone) {
    case 'Red':
      return { color: '#DC143C' };
    case 'Yellow':
      return { color: '#FFD700' };
    case 'Green':
      return { color: '#228B22' };
    default:
      return {};
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 10,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold', // Make the title bold
    textAlign: 'center',
    marginBottom: 20, // Space between title and content
    color: '#333', // Optional color for the title
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});


export default HomeScreen;


/*import { Image, StyleSheet, Platform } from 'react-native';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">WELCOME TO THE BREATHE EASY!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">WHEEZING ZONE</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">HEART RATE</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
*/


//ORIGINAL CODE FROM TEMPLATE 
// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
