
import React from 'react';


function SkillList({ skills }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {skills.map((skill, index) => (
        <div key={index} className="p-10 bg-white flex flex-col items-center rounded-xl">
          <skill.icon className="text-6xl text-sky-900" />
          <p className="mt-4 text-xl text-sky-900">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
