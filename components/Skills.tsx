import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Skills = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={[styles.skills, isDarkMode && styles.darkBackground]}>
      <Text style={[styles.sectionTitle, isDarkMode && styles.lightText]}>Skills</Text>
      <View style={styles.skillContainer}>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>React Native</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>React</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>Node.js</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>C++</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>C#</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>Unity</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>HTML</Text>
        <Text style={[styles.skill, isDarkMode && styles.lightSkill]}>CSS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skills: {
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
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    fontSize: 16,
    marginRight: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#fff',
  },
  lightSkill: {
    backgroundColor: '#555',
    color: '#fff',
  },
  lightText: {
    color: '#fff',
  },
});

export default Skills;