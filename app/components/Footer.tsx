import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";

async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  const { site_title } = settings.data;

  return (
    <Bounded as={"footer"}>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href={"/"} className="text-4xl font-display font-semibold">
          <Logo />
        </Link>

        <p className="text-xs">
          ©{new Date().getFullYear()} {site_title}
        </p>

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

export default Footer;
