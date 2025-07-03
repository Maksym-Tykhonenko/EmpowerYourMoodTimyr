import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Animated, Image, TextInput } from 'react-native';
import {useDispatch} from "react-redux";
import {setNickname} from "../redux/slices/userSlice";

const { width } = Dimensions.get('window');

const slides = [
    {
        key: '1',
        title: 'Welcome to Pinko!',
        description:
            'Ready to discover your mood and receive personalized inspiration? Let\'s begin your journey to positivity, motivation, and self-care!',
        buttonText: "Let's Begin",
    },
    {
        key: '2',
        title: 'Mood Quiz',
        description:
            'Answer a few simple questions to discover your mood today. Based on your answers, we\'ll provide you with motivational quotes, challenges, and advice tailored just for you.',
        buttonText: 'Next',
    },
    {
        key: '3',
        title: 'Daily Inspiration',
        description:
            'Receive a motivational quote every day to keep you focused and energized. Whenever you need a boost, just check your daily inspiration!',
        buttonText: 'Next',
    },
    {
        key: '4',
        title: 'Challenges and Advice',
        description:
            'Get challenges and advice that match your mood. Whether it’s pushing yourself to do something new or practicing self-care, we’ve got the perfect task for you.',
        buttonText: 'Next',
    },
    {
        key: '5',
        title: 'Saved Quotes',
        description:
            'Save your favorite motivational quotes and come back to them anytime you need a dose of inspiration.',
        buttonText: 'Next',
    },
    {
        key: '6',
        title: 'Explore the Blog',
        description:
            'Discover helpful tips, articles, and inspiration to keep your mind in a positive space. Read about beauty, self-care, and personal growth.',
        buttonText: 'Next',
    },
    {
        key: '7',
        title: 'Set Your Nickname',
        description: '',
        buttonText: 'Get Started',
    },
];

const OnboardingScreens = ({ navigation }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nickname, setNicknameHere] = useState('');
    const scrollX = useRef(new Animated.Value(0)).current;
    const dispatch  = useDispatch();

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            dispatch(setNickname(nickname));
            navigation.replace('Tab');
        }
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.slide}>
            <Image style={{ position: 'absolute', top: 180 }} source={require('../assets/img/Group1.png')} />
            <View style={styles.card}>
                <Image style={{ marginBottom: 20 }} source={require('../assets/img/Group7.png')} />

                <Text style={styles.title}>{item.title}</Text>
                {index === slides.length - 1 ? (
                    <>
                        <Text style={styles.nicknameLabel}>Enter your nickname</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your nickname..."
                            value={nickname}
                            onChangeText={setNicknameHere}
                        />
                    </>
                ) : (
                    <Text style={styles.text}>{item.description}</Text>
                )}
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>{item.buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image style={{ position: 'absolute', right: 0 }} source={require('../assets/img/Ellipse4.png')} />

            <FlatList
                data={slides}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                ref={flatListRef}
            />
            <View style={styles.dotsContainer}>
                {slides.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            { backgroundColor: i === currentIndex ? '#ff80ea' : '#ccc' },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f24ed0',
    },
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        width: '100%',
        paddingBottom: 120,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: 'LilitaOne',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 15,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: '#444',
        marginBottom: 25,
        fontFamily: 'LilitaOne',

    },
    nicknameLabel: {
        fontSize: 16,
        color: '#444',
        marginBottom: 10,
        fontFamily: 'LilitaOne',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#f49fe9',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
        backgroundColor: '#fff',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 5,
    },
});

export default OnboardingScreens;
