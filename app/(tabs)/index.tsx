import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import GradientBackground from "@/components/universal/Gradient";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import CardArea from "@/components/game/CardArea";
import PlayerButtons from "@/components/game/PlayerButtons";
import Status from "@/components/game/Status";
import { useEffect, useState } from "react";
import { useGame } from "@/hooks/usePlayerCard";

const ReportGeneratorHome = () => {
    const {
        currentPlayer,
        moveCount,
        player1Card,
        player2Card,
        player1Name,
        player2Name,
        score,
        winner,
        handlePlayerMove,
        checkWinner,
        resetGame
    } = useGame();

    const [showWinnerModal, setShowWinnerModal] = useState(false);
    const [finalWinner, setFinalWinner] = useState("");

    useEffect(() => {
        checkWinner();
    }, [player1Name, player2Name]);

    useEffect(() => {
        if (score.player1 >= 210 || score.player2 < 0) {
            setFinalWinner("Player 1");
            setShowWinnerModal(true);
        } else if (score.player2 >= 210 || score.player1 < 0) {
            setFinalWinner("Player 2");
            setShowWinnerModal(true);
        }
    }, [score]);

    const handleCloseModal = () => {
        //reset all states
        resetGame()
        setShowWinnerModal(false);
    };

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Header title={"BARWADIH PHOTO GAME"} resetGame={resetGame} />
                <CardArea
                    player1Card={player1Card}
                    player2Card={player2Card}
                    player1Name={player1Name}
                    player2Name={player2Name}
                />
                <Status
                    currentPlayer={currentPlayer}
                    moveCount={moveCount}
                    winner={winner}
                    score={score}
                />
                <PlayerButtons currentPlayer={currentPlayer} handleMove={handlePlayerMove} />
                <Footer />

                <Modal visible={showWinnerModal} transparent animationType="fade">
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.congratsText}>🏆 Congratulations! 🏆</Text>
                            <Text style={styles.winnerName}>{finalWinner} Wins the Game!</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                                <Text style={styles.closeButtonText}>Restart new game!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </GradientBackground>
    );
};

export default ReportGeneratorHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: 300,
        backgroundColor: "#ffffff",
        padding: 24,
        borderRadius: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    congratsText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4CAF50",
        marginBottom: 10,
    },
    winnerName: {
        fontSize: 20,
        color: "#333",
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
