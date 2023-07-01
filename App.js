import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View, ScrollView, SafeAreaView  } from 'react-native';
import Thumbnail from './thumbnail';

export default function App() {
  const videos = [
    {
      id: "NVMO-yRKgos",
      title: "Déjà vu",
    },
    {
      id: "vC546vqfW6c",
      title: "Among Us",
    },
    {
      id: "yYNoMgVkqQs",
      title: "Sodax",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seulement sur mystudio</Text>
      <ScrollView style={styles.scrollview} horizontal={true}>
        {videos.map((video) => (
          <Thumbnail key={video.id} title={video.title} id={video.id} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollview:{

  },
  text: {
    color: '#fff',
  }
});
