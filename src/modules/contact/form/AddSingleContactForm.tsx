import { Button, FieldInput, FieldSelect } from "@/src/components";
import React, { Fragment } from "react";
import { useFormContext, useWatch } from "react-hook-form";

interface AddSingleContactFormProps {}

const AddSingleContactForm: React.FC<AddSingleContactFormProps> = ({}) => {
  const { control } = useFormContext();
  const value = useWatch({ control });
  return (
    <Fragment>
      <FieldInput
        name="name"
        label="Full Name"
        placeholder="Your customer full name"
      />
      <FieldSelect
        name="channel"
        label="Channel"
        placeholder="Select Channel"
        options={[
          {
            label: "WhatsApp",
            value: "whatsapp",
          },
        ]}
      />
      {value?.channel?.value === "whatsapp" && (
        <Fragment>
          <FieldSelect
            name="account"
            label="Account"
            placeholder="Select WhatsApp Account"
            options={[
              {
                label: "Anggih Nur Hidayat",
                value: "anggihnurh",
              },
            ]}
          />
          <FieldInput
            name="phoneNumber"
            label="Phone Number (+62)"
            placeholder="Customer WhatsApp number"
          />
        </Fragment>
      )}
      <Button
        variant="primary"
        label="Save Contact"
        color="#323944"
        className="!self-end"
        disabled={!value.name || !value.channel}
        type="submit"
      />
    </Fragment>
  );
};

export default AddSingleContactForm;
