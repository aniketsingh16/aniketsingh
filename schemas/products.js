export default {
    name: ' products',
    title: 'Products',
    type: 'document',
    fields: [
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

}