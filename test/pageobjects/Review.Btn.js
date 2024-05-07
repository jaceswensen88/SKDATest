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

    get reviewSubmitBtn(){
        return $('[class="R-Button R-Button--md R-Button--primary R-Button--submit"]');
    }

    async itemSearch(){
        await Bar.positiveTask();
        await this.ktmGraphics.click();
        await this.addReveiwBtn.click();
    }

    async positiveTask(){
        await this.itemSearch();
        await this.addReveiwBtn.click();
        await this.starsRate.click();
        await this.reviewMessage.setValue(Creds.reviewNiceMessage);
        await this.reviewName.setValue(Creds.reviewName);
        await this.reviewEmail.setValue(Creds.trueEmail);
        await this.reviewSubmitBtn.click();
    }

    async negativeTask(){
        
    }
    
}

export default new SubmitBtn();