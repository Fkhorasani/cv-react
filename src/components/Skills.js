/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const img = "h-[35px] w-[35px] mr-2";
const li = "px-6 py-2 w-full flex items-center px-24";

const Skills = () => {
  return (
    <div class="skills my-4">
      <div id="" class="text-[8vw] md:text-[4vw] text-center my-3">
        Skills
      </div>
      <div class="flex justify-center mx-auto bg-slate-800 border-4 border-indigo-600 rounded-lg w-fit mb-4">
        <ul class="rounded-lg">
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/javascript.svg" />
            Javascript
          </li>
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/react.svg" /> React.JS
          </li>
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/php.svg" /> PHP
          </li>
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/laravel.png" />{" "}
            Laravel
          </li>
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/mysql.svg" /> MySQL
          </li>
          <li class={`${li}`}>
            <img alt="" className={`${img}`} src="/images/python.svg" /> Python
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
