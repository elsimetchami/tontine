/**
 * Store for managing categorie
 */
Ext.define('Compare.store.Categorie', {
	extend: 'Compare.store.Base',
    alias: 'store.categorie',
    requires: [
        'Compare.model.Categorie'
    ],
    // groupField: 'code_session',
    // remoteSort: true,
    //  sorters: [{
    //     property: 'lib_cat',
    //     direction:'ASC'
    // }],
    // restPath: '/api/categorie',
    restPath: urllink+'api/listcategorie',
    storeId: 'Categorie',
    model: 'Compare.model.Categorie'
});