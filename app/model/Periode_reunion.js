/**
 * Model representing a Periode_reunion object
 */
Ext.define('Compare.model.Periode_reunion', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        //`id` int(10) UNSIGNED NOT NULL,
        //   `date_jour` date NOT NULL,
        //   `id_categories_p` int(10) UNSIGNED NOT NULL,
        //   `id_beneficier` int(10) UNSIGNED NOT NULL,
        //   `periode_cotisation` date NOT NULL,
        //   `beneficier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        //   `montantp` double(8,2) NOT NULL,
        //   `created_at` timestamp NULL DEFAULT NULL,
        //   `updated_at` 
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // [{"id":1,"id_categories_p":1,"date_jour":"2000-02-04","periode_cotisation":"2000-02-04","beneficier":"ANA anabel","id_beneficier":2,
        // "montantp":2000,"code_categorie":"J50","lib_cat":"premiere categorie"}]
        // simple values
        {
            name: 'date_jour',
            type: 'string'
        },
        {
            name: 'id_categories_p',
            type: 'int'
        },
        {
            name: 'id_beneficier',
            type: 'int',
            // dateWriteFormat: 'l'
        },
        {
            name: 'periode_cotisation',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'beneficier',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'montantp',
            type: 'float',
            // dateWriteFormat: 'l'
        },
        {
            name: 'code_categorie',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'lib_cat',
            type: 'string',
            // dateWriteFormat: 'l'
        },{
            name: 'nom',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        {
            name: 'prenom',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        
    ] 
});