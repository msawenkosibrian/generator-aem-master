/**
 * Created by bohdan on 10/8/15.
 */

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('aem-tire:component component-name', function () {

    before(function (done) {
        helpers.run(path.join(__dirname, './'))
            .withArguments(['component-name'])
            .on('end', done);

    });

    it('create "component-name" directory', function () {
        assert.file(['component-name']);
    });

    it('create "component-name.html" in component directory', function () {
        assert.file(['component-name/component-name.html']);
    });

    it('create dialog  file with name "dialog.xml" in component directory', function () {
        assert.file(['component-name/dialog.xml']);
    });

    it('create cq edit config file with name "_cq_editConfig.xml" in component directory', function () {
        assert.file(['component-name/_cq_editConfig.xml']);
    });

    it('create content ".content.xml" in component directory', function () {
        assert.file(['component-name/.content.xml']);
    });

    it('create "clientlibs" directory in component directory', function () {
        assert.file(['component-name/clientlibs']);
    });

    it('create "css" and "js" directory in "component/clientlibs" directory', function () {
        assert.file(['component-name/clientlibs/css', 'component-name/clientlibs/js']);
        assert.fileContent('component-name/clientlibs/css.txt', 'css/component-name.css');

        assert.file([
            'component-name/clientlibs/js/Model.js',
            'component-name/clientlibs/js/Collection.js',
            'component-name/clientlibs/js/View.js',
            'component-name/clientlibs/js/CollectionView.js'
        ]);
    });

    it('create ".content.xml" in "component/clientlibs" directory', function () {
        assert.file(['component-name/clientlibs/.content.xml']);
    });

    it('create "css.txt" in "component/clientlibs" directory', function () {
        assert.file(['component-name/clientlibs/css.txt']);
        assert.fileContent('component-name/clientlibs/css.txt', 'css/component-name.css');
    });

    it('create "js.txt" in "component/clientlibs" directory', function () {
        var jsTxt = [
            'js/Model.js',
            'js/Collection.js',
            'js/View.js',
            'js/CollectionView.js'
        ].join('\n');

        assert.file(['component-name/clientlibs/js.txt']);
        assert.fileContent('component-name/clientlibs/js.txt', jsTxt);
    });
});