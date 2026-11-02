import { useEffect } from "react";

export function useScrollTop() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
}
