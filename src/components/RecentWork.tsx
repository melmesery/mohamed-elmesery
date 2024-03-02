import "../styles/RecentWork.css";
import Link from "next/link";

const RecentWork = () => {
  return (
    <section className="recent-section">
      <Link href="/mohamed-elmesery-portfolio" className="recent-work">
        Take a look at my work here
      </Link>
    </section>
  );
};

export default RecentWork;
