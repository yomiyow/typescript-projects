import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import Questions from './Questions';
import EnteredDetails from './EnteredDetails';
import ThankYou from './ThankYou';

export interface FormData {
  name: string;
  email: string;
  contactNo: number | '';
  questions: {
    questionId: number;
    answer: string;
  }[];
}

const initialFormData: FormData = {
  name: '',
  email: '',
  contactNo: '',
  questions: [
    { questionId: 0, answer: '' }
  ]
}

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  console.log(step);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, questionId?: number) => {
    const { name, value } = e.target;

    setFormData((prevValues) => {
      if (questionId) {
        const updatedQuestions = [
          ...prevValues.questions.filter((q) => q.questionId !== questionId),
          { questionId, answer: value }
        ];
        return { ...prevValues, questions: updatedQuestions }

      } else {
        return { ...prevValues, [name]: value }
      }
    });
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    nextStep();
  }

  return (
    <form onSubmit={handleSubmit} className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      {(() => {
        switch (step) {
          case 1:
            return <BasicInfo formData={formData} onFormDataChange={handleChange} onStepChange={handleNextStep} />;
          case 2:
            return <Questions formData={formData} onFormDataChange={handleChange} onStepChange={handleNextStep} />;
          case 3:
            return <EnteredDetails onStepChange={handleNextStep} />;
          case 4:
            return <ThankYou />;
          default:
            return null;
        }
      })()}
    </form>
  );

};

export default MultiStepForm;
