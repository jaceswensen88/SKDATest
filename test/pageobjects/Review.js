import Bar from './Search.js'
import Creds from './Credential.js'

class SubmitBtn {

    get ktmGraphics(){
        return $('(//a[@href="https://us.skda.com.au/volt-dusk-ktm-full-graphics-kit/"])[2]');
    }

    get addReveiwBtn(){
        return $('[class="u-marginTop--xs"]');
    }

    get starsRate(){
        return $('(//div[@class="R-RatingSelection__item"])[4]');
    }

    get reviewMessage(){
        return $('(//textarea[@class="R-Field__input"])[1]');
    }

    get reviewName(){
        return $('(//input[@class="R-Field__input"])[1]');
    }

    get reviewEmail(){
        return $('(//input[@class="R-Field__input"])[2]');
    }

    get reviewStarError(){
        return $('(//div[@class="feedback__inner js-field-feedback"])[1]');
    }

    get reviewMessageError(){
        return $('(//div[@class="feedback__inner js-field-feedback"])[2]');
    }

    get reviewNameError(){
        return $('(//div[@class="feedback__inner js-field-feedback"])[3]');
    }

    get reviewEmailError(){
        return $('(//div[@class="feedback__inner js-field-feedback"])[4]');
    }

    get reviewSubmitBtn(){
        return $('[class="R-Button R-Button--md R-Button--primary R-Button--submit"]');
    }


    async itemSearch(){
        await Bar.searchFeild.setValue(Creds.trueIteam);
        await expect(Bar.cardTiltle).toHaveTextContaining('VOLT DUSK KTM Full Graphics Kit'); 
        await this.ktmGraphics.click();
        await this.addReveiwBtn.click();
    }

    async positiveTask(){
        await Bar.clearResults.click();
        await this.itemSearch();
        await this.addReveiwBtn.click();
        await this.starsRate.click();
        await this.reviewMessage.setValue(Creds.reviewNiceMessage);
        await this.reviewName.setValue(Creds.reviewName);
        await this.reviewEmail.setValue(Creds.trueEmail);
        await this.reviewSubmitBtn.click();
    }

    async negativeTask(){
        await Bar.topSearchBtn.click();
        await this.itemSearch();
        await this.addReveiwBtn.click();
        await this.reviewSubmitBtn.click();
        await expect(this.reviewStarError).toExist();
        await expect(this.reviewMessageError).toExist();
        await expect(this.reviewNameError).toExist();
        await expect(this.reviewEmailError).toExist();
    }

    async BoundariesTask(){
        await Bar.topSearchBtn.click();
        await this.itemSearch();
        await this.addReveiwBtn.click();
        await this.starsRate.click();
        await this.reviewMessage.setValue(Creds.emailBound);
        await this.reviewName.setValue(Creds.emailBound);
        await this.reviewEmail.setValue(Creds.emailBound);
        await this.reviewSubmitBtn.click();
    }
    
}

export default new SubmitBtn();