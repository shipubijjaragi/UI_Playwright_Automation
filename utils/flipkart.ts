import{Locator, Page} from '@playwright/test'

export class boom{

    readonly page: Page;
    readonly button : Locator;


    constructor(page: Page){

        this.page = page
        this.button = page.locator('//a[@id="nav-logo-sprites"]');
    }

async form(){

await this.button.click();
await this.page.locator('//input[@id="nav-search-submit-button"]').click();
}









}