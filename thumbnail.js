import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const Thumbnail = (props) => {
  const { title, id } = props;
  const imgUrl = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
  const videoUrl = "https://www.youtube.com/watch?v=" + id;
  
  const openURL = () => {
    Linking.openURL(videoUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openURL}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.Text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    margin: 10,
  },
  image: {
    width: 200,
    height: 280,
  },
  Text: {
    color: '#fff',
  }
});


export default Thumbnail;