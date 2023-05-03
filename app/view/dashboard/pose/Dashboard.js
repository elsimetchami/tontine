Ext.define('Compare.view.dashboard.pose.Dashboard', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.dashboard.pose.dashboard',
	layout: 'hbox',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [
				
				{
					// region: 'center',
					flex:1,
					split: true,
					itemId:'chart1',
					xtype: 'dashboard.pose.list',
				},
				{
					// region: 'south',
					flex:1,
					xtype: 'dashboard.pose.chart',
				},
				{
					// region: 'south',
					flex:1,
					itemId:'list2',
					xtype: 'dashboard.pose.list',
				}
					
					],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'top',
					ui: 'footer',
					items: [
						{
							xtype: 'button',
							iconCls: 'icon_refresh',
							text: 'Reload Data',
							itemId: 'refresh'
						}
					]
				}
			]
		});
		me.callParent();
	}
})