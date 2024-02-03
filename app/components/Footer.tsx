import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  const { site_title } = settings.data;

  return (
    <footer>
      <Link href={"/"} className="text-4xl font-display font-semibold">
        {site_title}
      </Link>

      <p>
        ©{new Date().getFullYear()} {site_title}
      </p>

      <nav>
        <ul>
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
