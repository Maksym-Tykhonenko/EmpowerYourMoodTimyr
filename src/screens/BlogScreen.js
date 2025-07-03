import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const blogPosts = [
    {
        id: '1',
        title: 'How to Cultivate Self-Belief and Confidence',
        preview: 'Self-belief is the foundation of success and happiness...',
        image: require('../assets/img/blog/103aacb91669d8a2985b872e626d7303412d65ca.png'),
        content: '1. "The Power of Positive Thinking: How to Shift Your Mindset"\n' +
            'Positive thinking isn’t just about wearing a smile or pretending everything is perfect—it’s a mindset that can change your life. Research has shown that maintaining a positive attitude can reduce stress, improve health, and increase resilience in the face of challenges. So, how can you cultivate positive thinking?\n' +
            '1. Start Your Day with Gratitude  Instead of focusing on what’s going wrong, start each day by reflecting on what you’re grateful for. This simple practice shifts your focus and sets a positive tone for the day ahead.\n' +
            '2. Surround Yourself with Positivity  The people and content you surround yourself with can influence your mood and mindset. Spend time with those who uplift you, and engage with media that inspires and motivates.\n' +
            '3. Reframe Negative Thoughts  When you catch yourself thinking negatively, try to reframe it. Instead of thinking, "I can’t do this," try, "I haven’t figured it out yet, but I’m learning." Reframing helps you focus on growth rather than limitations.\n' +
            'Embrace positive thinking and watch as your mindset—and your life—begins to transform!'
    },
    {
        id: '2',
        title: '5 Ways to Stay Grounded Every Day',
        preview: 'Feeling overwhelmed? These daily habits can help you stay calm and focused...',
        image: require('../assets/img/blog/c0706e97dd44853847da5055bbadc3a6d25f660f.png'),
        content: '2. "The Importance of Self-Care: Taking Time for You"\n' +
            'In today’s fast-paced world, self-care is often seen as a luxury rather than a necessity. However, taking time to care for yourself isn’t selfish—it’s essential for your mental and physical well-being. Here’s why self-care matters and how to make it a priority.\n' +
            '1. Reduces Stress  Engaging in self-care practices like meditation, journaling, or simply resting helps reduce the impact of stress. Taking breaks allows you to recharge and be more productive in the long run.\n' +
            '2. Boosts Mental Health  Prioritizing self-care can improve your mental health. Activities such as exercising, spending time outdoors, and practicing mindfulness can enhance your mood and help prevent burnout.\n' +
            '3. Improves Relationships  When you take care of yourself, you’re better able to show up for others. Healthy boundaries and self-care practices make it easier to nurture your relationships because you’re giving from a place of abundance, not exhaustion.\n' +
            'Remember, self-care isn’t selfish; it’s a crucial part of maintaining a balanced, fulfilling life.',
    },
    {
        id: '3',
        title: '5 Ways to Stay Grounded Every Day',
        preview: 'Feeling overwhelmed? These daily habits can help you stay calm and focused...',
        image: require('../assets/img/blog/0213d7201f9efe70238e9b772086ebd80cbccda3.png'),
        content: '3. "Setting and Achieving Goals: Turning Dreams into Reality"\n' +
            'Everyone has dreams, but turning those dreams into reality requires more than just wishful thinking. It takes intentional action, focus, and determination. Here are a few tips for setting and achieving your goals:\n' +
            '1. Define Clear, Specific Goals  Start by defining exactly what you want to achieve. Instead of saying, "I want to be healthier," say, "I want to exercise 30 minutes every day for the next month." The more specific your goal, the easier it is to create a plan.\n' +
            '2. Break Goals Into Smaller Steps  Large goals can feel overwhelming. Break them down into smaller, more manageable tasks. Each small step brings you closer to your ultimate goal, and achieving them gives you a sense of accomplishment.\n' +
            '3. Stay Accountable  Share your goals with someone you trust, or keep track of your progress. Having accountability partners can help you stay motivated and on track when things get tough.\n' +
            '4. Celebrate Progress  Celebrate every milestone, no matter how small. Recognizing your achievements keeps you motivated and reminds you that you’re making progress.\n' +
            'By setting clear goals and taking action, you can turn your dreams into achievable steps—and create the life you truly want.\n' +
            'These blog articles aim to inspire and motivate users to prioritize their well-being, develop positive habits, and pursue their dreams!',
    },
];

export default function BlogListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} styles={styles.list}>
                <Image source={require('../assets/img/Group7.png')} style={{ alignSelf: 'center', marginBottom: 40 }} />

                {blogPosts.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('BlogDetail', { post: item })}
                    >
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.preview}>{item.preview}</Text>
                            <View style={styles.readButton}>
                                <Text style={styles.readText}>Read</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                <View style={{marginBottom: 140}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    list: {
        paddingBottom: 20
    },
    card: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#F2D9FF',
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 180,
    },
    textContainer: {
        padding: 15
    },
    title: {
        fontSize: 18,
        fontFamily: 'LilitaOne',
        fontWeight: 'bold',
        marginBottom: 5
    },
    preview: {
        fontSize: 14,
        color: '#444',
        fontFamily: 'LilitaOne',
        marginBottom: 10
    },
    readButton: {
        backgroundColor: '#F196FF',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignSelf: 'flex-start'
    },
    readText: {
        color: '#fff',
        fontFamily: 'LilitaOne',
        fontWeight: '600'
    }
});
