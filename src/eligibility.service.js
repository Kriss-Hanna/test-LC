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
    
    // Compare shopperId
    let shopperIdBoolean = cart.shopperId === criteria.shopperId
    
    // Compare totalAti
    let totalAtiBoolean = cart.totalAti > criteria.totalAti.gt
       
    // Compare productId 
    let productIdBoolean = cart.products.some(product => criteria['products.productId'].in.includes(product.productId)) 
    
    // Convert date to Date object and compare
    let dateBoolean = new Date(cart.date) > new Date(criteria.date.and.gt) && 
                      new Date(cart.date) < new Date(criteria.date.and.lt) 
    
    // If all criteria are fulfilled then the cart is eligible so it returns true
    return shopperIdBoolean && totalAtiBoolean && productIdBoolean && dateBoolean;

  }
}

module.exports = {
  EligibilityService,
};
