import TopicList from "./components/TopicList";

type TProps = {
    onSelectTopic: (id: number) => void;
    isTrainingModeOpen: boolean;
};

function TopicSelector({ onSelectTopic, isTrainingModeOpen }: Readonly<TProps>) {
  if (isTrainingModeOpen) return null;
  return (
    <div>
      <h1>
        🏁 ПДД 2024: Список вопросов к теоретическим экзаменам
        на водительские права Республики Армения 🇦🇲
      </h1>
      <h1>Вопросы ПДД по группам</h1>
      <TopicList
        onSelectTopic={onSelectTopic}
        isTrainingModeOpen={isTrainingModeOpen}
      />
    </div>
  );
}

export default TopicSelector;
