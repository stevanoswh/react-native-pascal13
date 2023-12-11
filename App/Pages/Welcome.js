import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '../Context/UserContext';

export default function Welcome({route}) {

    const {user} = useUser()

    return (
        <View style={styles.container}>
            <Text>Welcome, {user.name}</Text>
            <Text style={styles.infoText}>Ypu're Logged In</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 18,
    },
});