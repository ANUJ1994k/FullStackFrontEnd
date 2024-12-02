import React from 'react';
import { useForm } from 'react-hook-form';

function ProductForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('title', { required: 'Title is required' })}
                placeholder="Product Title"
            />
            {errors.title && <p>{errors.title.message}</p>}

            <input
                type="number"
                {...register('price', {
                    required: 'Price is required',
                    min: { value: 1, message: 'Price must be greater than 0' }
                })}
                placeholder="Price"
            />
            {errors.price && <p>{errors.price.message}</p>}

            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;
