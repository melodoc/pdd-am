type TProps = {
  handlePrevQuestionClick: VoidFunction;
  handleNextQuestionClick: VoidFunction;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

const NavigationButtons = ({
  handlePrevQuestionClick,
  handleNextQuestionClick,
  isPrevDisabled,
  isNextDisabled
}: TProps) => {
  return (
    <>
      <button
        style={{
          marginRight: '8px'
        }}
        onClick={handlePrevQuestionClick} disabled={isPrevDisabled}>
        Назад
      </button>
      <button onClick={handleNextQuestionClick} disabled={isNextDisabled}>
        Вперед
      </button>
    </>
  );
};

export default NavigationButtons;
