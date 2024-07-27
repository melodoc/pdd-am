/* eslint-disable import/no-extraneous-dependencies */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCallback, useState } from "react";
import { RULE2 } from "./constants/rule2";

function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div>
      <button type="button" onClick={toggleOpen}>
        {isOpen ? "Скрыть правила" : "Показать правила"}
      </button>
      {isOpen && (
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {RULE2}
        </Markdown>
      )}
    </div>
  );
}

export default Rules;
