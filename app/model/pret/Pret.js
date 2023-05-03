/**
 * Model representing a Pret object
 */
Ext.define('Compare.model.pret.Pret', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // `id` int(10) UNSIGNED NOT NULL,
        // `id_personnes_p` int(10) UNSIGNED NOT NULL,
        // `id_param_prets` int(10) UNSIGNED NOT NULL,
        // `id_sessions_p` int(10) UNSIGNED NOT NULL,
        // `lib_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        // `date_debut_p` date NOT NULL,
        // `date_remb_p` date NOT NULL,
        // `montant_p` double(8,2) NOT NULL,
        // `montant_interet_p` double(8,2) NOT NULL,
        // `nature` 
        // id_personnes_p` 
        //     //   `id_param_prets` 
        //     //   `id_sessions_p` 
        //     //   `lib_p` 
        //     //   `date_debut_p` 
        //     //   `date_remb_p` 
        //     //   `montant_p` 
        //     //   `montant_interet_p` 
        //     //   `nature` 
        {
            name: 'id_personnes_p',
            type: 'int',
            useNull : true
        },
        // simple values
       
        {
            name: 'id_param_prets',
            type: 'int'
        },
        {
            name: 'id_sessions_p',
            type: 'int'
        },{
            name: 'montant_interet_p',
            type: 'string'
        },
        {
            name: 'nature',
            type: 'string'
        },
        {
            name: 'taux_interet',
            type: 'string'
        },
        {
            name: 'taux_penalite',
            type: 'string'
        },
        // {"data":[{"id":2,"id_personnes_p":3,"id_param_prets":1,"id_sessions_p":1,"lib_p":"pour maladie","date_debut_p":"2000-05-05 ","montant_p":15000,"montant_interet_p":300,"nature":"pret","lib_session":"première session","taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000," code_categorie":"Q01","lib_cat":"premiere categorie","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
        // date_debut
        {
            name: 'montant_p',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        
        {
            name: 'lib_session',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'lib_p',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'code_categorie',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'date_debut_p',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'date_remb_p',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'lib_cat',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        
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