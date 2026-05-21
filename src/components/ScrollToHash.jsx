import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    let attempts = 0;
    const maxAttempts = 10;

    const scrollToElement = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;