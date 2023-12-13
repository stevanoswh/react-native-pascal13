import { FlatList, StyleSheet, View, Text } from "react-native"

export default ListData = () => {


    const data = [
        {id : "1", name : "Item 1"}, 
        {id : "2", name : "Item 2"},
        {id : "3", name : "Item 3"}
    ]


    return (
        <View>
            <Text style={styles.title}>List Data</Text>
            <FlatList
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                data={data}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
})