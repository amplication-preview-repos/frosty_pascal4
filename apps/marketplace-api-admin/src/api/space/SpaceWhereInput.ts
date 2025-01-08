import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type SpaceWhereInput = {
  bookings?: BookingListRelationFilter;
  capacity?: IntNullableFilter;
  description?: StringNullableFilter;
  hourlyRate?: FloatNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
};
