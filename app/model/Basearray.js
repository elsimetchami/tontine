/**
 * Base {@link Ext.data.Model} from which all other models will extend
 */
 Ext.define('Compare.model.Basearray', {
    extend: 'Ext.data.Model',
    fields: [
        // non-relational properties
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'value',
            type: 'string'
        },
        {
            name: 'url'
        }
    ] 
 });