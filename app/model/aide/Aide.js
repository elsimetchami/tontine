/**
 * Model representing a Aide object
 */
Ext.define('Compare.model.aide.Aide', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_personnes_a',
            type: 'int',
            useNull : true
        },
        // simple values
        {
            name: 'id_param_aides',
            type: 'int'
        },
                    
            // {"data":[{"id":1,"id_personnes_a":1,"id_param_aides":1,"id_sessions_a":1,"lib_a":"première aide",
        // "montant_a":30000,"type_a": "deces membre","date_a":"2000-10-10","lib_session":"première session","montant_p_a":20000,
        // "type_p_a":"mariage","code_categorie":"Q01","lib_cat ":"premiere categorie","nom":"ana","prenom":"anabel"}],"count":1,"success":true}
        {
            name: 'id_sessions_a',
            type: 'int'
        },{
            name: 'lib_a',
            type: 'string'
        },
        {
            name: 'montant_a',
            type: 'string'
        },
        {
            name: 'type_a',
            type: 'string'
        },
        {
            name: 'date_a',
            type: 'string'
        },
        // date_debut
        {
            name: 'lib_session',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'montant_p_a',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'type_p_a',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'code_categorie',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'lib_cat',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        // {
        //     name: 'lib_session',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
        {
            name: 'nom',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'prenom',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        
    ] 
});