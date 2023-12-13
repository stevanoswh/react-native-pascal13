import { StyleSheet, TextInput, TouchableOpacity, View, Image, Text } from "react-native";
import Color from '../Shared/Color'
import { Dimensions } from 'react-native';
import { useState, useContext } from "react";
import { UserContext, useUser } from "../Context/UserContext";


export default function Login({navigation}){
    const {storeUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        
        const mockUsername = 'stevano'
        const mockPassword = '123456'

        if (username === mockUsername && password === mockPassword) {
            const userData = {name: username}
            storeUser(userData)
            navigation.navigate('Home')
        } else {
            alert('Invalid Credentials')
        }


        // navigation.navigate('Welcome')
    }
    

    return (
        <View>
            <Image source={require('./../Assets/Images/login.png')}/> 
            <View style={styles.container}>
                <Text style={styles.textWelcome}>Welcome To Enigma Mobile</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const win = Dimensions.get('window');
// const ratio = win.width/541; //541 is actual image width

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -15,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    image: {
        width: win.width,
    },
    textWelcome: {
        fontSize : 35,
        textAlign: 'center',
        fontWeight:'bold'
    },
    input : {
        height: 40,
        marginHorizontal: 30,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10
    },
    button: {
        backgroundColor: Color.primary,
        padding: 10,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
    }




})