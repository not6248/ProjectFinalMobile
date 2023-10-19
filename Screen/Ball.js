import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Ball = () => {
  return (
    <View>
      <Text>ball</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  }, Im: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 2, // Your aspect ratio
    marginBottom: 30,
  }, imgContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  mb_2: {
    marginBottom: 30,
  },
  mt_2: {
    marginTop: 30,
  },
});

export default Ball