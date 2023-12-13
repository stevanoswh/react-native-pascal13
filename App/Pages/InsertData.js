import { useState } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import Button from "../Components/Button"


export default InsertData = () => {

    const [title, setTitle] = useState({})
    const [body, setBody] = useState({})

    const handleInsert = async () => {
        try {
            const newPost = {
                title: "Title",
                body: "body",
                userId: 1
            }

            const apiUrl = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(apiUrl, { 
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(newPost)
            })

            if (response.status === 201) {
                const responseData = await response.json()
                console.log(responseData)
            } else {
                console.error("Gagal membuat post", response.statusText)
            }
        } catch(error) {
            console.error("terjadi error ", error)
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Insert Data</Text>
            <TextInput
                style={styles.input}
                value={title}
                placeholder="title"
                onChangeText={(text) => setTitle(text)}
            />

           <TextInput
                style={styles.input}
                value={body}
                placeholder="body"
                onChangeText={(text) => setBody(text)}
            />
            <Button text="insert" onPress={handleInsert} style={styles.button}/>
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        width: '80%',
    },
});