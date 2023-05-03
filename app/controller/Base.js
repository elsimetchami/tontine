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
    
	SaveDataApi: function (store, obj, records, autre, form,method="POST") {

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
        console.log(obj);
        $.ajax({
            type: method,
            //method:"POST",
            // url: urllink+'api/createreunion',
            url:url,
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
DeleteDataApi: function (store, obj, records, autre, form,method="DELETE") {

    var me = this, url = store.restPath, params = [];

    Ext.MessageBox.show({
        msg: ("deleting_data"),
        progressText: ("deleting"),
        width: 300,
        wait: true,
        waitConfig: {
            interval: 50
        },
        modal: true
    });
    console.log(obj);
    $.ajax({
        type: method,
        //method:"POST",
        // url: urllink+'api/createreunion',
        url:url,
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




// updateDataApi: function (store, obj, records, autre, form,method="PUT") {

//     var me = this, url = store.restPath, params = [];

//     Ext.MessageBox.show({
//         msg: ("updating_data"),
//         progressText: ("updating"),
//         width: 300,
//         wait: true,
//         waitConfig: {
//             interval: 50
//         },
//         modal: true
//     });
//     console.log(obj);
//     $.ajax({
//         type: method,
//         //method:"POST",
//         // url: urllink+'api/createreunion',
//         url:url,
//         data: obj,
//         success: function (response) { 
//             me.showMsgValid("succes", response.data); 
//             //contentType: "application/json",s
//             Ext.MessageBox.hide();
//             store.rejectChanges();
//             store.load();
//             if(autre["win"]) autre["win"].close();
//         },
//         dataType: 'json'
//     });
//     Ext.MessageBox.hide();


// },
    // DeleteDataApi: function (store, record,obj, autre,method ="DELETE" ) {

    //     var me = this, url = store.restPath, params = [];

    //     Ext.MessageBox.show({
    //         msg: ("Deleting_data"),
    //         progressText: ("deleting"),
    //         width: 300,
    //         wait: true,
    //         waitConfig: {
    //             interval: 50
    //         },
    //         modal: true
    //     });
    //     // console.log(obj);
    //     $.ajax({
    //         type: method,
    //         method:"DELETE",
    //         url: url,
    //         // data: obj,
    //         success: function (response) { 
    //          me.showMsgValid("succes", response.data); 
    //         //contentType: "application/json",s
    //         Ext.MessageBox.hide();
    //         store.rejectChanges();
    //         store.load();
    //         if(autre["win"]) autre["win"].close();
    //     },
    //         dataType: 'json'
    //     });
    //     Ext.MessageBox.hide();

    // },
    // DeleteDataApi: function (store, record, autre,) {

    //     var me = this, url = store.restPath, params = [];

    //     Ext.MessageBox.show({
    //         msg: ("Deleting_data"),
    //         progressText: ("deleting"),
    //         width: 300,
    //         wait: true,
    //         waitConfig: {
    //             interval: 50
    //         },
    //         modal: true
    //     });
    //     // console.log(obj); 
    //     $.ajax({
    //         type: "DELETE",
    //         method:"DELETE",
    //         // id:record.data.id,
    //         url: url,
           
    //         success: function (response) { 
    //          me.showMsgValid("succes", response.data); 
    //         //contentType: "application/json",s
    //         Ext.MessageBox.hide();
    //         store.rejectChanges();
    //         store.load();
    //         // if(autre["win"]) autre["win"].close();
    //     },
    //         dataType: 'json'
    //     });
    //     Ext.MessageBox.hide();

    // },
    // LoginApi: function (obj) {

    //      var me = this, url , params = [];
    //     Ext.MessageBox.show({
    //         msg: ("connexion"),
    //         progressText: ("Conneting"),
    //         width: 300,
    //         wait: true,
    //         waitConfig: {
    //             interval: 50
    //         },
    //         modal: true
    //     });
        
    //     $.ajax({
    //         type: "POST",
    //         method:"POST",
    //         // url: url,
    //         url: urllink+'api/connexion',
    //          data: obj,
    //         success: function (response, options) { 
    //             var result = response.data;
    //             console.log("response");console.log(response.data);
    //             if(result.success){
    //                 Compare.LoggedInUser = Ext.create('compare.model.user',result.data);
    //                 Ext.globalEvents.fireEvent('aftervalidateloggedin');
    //             }
    //             else{
    //                 Ext.widget('login.window').show();
    //             }
            
      
    //         //  me.showMsgValid("succes", response.data); 
    //         // //contentType: "application/json",s
    //         // Ext.MessageBox.hide();
    //         // store.rejectChanges();
    //         // store.load();
    //         // if(autre["win"]) autre["win"].close();
    //     },
    //     failure: function(response, options){
    //         Ext.msg.alert('attention','sorry, an error occured during your request .please');
    //     },
    //         dataType: 'json'
    //     });
    //     Ext.MessageBox.hide();

    // },
    showMsgValid: function( title, text ){
        // Ext.msg.alert(title,text);
        Ext.example.msg(title,text);
    },
    load_store:function(store, obj){
        var me=this;
        store.clearFilter(this);

        store.getProxy().setExtraParam('json',Ext.encode(obj));
        store.load();
    },
    load_param:function(store, obj){
        var me=this;
        store.clearFilter(this);
//console.log(obj);
        store.getProxy().setExtraParam('json',Ext.encode(obj));
       
    },
    showmessageText: function( text ){
        Ext.example.msg('alert','{0}',text);
    }
});