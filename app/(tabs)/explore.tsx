//CODE FROM PREVIOUS APP 
import React, { useState } from 'react';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';


const ProfileScreen = () => {
  const [pollenTrigger, setPollenTrigger] = useState<boolean>(false);
  const [airQualityTrigger, setAirQualityTrigger] = useState<boolean>(false);
  const [exerciseTrigger, setExerciseTrigger] = useState<boolean>(false);
  const [commoncoldTrigger, setCommonColdTrigger] = useState<boolean>(false);



  const user = {
    name: 'Jasmine Doe',
    age: 24,
    weight: '175 lbs',
    height: '5 ft 10 in',
    profilePicture: 'https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000', // Replace with your image URL or local image
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Sister',
      phone: '(987) 654-3210',
    },
  };


  const handleToggle = (trigger: 'pollen' | 'airQuality' | 'exercise'| 'commonCold') => {
    if (trigger === 'pollen') {
      setPollenTrigger(prev => !prev);
    } else if (trigger === 'airQuality') {
      setAirQualityTrigger(prev => !prev);
    } else if (trigger === 'exercise') {
      setExerciseTrigger(prev => !prev);
    } else if (trigger === 'commonCold') {
    setCommonColdTrigger(prev => !prev);
  }
  };


  return (
    <View style={styles.container}>
     
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileAge}>Age: {user.age}</Text>  
        <Text style={styles.profileWeight}>Weight: {user.weight}</Text>
        <Text style={styles.profileHeight}>Height: {user.height}</Text>  
         </View>


      {/* Emergency Contact Section */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Caregiver Information</Text>
        <Text style={styles.contactText}>
          {user.emergencyContact.name} ({user.emergencyContact.relation})
        </Text>
        <Text style={styles.contactText}>{user.emergencyContact.phone}</Text>
      </View>


      {/* Asthma Triggers Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Asthma Triggers</Text>
       
        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Pollen</Text>
          <Switch
            value={pollenTrigger}
            onValueChange={() => handleToggle('pollen')}
          />
        </View>
       
        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Air Pollution and Irritants</Text>
          <Switch
            value={airQualityTrigger}
            onValueChange={() => handleToggle('airQuality')}
          />
        </View>

        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Common Cold and Flu</Text>
          <Switch
            value={commoncoldTrigger}
            onValueChange={() => handleToggle('commonCold')}
          />
        </View>

        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Exercise</Text>
          <Switch
            value={exerciseTrigger}
            onValueChange={() => handleToggle('exercise')}
          />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileAge: {
    fontSize: 16,
    color: '#555',
    marginTop: 5, // Optional: Adds some space between the name and age
  },
  profileWeight: {
    fontSize: 16,
    color: '#555',
    marginTop: 5, // Optional: Adds some space between the name and age
  },
  profileHeight: {
    fontSize: 16,
    color: '#555',
    marginTop: 5, // Optional: Adds some space between the name and age
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#555',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  triggerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  triggerText: {
    fontSize: 16,
    color: '#555',
  },
});


export default ProfileScreen;


/*import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';


const ProfileScreen = () => {
  const [pollenTrigger, setPollenTrigger] = useState<boolean>(false);
  const [airQualityTrigger, setAirQualityTrigger] = useState<boolean>(false);
  const [exerciseTrigger, setExerciseTrigger] = useState<boolean>(false);
 
const user = {
    name: 'Jasmine Doe',
    phone: '(123) 456-7890',
    profilePicture: 'https://stock.adobe.com/images/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-at-camera-being-happy-studio-shot-of-good-looking-beautiful-woman-isolated-against-blank-studio-wall/185048418', // Replace with your image URL or local image
   
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Sister',
      phone: '(987) 654-3210',
    }
    };


  const handleToggle = (trigger: 'pollen' | 'airQuality' | 'exercise') => {
    if (trigger === 'pollen') {
      setPollenTrigger(prev => !prev);
    } else if (trigger === 'airQuality') {
      setAirQualityTrigger(prev => !prev);
    } else if (trigger === 'exercise') {
      setExerciseTrigger(prev => !prev);
    }
  };


  return (
    <View style={styles.container}>


      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Asthma Triggers</Text>
       
        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Pollen</Text>
          <Switch
            value={pollenTrigger}
            onValueChange={() => handleToggle('pollen')}
          />
        </View>
       
        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Air Quality</Text>
          <Switch
            value={airQualityTrigger}
            onValueChange={() => handleToggle('airQuality')}
          />
        </View>


        <View style={styles.triggerContainer}>
          <Text style={styles.triggerText}>Exercise</Text>
          <Switch
            value={exerciseTrigger}
            onValueChange={() => handleToggle('exercise')}
          />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  triggerContainer: {
    flexDirection: 'row', // Ensures text and switch are aligned horizontally
    justifyContent: 'space-between', // Places space between the text and the switch
    alignItems: 'center', // Ensures they are aligned vertically in the center
    marginBottom: 15, // Adds space between each trigger
  },
  triggerText: {
    fontSize: 16,
    color: '#555',
  },
});


export default ProfileScreen;*/

//ORIGINAL CODE FROM THE TEMPLATE 
// import { StyleSheet, Image, Platform } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
