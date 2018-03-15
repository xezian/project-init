const test = require('tape');
const Nightmare = require('nightmare');

test("test can read the title",function(t) {
    Nightmare({ show: true })
    .goto("https://serene-castle-95327.herokuapp.com/")
    .evaluate(function() {
        return document.title;
    })
    .end()
    .then(function(title) {
    t.equal(title, "SHFTR");
    t.end();
    });
});
// .click("a[href='/learn/all']")
//         // Evaluate the title
//         .evaluate(function() {
//         return document.title;
//         })
// test("should present a link to course catalog after login", function(done) {
//     new Nightmare({ show: true })
//         .goto("https://www.codecademy.com/login")
//         // Enter username.
//         .type("#user_login", "ResilD")
//         // Enter password.
//         .type("#login__user_password", "dummy*password")
//         // Click the login button
//         .click("#user_submit")
//         // Evaluate the following selector
//         .evaluate(function() {
//         // Assert the "learn" link can be found
//         return document.querySelector("a[href='/learn']");
//         })
//         .then(function(link) {
//         t.notEqual(link, undefined);
//         done();
//     });
// });

// test("should throw an error for fun", function() {
//     throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
// });
