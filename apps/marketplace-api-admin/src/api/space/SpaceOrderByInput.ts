import { SortOrder } from "../../util/SortOrder";

export type SpaceOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  hourlyRate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
