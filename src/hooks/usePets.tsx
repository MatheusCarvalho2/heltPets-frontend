import { useEffect, useState } from "react";
import api from "@/service/api/client";
import type { Pet } from "@/types/Pet";
import type { User } from "@/types/User";

export function usePets(user:User) {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await api.get("/pets");
        setPets(response.data);
      } catch (err) {
        setError("Erro ao buscar pets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [user]);

  return { pets, loading, error };
}
