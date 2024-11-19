import React from 'react'
import "../app/styles/skills.css"

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <div className='skills-grid'>

            <div data-aos="zoom-in-up" className='skills-left'>
                <h2 className='skills-heading'>Technologies I work with</h2>
                <p className='skills-text'>
                I have experience with a range of programming languages & web technologies, including C++, C, HTML, CSS, & Java. Currently, I’m expanding my skills with Next.js, Tailwind CSS, & JavaScript to build modern, responsive web applications. My journey in tech is driven by a passion for learning & adapting to new tools. I’m always eager to deepen my expertise & embrace new challenges in the tech world.
                </p>
            </div>
            <div>
                <div className='skills-right'>
                    <div className='skills-icons-grid'>
                        <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">C++, C</h2>
                        <h2 data-aos="zoom-in-up">HTML, CSS</h2>
                        <h2 data-aos="zoom-in-up">Java, Typescript</h2>
                    </div>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind(under learning)</h2>
                        <h2 data-aos="zoom-in-up">NextJS(under learning)</h2>
                        <h2 data-aos="zoom-in-up">Javascript(under learning)</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills
