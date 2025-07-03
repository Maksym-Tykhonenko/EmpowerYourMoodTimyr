import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

const COLORS = {
    small: '#cfdfff',
    medium: '#ffdcdc',
    large: '#ffe7c4',
};

const BALLS = [
    { id: 'small', size: 40, color: COLORS.small },
    { id: 'medium', size: 60, color: COLORS.medium },
    { id: 'large', size: 100, color: COLORS.large },
];

const TARGETS = ['small', 'medium', 'large'];

const getTodayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
};

export default function App() {
    const [selectedBall, setSelectedBall] = useState(null);
    const [positions, setPositions] = useState({}); // targetId -> ballId
    const [inspirationShown, setInspirationShown] = useState(false);
    const [dailyKey, setDailyKey] = useState(getTodayKey());

    useEffect(() => {
        const storedKey = getTodayKey();
        setDailyKey(storedKey);
        // You can use AsyncStorage to persist this key if needed
    }, []);

    const handleBallPress = (ballId) => {
        setSelectedBall(ballId);
    };

    const handleTargetPress = (targetId) => {
        if (!selectedBall) {
            Alert.alert('Выберите шарик сначала!');
            return;
        }

        setPositions((prev) => ({
            ...prev,
            [targetId]: selectedBall,
        }));
        setSelectedBall(null);
    };

    const allCorrect = TARGETS.every((target) => positions[target] === target);

    const showInspiration = allCorrect && !inspirationShown;

    useEffect(() => {
        if (showInspiration) {
            setInspirationShown(true);
        }
    }, [showInspiration]);

    return (
        <View style={styles.container}>
            {!showInspiration ? (
                <>
                    <Text style={styles.title}>Daily Inspiration</Text>
                    <Text style={styles.subtitle}>Нажмите на шар, затем на нужное поле по размеру</Text>

                    {/* Balls */}
                    <View style={styles.ballsRow}>
                        {BALLS.map((ball) => (
                            <TouchableOpacity
                                key={ball.id}
                                onPress={() => handleBallPress(ball.id)}
                                style={[
                                    styles.ball,
                                    {
                                        width: ball.size,
                                        height: ball.size,
                                        backgroundColor: ball.color,
                                        borderColor: selectedBall === ball.id ? 'black' : 'transparent',
                                        borderWidth: 2,
                                    },
                                ]}
                            />
                        ))}
                    </View>

                    {/* Drop Zones */}
                    <View style={styles.targets}>
                        {TARGETS.map((target) => (
                            <TouchableOpacity
                                key={target}
                                onPress={() => handleTargetPress(target)}
                                style={styles.target}
                            >
                                {positions[target] && (
                                    <View
                                        style={{
                                            backgroundColor: COLORS[positions[target]],
                                            width: BALLS.find((b) => b.id === positions[target]).size,
                                            height: BALLS.find((b) => b.id === positions[target]).size,
                                            borderRadius:
                                                BALLS.find((b) => b.id === positions[target]).size / 2,
                                        }}
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            ) : (
                <View style={styles.inspirationBox}>
                    <Text style={styles.inspirationTitle}>Your Inspiration:</Text>
                    <Text style={styles.face}>:)</Text>
                    <Text style={styles.inspirationText}>
                        "Don’t wait for the perfect moment. Take the moment and make it perfect."
                    </Text>
                    <TouchableOpacity style={styles.shareBtn}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 20,
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    ballsRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30,
    },
    ball: {
        borderRadius: 100,
    },
    targets: {
        width: '100%',
        alignItems: 'center',
        gap: 15,
    },
    target: {
        width: 160,
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inspirationBox: {
        marginTop: 100,
        alignItems: 'center',
        padding: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e9b3f7',
        backgroundColor: '#fef0ff',
    },
    inspirationTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    face: {
        fontSize: 30,
        marginBottom: 10,
    },
    inspirationText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 20,
    },
    shareBtn: {
        backgroundColor: '#ef8fff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    shareText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
