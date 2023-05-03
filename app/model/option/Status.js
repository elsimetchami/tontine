/**
 * Model representing a Status object
 */
Ext.define('Compare.model.option.Status', {
   extend: 'Compare.model.option.Base',
   idProperty: 'StatusID',
   fields: [
       // id field
       {
           name: 'StatusID',
           type: 'int',
           useNull : true
       }
   ] 
});