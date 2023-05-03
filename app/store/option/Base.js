/**
 * Store from which all other option stores will extend
 */
Ext.define('Compare.store.option.Base', {
    extend: 'Compare.store.Base',
    constructor: function( cfg ){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'option_Base'
        }, cfg)]);
    },
    sorters: [
        {
            property: 'LongName',
            direction: 'ASC'
        }
    ] 
})