/**
 * Model representing a Category object
 */
Ext.define('Compare.model.option.Category', {
   extend: 'Compare.model.option.Base',
   idProperty: 'CategoryID',
   fields: [
       // id field
       {
           name: 'CategoryID',
           type: 'int',
           useNull : true
       }
   ] 
});