/**
 * Model representing a Staff object
 */
Ext.define('Compare.model.Staff', {
    extend: 'Compare.model.Base',    
    idProperty: 'StaffID',
    fields: [
        

        // 'name', 'email', 'phone'
    
        {
            name:'name'
        },
        {
            name:'email'
        },
        {
            name:'phone'
        }

        // id field
        // {
        //     name: 'StaffID',
        //     type: 'int',
        //     useNull : true
        // },
        // // simple values
        // {
        //     name: 'FirstName',
        //     type: 'string'
        // },
        // {
        //     name: 'LastName',
        //     type: 'string'
        // },
        // {
        //     name: 'DOB',
        //     type: 'date',
        //     dateWriteFormat: 'Y-m-d'
        // },
        // {
        //     name: 'Address1',
        //     type: 'string'
        // },
        // {
        //     name: 'Address2',
        //     type: 'string'
        // },
        // {
        //     name: 'City',
        //     type: 'string'
        // },
        // {
        //     name: 'State',
        //     type: 'string'
        // },
        // {
        //     name: 'PostalCode',
        //     type: 'string'
        // },
        // {
        //     name: 'Phone',
        //     type: 'string'
        // },
        // {
        //     name: 'HireDate',
        //     type: 'date',
        //     dateWriteFormat: 'Y-m-d'
        // },
        // // relational properties
        // {
        //     name: 'Position',
        //     type: 'auto'
        // },
        // // decorated properties
        // {
        //     name: '_Position',
        //     type: 'string',
        //     persist: false
        // }
        //  {
        //     name: 'id',
        //     type: 'int',
        // },
        // {
        //     name: 'username',
        //     type: 'string',
        // },
        // {
        //     name: 'phone',
        //     type: 'int',
        // },
        // {
        //     name: 'email',
        //     type: 'string',
        // },
        // {
        //     name: 'website',
        //     type: 'string',
        // },
        
    ] 
});
// id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "ha