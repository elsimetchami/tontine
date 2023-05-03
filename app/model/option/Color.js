/**
 * Model representing a Color object
 */
Ext.define('Compare.model.option.Color', {
   extend: 'Compare.model.option.Base',
   idProperty: 'ColorID',
   fields: [
       // id field
       {
           name: 'ColorID',
           type: 'int',
           useNull : true
       }
   ] 
});