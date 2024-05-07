import Creds from "./Credential.js";

class Bar {
    get topSearchBtn(){
        return $('[class="navUser-action navUser-action--quickSearch"]');
    }

    get searchFeild(){
        return $('[id="search_query"]');
    }

    get cardTiltle(){
        return $('[class="card-title"]');
    }

    get clearResults(){
        return $('[class="results-clear"]');
    }

    get quickMessage(){
        return $('[class="quickSearchMessage"]')
    }

    async positiveTask(){
        await this.topSearchBtn.click();
        await this.searchFeild.setValue(Creds.trueIteam);
        await expect(this.cardTiltle).toHaveTextContaining('VOLT DUSK KTM Full Graphics Kit');
    }

    async boundarysTask(){
        await this.clearResults.click();
        await this.searchFeild.setValue(Creds.emailBound);
    }
    
    async negativeTask(){
        await this.clearResults.click();
        await this.searchFeild.setValue(Creds.negativeSearch);
        await expect(this.quickMessage).toHaveTextContaining("\ product results for \'!@#$%^&amp;*()\'");
    }
}

export default new Bar();