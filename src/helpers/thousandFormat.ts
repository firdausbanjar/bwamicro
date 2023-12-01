// const thousandFormat = (number: number = 0): string => {
//     let result: string = '';
//     let reverse = number.toString().split('').reverse();

//     if (reverse.length > 3) {
//         for (let i = 1; i < reverse.length + 1; i++) {
//             if (i % 3 === 0) result += `${reverse[i - 1]},`;
//             else result += reverse[i - 1];
//         }

//         let thousand: string = result.split('').reverse().join('');
//         return thousand;
//     }

//     return number.toString();
// };

const thousandFormat = (number: number = 0): string => {
    const numberFormatter = new Intl.NumberFormat('id-ID');
    const formatted = numberFormatter.format(number);

    return formatted;
};

export default thousandFormat;
