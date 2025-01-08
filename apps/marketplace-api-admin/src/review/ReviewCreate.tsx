import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
