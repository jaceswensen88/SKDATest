import { browser } from '@wdio/globals'

export default class BaseUrl {

    open () {
        return browser.url(`https://us.skda.com.au`);
    }
}
