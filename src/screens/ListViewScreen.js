import { useState } from "react";
import {View, StyleSheet, Text, FlatList } from 'react-native';

const dummyData = [
    {
        id: -1,
        title: "This is my first item",
        content: "blah blah blah ... lots of waffle",
        date: new Date()
    },

    {
        id: -2,
        title: "This is my second item",
        content: "lets get back to some hardcore coding!!!",
        date: new Date()
    }
]

const ListViewScreen = ({ navigation}) => {
    const [items, setItems] = useState(dummyData);
    console.log(items);
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) => {
                    return (
                        <View style={styles.itemContainer}>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>
                                    {item.date.toLocaleDateString()}
                                </Text>
                                <Text>
                                    {item.date.toLocaleDateString()}
                                </Text>
                            </View>
                            <Text style={styles.titleText}>{item.title}</Text>
                        </View>
                    );
                }}
                />
            </View>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: "flex-start",
    }
});

export default ListViewScreen;