import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type Space = {
  bookings?: Array<Booking>;
  capacity: number | null;
  createdAt: Date;
  description: string | null;
  hourlyRate: number | null;
  id: string;
  location: string | null;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
