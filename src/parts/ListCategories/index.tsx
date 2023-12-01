import BusinessDevelopmentSvg from '../../../public/images/icon-business-development.svg';
import ContentWriterSvg from '../../../public/images/icon-content-writer.svg';
import ProductAdvertisementSvg from '../../../public/images/icon-product-advertisement.svg';
import CustomerRelationshipSvg from '../../../public/images/icon-customer-relationship.svg';
import GameDevelopmentSvg from '../../../public/images/icon-game-development.svg';
import TravelGuidanceSvg from '../../../public/images/icon-travel-guidance.svg';
import { ReactNode } from 'react';
import Category from './Category';

const ListCategories = () => {
    const categories: {
        imageData: ReactNode;
        name: string;
        total: number;
    }[] = [
        {
            imageData: <BusinessDevelopmentSvg />,
            name: 'Business Development',
            total: 12493,
        },
        {
            imageData: <ContentWriterSvg />,
            name: 'Content Writer',
            total: 839,
        },
        {
            imageData: <ProductAdvertisementSvg />,
            name: 'Product Advertisement',
            total: 478,
        },
        {
            imageData: <CustomerRelationshipSvg />,
            name: 'Customer Relationship',
            total: 553,
        },
        {
            imageData: <GameDevelopmentSvg />,
            name: 'Game Development',
            total: 7309,
        },
        {
            imageData: <TravelGuidanceSvg />,
            name: 'Travel Guidance',
            total: 73,
        },
    ];

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="w-auto">
                    <h2 className="text-lg text-gray-600">Category</h2>
                    <h3 className="text-xl text-gray-900">
                        Explore & <span className="text-teal-400">Learn</span>
                    </h3>
                </div>
            </div>
            <div className="-mx-4 mt-6 flex flex-wrap items-center justify-start">
                {categories.length > 0 ? (
                    categories.map((category, key) => (
                        <Category key={key} data={category} />
                    ))
                ) : (
                    <div className="w-full py-12 text-center">
                        No Item Found
                    </div>
                )}
            </div>
        </>
    );
};
export default ListCategories;
