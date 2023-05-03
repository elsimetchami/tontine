/**
 * Model representing a Detail_periode_reunion object
 */
Ext.define('Compare.model.Detail_periode_reunion', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
      
        // simple values
        {
            name: 'id_periode_reunions_det',
            type: 'int'
        },
        {
            name: 'id_personnes_det_p',
            type: 'int'
        },
        {
            name: 'id_categories_p',
            type: 'int'
        },
        {
            name: 'montant_d_p',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'date_jour',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'statut',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        
        
        {
            name: 'nom',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        {
            name: 'prenom',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        {
            name: 'beneficier',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        // {
        //     name: 'date_creation',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
    ] 
});