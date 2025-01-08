import { Space } from "../space/Space";

export type Booking = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  space?: Space | null;
  startTime: Date | null;
  totalCost: number | null;
  updatedAt: Date;
};
