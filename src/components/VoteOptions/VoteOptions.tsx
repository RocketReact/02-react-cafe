import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes.ts";

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  function onVotes(vote: VoteType): void {
    onVote(vote);
  }

  function onResets(): void {
    if (canReset) {
      onReset();
    }
  }

  return (
    <div>
      <div className={css.container}>
        <button onClick={() => onVotes("good")} className={css.button}>
          Good
        </button>
        <button onClick={() => onVotes("neutral")} className={css.button}>
          Neutral
        </button>
        <button onClick={() => onVotes("bad")} className={css.button}>
          Bad
        </button>
        {canReset ? (
          <button onClick={onResets} className={`${css.button} ${css.reset}`}>
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}
