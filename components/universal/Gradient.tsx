import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientBackgroundProps = {
    children: React.ReactNode;
    colors?: [string, string, ...string[]];
    gradientStyle?: ViewStyle; // Custom gradient style
    containerStyle?: ViewStyle; // Custom container style
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
    children,
    colors = ["#FFDEE9", "#B5FFFC"],
    gradientStyle,
}) => {
    return (
        <LinearGradient colors={colors} style={[styles.gradient, gradientStyle]}>
            {children}
        </LinearGradient>
    );
};

export default GradientBackground;

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    }
});
