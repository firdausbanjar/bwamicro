import { useCallback, useState } from 'react';
import {
    CourseT,
    newCourse,
    newListCourses,
} from '../serializers/courseSerializers';
import instance from '../configs/axios';

export const useGetListCourses = () => {
    const [listData, setListData] = useState<CourseT[]>([]);

    const getData = useCallback(() => {
        instance.get('/courses').then(({ data }) => {
            setListData(newListCourses(data.data));
        });
    }, []);

    return {
        listCourses: listData,
        getListCourses: getData,
    };
};
