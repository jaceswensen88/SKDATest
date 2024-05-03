import BaseUrl from './Website.js'
import Creds from './Credential.js'

class SignIn extends BaseUrl {

    get topSignInBtn(){
        return $('[href="/login.php"]');
    }

    get emailField(){
        return $('[id="login_email"]');
    }

    get passWordField(){
        return $('[id="login_pass"]');
    }

    get signInBtn(){
        return $('[type="submit"]');
    }

    get topLogOut(){
        return $('[href="/login.php?action=logout"]');
    }

    get signInError(){
        return $('[class="alertBox alertBox--error"]');
    }

    get inLineMessage(){
        return $('[class="form-inlineMessage"]')
    }

    async signInTask (email, password) {
        await this.topSignInBtn.click();
        await this.emailField.setValue(email);
        await this.passWordField.setValue(password);
        await this.signInBtn.click();
    }

    async positiveTest(){
        await this.topSignInBtn.click();
        await this.emailField.setValue(Creds.trueEmail);
        await this.passWordField.setValue(Creds.turePassWord);
        await this.signInBtn.click();
        await this.topLogOut.click();
    }

    async negitiveTest(){
        for (let i = 0; i < Creds.fasleEmail.length; i++) {  
            await this.signInTask(Creds.fasleEmail[i],Creds.falsePassword);
                if (Creds.fasleEmail[i] === 'shadow.ninja@example.com', 'unicorn.dreamer@example.com', 'galactic.pancake@example.com', 'cyber.dragon@example.com') {
                await expect(this.signInError).toExist();  
                }
            } 
    }

    async boundariesTest(){
        await this.topSignInBtn.click();
        await this.emailField.setValue(Creds.emailBound);
        await this.passWordField.setValue(Creds.turePassWord);
        await this.signInBtn.click();
        await expect(this.inLineMessage).toExist();
    }

}

export default new SignIn();