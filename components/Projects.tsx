import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

interface Project {
  id: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  { id: '1', title: 'AI-based Smart Traffic Lights', description: 'A software made to reduce traffic in Lipa City\'s most crowded intersections. It uses AI to manage the traffic lights more efficiently.' },
  { id: '2', title: 'DLSL Companion', description: 'A companion app made for DLSL students to improve their quality of life. It has multiple functions to help old and new students alike.' },
  { id: '3', title: 'Eco Impact!', description: 'A mobile application made to instill ecological awareness to its variety of users. It features quests, a virtual garden, and more!' },
];

const Projects = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={[styles.projects, isDarkMode && styles.darkBackground]}>
      <Text style={[styles.sectionTitle, isDarkMode && styles.lightText]}>Projects</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={[styles.projectTitle, isDarkMode && styles.lightText]}>{item.title}</Text>
            <Text style={[styles.projectDescription, isDarkMode && styles.lightText]}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  projects: {
    marginBottom: 40,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  darkBackground: {
    backgroundColor: '#A3A2A2',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
  },
  lightText: {
    color: '#000',
  },
});

export default Projects;