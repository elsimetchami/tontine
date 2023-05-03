/**
 * Main panel for displaying {@link Compare.model.option.Feature} options for {@link Compare.model.Car} records
 */
Ext.define('Compare.view.car.edit.tab.Feature', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.car.edit.tab.feature',
	layout: 'form',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'itemselectorfield',
					name: 'Features',
		            anchor: '100%',
		            store: {
		            	type: 'option.feature'
		            },
		            displayField: 'LongName',
		            valueField: 'FeatureID',
		            allowBlank: false,
		            msgTarget: 'side',
		            fromTitle: 'Available Features',
		            toTitle: 'Selected Features',
		            buttons: [ 'add', 'remove' ],
		            delimiter: null
				}
			]
		});
		me.callParent( arguments );
	}
});