import BaseUrl from './Website.js'
import Creds from './Credential.js'

class SignIn extends BaseUrl {

    get topSignInBtn () {
        return $('[href="/login.php"]');
    }

    get emailField () {
        return $('[id="login_email"]');
    }

    get passWordField () {
        return $('[id="login_pass"]');
    }

    get signInBtn () {
        return $('[type="submit"]');
    }

    get topLogOut () {
        return $('[href="/login.php?action=logout"]');
    }

    async signInTask () {
        await this.topSignInBtn.click();
        await this.emailField.setValue(Creds.email);
        await this.passWordField.setValue(Creds.passWord);
        await this.signInBtn.click();
        await this.topLogOut.click();
    }

    /*async logInLogOut(){
        for (let i = 0; i < Creds.fasleUsers.length; i++) {  
        await this.signInTask(Creds.allUsers[i],Creds.falsePassword);
            if (Creds.allUsers[i] === 'locked_out_user') {
            await expect(this.loginError).toExist();
            break;   
            }
        await Logout.logOutTask();
        }*/

}

export default new SignIn();