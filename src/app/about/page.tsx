// This page is no longer in use. Its content has been merged into the homepage.
// A redirect has been set up in next.config.ts to point /about to /.
import { redirect } from 'next/navigation';

export default function AboutUsPage() {
  redirect('/');
  return null;
}
