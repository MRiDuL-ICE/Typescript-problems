{
    const countWordOccurrences = (sen: string, word: string): number => {
        const words = (sen.match(word) || []).length
        return words
    }

    let output = countWordOccurrences("I love typescript", "love typescript ");
    console.log(output)
}