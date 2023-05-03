Ext.define('Compare.view.dashboard.atelier.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dashboard.atelier.list',
    requires: [
        'Ext.grid.feature.Summary',
        'Ext.grid.feature.Grouping',
    ],
    
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            store: {
                type: 'dashboard.atelier'
            },
            features: [
                {
                    ftype: 'summary'
                },
                {
				    ftype: 'grouping'
				},
            ],
            // stockenvoie,libsite
            columns: {
                items: [
                    {
                        text: 'site',
                        dataIndex: 'libsite',
                        flex:1,
                        sortable: false
                    },
                    
                    {
                        text: 'balises envoyés',
                        dataIndex: 'stockenvoie',
                        summaryType: 'sum',
                        summaryRenderer: function( value, summaryData, dataIndex ) {
                            return '<strong> envoyes: ' + ( value ) + '</strong>'; 
                        },
                        flex: 1,
                        sortable: false
                    },
                    {
                        text: 'balises en attentes',
                        dataIndex: 'stockenattente',
                        flex: 1,
                        sortable: false,
                        summaryType: 'sum',
                        summaryRenderer: function( value, summaryData, dataIndex ) {
                            return '<strong>en attente: ' + ( value ) + '</strong>'; 
                        },

                    },
                     {
                            text: ' balises en retard',
                            dataIndex: 'stockretard',
                            flex: 1,
                            sortable: false,
                            summaryType: 'sum',
                        summaryRenderer: function( value, summaryData, dataIndex ) {
                            return '<strong> retard: ' + ( value ) + '</strong>'; 
                        },

                    }
                ]
            }
        });
        me.callParent( arguments );
    }
});