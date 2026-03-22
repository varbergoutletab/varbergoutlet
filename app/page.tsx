export default function Page() {
  const products = [
    { name: "Tomater", price: "29 kr" },
    { name: "Apelsiner", price: "35 kr" },
    { name: "Olja", price: "89 kr" },
    { name: "Pommes", price: "59 kr" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <nav className="border-b bg-white sticky top-0">
        <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-emerald-700">
            Varberg Outlet AB
          </h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-emerald-600">Produkter</a>
            <a href="#" className="hover:text-emerald-600">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-emerald-50 border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Grossist för livsmedel i Sverige
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Vi erbjuder högkvalitativa livsmedel till restauranger och företag i hela Sverige med snabb leverans och konkurrenskraftiga priser.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium">
              Se produkter
            </button>

            <button className="border px-6 py-3 rounded-xl font-medium">
              Kontakta oss
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Populära produkter</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border p-4 hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/300"
                className="rounded-xl"
              />
              <h3 className="mt-3 font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="font-bold text-lg mb-2">Varberg Outlet AB</h3>
            <p className="text-sm text-gray-300">
              Grossist för livsmedel i Sverige
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Kontakt</h3>
            <p className="text-sm">📞 0046764032258</p>
            <p className="text-sm">📍 Härdgatan 23, Varberg</p>
          </div>

          <div>
  <h3 className="font-bold mb-2">Företag</h3>
  <p className="text-sm">Org.nr: 559559-2329</p>
  <p className="text-sm">Moms nr: SE559559232901</p>
</div>

        </div>
      </footer>

    </main>
  );
}