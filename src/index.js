
exports.min = function min (array) {
    if (array) {
            if (array.length) {
                let minNumber = array[0]

                for (let i = 1; i < array.length; i++) {
                    if (array[i] < minNumber) {
                        minNumber = array[i]
                    }
                }
                return minNumber
            }
            return 0
    }
    return 0
}

exports.max = function max (array) {
    if (array) {
        if (array.length) {
            let maxNumber = array[0]

            for (let i = 1; i < array.length; i++) {
                if (array[i] > maxNumber) {
                    maxNumber = array[i]
                }
            }
            return maxNumber
        }
        return 0
    }
    return 0
}

exports.avg = function avg (array) {
    if (array) {
        if (array.length) {

            let sum = 0

            for (let i = 0; i < array.length; i++) {
                sum += array[i]
            }
            return sum / array.length
        }
        return 0
    }
    return 0
}
