// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ scrollRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef?.current?.scrollToTop) {
      scrollRef.current.scrollToTop(); // Lenis scroll container
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, scrollRef]);

  return null;
}