import { View, StyleSheet } from "react-native";
import Card from "./Card";

interface PlayerCardProps {
    card?: { id: string; image: any };
    name: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ card, name }) => {
    if (!card) return null;

    return (
        <View style={styles.cardWrapper}>
            <Card image={card.image} id={card.id} name={name} />
        </View>
    );
};

export default PlayerCard;

const styles = StyleSheet.create({
    cardWrapper: {
        width: "50%",
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
});
