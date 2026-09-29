import { t, type Lang } from '@/content/i18n';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Footer from '@/components/Footer';
import Resume from '@/components/Resume';
export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params; const d = t(lang);
  return (<main id="top"><Hero lang={lang} d={d} /><SelectedWork lang={lang} d={d} /><Resume d={d} /><Footer lang={lang} d={d} /></main>);
}
