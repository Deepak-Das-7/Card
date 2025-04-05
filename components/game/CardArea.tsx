import { View, StyleSheet } from "react-native";
import Card from "./Card";

type Props = {
    player1Card?: { id: string; image: any };
    player2Card?: { id: string; image: any };
    player1Name: string;
    player2Name: string;
};

const CardArea = ({ player1Card, player2Card, player1Name, player2Name }: Props) => (
    <View style={styles.cardsRow}>
        <View style={styles.cardWrapper}>
            {player1Card && <Card image={player1Card.image} id={player1Card.id} name={player1Name} />}
        </View>
        <View style={styles.cardWrapper}>
            {player2Card && <Card image={player2Card.image} id={player2Card.id} name={player2Name} />}
        </View>
    </View>
);

export default CardArea;

const styles = StyleSheet.create({
    cardsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardWrapper: {
        width: "49.5%",
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
});
