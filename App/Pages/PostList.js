import { useEffect, useState } from "react"
import { FlatList, View, StyleSheet, Text } from "react-native"

export default PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = "https://jsonplaceholder.typicode.com/posts"
                const response = await fetch(apiUrl)
                if(response.ok){
                    const data = await response.json()
                    console.log(data)
                    setPosts(data)
                } else {
                    console.error("Gagal mengambil data dari api", response.statusText)
                }
                
            } catch (err) {
                console.error("Terjadi error", err.message)
            }
        }

        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <Text >Post List</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.postItem}>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        <Text style={styles.postBody}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    postItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginVertical: 8,
    },
    postTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    postBody: {
      fontSize: 16,
    },
  });