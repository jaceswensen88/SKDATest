import SignIn from '../pageobjects/Account.js'

describe('SkdaTest', () => {
    it('vaildTest', async () => {
        await SignIn.open();
        await SignIn.signInTask();
    });
})