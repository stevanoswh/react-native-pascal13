import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'

export default function Splash({navigation}) {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Login'}]
                })
            )
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.container}>
            <Image
                source={require('./../Assets/Images/enigma.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Welcome to Enigma Mobile</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150, 
        height: 150, 
        resizeMode: 'contain',
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
});