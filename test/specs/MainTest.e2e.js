import SignIn from '../pageobjects/Account.js'
import Bar from '../pageobjects/Search.js'
import SubmitBtn from '../pageobjects/Review.Btn.js'

describe('SkdaTest', () => {
    it('vaildTest', async () => {
        await SignIn.open();
        //await SignIn.positiveTask();
       //await SignIn.negitiveTask();
       //await SignIn.boundariesTask();
       //await Bar.positiveTask();
        //await Bar.boundarysTask();
        //await Bar.negativeTask();
        await SubmitBtn.positiveTask();
    });
})