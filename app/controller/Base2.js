/**
    Base controller from which all others will extend
 */
Ext.define('Compare.controller.Base', {
    extend: 'Ext.app.Controller',
    /**
     * Common way to retrieve full data record from the server before performing another action
     * @param {Ext.data.Record} record
     * @param {String} scope
     * @param {Function} callbackFn
     * @param {Object} extraData
     */
    loadDetail: function( record, scope, callbackFn, extraData ) {
    	// first, reject any changes currently in the store so we don't build up an array of records to save by viewing the records
    	record.store.rejectChanges();
    	// make request for detail record
    	Ext.Ajax.request({
    		url: record.store.getProxy().url + '/' + record.internalId + '.json',
    		callback: function( options, success, response ) {
    			if( success ) {
    				// set "safe mode" so we don't get hammered with giant Ext.Error
    				data = Ext.decode( response.responseText, true );
    				record.set( data );
    				// call callback method
    				callbackFn.call( scope, record, extraData );
    			}
    		}
      	});
    },
	SaveDataApi: function (store, obj, records, autre, form) {

        var me = this, url = store.restPath, params = [];

        Ext.MessageBox.show({
            msg: ("saving_data"),
            progressText: ("saving"),
            width: 300,
            wait: true,
            waitConfig: {
                interval: 50
            },
            modal: true
        });
        
        $.ajax({
            type: "POST",
            url: url,
            data: obj,
            success: function (response) { 
            me.showMsgValid("succes", response.data); 
            //contentType: "application/json",s
            Ext.MessageBox.hide();
            store.rejectChanges();
            store.load();
            if(autre["win"]) autre["win"].close();
        },
            dataType: 'json'
        });
        Ext.MessageBox.hide();

    },
	showMsgValid: function( title, text ){
        alert(text);
        Ext.msg.alert(title,text);
        Ext.example.msg(title,text);
    },
    showmessageText: function( text ){
        Ext.example.msg('alert','{0}',text);
    }
});