import { useCallback } from 'react';

type TProps = {
    answers: string[];
    correctAnswer: number;
    selectedAnswer: number | null;
    showResult: boolean;
    onAnswerClick: (index: number) => void;
};

const addNonBreakingSpace = (answer: string) => {
    // Регулярное выражение для замены цифры от 1 до 10, за которой следует пробел, на цифру и неразрывный пробел
    return answer.replace(/(\d+)\.\s/g, '$1.\u00A0');
};

const AnswerList = ({ answers, correctAnswer, selectedAnswer, showResult, onAnswerClick }: TProps) => {
    const getAnswerStyle = useCallback((index: number) => {
        if (!showResult) return 'white';
        if (index === correctAnswer) return 'green';
        if (index === selectedAnswer) return 'red';
        return 'white';
    }, [correctAnswer, selectedAnswer, showResult]);

    return (
        <ul
            style={{
                listStyle: "none",
                margin: 0,
                marginBottom: '16px',
                padding: 0,
            }}>
            {answers.map((answer, index) => (
                <li
                    key={index}
                    onClick={() => onAnswerClick(index)}
                    style={{
                        marginBottom: "8px",
                        color: getAnswerStyle(index)
                    }}
                >
                    <button type='button'
                        style={{
                            marginBottom: "8px",
                            textAlign: "left",
                            color: getAnswerStyle(index)
                        }}>
                        {addNonBreakingSpace(answer)}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default AnswerList;