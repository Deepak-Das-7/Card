import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type HeaderProps = {
    title: string;
    resetGame: () => void;
};

const Header = ({ title, resetGame }: HeaderProps) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={resetGame} activeOpacity={0.7}>
            <Ionicons name="refresh" color="#fff" size={24} />
        </TouchableOpacity>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: "#45f9f3a5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        letterSpacing: 1.5,
    },
    refreshButton: {
        backgroundColor: "#45f9f3",
        padding: 8,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
});
