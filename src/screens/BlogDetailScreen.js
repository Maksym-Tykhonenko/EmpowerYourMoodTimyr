import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BlogDetailScreen({ route }) {
    const { post } = route.params;
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Image source={post.image} style={styles.image} />
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <View style={{marginBottom: 100}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    backArrow: {
        fontSize: 24,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 15
    },
    title: {
        fontFamily: 'LilitaOne',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontFamily: 'LilitaOne',
        fontSize: 18,
        lineHeight: 32,
        color: '#676767'
    }
});
