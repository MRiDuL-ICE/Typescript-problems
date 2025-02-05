{
    const removeDuplicates = (arr: number[]): number[] => {
        const num = arr.filter((num: number, idx: number) => arr.indexOf(num) === idx)
        return num
    }


    const res = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(res)
}