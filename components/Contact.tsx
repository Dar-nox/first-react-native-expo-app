import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={[styles.contact, isDarkMode && styles.darkBackground]}>
      <Text style={[styles.sectionTitle, isDarkMode && styles.lightText]}>Contact</Text>
      <Text style={[styles.contactInfo, isDarkMode && styles.lightText]}>Email: conrad_arman_vergara@dlsl.edu.ph</Text>
      <Text style={[styles.contactInfo, isDarkMode && styles.lightText]}>
        Facebook: <Text style={[styles.link, isDarkMode && styles.darkLink]} onPress={() => Linking.openURL('https://www.facebook.com/conradarman.vergara')}>conradarman.vergara</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  contactInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  lightText: {
    color: '#fff',
  },
  link: {
    color: '#1e90ff',
  },
  darkLink: {
    color: '#fff',
  },
});

export default Contact;