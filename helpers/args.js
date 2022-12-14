

const getArgs = (args) => {
    const res = {}
    const [executer, file, ...rest] = args
    rest.forEach((e, i, arr) => {
        if(e.charAt(0) == '-') {
            if(i == arr.length - 1 ) {
                res[e.substring(1)] = true
            }
            else if(arr[i+1].charAt(0) != '-') {
                res[e.substring(1)] = arr[i+1]
            } else {
                res[e.substring(1)] = true
            }
        }
    });
    return res
};

export { getArgs }