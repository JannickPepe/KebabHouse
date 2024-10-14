/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { databases } from '../lib/appwrite'; // Import Appwrite client

interface FoodItem {
    $id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    pricediscount?: number;
}

interface FoodListProps {
    collectionId: string;
}

const FoodList: React.FC<FoodListProps> = ({ collectionId }) => {
    const [items, setItems] = useState<FoodItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
        try {
            const response = await databases.listDocuments(
                process.env.NEXT_APPWRITE_DATABASE_ID, // Replace with your Database ID
            collectionId
            );
            setItems(response.documents);
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
        };
        fetchItems();
    }, [collectionId]);

    if (loading) return <div className='text-center z-50 text-lg text-red-500'>Loading...</div>;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 md:mt-10 max-w-7xl mx-auto">
                {items.map(item => (
                    <div key={item.$id} className="text-center">
                    <img src={item.image} alt={item.title} className="px-10 lg:px-0" />
                    <h3 className="text-xl font-semibold mt-2 text-green-600">{item.title}</h3>
                    <p className='py-1'>{item.description}</p>
                    <p className="text-lg font-bold">{item.price}kr</p>
                    {item.pricediscount && (
                        <p className="text-sm text-red-500">Discount: ${item.pricediscount}</p>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;