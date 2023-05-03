/**
 * {@link Ext.data.Model} for Atelier Sales object
 */
Ext.define('Compare.model.dashboard.Atelier', {
    extend: 'Ext.data.Model',
    fields: [
        // non-relational properties
        //  stockenattente,libsite// stockenattente libsite
        {
            name: 'stockenattente',
            type: 'float',
            persist: false
        },
        {
            name: 'libsite',
            type: 'string',
            persist: false
        },
        {
            name: 'stockretard',
            type: 'float',
            persist: false
        },
        {
            name: 'typesite',
            type: 'string',
            persist: false
        },
        {
            name: 'stocksite',
            type: 'float',
            persist: false
        },
        {
            name: 'stockenvoie',
            type: 'float',
            persist: false
        },
        // {
        //     name: 'Atelier',
        //     type: 'string',
        //     //mapping: 0,
        //     persist: false
        // },
        // {
        //     name: 'Model',
        //     type: 'string',
        //     //mapping: 1,
        //     persist: false
        // },
        // {
        //     name: 'TotalSales',
        //     type: 'int',
        //     persist: false,
        //    // mapping: 2
        // }
    ]
});