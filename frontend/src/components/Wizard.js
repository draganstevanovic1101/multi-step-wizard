import React, { useEffect, useState } from "react";
import axios from "axios";
import Step from "./Step";

const Wizard = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState({
    name: "",
    favoriteFruits: [],
    favoriteColor: undefined,
    petCnt: 0,
    summary: "",
  });

  useEffect(() => {
    const fetchSteps = async () => {
      const response = await axios.get("http://localhost:5000/api/steps");
      setSteps(response.data);
    };

    fetchSteps();
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("answer", answer);
      axios.post("http://localhost:5000/api/submit", answer).then((res) => {
        console.log(res.data);
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextBtnDisabled = () => {
    if (currentStep === 0 && !answer.name.trim()) return true;
    // if (currentStep === steps.length - 1) return true;
    return false;
  };

  return (
    <div>
      <h1>Multi-Step Wizard</h1>
      <p>
        {currentStep + 1}/{steps.length} steps completed
      </p>
      {steps.length > 0 && (
        <Step step={steps[currentStep]} answer={answer} setAnswer={setAnswer} />
      )}
      <div>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={nextBtnDisabled()}>
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Wizard;
