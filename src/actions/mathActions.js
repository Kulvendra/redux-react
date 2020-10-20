export function addNumber(num){
    return{
        type:"ADD",
        payload:num
    }
}

export function subtractNumber(num){
    return{
        type:"SUB",
        payload:num
    }
}