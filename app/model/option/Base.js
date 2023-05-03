/**
 * Base {@link Compare.model.Base} from which all other "Option" models will extend
 */
Ext.define('Compare.model.option.Base', {
   extend: 'Compare.model.Base',
   fields: [
       // non-relational properties
       {
           name: 'LongName',
           type: 'string'
       },
       {
           name: 'ShortName',
           type: 'string'
       }
   ] 
});