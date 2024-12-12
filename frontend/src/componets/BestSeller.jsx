import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
        console.log(bestProduct); // Log filtered products
    }, [products]); // Add products as a dependency

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST '} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    laborum unde suscipit, sequi eveniet, eligendi fugit veritatis magnam
                    facere corrupti quisquam iusto cum animi ipsum minima tempore a dolor
                    quas.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestseller.length > 0 ? (
                    bestseller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center">No best sellers available.</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;
