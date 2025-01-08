import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  space?: SpaceWhereUniqueInput | null;
};
