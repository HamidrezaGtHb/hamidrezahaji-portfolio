import { t, type Lang } from '@/content/i18n';
import { PROJECTS, localized } from '@/content/projects';
import Footer from '@/components/Footer';
import ProjectRow from '@/components/ProjectRow';
import s from './page.module.css';
export default async function Work({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params; const d = t(lang);
  return (<main className={s.main}>
    <section className={s.head}>
      <h1 className="label">{d.workIndex.label}</h1>
      <div className={s.headRow}>
        <p className={'display ' + s.title}>{d.workIndex.title}</p>
        <p className={s.sub}>{d.workIndex.sub}</p>
      </div>
    </section>
    <section className={s.list}>{PROJECTS.map(p => <ProjectRow key={p.slug} lang={lang} p={localized(p, lang)} view={d.work.view} />)}</section>
    <Footer lang={lang} d={d} id="contact-work" />
  </main>);
}
