import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        backgroundColor: "#45f9f3a5",
        alignItems: "center",
        paddingBottom: 10
    },
    headerText: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: "bold",
        color: "#ffffff",
    },
});
