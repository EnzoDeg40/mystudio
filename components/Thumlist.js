import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView, StyleSheet } from 'react-native';
import Thumbnail from './Thumbnail';

const Thumlist = (props) => {
  const { text, list } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <ScrollView style={styles.scrollview} horizontal={true}>
        {list.map((video) => (
          <Thumbnail key={video.id} title={video.title} id={video.id} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  }
});


export default Thumlist;