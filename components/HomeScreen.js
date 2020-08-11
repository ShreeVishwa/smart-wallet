import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.textStyle} >
            <Text>Home Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen