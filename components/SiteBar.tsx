import Link from "next/link";

/** The thin white strip at the top of every inner page. */
export default function SiteBar() {
  return (
    <div className="grid grid-cols-1 gap-y-1.5 px-4 pt-4 text-[13px] leading-tight sm:grid-cols-12 sm:px-5 sm:pt-5">
      <p className="strip sm:col-span-6">
        <Link href="/">Marx in Motion</Link> / Das Kapital, explained with moving pictures
      </p>
      <p className="strip flex justify-between gap-5 sm:col-span-6 sm:justify-end">
        <Link href="/introduction">Start here</Link>
        <Link href="/#contents">Contents</Link>
        <Link href="/glossary">Glossary</Link>
      </p>
    </div>
  );
}
