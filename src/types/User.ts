import type { Pet } from "./Pet";

export interface User {
  id: string;
  name: string;
  email: string;
  pets: Pet[];
}
