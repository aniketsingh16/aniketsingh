export const schemaTypes = [
    {
      title: "All Products",
      name: "allProducts",
      type: "document",
      fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'number'
        },
        {
            name: 'item',
            title: 'Item',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'imageURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name:'shortdescription',
            title:'Shortdescription',
            type:'text'
        },
        {
            name:'price',
            title:'Price',
            type:'number'
        },
        {
            name:'rating',
            title:'Rating',
            type:'number'
        },
        {
            name:'instock',
            title:'Instock',
            type:'boolean'
        },
        {
            name:'featured',
            title:'Featured',
            type:'boolean'
        }
      ]
    },

    {
        title: "About us",
        name: "aboutus",
        type: "document",
        fields: [
            {
                name: 'info',
                title: 'Info',
                type: 'string'
            },
        ]
      },

      {
        title: "Reviews",
        name: "reviews",
        type: "document",
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            },
            {
                name: 'date',
                title: 'Date',
                type: 'datetime'
            },
            {
                name: 'rating',
                title: 'Rating',
                type: 'number'
            },
            {
                name: 'text',
                title: 'Text',
                type: 'text'
            },
        ]
      },

    
  ]