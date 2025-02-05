{
    const countWordOccurrences = (sen: string, emni: string): number => {
        const words = sen.split(" ")
        return words.filter(word => word === emni).length
    }

    let output = countWordOccurrences("I love typescript", "typescript");
    console.log(output)
}