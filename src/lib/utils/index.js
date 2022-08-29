// 添加单位
export const addUnit = (value="auto", unit="px") => {
    if(typeof(value)=='string'){
        return value
    }else if(typeof(value)=='number'){
        return `${value}${unit}`
    }
}