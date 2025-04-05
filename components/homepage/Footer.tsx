import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>© 2025 Medical Reports, Inc.</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        color: "#555",
    },
});
