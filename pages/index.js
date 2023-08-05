import Image from "next/image";
import reviewIcon from "/public/review.png";

function Home() {
  return (
    <>
      <header>
        <div>
          <Image src={reviewIcon} width={24} height={24} />
          <span>TabReviews</span>
        </div>
      </header>
      <main>Descrição</main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/review"
          title="review icons"
        >
          Review icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
}

export default Home;
