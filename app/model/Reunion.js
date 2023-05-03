/**
 * Model representing a Reunion object
 */
Ext.define('Compare.model.Reunion', {
    extend: 'Compare.model.Base',    
    idProperty: 'id',
    fields: [
        // id field
//         `id` int(10) UNSIGNED NOT NULL,
//   `code_reunion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `jour` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `heure` date NOT NULL,
//   `date_creation` date NOT NULL,
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        // simple values
        {
            name: 'code_reunion',
            type: 'string'
        },
        {
            name: 'lib_reunion',
            type: 'string'
        },
        {
            name: 'jour',
            type: 'string',
            // dateWriteFormat: 'l'
        },
        {
            name: 'heure',
            type: 'string',
            // dateWriteFormat: 'H:i'
        },
        {
            name: 'date_creation',
            type: 'string',
            // dateWriteFormat: 'Y-m-d'
        },
    ] 
});