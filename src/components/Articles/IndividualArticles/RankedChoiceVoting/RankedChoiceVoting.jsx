import { useState } from "react";

function RankedChoiceVoting() {
  const choicePercentagesDefault = {
    Biking: "",
    Running: "",
    Hiking: "",
    Skiing: "",
  };

  // First round
  const [firstRoundChoicePercentages, setFirstRoundChoicePercentages] =
    useState(choicePercentagesDefault);
  const [firstRoundChoiceToRemove, setFirstRoundChoiceToRemove] = useState("");
  const [firstRoundButtonClicked, setFirstRoundButtonClicked] = useState(false);
  const [firstRoundWinner, setFirstRoundWinner] = useState("");
  const [firstRoundLoser, setFirstRoundLoser] = useState("");

  //second round
  const [secondRoundChoicePercentages, setSecondRoundChoicePercentages] =
    useState({});
  const [secondRoundChoiceToRemove, setSecondRoundChoiceToRemove] =
    useState("");
  const [thirdRoundChoicePercentages, setThirdRoundChoicePercentages] =
    useState({});
  const [secondRoundWinner, setSecondRoundWinner] = useState("");
  const [secondRoundButtonClicked, setSecondRoundButtonClicked] =
    useState(false);
  const [secondRoundLoser, setSecondRoundLoser] = useState("");

  const [thirdRoundWinner, setThirdRoundWinner] = useState("");

  //third round
  const handlePublicButtonClick = () => {
    const newChoicePercentages = randomlyAssignValues(
      firstRoundChoicePercentages
    );
    setFirstRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setFirstRoundWinner);
    setFirstRoundLoser(determineLoser(newChoicePercentages));
    setFirstRoundButtonClicked(true);

    setSecondRoundChoicePercentages({});
    setSecondRoundWinner("");

    setThirdRoundChoicePercentages({});
    setThirdRoundWinner("");
    setFirstRoundChoiceToRemove("");
    setSecondRoundChoiceToRemove("");
  };

  const handleCreateSecondRoundClick = () => {
    const { updatedChoiceObject, loser, valueToDistribute } = findAndRemoveMin(
      firstRoundChoicePercentages
    );
    setFirstRoundChoiceToRemove(loser);
    setSecondRoundLoser(determineLoser(updatedChoiceObject));

    const newChoicePercentages = randomlyReAssignRemovedValue(
      updatedChoiceObject,
      valueToDistribute
    );
    setSecondRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setSecondRoundWinner);
    setSecondRoundButtonClicked(true);
  };

  const handleCreateThirdRoundClick = () => {
    const { updatedChoiceObject, loser, valueToDistribute } = findAndRemoveMin(
      secondRoundChoicePercentages
    );
    setSecondRoundChoiceToRemove(loser);
    const newChoicePercentages = randomlyReAssignRemovedValue(
      updatedChoiceObject,
      valueToDistribute
    );
    setThirdRoundChoicePercentages(newChoicePercentages);
    determineWinner(newChoicePercentages, setThirdRoundWinner);
  };

  const handleClearChoicesClick = () => {
    setFirstRoundChoicePercentages(choicePercentagesDefault);
    setFirstRoundChoiceToRemove("");
    setFirstRoundButtonClicked(false);
    setFirstRoundWinner("");
    setFirstRoundLoser("");

    setSecondRoundChoicePercentages({});
    setSecondRoundChoiceToRemove("");
    setSecondRoundWinner("");
    setSecondRoundButtonClicked(false);

    setThirdRoundChoicePercentages({});
    setThirdRoundWinner("");
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

  const determineLoser = (choicePercentages) => {
    let loser = Object.keys(choicePercentages).reduce((min, key) =>
      choicePercentages[key] < choicePercentages[min] ? key : min
    );
    return loser;
  };

  const findAndRemoveMin = (choicePercentages) => {
    // Find the key with the minimum value
    const loser = determineLoser(choicePercentages);

    // Create a new object excluding the key with the minimum value
    let newChoicePercentages = Object.keys(choicePercentages).reduce(
      (acc, key) => {
        if (key !== loser) {
          acc[key] = choicePercentages[key];
        }
        return acc;
      },
      {}
    );

    return {
      updatedChoiceObject: newChoicePercentages,
      loser: loser,
      valueToDistribute: choicePercentages[loser],
    };
  };

  return (
    <div id="RankedChoiceVoting" className="article fullScreen">
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
        (it is Colorado after all). Each voter can rank their activity choices
        in their order of preference. Love skiing but hate running? Then rank
        skiing as your number 1 choice and running as your number 4 choice.
      </p>
      <p>
        Imagine Elmo, Bert and Ernie needed to decide what to do this weekend.
        They made up some voting ballots and filled them out.
      </p>
      <div className="sample-voting-container">
        <p>Elmo's Ballot</p>
        <p>Bert's Ballot</p>
        <p>Ernie's Ballot</p>
        <div className="image-container">
          <img
            src="/DataViz/ranked_choice/ballot.png"
            alt="Ranked Choice Voting Ballot"
          ></img>
        </div>
        <div className="image-container">
          <img
            src="/DataViz/ranked_choice/ballot2.png"
            alt="Ranked Choice Voting Ballot"
          ></img>
        </div>
        <div className="image-container">
          <img
            src="/DataViz/ranked_choice/ballot3.png"
            alt="Ranked Choice Voting Ballot"
          ></img>
        </div>
      </div>
      <p>
        The key piece of information to know about RCV is that{" "}
        <b>the first candidate to get over 50% of the vote WINS</b>. RCV is a
        process of elimination until this happens-- the intention being to find
        a candidate that the majority of the population can live with.{" "}
      </p>
      <p>
        {" "}
        In this example, two out of the three of them voted skiing as their #1
        choice, so, since skiing got over 50% of the #1 choices (66% in this
        case), it wins.{" "}
      </p>
      <p>
        This is a simple example, though. What would happen if millions of
        people were voting?
      </p>
      <p>
        {" "}
        To simulate a <b>bigger</b> election, click the <b>Vote!</b> button
        below. This will randomly assign ranks for the 4 choices as if a public
        election had been run.{" "}
      </p>
      <div className="voting-container">
        <button onClick={() => handlePublicButtonClick()}> Vote!</button>
        <h3 className="round-title">Raw Election Results</h3>
        {Object.keys(firstRoundChoicePercentages).map((choice) => {
          return (
            <div key={choice} className="choice-div">
              <img
                src={`/DataViz/ranked_choice/${choice}.svg`}
                className={
                  firstRoundChoiceToRemove == choice
                    ? "choice-icon deselected"
                    : "choice-icon"
                }
                alt={choice}
              ></img>{" "}
              <p
                className={
                  choice === firstRoundChoiceToRemove
                    ? "crossed-out choice"
                    : "choice"
                }
              >
                : {(firstRoundChoicePercentages[choice] * 100).toFixed(0)}%
              </p>
            </div>
          );
        })}
      </div>
      {firstRoundWinner !== "" && (
        <>
          <h3>We have a winner!</h3>
          <p>
            Since {firstRoundWinner} got <b>over 50%</b> of the vote, they win
            the contest and the whole thing is over.{" "}
          </p>
          <p>
            Click the <b>Run Again</b> button to run another round of public
            voting and see how the process would work if no one won the first
            round.{" "}
          </p>
          <p className="winner-text">Winner: {firstRoundWinner}</p>
          <button onClick={() => handleClearChoicesClick()}>Run Again</button>
        </>
      )}
      {firstRoundWinner == "" && firstRoundButtonClicked && (
        <div>
          <p>
            {" "}
            Ok, so here we can imagine this was the outcome of the first round
            of vote counting.
          </p>
          <p>
            Since no single choice got more than 50% of the vote, we go to the
            second round. No one needs to vote again. That's because everyone
            has already told us what their second choice would be.{" "}
          </p>
          <p>
            First, we eliminate the choice with the lowest score--
            {firstRoundLoser}. Anyone who voted for {firstRoundLoser} as their
            first choice, will have their second choice applied. So, say you
            voted for {firstRoundLoser} as your first choice. Your vote would
            now be applied to your second choice. Meaning, your vote is still
            counted.{" "}
          </p>
          <p>
            Click the <b>See Second Round Results</b> button to apply these
            votes.
          </p>
          <div className="voting-container">
            <button onClick={() => handleCreateSecondRoundClick()}>
              See Second Round Results{" "}
            </button>
            {Object.keys(secondRoundChoicePercentages).map((choice) => {
              return (
                <div key={choice} className="choice-div">
                  <img
                    src={`/DataViz/ranked_choice/${choice}.svg`}
                    className={
                      secondRoundChoiceToRemove == choice
                        ? "choice-icon deselected"
                        : "choice-icon"
                    }
                    alt={choice}
                  ></img>{" "}
                  <p
                    className={
                      secondRoundChoiceToRemove == choice
                        ? "crossed-out choice"
                        : "choice"
                    }
                  >
                    : {(secondRoundChoicePercentages[choice] * 100).toFixed(0)}%
                  </p>
                </div>
              );
            })}
          </div>
          {secondRoundWinner !== "" && (
            <>
              <h3>We have a winner!</h3>
              <p>
                Since {secondRoundWinner} got more than 50% of the vote, they
                win. If no one had gotten more than 50% of the vote, however, a
                third round of tallying would have been necessary. Click the{" "}
                <b>Run Again</b> button to run another round of public voting.
              </p>
              <p className="winner-text">Winner: {secondRoundWinner}</p>
              <button onClick={() => handleClearChoicesClick()}>
                Run Again
              </button>
            </>
          )}
          {secondRoundWinner == "" && secondRoundButtonClicked && (
            <>
              <p>
                Once again, no choice got more than 50% of the vote so we'll
                need to go one more round to see who wins. Anyone who voted for{" "}
                {secondRoundLoser} (which is the choice with the lowest ranking)
                as their first choice, will have their votes distributed to the
                next choice on their ballot. This could be a voter's second or
                third choice depending on how they voted for their first choice
                (if their first choice made it through the first round of
                elimination). This is where we're especially glad we have
                computers to do the number crunching.{" "}
              </p>
              <p>
                Click the <b>See Third Round Results</b> button to run the last
                round of this voting process and see the winner!
              </p>
            </>
          )}
        </div>
      )}
      {firstRoundWinner == "" &&
        secondRoundWinner == "" &&
        Object.keys(secondRoundChoicePercentages).length !== 0 && (
          <div>
            <div className="voting-container">
              <button onClick={() => handleCreateThirdRoundClick()}>
                See Third Round Results{" "}
              </button>
              {Object.keys(thirdRoundChoicePercentages).map((choice) => {
                return (
                  <div key={choice} className="choice-div">
                    <img
                      src={`/DataViz/ranked_choice/${choice}.svg`}
                      className="choice-icon"
                      alt={choice}
                    ></img>{" "}
                    <p className="choice">
                      : {(thirdRoundChoicePercentages[choice] * 100).toFixed(0)}
                      %
                    </p>
                  </div>
                );
              })}
            </div>
            {thirdRoundWinner !== "" && (
              <>
                <h3>We have a winner!</h3>
                <p className="winner-text">Winner: {thirdRoundWinner}</p>
                <p>
                  The beauty of this type of voting is that we can be certain
                  that a true majority of voters listed {thirdRoundWinner} in
                  their top three choices. And maybe, just maybe, this is a
                  candidate we can all live with.
                </p>
                <button onClick={() => handleClearChoicesClick()}>
                  Run Again
                </button>
              </>
            )}
          </div>
        )}
    </div>
  );
}

export default RankedChoiceVoting;
