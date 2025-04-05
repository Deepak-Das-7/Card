import { View, StyleSheet } from "react-native";
import GradientBackground from "@/components/universal/Gradient";
import Header from "@/components/homepage/Header";
import Notes from "@/components/report/Notes";

export default function ReportForm() {


    return (
        <GradientBackground>
            <Header title={"Generating Report..."} />
            <View style={styles.container}>
                <Notes content={"Save the changes before you move forward. You may lose the data if you fail to do so."} />
            </View>
        </GradientBackground>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        elevation: 3
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    iconButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1787ff",
        padding: 12,
        borderRadius: 50,
        width: 50,
        height: 50,
    },
});
