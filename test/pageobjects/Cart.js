import Bar from './Search.js'
import Creds from './Credential.js'

class CartBtn {

    get hondaSeatCover(){
        return $('(//a[@href="https://us.skda.com.au/honda-rippled-seat-cover-custom-colors/"])[2]');
    }

    get cartHondaSeatCover(){
        return $('[class="cart-item-name"]');
    }

    get bikeYear(){
        return $('[id="attribute_text_1768"]');
    }

    get topColor(){
        return $('[id="attribute_select_7699"]');
    }
    
    get sideColor(){
        return $('[name="attribute[7693]"]');
    }

    get ripplesColor(){
        return $('[name="attribute[10833]"]');
    }

    get topColorBlack(){
        return $('[value="947"]');
    }

    get sideColorBlack(){
        return $('[value="965"]');
    }

    get ripplesColorBlack(){
        return $('[value="956"]');
    }

    get addToCart(){
        return $('[id="form-action-addToCart"]');
    }

    get viewCart(){
        return $('//*[contains(text(), "View or edit your cart")]');
    }

    get topCartBtn(){
        return $('[class="navUser-item-cartLabel"]');
    }

    get checkOutBtn(){
        return $('[title="Click here to proceed to checkout"]');
    }

    get checkOutHeader(){
        return $('[class="stepHeader-title optimizedCheckout-headingPrimary"]');
    }

    get checkOutProduct(){
        return $('[class="product-title optimizedCheckout-contentPrimary"]');
    }

    get emptyCart(){
        return $('[class="drawer-grid-cart-empty__content"]');
    }

    get quantity(){
        return $('[id="qty[]"]');
    }

    get closeCart(){
        return $('(//button[@class="custom-button btn-checkout"])[2]');
    }

    async seatCoverSetUp(){
        await Bar.topSearchBtn.click();
        await Bar.searchFeild.setValue(Creds.hondaSeat);
        await this.hondaSeatCover.click();
        await this.bikeYear.setValue(Creds.bikeYear);
        await this.topColor.click();
        await this.topColorBlack.click();
        await this.sideColor.click();
        await this.sideColorBlack.click();
        await this.ripplesColor.click();
        await this.ripplesColorBlack.click();
        await this.addToCart.click();
        await this.viewCart.click();
        await expect(this.cartHondaSeatCover).toHaveTextContaining('Honda Rippled Seat Cover - CUSTOM COLORS');
    }

    async negativeTask(){
        await this.topCartBtn.click();
        await expect(this.emptyCart).toBeExisting()
        await this.closeCart.click();
    }

    async boundariesTask(){
        await Bar.topSearchBtn.click();
        await Bar.searchFeild.setValue(Creds.hondaSeat);
        await this.hondaSeatCover.click();
        await this.bikeYear.setValue(Creds.bikeYear);
        await this.topColor.click();
        await this.topColorBlack.click();
        await this.sideColor.click();
        await this.sideColorBlack.click();
        await this.ripplesColor.click();
        await this.ripplesColorBlack.click();
        await this.quantity.setValue(Creds.bikeYear);
        await this.addToCart.click();
        await this.viewCart.click();
        await expect(this.cartHondaSeatCover).toHaveTextContaining('Honda Rippled Seat Cover - CUSTOM COLORS');
    }

    async positivetask(){
        await this.seatCoverSetUp();
        await this.checkOutBtn.click();
        await expect(this.checkOutHeader).toHaveTextContaining('Customer');
        await expect(this.checkOutProduct).toHaveTextContaining('2000 x Honda Rippled Seat Cover - CUSTOM COLORS');
    }

}

export default new CartBtn();