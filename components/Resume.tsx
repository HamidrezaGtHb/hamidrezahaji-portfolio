import type { Dict } from '@/content/i18n';
import Reveal from './RevealItem';
import SkillRows from './SkillRows';
import s from './Resume.module.css';
/** Skills + Experience — shown on the home page below Selected work. */
export default function Resume({ d }: { d: Dict }) {
  return (<>
    <section id="skills" className={s.skills}>
      <div className={s.skillsHead}>
        <Reveal><h2 className="label" style={{ marginBottom: 16 }}>{d.skills.label}</h2><p className={'display ' + s.skillsTitle}>{d.skills.title}</p></Reveal>
        <Reveal className={s.skillsSub}><p style={{ margin: 0 }}>{d.skills.sub}</p></Reveal>
      </div>
      <SkillRows />
      <div className={s.groups}>{d.skills.groups.map(g => <Reveal key={g.name} className={s.group}><div className={s.groupName}>{g.name}</div><div className={s.groupItems}>{g.items}</div></Reveal>)}</div>
    </section>
    <section id="experience" className={s.exp}>
      <div className={s.expGrid}>
        <Reveal>
          <h2 className="label" style={{ marginBottom: 16 }}>{d.exp.label}</h2>
          <p className={'display ' + s.expTitle}>{d.exp.title}</p>
          <p className={s.expSub}>{d.exp.sub}</p>
          <div className={s.edu}>{d.exp.edu.map(e => <div key={e.y} className={s.eduRow}><span className={s.eduY}>{e.y}</span><span>{e.t}</span></div>)}</div>
        </Reveal>
        <div>{d.exp.jobs.map(j => (
          <Reveal key={j.when + j.role} className={s.job}>
            <div className={s.jobWhen}>{j.when}</div>
            <div><div className={s.jobHead}><span className={s.jobRole}>{j.role}</span><span className={s.jobOrg}>{j.org}</span></div><p className={s.jobDesc}>{j.desc}</p></div>
          </Reveal>))}
        </div>
      </div>
    </section>
  </>);
}
