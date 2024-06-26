import BaseUrl from './Website.js';
import Creds from './Credential.js';

class SignIn extends BaseUrl {

    fasleEmail = ['shadow.ninja@example.com', 'unicorn.dreamer@example.com', 'galactic.pancake@example.com', 'cyber.dragon@example.com'];
    falsePassword = '123456';
    emailBound = 'ldjfasdfoerijaenfacv;ldkfjas;ldkjfad;asjdfoweiyrtoqiuerlkjvnvnsldfjwoierqupoiafsdl;kfjpoiareuwrkjnvz,xvnmzlkjweriopqwuernzmx,vnzoqweiurpoasdlfkjzoqwiuerlkjfznmx,vwoierupqoiweurpoqwieurpoqwieurzxn,vzomwpeoirpqowieurpqowieurpoqiwuerzomwepoiruqowieurpqowieurpqowieurzomwepoirupqowieurpqwoieurpqowieurzoqwieurpoqiweurzoqwieurpqowieuqpwoieurpqwoieurzomwpoeirpqwoieurpqwoieurpqowieurpoqwieurpqowieurpoqwiuepriqwoieurpoqiweurpqoiweurpqwoieurpqwoieurpoqwieurpqowieurpqowieurpqowieurpqowieurpqowieurpoqiweurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowi'

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
        return $('[class="form-inlineMessage"]');
    }

    async signInTask (email, password) {
        await this.topSignInBtn.click();
        await this.emailField.setValue(email);
        await this.passWordField.setValue(password);
        await this.signInBtn.click();
    }

    async positiveTask(){
        await this.topSignInBtn.click();
        await this.emailField.setValue(Creds.trueEmail);
        await this.passWordField.setValue(Creds.turePassWord);
        await this.signInBtn.click();
        await this.topLogOut.click();
    }

    async negitiveTask(){
        for (let i = 0; i < this.fasleEmail.length; i++) {  
            await this.signInTask(this.fasleEmail[i],this.falsePassword);
                if (this.fasleEmail[i] === 'shadow.ninja@example.com', 'unicorn.dreamer@example.com', 'galactic.pancake@example.com', 'cyber.dragon@example.com') {
                await expect(this.signInError).toExist();  
                }
            } 
    }

    async boundariesTask(){
        await this.topSignInBtn.click();
        await this.emailField.setValue(this.emailBound);
        await this.passWordField.setValue(Creds.turePassWord);
        await this.signInBtn.click();
        await expect(this.inLineMessage).toExist();
    }

}

export default new SignIn();