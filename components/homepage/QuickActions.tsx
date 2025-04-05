import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const QuickActions = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Navigate to New Report Page */}
            <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/report")}>
                <LinearGradient
                    colors={["#67aefb", "#0056b3"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Ionicons name="add-circle-outline" size={28} color="white" />
                    <Text style={styles.actionText}>New Report</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* Navigate to Add Test Page */}
            <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/admin")}>
                <LinearGradient
                    colors={["#ff9800", "#e65100"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Ionicons name="flask-outline" size={28} color="white" />
                    <Text style={styles.actionText}>Add Test</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default QuickActions;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 12,
        overflow: "hidden",
    },
    gradient: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 12,
    },
    actionText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
    },
});
