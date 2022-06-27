/* This example requires Tailwind CSS v2.0+ */

const softSkills = [
  {
    name: "JavaScript",
    description: "root of all evil.",
  },
  {
    name: "HTML",
    description: "web page structuring.",
    subskills: [
      {
        name: "Three.js",
        description: "WebGL 3d presentations.",
      },
      {
        name: "web components",
        description: "Making reusable elements in the web.",
      },
      {
        name: "Canvas",
        description: "Render custom Ui elements using a 2d canvas.",
      },
    ],
  },
  {
    name: "CSS",
    description: "I make this beast beautiful.",
  },
  {
    name: "React",
    description: "I'm in love with this one.",
    subskills: [
      {
        name: "React router",
        description: "novigations made easy.",
      },

      {
        name: "Redux",
        description: "State management at palm of my hands.",
      },
      {
        name: "mobX",
        description: "State management on a whole another level.",
      },
      {
        name: "unocss",
        description: "Css generation with minimal footprint.",
      },
      {
        name: "tailwindcss",
        description: "Css for dummies.",
      },
      {
        name: "styled-components",
        description: "Css in JSX.",
      },

      {
        name: "three fiber",
        description: "WEBGL in react.",
      },
    ],
  },
  {
    name: "Node",
    description: "Server side development with JS.",
    subskills: [
      {
        name: "Express",
        description: "Routeing and middlewares, anything express.",
      },
      {
        name: "MongoDB",
        description: "Database for the js server.",
      },
      {
        name: "Prisma",
        description: "Typed database superpowers for the server.",
      },
      {
        name: "GraphQL",
        description: "Data fetching the way client wants it.",
      },
      {
        name: "socket.io",
        description: "Realtime communication.",
      },
      {
        name: "redis",
        description: "Cache for the server. Serverless deployment.",
      },
    ],
  },
];

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              <span className="text-3xl leading-7 font-semibold text-gray-900">
                Hi, I'm <span className="text-indigo-600">Puya</span>
              </span>
            </h2>
            <p className="mt-3 text-base leading-6 text-indigo-600">
              I'm a JavaScript developer with a passion for building web
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-8 border-t border-gray-300"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mb-3">
          <span className="text-3xl leading-7 font-semibold text-gray-900 ">
            My Skills
          </span>
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="grid grid-cols-1 gap-6">
          {softSkills.map((skill) => (
            <div className="flex flex-row rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-1xl leading-5 font-medium text-indigo-600">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {skill.description}
                  </p>
                  {skill.subskills && (
                    <div className="mt-6">
                      {skill.subskills.map((subskill) => (
                        <div className="flex flex-row items-center">
                          <div className="ml-3">
                            <p className="text-sm leading-5 font-medium text-indigo-600">
                              {subskill.name}
                            </p>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              {subskill.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
