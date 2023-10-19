import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Prism = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 30 }}>
          <Text style={styles.mb_2}><Text style={styles.boldText}>ปริซึม</Text> เป็นรูปเรขาคณิตสามมิติที่มีฐานทั้งสองเป็นรูปเหลี่ยมที่เท่ากันทุกแระการ ฐานทั้งสองอยู่บนระนาบที่ขนานกัน และด้านข้างแต่ละด้านเป็นรูปสี่เหลี่ยมด้านขนาน
          </Text>
          <Text style={[styles.boldText, styles.mb_2]}>ส่วนต่างๆ ของปริซึม</Text>
          {/* Image ==================================================== */}
          <View style={styles.imgContainer}>
            <Image source={{ uri: 'https://scontent.fbkk12-5.fna.fbcdn.net/v/t1.15752-9/393408941_702798931751604_7512073331652443381_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG2NdSRmJCifZSkwUqcIoLJ1L5Qg4h8a2TUvlCDiHxrZItY8NFNRSjdUqmjbZLzDNLG1HjYFNjqSsZvhn0hZEXh&_nc_ohc=P2dI-pqwd9sAX-4v_O1&_nc_ht=scontent.fbkk12-5.fna&_nc_e2o=f&oh=03_AdQ9gfBMjpUVYstILorSIbQWYOWfEy3Bn3XTVqCFyJ5kMg&oe=6557709E' }} style={styles.Im}></Image>
          </View>
          {/* ========================================================== */}

          <Text style={[styles.boldText, styles.mb_2]}>คุณสมบัติของปริซึม</Text>
          {/* Image ==================================================== */}
          <View style={styles.imgContainer}>
            <Image source={{ uri: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/394016042_709655273935538_7739277432723426191_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFiRVCqCXdnTwEA98cCYV0E5bc179ghcSvltzXv2CFxK1iITmLLGwfLCb5RczzDhWGO2nfYwDEvr4I8x2drJgJc&_nc_ohc=eTGbxDRqyokAX_SIxVo&_nc_oc=AQlzx3av1UEmy3HVnTq-Ffqw03wJlZX9EdEcK5DgUSwVakjRS0L7uZCoP69SMMJyrlQ&_nc_ht=scontent.fbkk8-4.fna&_nc_e2o=f&oh=03_AdQ_vzv8Nr6IKi28vYB66EOx5rbZWohTHCP4Cvq10rmoKA&oe=655767CE' }} style={styles.Im}></Image>
          </View>
          {/* ========================================================== */}
          <Text>

            - รูปทรงสามมิติที่มีหน้าตัดหัวท้ายเป็นรูปเหลี่ยม

            - พื้นที่หน้าตัดหัวท้ายมีขนาดเท่ากัน

            - ด้านข้างของรูปทรงสามมิติเป็นรูปสี่เหลี่ยมทุกรูป

            - ชื่อเรียกของปริซึมเรียกตามรูปพื้นที่หน้าตัด เช่น ปริซึมรปสามเหลี่ยม ปริซึมรูปสี่เหลี่ยม ปริซึมรูปห้าเหลี่ยม เป็นต้น</Text>
          <Text style={[styles.boldText, styles.mb_2, styles.mt_2]}>สูตรพื้นที่ผิวและปริมาตร</Text>
          <View style={styles.imgContainer}>
            <Image source={{ uri: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/393982238_139082012627191_1009103425372447796_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEk2fHGElPcqJFhQIYvBtzY4WAIm68zy6rhYAibrzPLqkjJKMwz3wja1r9sQAgk0iYcWyauQKBRheIJpJZJRuL7&_nc_ohc=tfx2Y-8iby4AX8EvFfY&_nc_ht=scontent.fbkk12-2.fna&_nc_e2o=f&oh=03_AdStQ1off-ouAK-ZrTG_9omhf4hwovynyA3ImqU7huJpiQ&oe=65574584' }} style={styles.Im}></Image>
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
});

export default Prism