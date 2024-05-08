import SignIn from '../pageobjects/Account.js'
import Bar from '../pageobjects/Search.js'
import SubmitBtn from '../pageobjects/Review.js'
import CartBtn from '../pageobjects/Cart.js'

describe('SkdaTest', () => {
    it('vaildTest', async () => {
        await SignIn.open();
        //await SignIn.positiveTask();
        //await SignIn.negitiveTask();
        //await SignIn.boundariesTask();
        await Bar.positiveTask();
        await Bar.boundariesTask();
        await Bar.negativeTask();
        await SubmitBtn.positiveTask();
        await SubmitBtn.negativeTask();
        await SubmitBtn.BoundariesTask();
        await CartBtn.negativeTask();
        await CartBtn.boundariesTask();
        await CartBtn.positivetask();
    });
})