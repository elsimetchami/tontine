/**
 * Model representing a Personne object
 */
Ext.define('Compare.model.Personne', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        // `id` int(10) UNSIGNED NOT NULL,
                    // `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    // `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    // `date_naissance` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    // `date_d_entree` date NOT NULL,
                    // `telephone` int(11) NOT NULL,
                    // `sexe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    // `situation_matrimoniale
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'nom',
            type: 'string',
            // useNull : true
        },
        // simple values
        {
            name: 'prenom',
            type: 'string'
        },
        {
            name: 'date_naissance',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'date_d_entree',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'telephone',
            type: 'int'
        },
        {
            name: 'sexe',
            type: 'string'
        },
        {
            name: 'situation_matrimoniale',
            type: 'string'
        }
        // date_debut
        // {
        //     name: 'date_debut',
        //     type: 'date',
        //     dateWriteFormat: 'Y-m-d'
        // },
        // {
        //     name: 'date_fin',
        //     type: 'date',
        //     dateWriteFormat: 'Y-m-d'
        // },
    ] 
});