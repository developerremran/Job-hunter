const addDb = (id)=>{

    let saveJobItem = {};
    const getData = localStorage.getItem('JobItem')
    if(getData){
        saveJobItem = JSON.parse(getData)
      
    }
    const quantity = saveJobItem[id]
    if (quantity) {
        const newQuantity = quantity + 1
        saveJobItem[id] = newQuantity
    } else {
        saveJobItem[id] = 1
    }
    localStorage.setItem('JobItem', JSON.stringify(saveJobItem))
}
const getData = () =>{
    let saveJobItem = {};
    const getData = localStorage.getItem('JobItem')
    if(getData){
        saveJobItem = JSON.parse(getData)
    }
    return saveJobItem;
}

export {addDb, getData}