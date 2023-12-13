import { StyleSheet, Text, TouchableOpacity } from "react-native";


const Button = ({text, onPress, style})=> {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue', // Ganti dengan warna latar yang Anda inginkan
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white', // Ganti dengan warna teks yang Anda inginkan
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Button