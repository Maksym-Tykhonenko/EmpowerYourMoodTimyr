import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const StatsScreen = () => {
    const moods = useSelector(state => state.moods.savedMoods);

    const moodCount = {};
    moods.forEach(mood => {
        moodCount[mood] = (moodCount[mood] || 0) + 1;
    });

    const total = moods.length;
    const getPercentage = (mood) => total === 0 ? 0 : Math.round((moodCount[mood] || 0) / total * 100);
    const nickname = useSelector((state) => state.user.nickname);
    const moodData = [
        { emoji: '😇', color: '#c2f0c2', mood: 'angelic' },
        { emoji: '🥰', color: '#fbc3c3', mood: 'loved' },
        { emoji: '😴', color: '#fbd8a5', mood: 'sleepy' },
        { emoji: '😜', color: '#b9d6ff', mood: 'silly' },
    ];

    return (
        <View style={styles.container}>


            <Text style={styles.title}>{nickname || '[username]'}</Text>

            <View style={styles.barsContainer}>
                {moodData.map(({ emoji, color, mood }, index) => (
                    <View key={index} style={styles.barItem}>
                        <Text style={styles.emoji}>{emoji}</Text>
                        <Text style={styles.percent}>{getPercentage(mood)}%</Text>
                        <View style={[styles.bar, { height: getPercentage(mood), backgroundColor: color }]} />
                    </View>
                ))}
            </View>

            <View style={styles.summaryBox}>
                <Text style={styles.tasksText}>{moods.length}</Text>
                <Text style={styles.subtitle}>Tasks completed</Text>
                <TouchableOpacity style={styles.shareButton}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default StatsScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: 'white',
        flex: 1
    },
    username: {
        fontSize: 24,
        fontFamily: 'LilitaOne',
        fontWeight: 'bold'

    },
    subtext: {
        fontSize: 14,fontFamily: 'LilitaOne',
        color: 'gray',
        marginBottom: 20
    },
    title: {
        fontSize: 22,fontFamily: 'LilitaOne',
        fontWeight: 'bold',
        marginBottom: 12
    },
    barsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        height: 150,
        marginBottom: 30
    },
    barItem: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    emoji: {
        fontSize: 24,fontFamily: 'LilitaOne',
        marginBottom: 4
    },
    percent: {
        fontSize: 16,fontFamily: 'LilitaOne',
        fontWeight: '600'
    },
    bar: {
        width: 40,
        borderRadius: 10,
        marginTop: 6
    },
    summaryBox: {
        backgroundColor: '#f2b4fa',
        borderRadius: 16,
        padding: 20,
        width: '80%',
        alignItems: 'center'
    },
    tasksText: {
        fontSize: 28,fontFamily: 'LilitaOne',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,fontFamily: 'LilitaOne',
        color: '#333',
        marginBottom: 12
    },
    shareButton: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    shareText: {
        fontSize: 16,
        fontWeight: 'bold',fontFamily: 'LilitaOne',
        color: '#333'
    }
});
