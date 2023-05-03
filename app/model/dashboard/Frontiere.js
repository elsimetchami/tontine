/**
 * {@link Ext.data.Model} for Frontiere Sales object
 */
Ext.define('Compare.model.dashboard.Frontiere', {
    extend: 'Ext.data.Model',
    fields: [
        // non-relational properties
        // 'libsitestockenvoie
        // Nombre_de_balise,Site_depard
        {
            name: 'libsite',
            type: 'string',
            persist: false
        },
        {
            name: 'stockenvoie',
            type: 'int',
            persist: false
        },
        {
            name: 'libsite',
            type: 'string',
            persist: false
        },
        {
            name: 'stockenattente',
            type: 'float',
            persist: false
        },
        
        {
            name: 'typesite',
            type: 'string',
            persist: false
        },
        // {
        //     name: 'TotalSales',
        //     type: 'int',
        //     persist: false
        // }
    ]
});