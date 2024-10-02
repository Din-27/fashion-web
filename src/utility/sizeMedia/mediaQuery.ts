import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = typeof window !== "undefined" && window.matchMedia(query);
    function handleChange(e: { matches: boolean | ((prevState: boolean) => boolean) }) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [matches, query]);
  return matches;
}

export default useMediaQuery;
