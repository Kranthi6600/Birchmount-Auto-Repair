"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuantityOfProduct from '../product-details/QuantityOfProduct';
import { CartPro } from './CartMain';

interface Props {
    product: CartPro;
    removeProduct: (id: number) => void;
}

const CartProduct: React.FC<Props> = ({ product, removeProduct }) => {
    const [quantityValue, setQuantityValue] = useState(1);
    return (
        <tr >
            <td>
                <div className="product-box">
                    <div className="img-box">
                        <Image src={product.image} width={120} alt={product.name} />
                    </div>
                    <h3>
                        <Link href={product.link}>{product.name}</Link>
                    </h3>
                </div>
            </td>

            <td>${product.price}</td>
            <td>
                <QuantityOfProduct value={quantityValue} onChange={setQuantityValue} />
            </td>
            <td>${(product?.price * quantityValue).toFixed(2)}</td>
            <td>
                <div className="cross-icon" style={{ cursor: "pointer" }} onClick={() => removeProduct(product?.id)}>
                    <i className="fas fa-times"></i>
                </div>
            </td>
        </tr>
    );
};

export default CartProduct;