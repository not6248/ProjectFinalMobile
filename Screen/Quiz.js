import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Quiz = () => {
    return (
        <WebView
        style={styles.container}
        source={{ uri: "https://docs.google.com/forms/d/e/1FAIpQLScII3cfPfcAsKMQytqugkvq7Aobwc-mgP7T0vTTVLHZe8j72w/viewform" }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
});

export default Quiz