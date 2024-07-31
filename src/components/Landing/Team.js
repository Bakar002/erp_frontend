import React from 'react';

const teamMembers = [
  {
    name: 'Holden Caulfield',
    role: 'UI Designer',
    image: 'https://avatars.mds.yandex.net/i?id=922d95cead989b8f1456fc7b02e25b10789505b9-12683358-images-thumbs&n=13',
  },
  {
    name: 'Henry Letham',
    role: 'CTO',
    image: 'https://avatars.mds.yandex.net/i?id=1d099cd95aa40b3e1441244b09caa6bf6792502b2f4b9733-12421090-images-thumbs&n=13',
  },
  {
    name: 'Oskar Blinde',
    role: 'Founder',
    image: 'https://avatars.mds.yandex.net/i?id=28d5939de25836afcd5c892509e8c4899aa1902a-12822923-images-thumbs&n=13',
  },
  {
    name: 'John Doe',
    role: 'DevOps',
    image: 'https://avatars.mds.yandex.net/i?id=7131581a59b19d1295a7c68919b3a7440e2b7dd3-8411743-images-thumbs&n=13',
  },
  {
    name: 'Martin Eden',
    role: 'Software Engineer',
    image: 'https://avatars.mds.yandex.net/i?id=162cb796634e5270f6f45c19c1d55001891398300250f36c-12320521-images-thumbs&n=13',
  },
  {
    name: 'Boris Kitua',
    role: 'UX Researcher',
    image: 'https://avatars.mds.yandex.net/i?id=72f99af737d6c142cea6ee8313eae977eedc6ff6-12495433-images-thumbs&n=13',
  },
  {
    name: 'Atticus Finch',
    role: 'QA Engineer',
    image: 'https://avatars.mds.yandex.net/i?id=d02dc05d43c0cfed051654e528858eeeaebb3e89-9871231-images-thumbs&n=13',
  },
  {
    name: 'Alper Kamu',
    role: 'System',
    image: 'https://avatars.mds.yandex.net/i?id=c28b57c855ca030d6b309a1b5e5f1837b2a6d793e5cb831b-9863853-images-thumbs&n=13',
  },
  {
    name: 'Rodrigo Monchi',
    role: 'Product Manager',
    image: 'https://avatars.mds.yandex.net/i?id=103966c330d8c709a1533d665587370bcd667b1a-10350562-images-thumbs&n=13',
  },
];

const Team = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-black body-font p-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black hover:text-white">Our Dedicated Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className={`h-full flex items-center border-blue-500 border p-4 rounded-lg transform transition duration-300 hover:scale-105 fade-in-up ${index % 2 === 0 ? 'delay-200' : 'delay-400'}`}>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.image}
                  />
                  <div className="flex-grow">
                    <h2 className="text-black title-font font-medium text-lg">{member.name}</h2>
                    <p className="text-black">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
