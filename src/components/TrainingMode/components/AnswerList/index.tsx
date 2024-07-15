import { useCallback } from 'react';

type TProps = {
    answers: string[];
    correctAnswer: number;
    selectedAnswer: number | null;
    showResult: boolean;
    onAnswerClick: (index: number) => void;
};

const AnswerList = ({ answers, correctAnswer, selectedAnswer, showResult, onAnswerClick }: TProps) => {
    const getAnswerStyle = useCallback((index: number) => {
        if (!showResult) return 'white';
        if (index === correctAnswer) return 'green';
        if (index === selectedAnswer) return 'red';
        return 'white';
    }, [correctAnswer, selectedAnswer, showResult]);

    return (
        <ul>
            {answers.map((answer, index) => (
                <li
                    key={index}
                    onClick={() => onAnswerClick(index)}
                    style={{ color: getAnswerStyle(index) }}
                >
                    {answer}
                </li>
            ))}
        </ul>
    );
};

export default AnswerList;