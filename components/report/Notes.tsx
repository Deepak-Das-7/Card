import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

interface NotesProps {
    content: string;
}

export default function Notes({ content }: NotesProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name="file-text" size={14} color="#007bff" />
                <Text style={styles.title}>Note</Text>
            </View>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        borderLeftWidth: 4,
        borderLeftColor: "#007bff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    title: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 4,
    },
    content: {
        fontSize: 10,
        color: "#393939",
    },
});
