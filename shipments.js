
export const calculateShipping = (productsArray)=>{
  if(productsArray < 3) return -1;
  if(productsArray >= 3 && productsArray <= 10 ) return 15;
  return 0;
}

