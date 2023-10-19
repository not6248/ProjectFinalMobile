import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Pyramid = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 30 }}>
          <Text style={styles.mb_2}><Text style={styles.boldText}>พีระมิด</Text> หมายถึง ทรงสามมิติที่มีฐานเป็นรูปเหลี่ยมใดๆ มียอดแหลมซึ่งไม่อยู่บนระนาบเดียวกับฐาน และหน้าทุกหน้าเป็นรูปสามเหลี่ยมที่มีจุดยอดร่วมกันที่ยอดแหลมนั้น
          </Text>
          <Text style={styles.mb_2}><Text style={styles.boldText}>พีระมิดตรง</Text> พีระมิดที่มีสันทุกเส้นยาวเท่ากันและพีระมิดตรงที่มีฐานเป็นรูปด้านเท่ามุมเท่า เช่น รูปสามเหลี่ยมด้านเท่า รูปสี่เหลี่ยมจัตุรัส รูปห้าเหลี่ยมด้านเท่า เป็นต้น จะมีสูงเอียงทุกเส้นยาวเท่ากัน
          </Text>
          <Text style={styles.mb_2}><Text style={styles.boldText}>ส่วนต่างสูงของพีระมิด</Text> จะเป็นเส้นตรงที่ลากจากจุดยอดมาตั้งฉากกับฐานที่จุดซึ่งอยูห่างจากจุดยอดมุมของรูปเหลี่ยมที่เป็นฐานเป็นระยะทางเท่ากัน
          </Text>
          <Text style={styles.mb_2}>ในกรณีของพีระมิดตรงที่มีสันทุกเส้นยาวเท่ากัน ความสูงของพีระมิด ความสูงเอียง และความยาวฐานจะมีความสัมพันธ์กันดังนี้
          </Text>
          {/* imgContainer */}
          <View style={styles.imgContainer}>
            {/* Image ==================================================== */}
            <Image source={{ uri: 'https://www.i-pic.info/i/b98g585609.jpg' }} style={styles.Im}></Image>
          </View>

          <Text style={[]}>จากทฤษฎีพีทาโกรัสจะได้ว่า</Text>
          {/* imgContainer */}
          <View style={styles.imgContainer}>
            {/* Image ==================================================== */}
            <Image source={{ uri: 'https://www.i-pic.info/i/E3JT585612.jpg' }} style={styles.Im}></Image>
          </View>

          <Text style={[]}> และถ้าสันของพีระมิดยาว = y หน่วย </Text>
          {/* imgContainer */}
          <View style={styles.imgContainer}>
            {/* Image ==================================================== */}
            <Image source={{ uri: 'https://www.i-pic.info/i/BAkv585613.jpg' }} style={styles.Im}></Image>
          </View>
          <Text style={styles.mb_2}><Text style={styles.boldText}>ข้อควรระวัง</Text> กรณีของพีระมิดสี่เหลี่ยมผืนผ้า ฐานจะมีความยาวไม่เท่ากัน และสูงเอียงก็ยาวไม่เท่ากัน การคำนวณต้องพิจารณาว่ามองด้านกว้างหรือด้านยาวของฐาน
            ดังรูป
          </Text>
          {/* imgContainer */}
          <View style={styles.imgContainer}>
            {/* Image ==================================================== */}
            <Image source={{ uri: 'https://www.i-pic.info/i/trG9585614.jpg' }} style={styles.Im}></Image>
          </View>

          <Text style={[]}> สูตรพื้นที่ผิวและปริมาตร </Text>
          {/* imgContainer */}
          <View style={styles.imgContainer}>
            {/* Image ==================================================== */}
            <Image source={{ uri: 'https://www.i-pic.info/i/AmNe585615.jpg' }} style={styles.Im}></Image>
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

export default Pyramid