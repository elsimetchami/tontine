/**
 * Model representing a Feature object
 */
Ext.define('Compare.model.option.Feature', {
   extend: 'Compare.model.option.Base',
   idProperty: 'FeatureID',
   fields: [
       // id field
       {
           name: 'FeatureID',
           type: 'int',
           useNull : true
       }
   ] 
});