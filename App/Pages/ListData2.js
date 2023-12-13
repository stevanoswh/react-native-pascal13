import { SectionList, View, StyleSheet, Text, Button } from "react-native"

export default DataList2=()=> {

    const data = [
        {
            title: "Section 1",
            data: [
                {key: "Item 1"},
                {key: "Item 2"},
                {key: "Item 3"}
            ]
        },
        {
            title: "Section 2",
            data: [
                {key: "Item 4"},
                {key: "Item 5"},
                {key: "Item 6"}
            ]
        }
    ]


    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text>{item.key}</Text>
        </View>
    )

    const renderSectionHeader = ({section}) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
    )   

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item)=> item.key}
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    sectionHeader: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
});
