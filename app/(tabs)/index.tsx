import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GradientBackground from "@/components/universal/Gradient";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Card from "@/components/game/Card";
import { images } from "@/assets/data/requireMap";
import { actorsJSON } from "@/assets/data/actorsJSON";

const ReportGeneratorHome = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [player1Card, setPlayer1Card] = useState<{ id: string; image: any }>();
    const [player2Card, setPlayer2Card] = useState<{ id: string; image: any }>();
    const [player1Name, setPlayer1Name] = useState<string>("");
    const [player2Name, setPlayer2Name] = useState<string>("");

    const cardsArray = Object.entries(images).map(([key, value]) => ({
        id: key,
        image: value,
    }));

    const getRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cardsArray.length);
        return cardsArray[randomIndex];
    };

    const getActorNameById = (id?: string): string => {
        if (!id) return "Unknown";
        const actor = actorsJSON.find(({ id: actorId }) => actorId.toString() === id);
        return actor?.name ?? "Unknown";
    };


    const handlePlayerMove = (player: number) => {
        const card = getRandomCard();

        if (player === 1) {
            setPlayer1Card(card);
            setPlayer1Name(getActorNameById(card.id));
            setCurrentPlayer(2);
        } else if (player === 2) {
            setPlayer2Card(card);
            setPlayer2Name(getActorNameById(card.id));
            setCurrentPlayer(1);
        }
    };

    return (
        <GradientBackground>
            <View style={styles.container}>

                {/* Cards Area */}
                <View style={styles.cardsRow}>
                    <View style={styles.cardWrapper}>
                        {player1Card && (
                            <Card
                                image={player1Card.image}
                                id={player1Card.id}
                                name={player1Name}
                            />
                        )}
                    </View>
                    <View style={styles.cardWrapper}>
                        {player2Card && (
                            <Card
                                image={player2Card.image}
                                id={player2Card.id}
                                name={player2Name}
                            />
                        )}
                    </View>
                </View>

                {/* Game Status */}
                <Text style={styles.statusText}>
                    {`Player ${currentPlayer}'s Turn`}
                </Text>

                {/* Buttons for Players */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            currentPlayer !== 1 && styles.buttonDisabled,
                        ]}
                        onPress={() => handlePlayerMove(1)}
                        disabled={currentPlayer !== 1}
                    >
                        <Text style={styles.buttonText}>Player 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            currentPlayer !== 2 && styles.buttonDisabled,
                        ]}
                        onPress={() => handlePlayerMove(2)}
                        disabled={currentPlayer !== 2}
                    >
                        <Text style={styles.buttonText}>Player 2</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Optional: Footer */}
            <Footer />
        </GradientBackground>
    );
};

export default ReportGeneratorHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
    },
    statusText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    cardsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardWrapper: {
        width: "50%",
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 30,
    },
    button: {
        backgroundColor: "#445bf3",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        height: 150,
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
