import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View, ScrollView, SafeAreaView  } from 'react-native';
import Thumlist from './components/Thumlist';

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

   // Filtrer les vidéos par tag
   const memeVideos = videos.filter((video) => video.tags.includes('meme'));
   const movieVideos = videos.filter((video) => video.tags.includes('movie'));
   const adVideos = videos.filter((video) => video.tags.includes('ad'));
   const exclusiveVideos = videos.filter((video) => video.tags.includes('exclusive'));
   const shortVideos = videos.filter((video) => video.tags.includes('short'));

  return (
    <ScrollView style={styles.container}>
      <Thumlist text="Seulement sur mystudio" list={exclusiveVideos} />
      <Thumlist text="Rapide" list={shortVideos} />
      <Thumlist text="Drole" list={memeVideos} />
      <Thumlist text="Films" list={movieVideos} />
      <Thumlist text="Publicités" list={adVideos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
