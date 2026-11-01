import { redirect } from 'next/navigation';
/** Fallback if middleware is skipped — German is the site default. */
export default function Root() { redirect('/de'); }
