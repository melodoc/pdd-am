import { TOPICS } from '../../constants/topics';

type TProps = {
    onSelectTopic: (id: number) => void;
};

const TopicSelector = ({ onSelectTopic }: TProps) => {
    return (
        <div>
            <h2>Выберите тему</h2>
            <ul style={{
                listStyle: "none",
                display: "grid",
                margin: 0,
                padding: 0,
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "10px",
            }}>
                {TOPICS.map(topic => (
                    <li key={`${topic.id}_${topic.name}`}>
                        <button onClick={() => onSelectTopic(topic.id)}>{topic.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicSelector;
