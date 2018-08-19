/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?

         ! Tested by taking out the .not !

         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Completed: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         //use initial definition test on feed urls and their length
         it('URL is defined and not empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });


        /* Completed: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //use initial definition test on feed names and their length
         it('Name is defined and not empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
             // need to check that the names contain words
             expect(typeof feed.name).toEqual('string');
           });
         });

    });

describe('The menu', function() {
        /* Completed: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('hidden by default', function(){
           // check to see if css class of menu-hidden is inabled or disabled
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* Completed: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('displays and hides when clicked', function(){
            // need to create variable to represent the menu button
            var menuButton = $('.menu-icon-link');
            // test consists of clicking on and off the button (expectations based off of default setting)
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
});

describe('Initial Entries', function() {
        /* Completed: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // create load loop to make sure asynchronous testing will complete and not break other tests
         beforeEach(function(done){
           loadFeed(0, function(){
             done();
           });
         });
        // uses same logic and structure as inital definition test on the entry element
         it('function is called and has an entry', function(){
           expect($('.feed .entry').length).not.toBe(0);
         });

});
describe('New Feed Selection', function() {
        /* Completed: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // need to initalize variables for loaded feeds before loops
         var startFeed;
         var endFeed;
        // create loop to load first feed before test
         beforeEach(function(done){
           loadFeed(0, function(){
             startFeed = $('.feed').html();
             done();
           });
         });
        // test loads second feed and compares against first, should not equal eachother
         it('changes feed content after load', function(done){
           loadFeed(1, function(){
             endFeed = $('.feed').html();
             expect(endFeed).not.toEqual(startFeed);
             done();
           });
         });
       });
}());
