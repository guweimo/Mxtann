/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name, isConversion=false) => {
    if (!name) return;
    let result = window.localStorage.getItem(name);
    if (isConversion) {
        result = JSON.parse(result)
    }
    return result
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 */
 export const setSession = (name, content) => {
     if (!name) return;
     if (typeof content == 'string') {
         content = JSON.stringify(content)
     }
     window.sessionStorage.setItem(name, content)
 }

/**
 * 获取sessionStorage
 */
export const getSession = (name, isConversion=false) => {
    if (!name) return;
    let result = window.sessionStorage.getItem(name)
    if (isConversion) {
        result = JSON.parse(result)
    }
    return result
}

/**
 * 删除sessionStorage
 */
export const removeSession = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name)
}
