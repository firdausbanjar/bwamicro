import Link from 'next/link';
import { FormEventHandler } from 'react';

const Footer = () => {
    const companies = ['API Developer', 'Career', 'Our Story', 'New Soon'];
    const students = [
        'Get Scholarship',
        'Our Pathskills',
        'All Features',
        'Refund Policy',
    ];
    const touchUs = [
        'Micro Centre',
        'Alleysi Block X No. 12',
        'Jakarta Selatan, Indonesia',
        '+21 2020 5555',
    ];

    const submit = () => {};

    return (
        <footer className="container mx-auto">
            <div className="flex justify-between">
                <div className="w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        {companies.map((company, key) => (
                            <li key={key} className="mt-2">
                                <Link
                                    href="/"
                                    className="text-indigo-500 hover:text-teal-500 hover:underline"
                                >
                                    {company}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Student</h6>
                    <ul className="mt-4">
                        {students.map((student, key) => (
                            <li key={key} className="mt-2">
                                <Link
                                    href="/"
                                    className="text-indigo-500 hover:text-teal-500 hover:underline"
                                >
                                    {student}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Touch Us</h6>
                    <p className="mt-4 leading-loose text-indigo-500">
                        Micro Centre <br />
                        Alleysi Block X No. 12 <br />
                        Jakarta Selatan, Indonesia <br />
                        +21 2020 5555
                    </p>
                </div>
                <div className="w-2/6">
                    <h6 className="text-white">Promotion</h6>
                    <p className="mt-4 text-indigo-500">
                        Submit your email for new updates
                    </p>
                    <form onSubmit={submit} className="mt-6">
                        <input
                            type="email"
                            className="border-0 bg-white px-6 py-3 focus:outline-none"
                            placeholder="Your email address"
                        />
                        <button className="bg-orange-500 px-6 py-3 text-white shadow-inner transition-all duration-200 hover:bg-orange-400 focus:outline-none">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                <p className="text-indigo-500">
                    2023 Copyright Micro by BuildWith Angga. All Rights
                    Reservesed
                </p>
            </div>
        </footer>
    );
};
export default Footer;
