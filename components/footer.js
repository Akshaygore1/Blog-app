import { ImLinkedin2, ImTwitter } from "react-icons/im";
import { SiMedium } from "react-icons/si";
import Link from "next/link";

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"https://www.linkedin.com/in/ashwini-paraye/"}>
              <a>
                <ImLinkedin2 color="#888888" />
              </a>
            </Link>
            <Link href={"https://twitter.com/AshwiniParaye"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"https://ashwini-paraye.medium.com/"}>
              <a>
                <SiMedium color="#888888" />
              </a>
            </Link>
          </div>

          <p className="py-5 text-gray-400">© 2023 | Ashwini Paraye</p>
        </div>
      </div>
    </footer>
  );
}
