


const addToStorage = (id) => {
    let allProducts =  getStoredData();

    const quantity = allProducts[id];
    if(quantity) {
        allProducts[id] =  quantity + 1
    } else {
        allProducts[id] = 1;
    }
    localStorage.setItem('cartItem', JSON.stringify(allProducts));
}


const getStoredData = () => {
    let orderedItems = {};

    const data = localStorage.getItem('cartItem');
    if(data){
        orderedItems = JSON.parse(data);;
    }
    return orderedItems;
}

const removeFromStorage = (id) => {
    const allData = getStoredData();
    if(id in allData){
        delete allData[id]
        localStorage.setItem('cartItem', JSON.stringify(allData));
    }
    return allData;
}


export { addToStorage, getStoredData, removeFromStorage };

