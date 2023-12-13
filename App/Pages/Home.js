import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '../Context/UserContext';
import Button from '../Components/Button';

export default function Home({navigation}) {
    const {user, logout} = useUser()

    const handleInsertData = () => {
        navigation.navigate("InsertData")
    }

    const handleListData = () => {
        navigation.navigate('ListData')
    }

    const handleListData2 = () => {
        navigation.navigate('ListData2')
    }

    const handlePostList = () => {
        navigation.navigate('PostList')
    }

    const handleLogout = () => {
        logout()
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text>Welcome, {user ? user.name : "Guest"}</Text>
            <Text style={styles.infoText}>You're Logged In</Text>

            <Button text="Insert Data" onPress={handleInsertData} style={styles.button}/>
            <Button text="Post List" onPress={handlePostList} style={styles.button}/>
            <Button text="Logout" onPress={handleLogout} style={styles.logoutButton}/>
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
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        marginBottom: 30,
    },
    button: {
        width: '80%',
        marginVertical: 10,
    },
    logoutButton: {
        marginTop: 20,
    },
});