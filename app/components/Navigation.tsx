import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <Link href={"/"} className="text-4xl font-display font-semibold">
        {settings.data.site_title}
      </Link>
      <nav>
        <ul>
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;