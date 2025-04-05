import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, View } from 'react-native';

type CardProps = {
    id: string;
    name: string;
    image: ImageSourcePropType;
};

const Card: React.FC<CardProps> = ({ id, name, image }) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: '#fdfdfd',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6,
        alignSelf: 'center',
        overflow: 'hidden',
        paddingBottom: 16,
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: '100%',
        // height: '100%',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        marginTop: 12,
        paddingHorizontal: 10,
    },
});

export default Card;
