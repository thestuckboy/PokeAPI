export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateArrayWithRandomNumbers(amount){
    let array = []

    while (array.length < amount){
        let random_number = Math.random() * (899 - 1) + 1
        random_number = Math.round(random_number);

        if (!array.includes(random_number)) array.push(random_number)
    }

    return array
}