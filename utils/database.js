const products = [ {title : 'product 1'}];
 
const addProduct = (product)=>{
    products.push(product);
};

module.exports = {
    products,
    addProduct
};