// @ts-check

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
module.exports = {
    entries: [{
        filePath: 'src/plop.d.ts',
        outFile: 'dist/plop.d.ts',
        libraries: {
            // /// <reference-d> libraries
            allowedTypesLibraries: [
                'node'
            ],
            // imported libraries
            importedLibraries: [
                'events'
            ],
            // inlined (bundled) libraries
            inlinedLibraries: [
                'inquirer',
                'node-plop',
                'interpret',
                'liftoff',
                'ora'
            ],
        }
    }]
};