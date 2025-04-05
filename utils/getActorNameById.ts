import { actorsJSON } from "@/assets/data/actorsJSON";

export const getActorNameById = (id?: string): string => {
  if (!id) return "Unknown";
  const actor = actorsJSON.find(({ id: actorId }) => actorId.toString() === id);
  return actor?.name ?? "Unknown";
};
