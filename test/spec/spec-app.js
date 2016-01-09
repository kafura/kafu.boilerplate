describe('My app', function () {

    describe('Should check app', function () {
        var a;
        beforeEach(function () {
            a = app;
        });

        it('Document should include the app object', function () {
            expect(a).toBe(app);
        });

    });

});