import { useState } from "react";
import { images } from "@/assets/data/requireMap";
import { actorsJSON } from "@/assets/data/actorsJSON";
import { Alert } from "react-native";

const cardsArray = Object.entries(images).map(([key, value]) => ({
  id: key,
  image: value,
}));

const getActorNameById = (id?: string): string => {
  if (!id) return "Unknown";
  const actor = actorsJSON.find(({ id: actorId }) => actorId.toString() === id);
  return actor?.name ?? "Unknown";
};

export const useGame = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [moveCount, setMoveCount] = useState(0);
  const [player1Card, setPlayer1Card] = useState<{ id: string; image: any }>();
  const [player2Card, setPlayer2Card] = useState<{ id: string; image: any }>();
  const [player1Name, setPlayer1Name] = useState<string>("");
  const [player2Name, setPlayer2Name] = useState<string>("");
  const [score, setScore] = useState<{ player1: number; player2: number }>({
    player1: 0,
    player2: 0,
  });
  const [winner, setWinner] = useState<string>("");

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardsArray.length);
    return cardsArray[randomIndex];
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

    setMoveCount((prev) => prev + 1);
  };

  const resetGame = () => {
    setPlayer1Card(undefined);
    setPlayer2Card(undefined);
    setPlayer1Name("");
    setPlayer2Name("");
    setScore({ player1: 105, player2: 105 });
    setWinner("");
    setMoveCount(0);
    setCurrentPlayer(1);
  };

  const checkWinner = () => {
    if (player1Name && player2Name && player1Name === player2Name) {
      const isPlayer1 = currentPlayer === 2;
      const points = moveCount / 2;
      setWinner(isPlayer1 ? "Player 1" : "Player 2");
      setScore((prev) => ({
        player1: prev.player1 + (isPlayer1 ? points : -points),
        player2: prev.player2 + (!isPlayer1 ? points : -points),
      }));
      setMoveCount(0);
    } else setWinner("");
  };

  return {
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
    resetGame,
  };
};
