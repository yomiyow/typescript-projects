import React from "react";

interface BasicInfoProps {
  formData: {
    name: string;
    email: string;
    contactNo: number | string;
  }
  onFormDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStepChange: () => void;
}

const BasicInfo = ({ formData, onFormDataChange, onStepChange }: BasicInfoProps) => {
  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl mb-2">Basic Details</h1>

      <label htmlFor="name">
        1. Name
        <input
          className="block input input-sm w-full text-base-content"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => onFormDataChange(e)}
          required
        />
      </label>

      <label htmlFor="email">
        2. Email
        <input
          className="block input input-sm w-full text-base-content"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => onFormDataChange(e)}
          required
        />
      </label>

      <label htmlFor="contactNo">
        3. Contact No.
        <input
          className="block input input-sm w-full text-base-content"
          type="tel"
          name="contactNo"
          id="contactNo"
          value={formData.contactNo}
          onChange={(e) => onFormDataChange(e)}
          required
        />
      </label>

      <button className="btn btn-small" type="button" onClick={onStepChange}>Next</button>
    </fieldset>
  );
}

export default BasicInfo;