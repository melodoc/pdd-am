type TProps = {
  handlePrevQuestionClick: VoidFunction;
  handleNextQuestionClick: VoidFunction;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

function NavigationButtons({
  handlePrevQuestionClick,
  handleNextQuestionClick,
  isPrevDisabled,
  isNextDisabled,
}: TProps) {
  return (
    <>
      <button
        style={{
          marginRight: "8px",
        }}
        type="button"
        onClick={handlePrevQuestionClick}
        disabled={isPrevDisabled}
      >
        ⏮️ Назад
      </button>
      <button
        type="button"
        onClick={handleNextQuestionClick}
        disabled={isNextDisabled}
      >
        Вперед ⏭️
      </button>
    </>
  );
}

export default NavigationButtons;
