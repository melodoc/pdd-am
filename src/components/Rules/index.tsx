/* eslint-disable import/no-extraneous-dependencies */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCallback, useState } from "react";
import "./styles.css";
import { RULES, RULES_MAP } from "./constants/topics";

function Rules() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState(RULES[0].rules);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleSelectChange = useCallback((event: { target: { value: string; }; }) => {
    const rule = RULES_MAP.get(parseInt(event.target.value, 10));
    if (rule) {
      setSelectedRule(rule.rules);
    }
  }, []);

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <>
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
        <>
          <select
            style={{
              backgroundColor: "transparent",
              borderRadius: "8px",
              fontFamily: "inherit",
              fontSize: "1em",
              fontWeight: "500",
              marginTop: "16px",
              minHeight: "42px",
              textAlign: "center",
              width: "100%",
            }}
            onChange={handleSelectChange}
          >
            {RULES.map((rule) => (
              <option key={rule.id} value={rule.id.replace("rule_", "")}>
                {rule.name}
              </option>
            ))}
          </select>
          <Markdown
            className={isDarkMode ? "container-white" : "container-black"}
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          >
            {selectedRule}
          </Markdown>
        </>
      )}
    </>
  );
}

export default Rules;
