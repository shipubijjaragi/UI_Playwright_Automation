import{Locator, Page} from '@playwright/test'

export class shiva{

readonly page: Page;
readonly button1: Locator;
readonly searchTextBox: Locator;

constructor(page: Page){

    this.page = page
    this.button1 =  page.locator('//a[@id="nav-logo-sprites"]');
    this.searchTextBox = page.locator('//input[@id="twotabsearchtextbox"]');

}



async searchMobile(){
await this.button1.click();
await this.searchTextBox.fill('iphone 16 pro')
await this.page.locator('//input[@id="nav-search-submit-button"]').click();

}








}