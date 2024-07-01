import axios from "axios";
import React, { useEffect, useState } from "react";
import "./api.css";

export default function ApiTest() {
    const [data, setdata] = useState([]);
    const [categories, setcategories] = useState(["All"])
    const [dropdown, setdropdown] = useState(null)

    useEffect(() => {

        getProducts();
        getCategory();

    }, []);

    const getProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response);
                setdata(response.data)

            })
            .catch((error) => {
                console.error(error);
            });
    }
    const getCategory = () => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) => {
                console.log(response);
                let categories_2 = [...categories, ...response.data]
                // response.data.map((item) => (
                //     categories_2.push(item)
                // ))
                setcategories(categories_2)
                console.log(categories_2)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const handleCategory = (value) => {
        axios
            .get(`https://fakestoreapi.com/products/category/${value}`)
            .then((response) => {
                console.log(response);
                setdata(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const deletHandle = (id, index) => {

        console.log(id)
        let data_2 = [...data]
        data_2.splice(index, 1);
        setdata(data_2)

        // axios
        //     .delete(`https://fakestoreapi.com/products/${id}`)
        //     .then((response) => {
        //         console.log(response);
        //         getProducts()


        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    }
    return (
        <div className="mainWrapper">

            <div class="dropdown">
                <select name="cars" id="cars" onChange={(e) => (
                    e.target.value === "All" ? getProducts() : handleCategory(e.target.value)


                )} >

                    {categories.map((item) => (

                        <option value={item} >{item}</option>
                    ))}
                </select>
            </div>

            <div className="mainContainer">
                {data.map((item, index) => (
                    <div className="productCard">
                        <img src={item.image} width={100} height={100} />
                        <h3>{item.title}</h3>
                        <p>Rs. {item.price}</p>
                        <p>Type : {item.category}</p>
                        <button onClick={() => deletHandle(item.id, index)}>delete</button>
                    </div>
                )
                )}
            </div>
        </div>
    );
}
