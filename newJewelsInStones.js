var numJewelsInStones = function(J, S) {
    const jewels = new Set(J.split(''))
    let numJewels = 0
    S.split('').forEach((el) => {
        if (jewels.has(el)){
            numJewels++
        }
    })
    return numJewels
};