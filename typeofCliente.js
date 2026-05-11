
export const typeOfCliente = (quantity, productsArray) =>{
  if(productsArray > 20 && quantity > 1000) return true;
  return false;
}