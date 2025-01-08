import { Space as TSpace } from "../api/space/Space";

export const SPACE_TITLE_FIELD = "name";

export const SpaceTitle = (record: TSpace): string => {
  return record.name?.toString() || String(record.id);
};
