import { Button, FieldInput, UploadedFile } from "@/src/components";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

interface AddMultipleContactFormProps {}

const AddMultipleContactForm: React.FC<AddMultipleContactFormProps> = () => {
  const [file, setFile] = useState(false);
  const { control } = useFormContext();
  const value = useWatch({ control });
  const linkDownloadClasses = "text-[#8B9EB7] underline";
  return (
    <Fragment>
      <FieldInput
        name="contactListName"
        label="Contact List Name"
        placeholder="Type contact list name"
      />
      <ol>
        <li className="text-[#323944]">
          1. Prepare a CSV or Excel file of your contacts using our template.
          You can download the template here:
        </li>
        <p className="ml-3 my-4">
          <Link
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkDownloadClasses}
          >
            Download CSV Template
          </Link>
          <span className="!text-[#323944] !no-underline">{" | "}</span>
          <Link
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkDownloadClasses}
          >
            Download Excel Template
          </Link>
        </p>
        <li className="text-[#323944]">
          2. Fill the contacts based on our template and upload the CSV or XLS
          file to the button bellow.
        </li>
      </ol>
      {file ? (
        <UploadedFile onCancel={() => setFile((prev) => !prev)} />
      ) : (
        <Button
          variant="subtle"
          label="Upload CSV File"
          type="button"
          onClick={() => setFile((prev) => !prev)}
        />
      )}
      <Button
        variant="primary"
        label="Confirm"
        color="#323944"
        className="!self-end"
        disabled={!value.contactListName}
        type="submit"
      />
    </Fragment>
  );
};

export default AddMultipleContactForm;
