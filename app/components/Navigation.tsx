import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as={"header"} className="py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href={"/"} className="text-4xl font-display font-semibold">
          <Logo />
        </Link>
        <nav>
          <ul className="flex">
            {settings.data.navigation.map(({ label, link }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-3">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}

export default Navigation;
