import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const StatsScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>Stats Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default StatsScreen