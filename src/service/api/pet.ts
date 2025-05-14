import type { User } from "@/types/User";
import api from "./client";

export const getPets = async (id: User) => {
  const response = await api.get("/pets", {
    params: {
      userId: id,
    },
  });
  return response.data;
}
