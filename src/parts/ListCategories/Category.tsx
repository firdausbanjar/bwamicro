import Link from 'next/link';
import { ReactNode } from 'react';
import thousandFormat from '../../helpers/thousandFormat';

type CategoryPropsT = {
    data: {
        imageData: ReactNode;
        name: string;
        total: number;
    };
};

const Category = ({ data }: CategoryPropsT) => {
    return (
        <div className="h-full w-1/6 px-4">
            <div className="card relative transition-all duration-300">
                {data.imageData}
                <div className="card-meta mt-10">
                    <h4 className="w-1/2 text-lg transition-all duration-200">
                        {data.name}
                    </h4>
                    <h5 className="mt-2 text-sm transition-all duration-500">
                        {`${thousandFormat(data.total)} Courses`}
                    </h5>
                    <Link href="/" className="link-wrapped"></Link>
                </div>
            </div>
        </div>
    );
};
export default Category;
