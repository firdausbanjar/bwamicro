import Image from 'next/image';
import config from '../configs/config';
import { useState } from 'react';

const Hero = () => {
    const [email, setEmail] = useState<string>('');

    const submit = () => {
        window.open(`${config.app.memberPageUrl}/register?email=${email}`);
    };

    return (
        <div className="flex items-center justify-between">
            <div className="w-1/2">
                <h1 className="mb-5 text-5xl font-semibold text-white">
                    <span className="text-teal-400">The New </span>
                    Way to
                    <br />
                    Achieve Good
                    <span className="text-teal-400"> Skills</span>
                </h1>
                <p className="mb-8 text-lg font-light text-white">
                    We provide tons of pathskill that you <br />
                    can choose and focus on
                </p>

                <form onSubmit={submit}>
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        className="w-1/2 border-0 bg-white px-6 py-3 focus:outline-none"
                        placeholder="Your email address"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 px-6 py-3 text-white shadow-inner transition-all duration-200 hover:bg-orange-400 focus:outline-none"
                    >
                        Daftar Now
                    </button>
                </form>
            </div>

            <div className="flex w-1/2 justify-end pr-16 pt-24">
                <div className="relative" style={{ width: 369, height: 440 }}>
                    <div
                        className="absolute right-0 -mr-6 -mt-12 border-2 border-indigo-700"
                        style={{ width: 324, height: 374 }}
                    ></div>
                    <div className="absolute -mb-8 -ml-8 h-full w-full">
                        <img
                            src="images/img-hero-mbak-alyssa-cakep.jpg"
                            alt="testimoni hero"
                        />
                    </div>
                    <div
                        className="absolute z-10 mt-24 bg-white px-4 py-3"
                        style={{ transform: 'translateX(-50%)', width: 290 }}
                    >
                        <p className="mb-2 text-gray-900">
                            Metode belajar yang santai seperti nonton drakor di
                            Netflix
                        </p>
                        <span className="text-gray-600">
                            Alyssa, Apps Developer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
