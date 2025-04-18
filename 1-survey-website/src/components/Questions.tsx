import { Fragment } from "react/jsx-runtime";
import questions from "../data/questions";
import { FormData } from "./MultiStepForm";

interface QuestionsProps {
  formData: FormData
  onFormDataChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onStepChange: () => void;
}

const Questions = ({ formData, onFormDataChange, onStepChange }: QuestionsProps) => {
  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl">Additional Questions</h1>

      <ol className="flex flex-col gap-2">
        {questions.map(({ id, question, options }) => (
          <Fragment key={id}>
            <li>
              {/* question */}
              <p>{`${id}. ${question}`}</p>
              {/* options */}
              {options.map((option) => (
                <label key={option} className="flex items-center gap-3 mb-1 pl-3">
                  <input
                    className="radio radio-xs radio-accent"
                    type="radio"
                    name={question}
                    value={option}
                    onChange={(e) => onFormDataChange(e, id)}
                  />
                  {option}
                </label>
              ))}
            </li>
            {id !== questions.length && <hr className="border-base-300" />}
          </Fragment>
        ))}
      </ol>

      <button className="btn btn-small" type="button" onClick={onStepChange}>Next</button>
    </fieldset >
  );
};

export default Questions;
