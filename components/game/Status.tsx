import { View, Text, StyleSheet } from "react-native";

type Props = {
    currentPlayer: number;
    moveCount: number;
    winner: string;
    score: { player1: number; player2: number };
};

const Status = ({ currentPlayer, moveCount, winner, score }: Props) => (
    <View style={styles.container}>
        <Text style={styles.turnText}>🎮 Player {currentPlayer}'s Turn</Text>
        <Text style={styles.moves}>🧮 Moves: {moveCount}</Text>

        {winner ? (
            <View style={styles.winnerBadge}>
                <Text style={styles.winnerText}>🏆 {winner} wins this round!</Text>
            </View>
        ) : (
            <Text style={styles.waitingText}>⏳ Waiting for a winner...</Text>
        )}

        <View style={styles.scoreBoard}>
            <Text style={styles.scoreTitle}>📈 Score Board</Text>
            <View style={styles.scores}>
                <Text style={styles.player}>🧑‍🤝‍🧑 P1: <Text style={styles.playerScore}>{score.player1}</Text></Text>
                <Text style={styles.player}>🧑‍🤝‍🧑 P2: <Text style={styles.playerScore}>{score.player2}</Text></Text>
            </View>
        </View>
    </View>
);

export default Status;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#2a2e5b",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    turnText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#ffffff",
    },
    moves: {
        fontSize: 16,
        color: "#c0c6f1",
        marginVertical: 4,
    },
    waitingText: {
        fontSize: 14,
        color: "#b0b8d9",
        fontStyle: "italic",
        marginTop: 8,
    },
    winnerBadge: {
        backgroundColor: "#00c853",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
        marginTop: 10,
    },
    winnerText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    scoreBoard: {
        marginTop: 16,
        width: "100%",
        backgroundColor: "#3d437b",
        padding: 10,
        borderRadius: 12,
    },
    scoreTitle: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 8,
    },
    scores: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    player: {
        fontSize: 16,
        color: "#d1d5ff",
    },
    playerScore: {
        fontWeight: "bold",
        color: "#ffab91",
    },
});
