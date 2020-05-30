"use strict";
var protractor_1 = require('protractor');
describe('App', function () {
    beforeEach(function () {
        // change hash depending on router LocationStrategy
        protractor_1.browser.get('/#/home');
    });
    it('should have a title', function () {
        var subject = protractor_1.browser.getTitle();
        var result = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
        expect(subject).toEqual(result);
    });
    it('should have `your content here` x-large', function () {
        var subject = protractor_1.element(protractor_1.by.css('[x-large]')).getText();
        var result = 'Your Content Here';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=home.e2e.js.map