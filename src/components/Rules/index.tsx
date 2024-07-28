/* eslint-disable import/no-extraneous-dependencies */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCallback, useState } from "react";
import { RULE2 } from "./constants/rule2";
import "./styles.css";

function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div>
      <button
        type="button"
        onClick={toggleOpen}
        style={{
          color: isDarkMode ? "white" : "#1a1a1a",
        }}
      >
        {isOpen ? "Скрыть правила" : "Показать правила"}
      </button>
      {isOpen && (
        <Markdown
          className={ isDarkMode ? "container-white" : "container-black"}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
            {RULE2}
        </Markdown>
      )}
    </div>
  );
}

export default Rules;
