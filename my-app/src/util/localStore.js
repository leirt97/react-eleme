export function getCityName(key) {
    let value
    try {
        value = localStorage.getItem(key)
    } catch(err) {
        console.log('localStorage.getItem报错:'+err)
    } finally {
        return value
    }
}

export function setCityName(key,value) {
    try {
        localStorage.setItem(key,value)
    } catch(err) {
        console.log('localStorage.setItem报错:'+err)
    }
}

// export function set