import { BookingCreateNestedManyWithoutSpacesInput } from "./BookingCreateNestedManyWithoutSpacesInput";
import { ReviewCreateNestedManyWithoutSpacesInput } from "./ReviewCreateNestedManyWithoutSpacesInput";

export type SpaceCreateInput = {
  bookings?: BookingCreateNestedManyWithoutSpacesInput;
  capacity?: number | null;
  description?: string | null;
  hourlyRate?: number | null;
  location?: string | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutSpacesInput;
};
