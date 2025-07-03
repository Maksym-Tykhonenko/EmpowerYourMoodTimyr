// Multi-question mood quiz with results
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {saveMood} from "../redux/slices/moodSlice";
import {useDispatch} from "react-redux";

const quizData = [
    {
        question: "How do you feel this morning?",
        answers: [
            { text: "Ready to conquer the world! Let's get moving.", mood: "Vibrant Energy" },
            { text: "I feel like a romantic, maybe a cozy day in.", mood: "Cozy Romance" },
            { text: "I need some peace and quiet, a calm day sounds perfect.", mood: "Tranquil Serenity" },
            { text: "I'm up for adventure, let's explore something new today.", mood: "Adventurous Spirit" },
        ],
    },
    {
        question: "What would you do on a perfect weekend?",
        answers: [
            { text: "Hit the gym, go hiking, and try something high-energy.", mood: "Vibrant Energy" },
            { text: "Relax in a cozy cafe with a book or have a movie night.", mood: "Cozy Romance" },
            { text: "Spend the day in nature, meditating or taking a slow walk.", mood: "Tranquil Serenity" },
            { text: "Discover a new place, maybe a spontaneous road trip.", mood: "Adventurous Spirit" },
        ],
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "Jump into action and get things done right away.", mood: "Vibrant Energy" },
            { text: "Take a step back and find comfort in the little things.", mood: "Cozy Romance" },
            { text: "I prefer to recharge quietly and find inner peace.", mood: "Tranquil Serenity" },
            { text: "I look for new experiences to take my mind off things.", mood: "Adventurous Spirit" },
        ],
    },
    {
        question: "What’s your ideal way to relax?",
        answers: [
            { text: "A good workout or something that gets my heart racing.", mood: "Vibrant Energy" },
            { text: "A glass of wine, a good book, and a comfortable spot.", mood: "Cozy Romance" },
            { text: "A quiet space to meditate or enjoy a peaceful atmosphere.", mood: "Tranquil Serenity" },
            { text: "Going out with friends or trying something exciting like an outdoor activity.", mood: "Adventurous Spirit" },
        ],
    },
    {
        question: "Pick a color that best matches your current mood:",
        answers: [
            { text: "Bright red or orange – energetic and bold!", mood: "Vibrant Energy" },
            { text: "Soft pink or lavender – romantic and calming.", mood: "Cozy Romance" },
            { text: "Calm blue or green – peaceful and tranquil.", mood: "Tranquil Serenity" },
            { text: "Bold yellow or electric blue – adventurous and curious.", mood: "Adventurous Spirit" },
        ],
    }
];

const moodDescriptions = {
    'Vibrant Energy': "You're full of energy and ready to take on anything. Your ideal day is one that challenges you and keeps you moving.",
    'Cozy Romance': "You thrive in relaxed, intimate settings. Romance and comfort are key to your happiness.",
    'Tranquil Serenity': "You value peace and quiet. Your ideal environment is calm and meditative.",
    'Adventurous Spirit': "You're always up for an adventure. Spontaneity and exploration fuel your soul."
};

export default function QuestionScreen({navigation}) {
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (mood) => {
        const updated = [...answers, mood];
        if (currentQ + 1 < quizData.length) {
            setAnswers(updated);
            setCurrentQ(currentQ + 1);
        } else {
            setAnswers(updated);
            setCurrentQ(currentQ + 1);
        }
    };
    const  dispatch = useDispatch();
    if (currentQ === quizData.length) {
        const moodCount = {};
        answers.forEach(m => moodCount[m] = (moodCount[m] || 0) + 1);
        const topMood = Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0][0];

        return (
            <View style={styles.container}>
                <Text style={styles.emoji}>😇</Text>
                <Text style={styles.resultTitle}>{topMood}</Text>
                <Text style={styles.subtitle}>We have selected content for you</Text>

                <View style={styles.progressBarContainer}>
                    <View style={styles.progressFilled} />
                    <View style={styles.progressEmpty} />
                    <View style={styles.progressEmpty} />
                </View>

                <View style={styles.quoteBox}>
                    <Text style={styles.dailyQuoteLabel}>Daily Quote:</Text>
                    <Text style={styles.quote}>
                        "Don’t wait for the perfect moment. Take the moment and make it perfect."
                    </Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.shareButton}>
                            <Text style={styles.shareText}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={() => {
                            dispatch(saveMood(topMood));
                            navigation.pop(1)
                        }}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {navigation.pop(1)}}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const question = quizData[currentQ];

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/img/Group7.png')} />
            <Text style={styles.header}>Question {currentQ + 1}</Text>
            <Text style={styles.question}>{question.question}</Text>
            {question.answers.map((a, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.optionButton}
                    onPress={() => handleAnswer(a.mood)}
                >
                    <Text style={styles.optionText}>{a.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emoji: {
        fontSize: 48,
        marginBottom: 10,
    },
    resultTitle: {
        fontFamily: 'LilitaOne',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 10,
        fontFamily: 'LilitaOne',
        color: '#555',
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    progressFilled: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D26CFF',
        marginHorizontal: 4,
    },
    progressEmpty: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#F2D9FF',
        marginHorizontal: 4,
    },
    quoteBox: {
        borderWidth: 1,
        borderColor: '#F2D9FF',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
        backgroundColor: '#fff'
    },
    dailyQuoteLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    quote: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',fontFamily: 'LilitaOne',

        marginBottom: 20,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    shareButton: {
        backgroundColor: '#D26CFF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    shareText: {
        color: '#fff',
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
    },
    saveButton: {
        borderColor: '#D26CFF',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    saveText: {
        color: '#D26CFF',
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
    },
    nextText: {
        marginTop: 20,
        color: '#000',
        fontFamily: 'LilitaOne',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 28,
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
        marginBottom: 15
    },
    question: {
        fontSize: 18,
        fontFamily: 'LilitaOne',
        textAlign: 'center',
        marginBottom: 20
    },
    optionButton: {
        fontFamily: 'LilitaOne',
        padding: 14,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        width: '100%'
    },
    optionText: {
        textAlign: 'center',
        fontFamily: 'LilitaOne',
        fontWeight: '500'
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F196FF',
        marginTop: 10
    },
    description: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 10
    }
});
