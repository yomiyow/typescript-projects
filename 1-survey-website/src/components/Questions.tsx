import questions from "../data/questions";

const Questions = () => {

  const renderOptions = (options: string[], id: number) => {
    return options.map((option) => (
      <label key={option} className="flex items-center gap-3 mb-1 pl-3">
        <input
          className="radio radio-xs radio-accent"
          type="radio"
          name={`question-${id}`}
          value={option}
        />
        {option}
      </label>
    ));
  }

  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl">Additional Questions</h1>

      <ol className="flex flex-col gap-2">
        {questions.map(({ id, question, options }) => (
          <>
            <li key={id}>
              <p>{`${id}. ${question}`}</p>
              {renderOptions(options, id)}
            </li>
            {id !== questions.length && <hr className="border-base-300" />}
          </>
        ))}
      </ol>
    </fieldset >
  );
};

export default Questions;
