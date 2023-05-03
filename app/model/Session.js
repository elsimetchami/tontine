/**
 * Model representing a Session object
 */
Ext.define('Compare.model.Session', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_reunions_sess',
            type: 'int',
            useNull : true
        },
        // simple values
        {
            name: 'code_reunion',
            type: 'string'
        },
        {
            name: 'code_session',
            type: 'string'
        },
        {
            name: 'lib_session',
            type: 'string'
        },
        {
            name: 'lib_reunion',
            type: 'string'
        },
        // date_debut
        {
            name: 'date_debut',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'date_fin',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
    ] 
});