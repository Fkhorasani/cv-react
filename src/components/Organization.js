import React from "react";
const data = [
  {
    company: "COMMPRESS 2023",
    position: "Website Team",
    duration: "Feb 2023 - Present",
    img: "commpress2022.svg",
    description: "Developing Website using Laravel with Bootstrap",
  },
  {
    company: "Ultimagz",
    position: "Secretary and Treasurer",
    duration: "Feb 2023 - Present",
    img: "ultimagz.png",
    description:
      "- Assist with data collection, money, and documents\n- Discussing with another executive to maintain the organization\n- Assist the IT Staff Team to maintain the website",
  },
  {
    company: "Mentoring UMN 2023",
    position: "Coordinator of Website Team",
    duration: "Jan 2023 - Present",
    img: "mentoring2023.png",
    description:
      "- Design, build and maintain the entire Mentoring 2023 website.\n- Updating all the latest information in the 2023 UMN Mentoring through the website.\n- Build the website using Next.js 13",
  },
  {
    company: "TVONAIR 8.0",
    position: "Coordinator of IT and Web Division",
    duration: "Oct 2022 - May 2023",
    img: "tvonair.png",
    description:
      "- Successfully developed a website using Laravel and Bootstrap\n- Gathered requirements and managed a team of 5 web developers to deliver the project on time\n- Implemented software development best practices such as code review, continuous integration, and unit testing",
  },
  {
    company: "Ultimagz",
    position: "Member of IT Team",
    duration: "Jan 2022 - Feb 2023",
    img: "ultimagz.png",
    description:
      "- Developed website using WordPress and React.JS.\n- Maintained website.\n- Developed https://ultimagz.com using WordPress and https://fokus.ultimagz.com using React.JS",
  },
  {
    company: "Starlight 2022",
    position: "Coordinator of Web Developer Team",
    duration: "Jan 2022 - Nov 2022",
    img: "starlight2022.png",
    description:
      "- Successfully developed a website using React JS and Chakra UI in https://starlight.umn.ac.id\n- Gathered requirements and managed a team of 5 web developers to deliver the project on time\n- Implemented software development best practices such as code review, continuous integration, and unit testing",
  },
  {
    company:
      "Perkenalan Prodi Informatika 2022 Universitas Multimedia Nusantara",
    position: "Chief of Security Department",
    duration: "Aug 2022 - Aug 2022",
    img: "perprod.png",
    description:
      "- Made the rules and secure the event.\n- Managed a team of 7 members.",
  },
  {
    company: "UMN Programming Club",
    position: "Vice President",
    duration: "Nov 2021 - Aug 2022",
    img: "umnpc.png",
    description:
      "- Successfully ran a community of 30 people by teaching members competitive programming and helping the President with day-to-day tasks.\n- Taught members about competitive programming, resulting in an increase in knowledge amongst the community.\n- Successfully helped the President with day-to-day tasks, resulting in a more efficient community overall.",
  },
  {
    company: "Starlight 2021",
    position: "Web Developer",
    duration: "Mar 2021 - Dec 2021",
    img: "starlight2021.png",
    description:
      "Developed website using HTML, CSS, Bootstrap, and Laravel in https://starlight.umn.ac.id",
  },
  {
    company: "UMN Festival",
    position: "Member of E-Sport Division",
    duration: "May 2021 - Dec 2021",
    img: "ufest.png",
    description:
      "- Designed Valorant competition.\n- Made rules for the competition.\n- Secured the competition.",
  },
];

const convertNewlinesToBreaks = (text) => {
  return text.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));
};

const Organization = () => {
  return (
    <>
      <div class="text-[8vw] md:text-[4vw] text-center my-3">
        Organization Experiences
      </div>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 content-evenly">
        {data.map((item, index) => (
          <div
            key={index}
            class="bg-indigo-950/75 border-4 border-indigo-600 rounded-lg mx-4 md:mx-0"
          >
            <div class="flex justify-center text-center">
              <div class="rounded-lg shadow-lg max-w-sm py-3">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg py-2 h-[20vh] mx-auto"
                    src={`/images/orgs/${item.img}`}
                    alt=""
                  />
                </a>
                <div class="p-6 flex flex-col justify-around items-center">
                  <h5 class="text-center overflow-y-hidden text-xl md:text-3xl font-medium mb-4">
                    {item.company}
                  </h5>
                  <h5 class="overflow-y-hidden text-lg font-medium">
                    {item.position}
                  </h5>
                  <h5 class="overflow-y-hidden text-md font-medium mb-2">
                    Year: {item.duration}
                  </h5>
                  <div class="overflow-y-hidden text-base mb-4 list-disc list-inside card-desc">
                    {convertNewlinesToBreaks(item.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Organization;
