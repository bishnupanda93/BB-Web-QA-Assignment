var locators = function () {
    this.url = 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/';
    this.homepageText = element.all(by.className('mb-3 ng-binding ng-scope'));
    this.contractText = element(by.css('#autocomplete-input'));
    this.homepageheading=element(by.css('.banner .container .logo-font'));
    this.crudTag=element.all(by.className('tag-default tag-pill'));
    this.crudLink=element(by.className('nav-link active'));
    this.crudPageCount=element.all(by.css('.page-item .page-link'));
    this.crudArticleCount=element.all(by.css('.article-preview'));
    this.crudArticleAuthor=element.all(by.css('.author'));
    this.crudArticleDate=element.all(by.css('.date'));
    this.crudArticlePreview=element.all(by.css('.preview-link'));
    this.crudArticlePreviewText=element(by.className('col-md-12'));
    this.crudArticlePreviewDetails=element(by.className('tag-default tag-pill tag-outline'));
};
module.exports = new locators();