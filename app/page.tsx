export default function Page() {
  const whatsappMessage = encodeURIComponent(
    "Hej! Jag vill veta mer om era produkter och priser."
  );

  const categories = [
    {
      title: "Frukt & Grönt",
      text: "Färska grönsaker och frukter för restauranger och butiker.",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Oljor & Såser",
      text: "Matoljor, olivolja och såser i olika förpackningar.",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Frysvaror",
      text: "Praktiska frysalternativ för professionella kök.",
      image:
        "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Kolonialvaror",
      text: "Torrvaror och köksbasvaror för företag och restauranger.",
      image:
        "https://images.unsplash.com/photo-1584473457493-17c4d2f3d2a5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Konserver",
      text: "Ett brett utbud av konserver och långhållbara produkter.",
      image:
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Mejeri & Ost",
      text: "Utvalda mejeriprodukter för professionell användning.",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const products = [
    {
      name: "Tomater",
      price: "60 kr",
      desc: "Färska kvalitetsprodukter för restauranger och butiker.",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Apelsiner",
      price: "35 kr",
      desc: "Noggrant utvalda citrusprodukter med jämn kvalitet.",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Olivolja",
      price: "89 kr",
      desc: "Passar storkök, restauranger och professionella kunder.",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Pommes",
      price: "59 kr",
      desc: "Populära frysvaror för snabb service och hög efterfrågan.",
      image:
        "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Paprika",
      price: "32 kr",
      desc: "Färgglada grönsaker av hög kvalitet för daglig användning.",
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Sallad",
      price: "24 kr",
      desc: "Fräscha salladsprodukter för restaurang och catering.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const features = [
    {
      title: "Snabb leverans",
      text: "Vi arbetar för att leverera snabbt och smidigt till företag och restauranger.",
    },
    {
      title: "Hög kvalitet",
      text: "Produkter väljs noggrant ut för att ge stabil kvalitet varje gång.",
    },
    {
      title: "Bra priser",
      text: "Konkurrenskraftiga grossistpriser för både små och stora verksamheter.",
    },
    {
      title: "Pålitlig service",
      text: "Personlig kontakt och tydlig service för professionella kunder.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Varberg Outlet AB"
              className="h-14 w-auto rounded-xl shadow-sm"
            />
            <div>
              <div className="text-lg font-bold text-emerald-700">
                Varberg Outlet AB
              </div>
              <div className="text-xs text-slate-500">
                Grossist för livsmedel i Sverige
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-emerald-700">
              Hem
            </a>
            <a href="#about" className="transition hover:text-emerald-700">
              Om oss
            </a>
            <a href="#categories" className="transition hover:text-emerald-700">
              Kategorier
            </a>
            <a href="#products" className="transition hover:text-emerald-700">
              Produkter
            </a>
            <a href="#contact" className="transition hover:text-emerald-700">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              Professionell livsmedelsgrossist
            </div>

            <img
              src="/logo.png"
              alt="Varberg Outlet AB logo"
              className="mt-6 h-28 w-auto rounded-2xl shadow-md"
            />

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Grossist för livsmedel med snabb service och pålitliga leveranser
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Varberg Outlet AB erbjuder ett brett sortiment av livsmedel till
              restauranger, butiker och företag i Sverige. Vi kombinerar bra
              priser, hög kvalitet och snabb service.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-2xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-md transition hover:scale-105 hover:bg-emerald-700"
              >
                Se produkter
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-800 transition hover:bg-white hover:shadow-sm"
              >
                Kontakta oss
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-emerald-700">Snabb</div>
                <div className="text-sm text-slate-500">Leverans & service</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-emerald-700">Hög</div>
                <div className="text-sm text-slate-500">Produktkvalitet</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-emerald-700">Bra</div>
                <div className="text-sm text-slate-500">Grossistpriser</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                alt="fresh food"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Om oss</p>
            <h2 className="mt-2 text-3xl font-bold">
              En pålitlig partner för restauranger och företag
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Varberg Outlet AB arbetar med grossistförsäljning av livsmedel och
              relaterade produkter till professionella kunder. Vårt mål är att
              erbjuda stabil kvalitet, snabb service och bra priser.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Vi hjälper restauranger, butiker och andra verksamheter med ett
              brett sortiment och personlig service från Varberg.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-2xl bg-emerald-100 px-3 py-2 text-emerald-800">
                  ✓
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold text-emerald-700">Kategorier</p>
            <h2 className="mt-2 text-3xl font-bold">Vårt sortiment</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold text-emerald-700">Produkter</p>
          <h2 className="mt-2 text-3xl font-bold">Populära produkter</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {product.desc}
                </p>
                <div className="mt-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-lg font-semibold text-emerald-700">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-emerald-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Kontakt</p>
            <h2 className="mt-2 text-3xl font-bold">Kontakta Varberg Outlet AB</h2>
            <p className="mt-5 max-w-xl leading-8 text-emerald-50/90">
              För offert, priser eller mer information om våra produkter,
              kontakta oss direkt via telefon eller WhatsApp.
            </p>

            <div className="mt-8">
              <a
                href={`https://wa.me/46764032258?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-emerald-900 shadow-md transition hover:bg-emerald-50"
              >
                Kontakta via WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <div className="text-sm text-emerald-100">Telefon</div>
              <div className="mt-2 text-lg font-semibold">0046764032258</div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <div className="text-sm text-emerald-100">Adress</div>
              <div className="mt-2 text-lg font-semibold">
                Härdgatan 23, 43232 Varberg
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <div className="text-sm text-emerald-100">Org.nr</div>
              <div className="mt-2 text-lg font-semibold">559559-2329</div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <div className="text-sm text-emerald-100">Moms nr</div>
              <div className="mt-2 text-lg font-semibold">SE559559232901</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6">
            <p className="text-sm font-semibold text-emerald-700">Hitta oss</p>
            <h2 className="mt-2 text-3xl font-bold">Besök oss i Varberg</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <iframe
              title="Varberg Outlet AB Map"
              src="https://www.google.com/maps?q=Härdgatan%2023,%2043232%20Varberg&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/46764032258?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg ring-4 ring-emerald-100 transition hover:scale-105 hover:bg-emerald-700"
      >
        WhatsApp
      </a>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Varberg Outlet AB. Alla rättigheter förbehållna.</div>
          <div>Härdgatan 23, 43232 Varberg</div>
        </div>
      </footer>
    </main>
  );
}