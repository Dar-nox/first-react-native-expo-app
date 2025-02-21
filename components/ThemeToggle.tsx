import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleSwitch: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleSwitch }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
  darkLabel: {
    color: '#fff',
  },
});

export default ThemeToggle;