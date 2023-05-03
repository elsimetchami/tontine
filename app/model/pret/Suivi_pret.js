/**
 * Model representing a Suivi_pret object
 */
Ext.define('Compare.model.pret.Suivi_pret', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // `id` int(10) UNSIGNED NOT NULL,
        // `id_prets_suivi` int(10) UNSIGNED NOT NULL,
        // `id_personnes_s_p` int(10) UNSIGNED NOT NULL,
        // `date_suivi` date NOT NULL,
        // `date_paiement` date NOT NULL,
        // `montant_s_p` double(8,2) NOT NULL,
        // `interet_s_p` double(8,2) NOT NULL,
        // `statut` 
        // {"data":[{"id":3,"id_prets_suivi":2,"id_personnes_s_p":3,"date_suivi":"2000-06-06","date_paiement":"2000-06-06"," montant_s_p":7500,"interet_s_p":150,"statut":"en cours","lib_p":"pour maladie","montant_p":15000,"montant_interet_p":300,"nom":"ana2"," prenom":"anabel2"}],"count":1,"success":true}

//         `id`
//   `id_prets_suivi`
//   `id_personnes_s_p`
//   `date_suivi`
//   `date_paiement`
//   `montant_s_p`
//   `interet_s_p`
//   `statut`
// `id` int(10) UNSIGNED NOT NULL,
// `id_prets_suivi` int(10) UNSIGNED NOT NULL,
// `id_personnes_s_p` int(10) UNSIGNED NOT NULL,
// `date_suivi` date NOT NULL,
// `date_paiement` date NOT NULL,
// `montant_s_p` double(8,2) NOT NULL,
// `interet_s_p` double(8,2) NOT NULL,
// `statut` 
        {
            name: 'id_sessions_a',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_prets_suivi',
            type: 'int',
            useNull : true
        },
        {
            name: 'id_personnes_s_p',
            type: 'int',
            useNull : true
        },
        
        // simple values
        {
            name: 'date_suivi',
            type: 'string'
        },
        {
            name: 'date_paiement',
            type: 'string'
        },
        {
            name: 'montant_s_p',
            type: 'string'
        },
        {
            name: 'interet_s_p',
            type: 'string'
        },
        {
            name: 'statut',
            type: 'string'
        },
        {
            name: 'lib_p',
            type: 'string'
        },
        // {
        //     name: 'montant_p',
        //     type: 'string'
        // },
        // {
        //     name: 'montant_interet_p',
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