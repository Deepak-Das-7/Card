import { FlatList, StyleSheet, Image, View } from "react-native";
import React from "react";
import GradientBackground from "@/components/universal/Gradient";
import { images } from "@/assets/data/requireMap";

const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const ReportGeneratorHome = () => {
    const imageArray = Object.entries(images).map(([key, value]) => ({
        id: key,
        image: value,
    }));

    const shuffledImages = shuffleArray(imageArray);

    return (
        <GradientBackground>
            <FlatList
                data={shuffledImages}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                    <View style={styles.imageWrapper}>
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                    </View>
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </GradientBackground>
    );
};

export default ReportGeneratorHome;

const styles = StyleSheet.create({
    listContent: {
        paddingBottom: 100,
        // paddingTop: 30
    },
    imageWrapper: {
        flex: 1,
        aspectRatio: 1,
        margin: 0.5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
});
