import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes.ts";
import VoteStats from "../VoteStats/VoteStats.tsx";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(key: VoteType) {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  const hasVotes = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={hasVotes}
        />

        <VoteStats />
      </div>
    </>
  );
}

export default App;
