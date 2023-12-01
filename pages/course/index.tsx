import { useEffect } from 'react';
import { useGetListCourses } from '../../src/services/courseServices';
import Link from 'next/link';

const Course = () => {
    const { listCourses, getListCourses } = useGetListCourses();

    useEffect(() => {
        getListCourses();
    }, [getListCourses]);

    return (
        <div className="container mx-auto">
            <h1>Hello this course page</h1>
            <ol>
                {listCourses.map((course, key) => (
                    <li key={key}>{course.name}</li>
                ))}
            </ol>
            <Link href="/">
                <button className="mt-2 rounded-sm bg-blue-700 p-3 text-white">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default Course;
