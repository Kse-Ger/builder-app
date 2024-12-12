import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#2E2E2E] text-white py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold leading-tight md:text-5xl px-10">
        Salīdzini būvprojektus, izvēlies piemērotāko būvnieku un pārliecinoši
        pārvaldi savu projektu no sākuma līdz beigām.
      </h1>
      <p className="text-lg mt-6 text-[#E0E0E0]">
        Veic maksājumus pa etapiem, iegūsti pārskatāmību un uzticību katrā
        projekta posmā.
      </p>
      <Link
        href="/about"
        className="mt-8 text-[#D4AF37] text-sm font-medium hover:text-[#FFB6A0] transition duration-300"
      >
        Vairāk par mūsu pakalpojumiem
      </Link>
    </section>
  );
}
