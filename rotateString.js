var rotateString = function(A, B) {
    if (A === B){
        return true
    }
    for (let idx = 0; idx < A.length; idx++){
        if (A === B){
            return true
        }
        A = rotate(A)
    }
    return false
};

const rotate = (string) => {
    return string.slice(1, string.length) + string.slice(0,1)
}