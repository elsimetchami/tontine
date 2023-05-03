/**
 * Model representing a Parametre object
 */
Ext.define('Compare.model.pret.Parametre', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
       
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        
        {
            name: 'id_sessions_p_p',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_categories_p_p',
            type: 'int',
            useNull : true
        },
        
        // simple values
        {
            name: 'taux_interet',
            type: 'string'
        },
        {
            name: 'taux_penalite',
            type: 'string'
        },
        {
            name: 'montant_max_p_p',
            type: 'string'
        },
        
        {
            name: 'montant_cat',
            type: 'string'
        },
        {
            name: 'montant_cat',
            type: 'string'
        },
        {
            name: 'lib_cat',
            type: 'string'
        },
        {
            name: 'lib_session',
            type: 'string'
        },
        {
            name: 'code_categorie',
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