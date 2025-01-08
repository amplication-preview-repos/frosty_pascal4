import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";

export type BookingCreateInput = {
  endTime?: Date | null;
  space?: SpaceWhereUniqueInput | null;
  startTime?: Date | null;
  totalCost?: number | null;
};
