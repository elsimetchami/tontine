/**
 * Model representing a Detail_session object
 */
Ext.define('Compare.model.Detail_session', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        // [{"id":1,"id_personnes_sess":1,"role":"president","nom":"ANA","prenom":"anabel"}]
        // `id` int(10) UNSIGNED NOT NULL,
        // `id_personnes_sess` int(10) UNSIGNED NOT NULL,
        // `id_sessions_det` int(10) UNSIGNED NOT NULL,
        // `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        // `created_at` timestamp NULL DEFAULT NULL,
        // `updated_at`
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // simple values
        {
            name: 'id_personnes_sess',
            type: 'int'
        },
        {
            name: 'id_sessions_det',
            type: 'int'
        },
        {
            name: 'role',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'code_session',
            type: 'string'
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
        // {
        //     name: 'date_creation',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
    ] 
});