import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function History({ route }) {
    const { history } = route.params;
    
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<Text>History</Text>}
                data={history}
                renderItem={({ item }) => <Text>{item.text}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
});