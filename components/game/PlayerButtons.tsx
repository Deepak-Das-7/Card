import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    currentPlayer: number;
    handleMove: (player: number) => void;
};

const PlayerButtons = ({ currentPlayer, handleMove }: Props) => (
    <View style={styles.buttonsRow}>
        <TouchableOpacity
            style={[styles.button, currentPlayer !== 1 && styles.buttonDisabled]}
            onPress={() => handleMove(1)}
            disabled={currentPlayer !== 1}
        >
            <Text style={styles.buttonText}>Player 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, currentPlayer !== 2 && styles.buttonDisabled]}
            onPress={() => handleMove(2)}
            disabled={currentPlayer !== 2}
        >
            <Text style={styles.buttonText}>Player 2</Text>
        </TouchableOpacity>
    </View>
);

export default PlayerButtons;

const styles = StyleSheet.create({
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#445bf3",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        height: 95,
        justifyContent: "center",
    },
    buttonDisabled: {
        backgroundColor: "#9E9E9E",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
