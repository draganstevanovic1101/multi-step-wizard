import React from "react";

const Step = ({ step, answer, setAnswer }) => {
  const onChangeName = (e) => {
    setAnswer({ ...answer, name: e.target.value.trim() });
  };
  const onChangeFavoriteFruits = (e) => {
    const { value, checked } = e.target;
    const { favoriteFruits } = answer;
    if (checked) {
      setAnswer({ ...answer, favoriteFruits: [...favoriteFruits, value] });
    } else {
      setAnswer({
        ...answer,
        favoriteFruits: favoriteFruits.filter((e) => e !== value),
      });
    }
  };
  const onChangeFavoriteColor = (e) => {
    setAnswer({ ...answer, favoriteColor: e.target.value });
  };
  const onChangePetCnt = (e) => {
    setAnswer({ ...answer, petCnt: parseInt(e.target.value) });
  };
  const onChangeSummary = (e) => {
    setAnswer({ ...answer, summary: e.target.value.trim() });
  };
  switch (step.id) {
    case 1:
      return (
        <div>
          <label>{step.question}</label>
          <div>
            <input type="text" value={answer.name} onChange={onChangeName} />
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <label>{step.question}</label>
          {step.options.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                name="favoriteFruits"
                value={option}
                checked={answer.favoriteFruits.includes(option)}
                onChange={onChangeFavoriteFruits}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div>
          <label>{step.question}</label>
          {step.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="favoriteColor"
                value={option}
                checked={answer.favoriteColor === option}
                onChange={onChangeFavoriteColor}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      );
    case 4:
      return (
        <div>
          <label>{step.question}</label>
          <div>
            <input
              type="number"
              value={answer.petCnt}
              onChange={onChangePetCnt}
            />
          </div>
        </div>
      );
    case 5:
      return (
        <div>
          <label>{step.question}</label>
          <div>
            <textarea value={answer.summary} onChange={onChangeSummary} />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Step;
