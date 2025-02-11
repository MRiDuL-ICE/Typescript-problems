// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]

{
    const removeDuplicates = (arr: number[]): number[] => {
        const num = arr.filter((num: number, idx: number) => arr.indexOf(num) === idx)
        return num
    }


    const res = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(res)
}