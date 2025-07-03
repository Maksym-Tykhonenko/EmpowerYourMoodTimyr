import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {addReminder} from "../redux/slices/remindersSlice";

export default function NewReminderScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAdd = () => {
        if (title && date && time) {
            dispatch(addReminder({
                id: Math.floor(Math.random() * 1000000),
                title,
                description,
                date,
                time
            }));

            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Text style={styles.header}>💜 New Reminder</Text>

            <Text style={styles.label}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Type here..." />

            <Text style={styles.label}>Description:</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Type here..." />

            <Text style={styles.label}>Date:</Text>
            <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="DD.MM.YYYY" />

            <Text style={styles.label}>Time:</Text>
            <TextInput style={styles.input} value={time} onChangeText={setTime} placeholder="HH:MM" />

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add reminder</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: 50, paddingHorizontal: 20, flex: 1, backgroundColor: '#fff' },
    backArrow: { fontSize: 24 },
    header: { fontFamily: 'LilitaOne',fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    label: {fontFamily: 'LilitaOne',  marginTop: 15, marginBottom: 5, fontWeight: 'bold' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 10 },
    button: { marginTop: 30, backgroundColor: '#F196FF', padding: 15, borderRadius: 25, alignItems: 'center' },
    buttonText: { fontFamily: 'LilitaOne', color: '#fff', fontWeight: 'bold' }
});
