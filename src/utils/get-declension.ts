export const getDeclension = (number: number, forms: Array<string>) => {
    const [one, two, five] = forms;
    const mod100 = number % 100;
    const mod10 = number % 10;

    let form;
    if (mod100 >= 11 && mod100 <= 20) {
        form = five;
    } else if (mod10 === 1) {
        form = one;
    } else if (mod10 >= 2 && mod10 <= 4) {
        form = two;
    } else {
        form = five;
    }

    return `${number} ${form}`;
};
