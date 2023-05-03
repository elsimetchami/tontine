/**
 * {@link Ext.data.Model} for Pose Sales object
 */
Ext.define('Compare.model.dashboard.Pose', {
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