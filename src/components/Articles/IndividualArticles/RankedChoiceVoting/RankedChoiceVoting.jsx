import { useState } from "react";

function RankedChoiceVoting() {
  const choicePercentagesDefault = {
    Biking: "",
    Running: "",
    Hiking: "",
    Climbing: "",
    // Skiing: 0.2,
  };
  const [firstRoundChoicePercentages, setFirstRoundChoicePercentages] =
    useState(choicePercentagesDefault);
  const [firstRoundChoiceToRemove, setFirstRoundChoiceToRemove] = useState("");
  const [secondRoundChoicePercentages, setSecondRoundChoicePercentages] =
    useState({});
  const [secondRoundChoiceToRemove, setSecondRoundChoiceToRemove] =
    useState("");
  const [thirdRoundChoicePercentages, setThirdRoundChoicePercentages] =
    useState({});

  const [firstRoundWinner, setFirstRoundWinner] = useState("");
  const [secondRoundWinner, setSecondRoundWinner] = useState("");
  const [thirdRoundWinner, setThirdRoundWinner] = useState("");

  const handlePublicButtonClick = () => {
    const newChoicePercentages = randomlyAssignValues(
      firstRoundChoicePercentages
    );
    setFirstRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setFirstRoundWinner);
    setSecondRoundChoicePercentages({});
    setSecondRoundWinner("");
    setThirdRoundChoicePercentages({});
    setThirdRoundWinner("");
    setFirstRoundChoiceToRemove("");
    setSecondRoundChoiceToRemove("");
  };

  const handleCreateSecondRoundClick = () => {
    const { updatedChoiceObject, valueToDistribute } = findAndRemoveMin(
      firstRoundChoicePercentages,
      setFirstRoundChoiceToRemove
    );
    const newChoicePercentages = randomlyReAssignRemovedValue(
      updatedChoiceObject,
      valueToDistribute
    );
    setSecondRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setSecondRoundWinner);
  };

  const handleCreateThirdRoundClick = () => {
    const { updatedChoiceObject, valueToDistribute } = findAndRemoveMin(
      secondRoundChoicePercentages,
      setSecondRoundChoiceToRemove
    );
    const newChoicePercentages = randomlyReAssignRemovedValue(
      updatedChoiceObject,
      valueToDistribute
    );
    setThirdRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setThirdRoundWinner);
  };

  const randomlyAssignValues = (choiceObject) => {
    let choices = Object.keys(choiceObject);
    let randomValues = choices.map(() => Math.random());
    let sum = randomValues.reduce((acc, val) => acc + val, 0);
    let newChoicePercentages = {};

    choices.forEach((choice, index) => {
      newChoicePercentages[choice] = (randomValues[index] / sum).toFixed(2);
    });

    // Adjust the last value to ensure the sum is exactly 1.00
    let total = Object.values(newChoicePercentages).reduce(
      (acc, val) => acc + parseFloat(val),
      0
    );
    newChoicePercentages[choices[choices.length - 1]] = (
      parseFloat(newChoicePercentages[choices[choices.length - 1]]) +
      (1 - total)
    ).toFixed(2);
    return newChoicePercentages;
  };

  const randomlyReAssignRemovedValue = (choiceObject, valueToDistribute) => {
    let choices = Object.keys(choiceObject);
    let randomValues = choices.map(() => Math.random());
    let sum = randomValues.reduce((acc, val) => acc + val, 0);
    let distributedValues = randomValues.map(
      (val) => (val / sum) * valueToDistribute
    );
    let newChoicePercentages = {};

    // Add the distributed values to the original values
    choices.forEach((choice, index) => {
      let originalValue = parseFloat(choiceObject[choice]);
      let newValue = originalValue + distributedValues[index];
      newChoicePercentages[choice] = newValue.toFixed(2);
    });

    // Adjust the last value to ensure the sum is exactly 1.00
    let total = Object.values(newChoicePercentages).reduce(
      (acc, val) => acc + parseFloat(val),
      0
    );
    newChoicePercentages[choices[choices.length - 1]] = (
      parseFloat(newChoicePercentages[choices[choices.length - 1]]) +
      (1 - total)
    ).toFixed(2);

    return newChoicePercentages;
  };

  const findAndRemoveMin = (choicePercentages, choiceRemovalFunction) => {
    // Find the key with the minimum value
    let minKey = Object.keys(choicePercentages).reduce((min, key) =>
      choicePercentages[key] < choicePercentages[min] ? key : min
    );
    choiceRemovalFunction(minKey);

    // Create a new object excluding the key with the minimum value
    let newChoicePercentages = Object.keys(choicePercentages).reduce(
      (acc, key) => {
        if (key !== minKey) {
          acc[key] = choicePercentages[key];
        }
        return acc;
      },
      {}
    );

    return {
      updatedChoiceObject: newChoicePercentages,
      valueToDistribute: choicePercentages[minKey],
    };
  };

  const determineWinner = (newChoicePercentages, roundWinner) => {
    let thereIsAWinner = false;
    Object.keys(newChoicePercentages).forEach((choice) => {
      if (newChoicePercentages[choice] >= 0.5) {
        thereIsAWinner = true;
        roundWinner(choice);
      }
    });
    if (!thereIsAWinner) {
      roundWinner("");
    }
  };

  return (
    <div>
      <p>
        Ranked Choice Voting (RCV) will be on the Colorado ballot this year.
        Some people (mostly nerdy people like me) are very exicted about it,
        others oppose it, but my guess is that most people just don't know what
        it is or how it works. This little interactive is meant to explain how
        it works. Fundamentally, it gives voters more choices. It's a little
        complicated, granted, but worth the effort.
      </p>
      <p>
        {" "}
        For this example, we're going to be voting between 4 outdoor activities
        (it is Colorado after all). Each voter can rank the activities in their
        order of preference. Love running but hate skiing? Then rank running as
        number 1 and skiing as number 4.
      </p>
      <p>
        The key piece of information to know about RCV is that the first
        candidate to get <b>over 50%</b> of the vote wins. RCV is a process of
        elimination until this happens-- the intention being to find a candidate
        that the majority of the population can live with.{" "}
      </p>
      <p>
        {" "}
        To simulate a bigger election, click the Assign Public Choices button
        below. This will randomly assign ranks for the 4 choices.{" "}
      </p>
      <button onClick={() => handlePublicButtonClick()}>
        {" "}
        Assign Public choices
      </button>
      <p>First Round</p>
      {Object.keys(firstRoundChoicePercentages).map((choice) => {
        return (
          <div key={choice}>
            <p
              className={
                choice === firstRoundChoiceToRemove ? "crossed-out" : ""
              }
            >
              {choice} : {firstRoundChoicePercentages[choice]}
            </p>
          </div>
        );
      })}
      <p>
        {" "}
        Ok, so here we can imagine this was the outcome of the first round of
        vote counting.
      </p>
      {firstRoundWinner !== "" && (
        <>
          <p>
            Since {firstRoundWinner} got <b>over 50%</b> of the vote, they win
            the contest and the whole thing is over.{" "}
          </p>
          <p>Winner: {firstRoundWinner}</p>
        </>
      )}
      {firstRoundWinner == "" && (
        <div>
          <p>
            Since no single choice got more than 50% of the vote, we go to the
            second round. Now, here, no one needs to vote again. That's because
            everyone has already told us what their second choice would be.{" "}
          </p>
          <p>
            First, we eliminate the choice with the lowest score--
            {firstRoundChoiceToRemove}. Anyone who voted for{" "}
            {firstRoundChoiceToRemove} as their first choice, will have their
            second choice applied. So, say you voted for{" "}
            {firstRoundChoiceToRemove} as your first and Hiking as your second
            choice. Your vote would now go to Hiking.{" "}
          </p>
          <p>Click the See Second Round button to apply these votes.</p>
          <button onClick={() => handleCreateSecondRoundClick()}>
            See Second Round{" "}
          </button>
          {Object.keys(secondRoundChoicePercentages).map((choice) => {
            return (
              <div key={choice}>
                <p
                  className={
                    secondRoundChoiceToRemove == choice ? "crossed-out" : ""
                  }
                >
                  {choice} : {secondRoundChoicePercentages[choice]}
                </p>
              </div>
            );
          })}
          {secondRoundWinner !== "" && <p>Winner: {secondRoundWinner}</p>}
        </div>
      )}
      {firstRoundWinner == "" &&
        secondRoundWinner == "" &&
        Object.keys(secondRoundChoicePercentages).length !== 0 && (
          <div>
            <button onClick={() => handleCreateThirdRoundClick()}>
              See Third Round{" "}
            </button>
            {Object.keys(thirdRoundChoicePercentages).map((choice) => {
              return (
                <div key={choice}>
                  <p>
                    {choice} : {thirdRoundChoicePercentages[choice]}
                  </p>
                </div>
              );
            })}
            {thirdRoundWinner !== "" && <p>Winner: {thirdRoundWinner}</p>}
          </div>
        )}
    </div>
  );
}

export default RankedChoiceVoting;
