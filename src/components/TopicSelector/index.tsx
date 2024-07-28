import TopicList from "./components/TopicList";

type TProps = {
  isTopicPanelOpen: boolean;
  onSelectTopic: (id: number) => void;
  onTogglePanel: () => void;
};

function TopicSelector({ isTopicPanelOpen, onSelectTopic, onTogglePanel }: Readonly<TProps>) {
  return (
    <>
      <button
        type="button"
        onClick={onTogglePanel}
        style={{
          backgroundColor: "rgb(4 82 158)",
          color: "white",
        }}
      >
        {`${isTopicPanelOpen ? "🔼" : "📒"} Вопросы ПДД по группам`}
      </button>
      {isTopicPanelOpen && (
        <div>
          <TopicList
            onSelectTopic={onSelectTopic}
          />
        </div>
      )}
    </>
  );
}

export default TopicSelector;
