import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";

export type BookingUpdateInput = {
  endTime?: Date | null;
  space?: SpaceWhereUniqueInput | null;
  startTime?: Date | null;
  totalCost?: number | null;
};
