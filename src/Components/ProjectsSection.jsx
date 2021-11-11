import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"

const projects = [
  {
    name: "ImpactGuru.com clone",
    img: "/impacguru.PNG",
    link: "https://impactguruclone.netlify.app/",
    git: "https://github.com/Ransingh88/project-impact_guru",
    about:
      "Impact Guru is a donation based crowdfunding platform that offers global crowdfunding solutions for NGOs, social enterprises, startups and individuals.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Disney+Hotstar Clone",
    img: "/hotstar.PNG",
    link: "https://thirsty-roentgen-4c4218.netlify.app/",
    git: "https://github.com/subhash238/project_hotstar",
    about:
      "Disney+ Hotstar is India's largest premium streaming platform with more than 100000 hours of drama and movies in 17 languages",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Dermstore.com Clone",
    img: "/Dermstore.PNG",
    link: "https://darshan-naik.github.io/Dermstore_clone/index.html",
    git: "https://github.com/Darshan-Naik/Dermstore_clone",
    about:
      "Dermstore was created in 1999 by a dermatologist who wanted to better serve his patients with easier access to the treatments their skin needed",

    stacks: [
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  // {
  //   name: "Sephora.com clone",
  //   img: "/sephora.png",
  //   link: "https://project-sephora.vercel.app/",
  //   git: "https://github.com/ks-1007/Project-Sephora",
  //   about:
  //     "Sephora is an e-commerce website which sells variety of personal care and beauty products including cosmetics, skincare, body, fragrance, nail color, etc.",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <p>Projects</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}
