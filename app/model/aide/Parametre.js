/**
 * Model representing a Parametre object
 */
Ext.define('Compare.model.aide.Parametre', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_sessions_p_a',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_categories_p_a',
            type: 'int',
            useNull : true
        },
        // "id":1,"id_sessions_p_a":"1","id_categories_p_a":1,"montant_p_a":20000,"type_p_a":"mariage","lib_session":"première session", "lib_cat":"première catégorie","montant_cat":5000
        
        // simple values
        {
            name: 'montant_p_a',
            type: 'string'
        },
        {
            name: 'type_p_a',
            type: 'string'
        },
        {
            name: 'lib_cat',
            type: 'string'
        },
        {
            name: 'montant_cat',
            type: 'string'
        },
        {
            name: 'lib_session',
            type: 'string'
        },
        // date_debut
        // {
        //     name: 'date_debut',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
        // {
        //     name: 'date_fin',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
    ] 
});