import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  spaceId?: SortOrder;
  startTime?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
};
