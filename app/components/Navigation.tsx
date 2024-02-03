import { createClient } from "@/prismicio";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <h1 className="text-4xl font-display font-semibold">
        {settings.data.site_title}
      </h1>
    </header>
  );
}

export default Navigation;
