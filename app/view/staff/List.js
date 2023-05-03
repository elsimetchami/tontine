/**
 * Grid for displaying Staff details
 */
Ext.define('Compare.view.staff.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.staff.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
    //    'Sandbox.view.SearchTrigger'
       
    ],
    title: 'Manage Staff Members',
    iconCls: 'icon_user',
    
    // store: 'Staff',
    renderTo: Ext.getBody(),
    store: Ext.data.StoreManager.lookup('Staff'),
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            selType: 'checkboxmodel',
    columns: [
      
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
        //     columns: {
        //         defaults: {},
        //         items: [
        //             {
        //                 xtype: 'rownumberer'                   
        //             },
                    
    
        // // { text: 'Name', dataIndex: 'name' },
        // // { text: 'Email', dataIndex: 'email', flex: 1 },
        // // { text: 'Phone', dataIndex: 'phone',flex: 1 }
    
    
    
        //             // {
        //             //     text: 'Id',
        //             //     dataIndex: 'id',
        //             //     // flex:1,
        //             // },
        //             // {
        //             //     text: 'Username',
        //             //     dataIndex: 'username',
        //             //     flex:1,
        //             //     // renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
        //             //     //     return value + ', ' + record.get( 'FirstName' )
        //             // },
        //             // // },
        //             // {
        //             //     text: 'Phone',
        //             //     dataIndex: 'phone',
        //             //     flex:1,
        //             // },
        //             // {
        //             //     text: 'Email',
        //             //     dataIndex: 'email',
        //             //     flex:1,                        // hidden: true
        //             // },
        //             // {
        //             //     text: 'website',
        //             //     dataIndex: 'website',
        //             //     flex:1,                   
        //             //  },
                   
        //         ]
        //     },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Add Staff Member'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'search',
                            iconCls: 'icon_search',
                            emptyText:'search',
                            text: 'search Staff Member'
                        },
        {
            xtype: 'combo',
            // iconCls: 'icon_search',
            store: {type:'day'},
            displayField: 'value',
            typeAhead: false,
            hideLabel: true,
            hideTrigger:true,
            anchor: '100%',

            listConfig: {
                loadingText: 'Searching...',
                emptyText: 'No matching posts found.',

                // Custom rendering template for each item
                // getInnerTpl: function() {
                //     return '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">' +
                //         '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{title}</h3>' +
                //         '{excerpt}' +
                //     '</a>';
                // }
            },
            pageSize: 10
        },
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent( arguments );
    }
});