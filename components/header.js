import { ImLinkedin2, ImTwitter } from "react-icons/im"
import { SiMedium } from "react-icons/si"
import Link from "next/link"

export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a className="font-bold uppercase text-3xl">Blogs</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
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
        </div>
      </div>
    </header>
  )
}
