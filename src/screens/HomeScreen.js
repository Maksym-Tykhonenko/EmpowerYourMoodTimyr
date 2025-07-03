import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; // или из useContext / AsyncStorage
import { useNavigation } from '@react-navigation/native';
import {setNickname} from "../redux/slices/userSlice";

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [newNickname, setNewNickname] = useState('');

    const nickname = useSelector((state) => state.user.nickname);
    return (
        <View style={styles.container}>


            {/* Контент */}
            <View style={styles.card}>
                <Text style={styles.title}>Welcome, {nickname || '[username]'}</Text>
                <Text style={styles.subtitle}>What's your mood today? Let's find out with a short quiz</Text>

                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('QuestionScreen')}>
                    <Text style={styles.primaryButtonText}>Let’s Begin</Text>
                </TouchableOpacity>
            </View>

            {/* Daily Game Section */}
            <View style={styles.subCard}>
                <Text style={styles.cardTitle}>Change nickname</Text>

                <TextInput
                    style={{padding: 10, borderRadius: 20, borderColor: 'black', borderWidth: 1, width: '90%', marginVertical: 12}}
                    placeholder="Enter new nickname"
                    value={newNickname}
                    onChangeText={setNewNickname}
                />

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                        if (newNickname.trim()) {
                            dispatch(setNickname(newNickname.trim()));
                            setNewNickname('');
                        }
                    }}
                >
                    <Text style={styles.secondaryButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            {/*<View style={styles.bottomNav}>*/}
            {/*    {[*/}
            {/*        { name: 'book-outline' },*/}
            {/*        { name: 'notifications-outline' },*/}
            {/*        { name: 'clipboard-outline', active: true },*/}
            {/*        { name: 'bookmark-outline' },*/}
            {/*        { name: 'person-outline' },*/}
            {/*    ].map((icon, index) => (*/}
            {/*        <TouchableOpacity key={index} style={[styles.navIcon, icon.active && styles.activeNav]}>*/}
            {/*        */}
            {/*        </TouchableOpacity>*/}
            {/*    ))}*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#f24ed0',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    card: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 8,
        fontFamily: 'LilitaOne',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
        fontFamily: 'LilitaOne',
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: '#f24ed0',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    primaryButtonText: {
        color: '#fff',
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
    },
    subCard: {
        borderColor: '#f49fe9',
        borderWidth: 1.5,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        fontFamily: 'LilitaOne',
        marginBottom: 30,
    },
    cardTitle: {
        fontFamily: 'LilitaOne',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 14,
        fontFamily: 'LilitaOne',
        color: '#444',
        marginBottom: 15,
    },
    secondaryButton: {
        backgroundColor: '#f49fe9',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    secondaryButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'LilitaOne',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    navIcon: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 25,
    },
    activeNav: {
        backgroundColor: '#f24ed0',
    },
});

export default HomeScreen;
