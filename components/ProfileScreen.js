import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>Profile Screen!</Text>
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

export default ProfileScreen