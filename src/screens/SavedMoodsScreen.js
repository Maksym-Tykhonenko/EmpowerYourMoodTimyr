import { useSelector } from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const SavedMoodsScreen = () => {
    const moods = useSelector(state => state.moods.savedMoods);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Saved</Text>
            {moods.map((mood, index) => (
                <View key={index} style={styles.quoteBox}>
                    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '900', marginBottom: 20}} >Your mood is {mood} :)</Text>
                    <Text style={styles.dailyQuoteLabel}>Daily Quote:</Text>
                    <Text style={styles.quote}>
                        "Don’t wait for the perfect moment. Take the moment and make it perfect."
                    </Text>
                </View>
            ))}
            {moods.length !== 0 && (
                <View style={styles.quoteBox}>
                    <Text style={styles.dailyQuoteLabel}>You do not have any saved moods yet</Text>
                    <Text style={styles.quote}>
                        "Don’t wait for the perfect moment. Take the moment and make it perfect."
                    </Text>
                </View>
            )}
            <View style={{marginBottom: 100}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    header: { fontFamily: 'LilitaOne',fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    quoteBox: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e3c8f7',
        marginBottom: 12
    },
    dailyQuoteLabel: { fontFamily: 'LilitaOne',fontWeight: 'bold', fontSize: 16 },
    quote: { fontFamily: 'LilitaOne',fontSize: 14, marginTop: 8, textAlign: 'center' },
});

export default SavedMoodsScreen;
