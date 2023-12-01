import { CourseT } from '../../serializers/courseSerializers';
import IconPlaySvg from '../../../public/images/icon-play.svg';
import Link from 'next/link';

type CoursePropsT = {
    data: CourseT;
};

const Course = ({ data }: CoursePropsT) => {
    return (
        <div className="w-1/4 px-4">
            <div className="item relative">
                <figure className="item-image">
                    <IconPlaySvg />
                    <img
                        className="h-auto w-full"
                        src={data.thumbnail}
                        alt={data.name ?? 'Some Information'}
                    />
                </figure>
                <div className="item-meta">
                    <h4 className="text-lg text-gray-900">
                        {data.name ?? 'Course Name'}
                    </h4>
                    <h5 className="text-sm text-gray-600">
                        {data.level ?? 'Course Level'}
                    </h5>
                </div>
                <Link
                    href="/courses/[slug]"
                    as={`/courses/${data.id}`}
                    className="link-wrapped"
                >
                    Detail
                </Link>
            </div>
        </div>
    );
};
export default Course;
