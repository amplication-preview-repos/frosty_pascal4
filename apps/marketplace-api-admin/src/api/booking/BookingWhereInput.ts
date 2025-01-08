import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  space?: SpaceWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  totalCost?: FloatNullableFilter;
};
