import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.upperHalf}>

            </View>
            <View style={styles.lowerHalf}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={styles.leftText}>Recent Transactions</Text>
                    <Text style={styles.rightText}>View all</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperHalf: {
        flex: 0.4,
        backgroundColor: 'white',
    },
    lowerHalf: {
        flex: 0.6
    },
    containerStyle: {
        flex: 1
    },
    leftText: {
        left: 15,
        marginTop: 20,
        color: 'black',
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold'
    },
    rightText: {
        right: 15, 
        position: 'absolute',
        color: 'blue',
        marginTop: 20,
        fontSize: 18
    }
})

export default HomeScreen