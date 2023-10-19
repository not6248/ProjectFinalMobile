import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Cylinder = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={{ padding: 30 }}>
        <Text style={styles.mb_2}><Text style={styles.boldText}>ทรงกระบอก</Text> คือ รูปทรงเรขาคณิต สามมิติที่มีพื้นที่ฐานเป็นวงกลมทั้งสองด้าน 
        </Text>
        {/* imgContainer */}
        <View style={styles.imgContainer}>
          {/* Image ==================================================== */}
          <Image source={{ uri: 'https://www.i-pic.info/i/cxEp585641.jpg' }} style={styles.Im}></Image>
        </View>

        <Text style={[styles.boldText,styles.UnderLine,styles.mb_2]}>คุณสมบัติของทรงกระบอก</Text>
        <Text style={[styles.mb_2]}>- รูปทรงสามมิติที่มีฐานเป็นรูปวงกลมทั้งสองด้าน</Text>
        <Text style={[styles.mb_2]}>- เมื่อตัดรูปทรงสามมิตินี้ในระนาบที่ขนานกับฐาน จะได้รอยตัดเป็นรูปวงกลม</Text>
        <Text style={[styles.mb_2]}>- เมื่อตัดรูปทรงสามมิตินี้ในระนาบที่ตั้งฉากกับฐาน จะได้รอยตัดเป็นรูปสี่เหลี่ยม</Text>
        <Text style={[styles.mb_2,styles.mt_2]}>สูตรพื้นที่ผิวและปริมาตร</Text>
        {/* imgContainer */}
        <View style={styles.imgContainer}>
          {/* Image ==================================================== */}
          <Image source={{ uri: 'https://www.i-pic.info/i/uVfq585663.jpg' }} style={styles.Im}></Image>
        </View>
      </View >
    </ScrollView>
  </SafeAreaView>
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
  UnderLine:{
    textDecorationLine: 'underline'
  }
});

export default Cylinder