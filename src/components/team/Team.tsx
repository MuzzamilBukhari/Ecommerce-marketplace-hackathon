import React from "react";
import Image from "next/image";
import TeamCard from "../aboutpage/TeamCard";
import PageHeader from "../ui/PageHeader";
import TrialSection from "../ui/TrialSection";

const Team = () => {
  const team = [
    {
      id: 1,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-1.jpg",
    },
    {
      id: 2,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-2.jpg",
    },
    {
      id: 3,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-3.jpg",
    },
    {
      id: 4,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-4.jpg",
    },
    {
      id: 5,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-5.jpg",
    },
    {
      id: 6,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-6.jpg",
    },
    {
      id: 7,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-7.jpg",
    },
    {
      id: 8,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-8.jpg",
    },
    {
      id: 9,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-9.jpg",
    },
  ];
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Pricing header */}
        <PageHeader
          first="WHAT WE DO"
          second="Innovation tailored for you"
          tagline=""
          pageName="Team"
        />

        {/* Meet our Team */}
        <div className="w-full flex justify-center items-center py-16 sm:px-24 flex-col">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-10 sm:mt-16">
            {team.map((user) => (
              <TeamCard
                key={user.id}
                username={user.username}
                profession={user.profession}
                imgUrl={user.imgUrl}
                fbUrl={""}
                instaUrl={""}
                xUrl={""}
              />
            ))}
          </div>
        </div>
        {/* Trial section */}
        <TrialSection />
      </div>
    </section>
  );
};

export default Team;
