export type CourseT = {
    id: number;
    name: string;
    certificate: number;
    thumbnail: string;
    type: string;
    status: string;
    price: number;
    level: string;
    description: string;
    mentor_id: number;
};

export const newCourse = (data: any): CourseT => ({
    id: data.id,
    name: data.name,
    certificate: data.certificate,
    thumbnail: data.thumbnail,
    type: data.type,
    status: data.status,
    price: data.price,
    level: data.level,
    description: data.description,
    mentor_id: data.mentor_id,
});

type newListCoursesT = (data: any[]) => CourseT[];
export const newListCourses: newListCoursesT = (data) => data.map(newCourse);
