/**
 * Model representing a Categorie object
 */
Ext.define('Compare.model.Categorie', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [ 
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // // simple values
      
        // "id":1,"code_categorie":"Q01","lib_cat":"premiere categorie","periodicite":"Mardi","montant_cat":5000,"code_session":"ak1 "},{"id":2,"code_categorie":"Q02","lib_cat":"deuxieme categorie","periodicite":"Jeudi","montant_cat":20000,"code_session":"J50"}, {"id":3,"code_categorie":"ak01","lib_cat":"akwa","periodicite":"Samedi","montant_cat":20000,"code_session":"J50"},{"id" :4,"code_categorie":"aka","lib_cat":"kwa","periodicite":"Mardi","montant_cat":20000,"code_session":"ak1"}],"count":4,"success":true}
        {
            name: 'id_sessions_cat',
            type: 'int',
            useNull : true
        },
        {
            name: 'code_categorie',
            type: 'string'
        },
        {
            name: 'lib_cat',
            type: 'string'
        },
        {
            name: 'periodicite',
            type: 'string'
        },
        {
            name: 'periode',
            type: 'string'
        },
        {
            name: 'montant_cat',
            type: 'string'
        },
        {
            name: 'code_session',
            type: 'string'
        },
        {
            name: 'date_debut',
            type: 'string'
        },
        {
            name: 'date_fin',
            type: 'string'
        },
        // {
        //     name: 'lib_session',
        //     type: 'string'
        // },
        
        // {
        //     name: 'jour',
        //     type: 'string',
        //     // dateWriteFormat: 'l'
        // },
        // {
        //     name: 'heure',
        //     type: 'string',
        //     // dateWriteFormat: 'H:i'
        // },
        // {
        //     name: 'date_creation',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
    ] 
});