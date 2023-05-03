Ext.define('Compare.view.dashboard.pose.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dashboard.pose.list',
    requires: [
		'Ext.grid.feature.Grouping',
		'Ext.grid.feature.Summary'
	],
	// stockenattente libsite
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            store: {
                type: 'dashboard.pose'
            },
            features: [
				{
				    ftype: 'grouping'
				},
				{
				    ftype: 'summary'
				}
			],
			// stockenattente,libsite
            columns: {
                items: [
					
					{
					    text: 'libsite',
					    dataIndex: 'libsite',
					    
					    flex: 1
					},
					{
					    text: 'Stocks',
					    dataIndex: 'stocksite',
						flex: 1
					},
					{
					    text: 'envoi',
					    dataIndex: 'stockenvoie',
					    flex: 1
					},
					{
					    text: 'attentes',
					    dataIndex: 'stockenattente',
						flex: 1
					},
				]
            }
        });
        me.callParent(arguments);
    }
});