import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function RemindersScreen({ navigation }) {
    const reminders = useSelector((state) => state.reminders.items);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>💜 Reminders</Text>
            {reminders.length === 0 ? (
                <View style={styles.emptyBox}>
                    <Text style={styles.emptyText}>There is no reminders now</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('NewReminderScreen')}
                    >
                        <Text style={styles.buttonText}>Add new</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={reminders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={{fontFamily: 'LilitaOne',}}>{item.title}</Text>
                            <Text style={{fontFamily: 'LilitaOne',}}>{item.description}</Text>
                            <Text>{item.date} at {item.time}</Text>
                        </View>
                    )}
                    ListFooterComponent={
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('NewReminderScreen')}
                        >
                            <Text style={styles.buttonText}>Add new</Text>
                        </TouchableOpacity>
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
    header: { fontSize: 28,fontFamily: 'LilitaOne', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    emptyBox: { padding: 30, borderWidth: 1, borderRadius: 20, borderColor: '#F2D9FF', alignItems: 'center' },
    emptyText: { fontSize: 16, fontFamily: 'LilitaOne',color: '#555', marginBottom: 10 },
    button: { marginTop: 10, backgroundColor: '#F196FF', padding: 12, borderRadius: 20 },
    buttonText: { color: '#fff', fontFamily: 'LilitaOne',fontWeight: 'bold' },
    card: { backgroundColor: '#FEEAFE', padding: 15, borderRadius: 15, marginBottom: 10 }
});
