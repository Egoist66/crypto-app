export function percentDifference(a: number, b: number){
    return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
}

export const delay = (ms: number) => {
    return new Promise((res) => {
        let timer = setTimeout(() => {
            res(true)
            clearTimeout(timer)
        }, ms)
})}