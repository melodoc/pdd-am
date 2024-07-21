// Регулярное выражение для замены цифры от 1 до 10,
// за которой следует пробел, на цифру и неразрывный пробел
export const addNonBreakingSpace = (answer: string) => answer.replace(/(\d+)\.\s/g, "$1.\u00A0");
