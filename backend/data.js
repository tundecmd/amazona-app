import bcrypt from 'bcryptjs';

export const data = {
    users: [
        {
            name: 'Basir',
            email: 'basir@example.com',
            password: bcrypt.hashAsync('1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'john@example.com',
            password: bcrypt.hashAsync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/img/p1.jpg',
            price: 120,
            brand: 'Nike',
            countInStock: 10,
            rating: 4.8,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/img/p2.jpg',
            price: 100,
            brand: 'Adidas',
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/img/p3.jpg',
            price: 220,
            brand: 'Lacoste',
            countInStock: 0,
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            _id: '4',
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/img/p4.jpg',
            price: 78,
            brand: 'Nike',
            countInStock: 15,
            rating: 4.2,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '5',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/img/p5.jpg',
            price: 65,
            brand: 'Puma',
            countInStock: 5,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '6',
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/img/p6.jpg',
            price: 120,
            brand: 'Adidas',
            countInStock: 12,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
    ]
}