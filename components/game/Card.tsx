import React from 'react';
import { Text, StyleSheet, Image, ImageSourcePropType, View } from 'react-native';

type CardProps = {
    id: string;
    name: string;
    image: ImageSourcePropType;
};

const Card: React.FC<CardProps> = ({ id, name, image }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    name: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        color: '#333',
        paddingVertical: 12,
        backgroundColor: '#bdf0fe',
    },
});

export default Card;
