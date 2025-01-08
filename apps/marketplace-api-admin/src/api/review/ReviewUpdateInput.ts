import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  rating?: number | null;
  space?: SpaceWhereUniqueInput | null;
};
