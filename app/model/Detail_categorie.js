/**
 * Model representing a Detail_categorie object
 */
Ext.define('Compare.model.Detail_categorie', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
//         `id` int(10) UNSIGNED NOT NULL,
//   `id_personnes_det_c` int(10) UNSIGNED NOT NULL,
//   `id_categories_det_c` int(10) UNSIGNED NOT NULL,
//   `date_d_entree_det_c` date NOT NULL,
//   `date_passage` date NOT NULL,
//   `numero_d_ordre` int(11) NOT NULL,
//   `created_at` timestamp NULL DEFAULT NULL,
//   `updated_at`
        // [{"id":2,"id_categories_det_c":1,"id_personnes_det_c":1,"date_d_entree_det_c":"2000-02-02",
        // "date_passage":"2000-05-02","numero_d_ordre":3,"nom":"ANA","prenom":"anabel"}]
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // simple values
        // {
        //     name: 'id_personnes_det_c',
        //     type: 'int'
        // },
        {
            name: 'id_detail_sessions_det_c',
            type: 'int'
        },
        {
            name: 'id_categories_det_c',
            type: 'int'
        },
        {
            name: 'date_d_entree_det_c',
            type: 'string'
        },
        {
            name: 'numero_d_ordre',
            type: 'int'
        },
        
        
        {
            name: 'date_passage',
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
        // {
        //     name: 'date_creation',
        //     type: 'string',
        //     // dateWriteFormat: 'Y-m-d'
        // },
    ] 
});