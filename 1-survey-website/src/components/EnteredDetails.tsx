import { FormData } from "./MultiStepForm";

interface EnteredDetailsProps {
  formData: FormData
  onStepChange: () => void;
};

const EnteredDetails = ({ onStepChange }: EnteredDetailsProps) => {
  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl mb-2">Entered Details</h1>
      <p>
        <span className="font-bold">Name: </span>
      </p>
      <p>
        <span className="font-bold">Email: </span>
      </p>

      <h2>Responses</h2>
      <p>
        <span className="font-bold">Profession: </span>
      </p>
      <p>
        <span className="font-bold">Interests: </span>
      </p>
      <p>
        <span className="font-bold">Reference: </span>
      </p>

      <button className="btn btn-small" type="submit" onClick={onStepChange}>Submit</button>
    </fieldset>
  );
};

export default EnteredDetails;