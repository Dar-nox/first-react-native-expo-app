import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

const projects = [
  { id: '1', title: 'AI-based Smart Traffic Lights', description: 'A software made to reduce traffic in Lipa City\'s most crowded intersections. It uses AI to manage the traffic lights more efficiently.' },
  { id: '2', title: 'DLSL Companion', description: 'A companion app made for DLSL students to improve their quality of life. It has multiple functions to help old and new students alike.' },
  { id: '3', title: 'Eco Impact!', description: 'A mobile application made to instill ecological awareness to its variety of users. It features quests, a virtual garden, and more!' },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <ThemeToggle isDarkMode={isDarkMode} toggleSwitch={toggleSwitch} />
          <Profile isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Projects</Text>
        </>
      }
      data={projects}
      renderItem={({ item }) => (
        <View style={[styles.projectItem, isDarkMode && styles.darkBackground]}>
          <Text style={[styles.projectTitle, isDarkMode && styles.lightText]}>{item.title}</Text>
          <Text style={[styles.projectDescription, isDarkMode && styles.lightText]}>{item.description}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      ListFooterComponent={<View style={{ height: 20 }} />} // Add some space at the bottom
      contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#272727',
  },
  projectItem: {
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
  projectTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  projectDescription: {
    fontSize: 18,
    color: '#666',
  },
  lightText: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  darkSectionTitle: {
    color: '#fff',
  },
});