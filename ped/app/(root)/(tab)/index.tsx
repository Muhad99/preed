import { View, Text, StyleSheet, TouchableOpacity, Image  } from 'react-native'
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/land'); // Navigates to '/homesplash1' on press
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        style={styles.reactLogo}
        source={require('@/assets/images/ecwa-logo.png')}
      />
      <Text style={styles.logotext}>ECWA Sunday School Manual 2025</Text>
      <Text style={styles.mottotext}>"Growing in Faith"</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  },
  reactLogo: {
    height: 180,
    width: 180,
    marginTop: -100,
    marginBottom: 7,
  },
  logotext: {
    color: 'navy',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mottotext: {
    color: 'navy',
    fontSize: 17,
    textAlign: "center",
    fontFamily: "helvetica",
  },
  introText: {
    color: '#fff',
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

export default index;
