import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  /** Sur aplat sombre ou photo */
  onDark?: boolean;
  className?: string;
};

/**
 * Lien d'action éditorial : libellé en capitales espacées, puis une flèche
 * dans un cercle qui se remplit au survol. Les liens externes s'ouvrent dans
 * un nouvel onglet.
 */
export default function ArrowLink({ href, children, onDark = false, className = "" }: Props) {
  const external = href.startsWith("http");
  const content = (
    <>
      <span className="eyebrow">{children}</span>
      <span
        aria-hidden
        className={`arrow-circle ${onDark ? "border-white/40" : "border-hairline"}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );
  const classes = `arrow-link group inline-flex min-h-12 items-center gap-6 ${
    onDark ? "text-white" : "text-brand"
  } ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
