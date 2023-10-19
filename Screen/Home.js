import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'

const Stack = createStackNavigator();  // creates object for Stack Navigator
const Home = ({ navigation }) => {
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.ImCon} onPress={() => navigation.navigate('Prism')}>
          <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/393692247_1443274129786441_2339346536650115489_n.png?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE-8Kgua3RRXGPO0llKrXmuB9ZCDhQhLVoH1kIOFCEtWt4sMyI4IRooR_KMfsOIYm5bnXbxvComocXmBvTgdijn&_nc_ohc=M5Zh5zL3BcwAX_7d3tS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT5MkXFqcQGnT-TAYfgKOrmR8MgwogAIJwiBYwSOeOdYQ&oe=6557257C' }} style={styles.Im}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ImCon} onPress={() => navigation.navigate('Pyramid')}>
          <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/393957864_1382900622639184_8088170848419324171_n.png?_nc_cat=105&ccb=1-7&_nc_sid=510075&_nc_eui2=AeF_1Kvm2HWFejEpxDkMIkin1BA48_XA6BnUEDjz9cDoGXHF6rNXDeHSIa2krJ_LwpGv6HQFXVjBLJgQmnb3ouhn&_nc_ohc=-08eybN0lJsAX_5Nu44&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSZfte3uqNREYJtD-4lZ8nh_P218IWMih-fwNCWlCeclg&oe=6557112B' }} style={styles.Im}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ImCon} onPress={() => navigation.navigate('Cylinder')}>
          <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/387502247_283154247972283_7171350341752148848_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeF9678QjtqOEmvo9z3TICt03Z5QNa8v8SXdnlA1ry_xJcjY4i-wp8-Ardu-a69mIrP2ZWSzeIgrA4N_4tDd3_sn&_nc_ohc=Zn4sFOpEoG4AX9JuvG8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQU1KHXMzenQWdBfVUKuELYBcL3wm5mebyRo7DdrzRZPQ&oe=655715D2' }} style={styles.Im}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ImCon} onPress={() => navigation.navigate('Funnel')}>
          <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/393905437_658311129777423_193615163654635456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHk7MHs9WR5xxRlXFyVsY_Hu0-fV0MmIma7T59XQyYiZpdfBmKYs2wpFhnUb5GLz1-VL8qWKydMJbH_Q9A22TfU&_nc_ohc=qXKo1lzktXMAX9wX-Ro&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ8I76g96Gg-R-nRA_usdyDF03GnNIXXwlM0ofr4ZFbhQ&oe=65570A3F' }} style={styles.Im}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ImCon} onPress={() => navigation.navigate('Ball')}>
          <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/393920590_23984829917829832_4822306272023388272_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeF4GQmbIdK6dPh_PhThG3hQpX47rmnE07ilfjuuacTTuG0xbTpYiJIkfwkpTq9_2gBH2wAZPU5sPMDCdiKuuDcU&_nc_ohc=uamVV2camLkAX_gcnbS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR6SaDWqr2bJjm-2r8GboKwlozmhQWE1uPIV_hFaT8mFQ&oe=65573B23' }} style={styles.Im}></Image>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Im: {
    width: 130,
    height: 130,
    margin: 20,
    justifyContent: 'center',
  }

});
export default Home