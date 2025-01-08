import { Space } from "../space/Space";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  space?: Space | null;
  updatedAt: Date;
};
