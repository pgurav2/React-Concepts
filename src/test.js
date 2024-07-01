import React from 'react'

export default function Test() {

    const data = {
        category1: {
            name: "Category 1",
            subcategories: {
                subcategory1: {
                    name: "Subcategory 1",
                    items: [
                        { id: 1, name: "Item 1", price: 10 },
                        { id: 2, name: "Item 2", price: 15 }
                    ]
                },
                subcategory2: {
                    name: "Subcategory 2",
                    items: [
                        { id: 3, name: "Item 3", price: 20 },
                        { id: 4, name: "Item 4", price: 25 }
                    ]
                }
            }
        },
        category2: {
            name: "Category 2",
            subcategories: {
                subcategory3: {
                    name: "Subcategory 3",
                    items: [
                        { id: 5, name: "Item 5", price: 30 },
                        { id: 6, name: "Item 6", price: 35 }
                    ]
                },
                subcategory4: {
                    name: "Subcategory 4",
                    items: [
                        { id: 7, name: "Item 7", price: 40 },
                        { id: 8, name: "Item 8", price: 45 }
                    ]
                }
            }
        }
    };


    return (
        <div>
            {
                Object.values(data).map((item) => (
                    <div>
                        <p>{item.name}</p>
                        {Object.values(item.subcategories).map((item1) => (
                            // console.log(item1)
                            <div>
                                <p>{item1.name}</p>
                                {item1.items.map((item2)=>(
                                    <div>
                                        <p>{item2.name}- ${item2.price}</p>
                                        <p></p>
                                    </div>
                                ))}
                            </div>
                           
                        ))}
                    </div>
                ))

            }
        </div>
    )
}
