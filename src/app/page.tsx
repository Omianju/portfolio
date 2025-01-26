import Intro from "@/components/Intro";
import NewsLetterForm from "@/components/NewsLetterForm";
import RecentPosts from "@/components/RecentPosts";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsLetterForm />
      </div>
    </section>
  );
}
