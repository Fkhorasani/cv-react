import React from "react";
import { useEffect } from "react";

const Header = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img
        alt=""
        className="w-screen h-screen absolute top-0 left-0 z-1"
        src="/images/header.jpg"
        data-aos="fade-right"
      />
      <div class="flex items-center w-8/12 relative z-2">
        <img alt="" class="max-w-[20vw] rounded-full" src="/images/pp.png" />
        <div class="text-left pl-4 pt-2">
          <p class="text-[3vw] font-bold">Fernando Khorasani</p>
          <p class="intro">
            Hello! My name is Fernando Khorasani, student of Universitas
            Multimedia Nusantara, Indonesia. An enthusiastic software engineer
            learns a new skill every day. Student, and freelance web developer.
            Currently working on several web development projects. Active on
            organization and likes a challenge. Interested and still learning
            about web app development. Looking to leverage my knowledge.
          </p>
          <div class="flex">
            <a
              href="https://www.linkedin.com/in/fernando-khorasani/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="h-[30px]" src="/images/linkedin.svg" />
            </a>
            <a
              href="https://www.github.com/fkhorasani/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="h-[30px]" src="/images/github.png" />
            </a>
            <a
              href="https://www.instagram.com/fernando_khorasani/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="h-[30px]" src="/images/instagram.png" />
            </a>
            <a
              href="mailto:fernando.khorasani@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="h-[30px]" src="/images/mail.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
