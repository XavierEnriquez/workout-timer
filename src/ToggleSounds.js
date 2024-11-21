import { memo } from "react";

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

// Since ToggleSounds is a function, it gets memoise with memo() and not useMemo. So it gets rendered in the initial render, and only when it's called after that, otherwise it gets rendered every second because of the timer component.
export default memo(ToggleSounds);
