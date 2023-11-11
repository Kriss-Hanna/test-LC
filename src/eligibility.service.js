class EligibilityService {
  /**
   * Compare cart data with criteria to compute eligibility.
   * If all criteria are fulfilled then the cart is eligible (return true).
   *
   * @param cart
   * @param criteria
   * @return {boolean}
   */
  isEligible(cart, criteria) {

    let shopperIdBoolean
    let totalAtiBoolean
    let productIdBoolean
    let dateBoolean 

    // Compare shopperId
    if (cart.shopperId === criteria.shopperId) {
      shopperIdBoolean = true
    } else {
      shopperIdBoolean = false
    }

    // Compare totalAti
    if(cart.totalAti > criteria.totalAti.gt){
      totalAtiBoolean = true      
    } else {
      totalAtiBoolean = false
    }

    // Compare productId 
    if (cart.products.some(product => criteria['products.productId'].in.includes(product.productId))) {
      productIdBoolean = true
    } else {
      productIdBoolean = false
    }
        
    // Compare date
    if (cart.date >= criteria.date.and.gt && cart.date <= criteria.date.and.lt) {
      dateBoolean = true
    } else {
      dateBoolean = false
    } 
    
    // If all criteria are fulfilled then the cart is eligible so it returns true
    return shopperIdBoolean && totalAtiBoolean && productIdBoolean && dateBoolean;

  }
}

module.exports = {
  EligibilityService,
};
