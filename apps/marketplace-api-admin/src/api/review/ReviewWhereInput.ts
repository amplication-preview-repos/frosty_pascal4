import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  space?: SpaceWhereUniqueInput;
};
