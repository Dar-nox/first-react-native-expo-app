import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Profile = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={[styles.profile, isDarkMode && styles.darkBackground]}>
      <Image source={require('./images/pfp.jpg')} style={styles.profilePic} />
      <Text style={[styles.name, isDarkMode && styles.lightText]}>Conrad Arman D. Vergara</Text>
      <Text style={[styles.bio, isDarkMode && styles.lightText]}>Just an aspiring computer science student</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  darkBackground: {
    backgroundColor: '#161616',
    borderColor: '#555',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },
  lightText: {
    color: '#fff',
  },
});

export default Profile;