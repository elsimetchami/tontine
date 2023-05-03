/**
 * Model representing a Suivi_aide object
 */
Ext.define('Compare.model.aide.Suivi_aide', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // {"data":[{"id":1,"id_aides_s_a":1,"id_personnes_s_a":1,"date_s_a":"2000-01-16","montant_s_a":15000,"statut_s_a":"en cours de validation","id_sessions_a":1,"lib_a":"premiere aide","montant_a":30000,"type_a":"deces membre","nom":"ana","prenom":"anabel"} ],"count":1,"success":true}Texte d'origineProposer une meilleure traduction


        // `id` int(10) UNSIGNED NOT NULL,
        // `id_aides_s_a` int(10) UNSIGNED NOT NULL,
        // `date_s_a` date NOT NULL,
        // `id_personnes_s_a` int(10) UNSIGNED NOT NULL,
        // `montant_s_a` double(8,2) NOT NULL,
        // `statut_s_a`

        // `id` 
        // `id_aides_s_a`
        // `date_s_a`
        // `id_personnes_s_a`
        // `montant_s_a`
        // `statut_s_a`
        // {
        //     name: 'id_sessions_a',
        //     type: 'int',
        //     useNull : true
        // },
        {
            name: 'id_aides_s_a',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_personnes_s_a',
            type: 'int',
            useNull : true
        },
        
        // simple values
        {
            name: 'date_s_a',
            type: 'string'
        },
        {
            name: 'montant_s_a',
            type: 'string'
        },
        {
            name: 'statut_s_a',
            type: 'string'
        },
        {
            name: 'lib_a',
            type: 'string'
        },
        // {
        //     name: 'montant_a',
        //     type: 'string'
        // },
        // {
        //     name: 'type_a',
        //     type: 'string'
        // },
        {
            name: 'nom',
            type: 'string'
        },
        {
            name: 'prenom',
            type: 'string'
        },
        
        
    ] 
});