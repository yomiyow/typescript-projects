import { FormData } from "./MultiStepForm";

interface EnteredDetailsProps {
  formData: FormData
  onStepChange: () => void;
};

const EnteredDetails = ({ formData, onStepChange }: EnteredDetailsProps) => {

  const getAnswer = (n: number) => {
    const question = formData.questions.find((q) => q.questionId === n);

    if (!question) return "N/A";

    return question.answer;
  };

  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl mb-2">Entered Details</h1>
      <p>
        <span className="font-bold">Name: </span>
        {formData.name}
      </p>
      <p>
        <span className="font-bold">Email: </span>
        {formData.email}
      </p>
      <p>
        <span className="font-bold">Contact no: </span>
        {formData.contactNo}
      </p>

      <h2>Responses</h2>
      <p>
        <span className="font-bold">Profession: </span>
        {getAnswer(1)}
      </p>
      <p>
        <span className="font-bold">Interests: </span>
        {getAnswer(2)}
      </p>
      <p>
        <span className="font-bold">Reference: </span>
        {getAnswer(3)}
      </p>

      <button className="btn btn-small" type="submit" onClick={onStepChange}>Submit</button>
    </fieldset>
  );
};

export default EnteredDetails;