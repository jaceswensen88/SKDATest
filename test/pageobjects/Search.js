class Bar {

    trueIteam = 'VOLT DUSK KTM Full Graphics Kit';
    emailBound = 'ldjfasdfoerijaenfacv;ldkfjas;ldkjfad;asjdfoweiyrtoqiuerlkjvnvnsldfjwoierqupoiafsdl;kfjpoiareuwrkjnvz,xvnmzlkjweriopqwuernzmx,vnzoqweiurpoasdlfkjzoqwiuerlkjfznmx,vwoierupqoiweurpoqwieurpoqwieurzxn,vzomwpeoirpqowieurpqowieurpoqiwuerzomwepoiruqowieurpqowieurpqowieurzomwepoirupqowieurpqwoieurpqowieurzoqwieurpoqiweurzoqwieurpqowieuqpwoieurpqwoieurzomwpoeirpqwoieurpqwoieurpqowieurpoqwieurpqowieurpoqwiuepriqwoieurpoqiweurpqoiweurpqwoieurpqwoieurpoqwieurpqowieurpqowieurpqowieurpqowieurpqowieurpoqiweurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowieurpqowi'
    negativeSearch = '!@#$%^&*()';

    get topSearchBtn(){
        return $('[class="navUser-action navUser-action--quickSearch"]');
    }

    get searchFeild(){
        return $('(//input[@id="search_query"])[1]');
    }

    get cardTiltle(){
        return $('[class="card-title"]');
    }

    get clearResults(){
        return $('[class="results-clear"]');
    }

    get quickMessage(){
        return $('[class="quickSearchMessage"]');
    }

    async positiveTask(){
        await this.topSearchBtn.click();
        await this.searchFeild.setValue(this.trueIteam);
        await expect(this.cardTiltle).toHaveTextContaining('VOLT DUSK KTM Full Graphics Kit');
    }

    async boundariesTask(){
        await this.clearResults.click();
        await this.searchFeild.setValue(this.emailBound);
    }
    
    async negativeTask(){
        await this.clearResults.click();
        await this.searchFeild.setValue(this.negativeSearch);
        await expect(this.quickMessage).toHaveTextContaining("\ product results for \'!@#$%^&amp;*()\'");
    }
}

export default new Bar();