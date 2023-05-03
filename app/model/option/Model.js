/**
 * Model representing a Model object
 */
Ext.define('Compare.model.option.Model', {
    extend: 'Compare.model.option.Base',
    idProperty: 'ModelID',
    fields: [
        // id field
        {
            name: 'ModelID',
            type: 'int',
            useNull : true
        },
        // relational properties
        {
            name: 'Make',
            type: 'auto'
        },
        // decorated properties
        {
            name: '_Make',
            type: 'string',
            persist: false
        }
    ] 
});