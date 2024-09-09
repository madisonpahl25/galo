import { StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Welcome } from '@/components/Home/Welcome';
import Favorites from '@/components/Home/Favorites';
import { Upcoming } from '@/components/Home/Upcoming';

export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <Welcome />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Favorites />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Upcoming />
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
