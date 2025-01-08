import { BookingUpdateManyWithoutSpacesInput } from "./BookingUpdateManyWithoutSpacesInput";
import { ReviewUpdateManyWithoutSpacesInput } from "./ReviewUpdateManyWithoutSpacesInput";

export type SpaceUpdateInput = {
  bookings?: BookingUpdateManyWithoutSpacesInput;
  capacity?: number | null;
  description?: string | null;
  hourlyRate?: number | null;
  location?: string | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutSpacesInput;
};
