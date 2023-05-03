/**
 * Model representing a Make object
 */
Ext.define('Compare.model.option.Make', {
   extend: 'Compare.model.option.Base',
   idProperty: 'MakeID',
   fields: [
       // id field
       {
           name: 'MakeID',
           type: 'int',
           useNull : true
       }
   ] 
});