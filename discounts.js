export const calculateDiscounts = (quantity) =>{
  if( quantity < 200 ) return 500 - quantity;
  if( quantity >= 200 && quantity <= 500 ) return 5;
  return 12;
}