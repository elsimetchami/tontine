/**
 * Model representing a Position object
 */
Ext.define('Compare.model.option.Position', {
   extend: 'Compare.model.option.Base',
   idProperty: 'PositionID',
   fields: [
       // id field
       {
           name: 'PositionID',
           type: 'int',
           useNull : true
       }
   ] 
});