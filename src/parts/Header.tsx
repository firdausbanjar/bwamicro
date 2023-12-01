import Image from 'next/image';
import LogoSvg from '../../public/images/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import config from '../configs/config';

type HeaderPropsT = {
    onLight: boolean;
};

const Header = ({ onLight }: HeaderPropsT) => {
    const router = useRouter();

    const linkColor: string = onLight ? 'text-gray-900' : 'text-white';
    const linkCTA =
        router.pathname.indexOf('/login') > -1
            ? `${config.app.memberPageUrl}/register`
            : `${config.app.memberPageUrl}/login`;
    const textCTA = router.pathname.indexOf('/login') > -1 ? 'Daftar' : 'Masuk';

    return (
        <header className="flex items-center justify-between">
            <div style={{ height: 54 }}>
                <LogoSvg className="fill-white" />
            </div>
            <ul className="flex">
                <li>
                    <Link
                        href="/"
                        className={`${linkColor} px-6 py-3 text-lg font-medium hover:text-teal-500`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className={`${linkColor} px-6 py-3 text-lg font-medium hover:text-teal-500`}
                    >
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className={`${linkColor} px-6 py-3 text-lg font-medium hover:text-teal-500`}
                    >
                        Features
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className={`${linkColor} px-6 py-3 text-lg font-medium hover:text-teal-500`}
                    >
                        Story
                    </Link>
                </li>
                <li>
                    <a
                        href={linkCTA}
                        target="_blank"
                        rel="noopener noereferrer"
                        className="ml-6 bg-indigo-700 px-6 py-3 text-lg font-medium text-white transition-all duration-200 hover:bg-indigo-800 hover:text-teal-500"
                    >
                        {textCTA}
                    </a>
                </li>
            </ul>
        </header>
    );
};
export default Header;
