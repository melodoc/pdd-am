import React from "react";
import TrainingMode from "../../../TrainingMode";
import { TQuestions } from "../../../../types/question";

type TProps = {
    onResetTopic: () => void;
    // eslint-disable-next-line react/require-default-props
    questions?: TQuestions[];
};

const TroubleshootingBody = React.memo<Readonly<TProps>>(({ onResetTopic, questions }: TProps) => (
  (!questions?.length) ? (<h4>✨ Ошибок нет, вы великолепны ✨</h4>)
    : (
      <TrainingMode
        questions={questions}
        onResetTopic={onResetTopic}
        showNavigationForm={false}
        topicId={0}
      />
    )
));

export default TroubleshootingBody;
