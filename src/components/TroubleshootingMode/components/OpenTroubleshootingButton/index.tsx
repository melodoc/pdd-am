import React from "react";

type TProps = {
    onOpenTrainingMode: () => void;
};

const OpenTroubleshootingButton = React.memo<Readonly<TProps>>(({ onOpenTrainingMode }: TProps) => (
  <button
    type="button"
    onClick={onOpenTrainingMode}
  >
    Открыть Режим работы над ошибками
  </button>
));

export default OpenTroubleshootingButton;
