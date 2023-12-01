import { useEffect } from 'react';
import { useGetListCourses } from '../../services/courseServices';
import Link from 'next/link';
import Course from './Course';

const ListCourses = () => {
    const { getListCourses, listCourses } = useGetListCourses();

    useEffect(() => {
        getListCourses();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="w-auto">
                    <h2 className="text-lg text-gray-600">New Classes</h2>
                    <h3 className="text-xl text-gray-900">
                        Summer <span className="text-teal-400">Productive</span>
                    </h3>
                </div>
                <div className="w-auto">
                    <Link
                        href="/courses"
                        className="text-sm text-gray-600 hover:underline"
                    >
                        View All Course
                    </Link>
                </div>
            </div>
            <div className="-mx-4 mt-6 flex flex-wrap items-center justify-start">
                {listCourses.length > 0 ? (
                    listCourses.map((course, key) => (
                        <Course key={key} data={course} />
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
export default ListCourses;
