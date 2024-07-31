import React, { useState, useEffect } from 'react';

const Investor = () => {
    const projects = [
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=99d78d479d801e793ad988529dfea4d8a26e9e42-5226776-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=aadd16ec447bfe2998b9d41209fdf01398c93476-10873222-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=8f8877e6927ac1c8bf5bcc2db8c24c4bf80dae0e050bf2ef-12716743-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=8450d7c789202935fcfd05ba039491dd1a627a82-4412543-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=738af9020b75802333426b70f3dad041f6019f20-10814230-images-thumbs&n=13',
        },
        {
            imagel: 'https://www.creativefabrica.com/wp-content/uploads/2018/12/Lettering-DB-Logo-by-Acongraphic-50.jpg',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=c04118f0f4023d2a754f124599c30c79-4696439-images-thumbs&ref=rim&n=33&w=375&h=250',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=8f8877e6927ac1c8bf5bcc2db8c24c4bf80dae0e050bf2ef-12716743-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=8450d7c789202935fcfd05ba039491dd1a627a82-4412543-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=738af9020b75802333426b70f3dad041f6019f20-10814230-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=99d78d479d801e793ad988529dfea4d8a26e9e42-5226776-images-thumbs&n=13',
        },
        {
            imagel: 'https://avatars.mds.yandex.net/i?id=aadd16ec447bfe2998b9d41209fdf01398c93476-10873222-images-thumbs&n=13',
        },
        // Add more projects as needed
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const slidesPerRow = 4; // Number of slides to show per row

    const totalRows = Math.ceil(projects.length / slidesPerRow);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prevSet) => (prevSet + 1) % totalRows);
        }, 1000); // Change row every 2 seconds

        return () => clearInterval(interval);
    }, [totalRows]);

    return (
        <div className="justify-center items-center bg-gradient-to-r from-blue-500 to-white">
            <h1 className=' text-5xl text-black font-bold text-center py-10'>Investors</h1>
            <p className='text-center text-black'>DK Group attracts investors seeking superior returns and ethical investment <br/>opportunities supported by robust financial expertise<br/> and a proven track record.</p>
            <div className="container mx-auto px-4 md:px-24 m-16">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {projects
                        .slice(currentSet * slidesPerRow, (currentSet + 1) * slidesPerRow)
                        .map((project, index) => (
                            <div key={index} className="m-3 bg-white rounded-2xl">
                                <div className="relative flex justify-center items-center">
                                    <div className="overflow-hidden w-32 h-50 flex items-center justify-center p-4">
                                        <img
                                            className="w-full h-full object-cover object-center rounded"
                                            src={project.imagel}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                                </div>
                                
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Investor;
