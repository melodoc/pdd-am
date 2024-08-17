import { useCallback, useState } from "react";
import { TOPICS } from "../../../../constants/topics";
import { getSelectedGroup, saveSelectedGroup, saveSelectedSubGroup } from "../../../../utils/local-storage-helper";
import { GroupList } from "./components/GroupList";
import { SubGroupList } from "./components/SubGroupList";
import { SubGroupHeader } from "./components/SubGroupHeader";

type TProps = {
  onSelectTopic: (id: number) => void;
};

function TopicList({ onSelectTopic }: Readonly<TProps>) {
  const initialSelectedGroup = getSelectedGroup();
  const [selectedGroup, setSelectedGroup] = useState<number | null>(initialSelectedGroup);

  const groups = Array.from(new Set(TOPICS.map((topic) => topic.group)));

  const filteredTopics = selectedGroup
    ? TOPICS.filter((topic) => topic.group === selectedGroup)
    : [];

  const handleGroupSelect = useCallback((group: number) => {
    setSelectedGroup(group);
    saveSelectedGroup(group);
  }, []);

  const handleOnClick = useCallback((id: number) => {
    onSelectTopic(id);
    saveSelectedSubGroup(id);
  }, [onSelectTopic]);

  return (
    <>
      <GroupList
        groups={groups}
        selectedGroup={selectedGroup}
        onGroupSelect={handleGroupSelect}
      />

      {selectedGroup && (
        <>
          <SubGroupHeader group={selectedGroup} />
          <SubGroupList
            topics={filteredTopics}
            onClick={handleOnClick}
          />
        </>
      )}
    </>
  );
}

export default TopicList;
