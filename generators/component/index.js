/**
 * Created by bohdan on 10/7/15.
 */
var generators = require('yeoman-generator');

function toContructorName(str) {
    var firstLetter = str.substr(0, 1).toUpperCase();
    var restOfString = str.substring(1).replace(/(\-[a-z])/g, function($1){
        return $1.toUpperCase().replace('-','');
    });

    return firstLetter + restOfString;
}

module.exports = generators.NamedBase.extend({
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.NamedBase.apply(this, arguments);

        this.componentName = this.arguments[0];
        // Next, add your custom code
        //this.option('view-model-only'); // This method adds support for a `--view-model-only` flag
    },

    _copyTplFileWithCompName: function (tmpFileName) {
        this.fs.copyTpl(this.templatePath(tmpFileName), this.destinationPath(this.componentName, tmpFileName), {componentName: this.componentName});
    },

    _copyJsFile: function (path) {
        this.fs.copyTpl(this.templatePath(path),
            this.destinationPath(this.componentName, path),
            {
                constructorName: toContructorName(this.componentName),
                componentName: this.componentName
            });
    },

    createBackboneModule: function () {
        var justCopyFileWithCompNameCtx = [
            '.content.xml',
            'dialog.xml',
            '_cq_editConfig.xml',
            'clientlibs/.content.xml',
            'clientlibs/css.txt',
            'clientlibs/js.txt'
        ];

        var jsFiles = [
            'clientlibs/js/Model.js',
            'clientlibs/js/Collection.js',
            'clientlibs/js/View.js',
            'clientlibs/js/CollectionView.js'
        ];

        justCopyFileWithCompNameCtx.forEach(this._copyTplFileWithCompName.bind(this));

        this.fs.copyTpl(this.templatePath('component.html'),
                        this.destinationPath(this.componentName, this.componentName + '.html'),
                        {componentName: this.componentName});
        this.fs.copyTpl(this.templatePath('clientlibs/css/main.css'),
                        this.destinationPath(this.componentName, 'clientlibs/css/' + this.componentName + '.css'),
                        {componentName: this.componentName});


        jsFiles.forEach(this._copyJsFile.bind(this));
    }
});