import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { contact, nav, t, type Lang } from "@/content/casa";

import heroImg from "@/assets/hero.jpg";
import introImg from "@/assets/intro.jpg";
import villaImg from "@/assets/villa.jpg";
import bungalowImg from "@/assets/bungalow.jpg";
import coastImg from "@/assets/coast.jpg";
import poolImg from "@/assets/pool.jpg";
import gardenImg from "@/assets/garden.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import diningImg from "@/assets/dining.jpg";
import ctaImg from "@/assets/cta.jpg";
import detailImg from "@/assets/detail.jpg";
import bbqImg from "@/assets/bbq.jpg";

const btnSolid =
  "btn-base bg-olive text-[color:var(--ivory)] hover:bg-charcoal";
const btnOutlineLight =
  "btn-base border border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-olive";
const btnOutlineDark =
  "btn-base border border-olive/40 text-olive hover:bg-olive hover:text-[color:var(--ivory)]";
const btnTerracotta =
  "btn-base bg-terracotta text-[color:var(--ivory)] hover:bg-charcoal";

export function Site() {
  const [lang, setLang] = useState<Lang>("fr");
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const c = t[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang, rtl]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const galleryItems = [
    { src: heroImg, alt: rtl ? "منظر خارجي لدار الضيافة عند الغروب" : "Extérieur de la maison d’hôtes au coucher du soleil", span: "sm:col-span-2 sm:row-span-2" },
    { src: poolImg, alt: rtl ? "مسبح خاص" : "Piscine privée bordée d’oliviers", span: "" },
    { src: bedroomImg, alt: rtl ? "غرفة نوم بإطلالة على البحر" : "Chambre lumineuse avec vue sur la mer", span: "" },
    { src: gardenImg, alt: rtl ? "حديقة واسعة" : "Grand jardin méditerranéen", span: "sm:col-span-2" },
    { src: diningImg, alt: rtl ? "طاولة طعام في الخارج" : "Table dressée en extérieur sous une pergola", span: "" },
    { src: villaImg, alt: rtl ? "فيلا" : "Villa méditerranéenne blanche", span: "" },
    { src: bungalowImg, alt: rtl ? "بنغالو بشرفة" : "Bungalow avec terrasse ombragée", span: "sm:col-span-2" },
    { src: bbqImg, alt: rtl ? "ركن الشواء في الحديقة" : "Espace barbecue et salon extérieur", span: "" },
    { src: introImg, alt: rtl ? "فضاء معيشة" : "Espace de vie ouvert sur le jardin", span: "" },
    { src: detailImg, alt: rtl ? "باب أزرق تقليدي" : "Porte bleue traditionnelle sur mur blanc", span: "" },
    { src: coastImg, alt: rtl ? "ساحل تازركة" : "Côte de Tazarka", span: "sm:col-span-2" },
    { src: ctaImg, alt: rtl ? "الشرفة ليلاً" : "Terrasse éclairée à la tombée de la nuit", span: "sm:col-span-2" },
  ];

  const experienceImgs = [poolImg, diningImg, detailImg];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || menu ? "bg-olive/97 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-10 md:py-5">
          <a
            href="#accueil"
            className="font-display text-lg tracking-[0.32em] text-[color:var(--ivory)] md:text-xl"
          >
            CASA FIRMA
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav[lang].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--ivory)]/80 transition-colors hover:text-[color:var(--ivory)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.18em] text-[color:var(--ivory)]/70">
              <button
                onClick={() => setLang("fr")}
                aria-pressed={lang === "fr"}
                className={`min-h-11 px-1 ${lang === "fr" ? "text-[color:var(--ivory)] underline underline-offset-4" : "hover:text-[color:var(--ivory)]"}`}
              >
                FR
              </button>
              <span aria-hidden="true">|</span>
              <button
                onClick={() => setLang("ar")}
                aria-pressed={lang === "ar"}
                className={`min-h-11 px-1 ${lang === "ar" ? "text-[color:var(--ivory)] underline underline-offset-4" : "hover:text-[color:var(--ivory)]"}`}
              >
                AR
              </button>
            </div>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden border border-[color:var(--ivory)]/50 px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--ivory)] hover:text-olive md:inline-block"
            >
              {c.reserve}
            </a>

            <button
              onClick={() => setMenu((m) => !m)}
              aria-label="Menu"
              aria-expanded={menu}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-px w-6 bg-[color:var(--ivory)] transition-transform ${menu ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`block h-px w-6 bg-[color:var(--ivory)] ${menu ? "opacity-0" : ""}`} />
              <span
                className={`block h-px w-6 bg-[color:var(--ivory)] transition-transform ${menu ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {menu && (
          <nav className="border-t border-[color:var(--ivory)]/15 bg-olive/97 px-6 pb-8 pt-4 lg:hidden">
            {nav[lang].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenu(false)}
                className="block border-b border-[color:var(--ivory)]/10 py-4 font-display text-2xl text-[color:var(--ivory)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`${btnTerracotta} mt-6 w-full`}
            >
              {c.reserve}
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="accueil" className="relative min-h-[100svh] w-full overflow-hidden">
          <img
            src={heroImg}
            alt={rtl ? "دار ضيافة متوسطية مع مسبح عند الغروب" : "Maison d’hôtes méditerranéenne avec piscine au coucher du soleil"}
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/70" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-6 pb-28 pt-32 md:px-12">
            <p className="eyebrow text-[color:var(--sand)]">{c.hero.eyebrow}</p>
            <h1 className="mt-6 font-display text-[clamp(2.9rem,9vw,7rem)] leading-[0.98] text-[color:var(--ivory)]">
              {c.hero.title1}
              <br />
              <em className="not-italic text-[color:var(--sand)]">{c.hero.title2}</em>
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl text-[color:var(--ivory)]/90 md:text-2xl">
              {c.hero.sub}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--ivory)]/75 md:text-base">
              {c.hero.text}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className={btnTerracotta}>
                {c.hero.cta1}
              </a>
              <a href="#hebergements" className={btnOutlineLight}>
                {c.hero.cta2}
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--ivory)]/60">
              {c.hero.scroll}
            </span>
            <span className="relative block h-12 w-px overflow-hidden bg-[color:var(--ivory)]/25">
              <span className="scroll-dot absolute inset-x-0 top-0 block h-4 bg-[color:var(--sand)]" />
            </span>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="eyebrow text-terracotta">{c.intro.eyebrow}</p>
              <span className="rule-line mt-6" />
              <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
                {c.intro.title1}
                <br />
                {c.intro.title2}
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                {c.intro.text}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={introImg}
                alt={c.intro.imageAlt}
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ACCOMMODATIONS */}
        <section id="hebergements" className="bg-secondary/60 py-24 md:py-36">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <Reveal>
              <p className="eyebrow text-terracotta">{c.stays.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
                {c.stays.title1}
                <br />
                {c.stays.title2}
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
              {c.stays.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 120}>
                  <article className="group bg-background">
                    <div className="overflow-hidden">
                      <img
                        src={i === 0 ? villaImg : bungalowImg}
                        alt={item.alt}
                        loading="lazy"
                        width={1200}
                        height={912}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="px-6 py-8 md:px-10 md:py-10">
                      {item.badge ? (
                        <p className="eyebrow text-terracotta">{item.badge}</p>
                      ) : null}
                      <h3 className="mt-3 font-display text-3xl text-olive md:text-4xl">{item.name}</h3>
                      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {item.specs.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className={`${btnOutlineDark} mt-8 w-full sm:w-auto`}
                      >
                        {c.stays.cta}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRIVATE EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-terracotta">{c.features.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
                {c.features.title1}
                <br />
                {c.features.title2}
              </h2>
              <img
                src={bbqImg}
                alt={rtl ? "ركن الشواء والصالون الخارجي" : "Espace barbecue et salon extérieur au crépuscule"}
                loading="lazy"
                width={1408}
                height={1008}
                className="mt-10 aspect-[4/3] w-full object-cover"
              />
            </Reveal>

            <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {c.features.items.map((f, i) => (
                <Reveal as="li" key={f.name} delay={i * 60}>
                  <span className="rule-line" />
                  <h3 className="mt-5 text-xs uppercase tracking-[0.22em] text-olive">{f.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* LOCATION */}
        <section id="localisation" className="bg-olive text-[color:var(--ivory)]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-12 md:py-36">
            <Reveal>
              <img
                src={coastImg}
                alt={c.location.alt}
                loading="lazy"
                width={1600}
                height={1104}
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-[color:var(--sand)]">{c.location.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
                {c.location.title1}
                <br />
                {c.location.title2}
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[color:var(--ivory)]/75">
                {c.location.text}
              </p>
              <p className="mt-10 font-display text-4xl text-[color:var(--sand)]">
                {c.location.place}
                <span className="block text-lg tracking-[0.3em] text-[color:var(--ivory)]/60">
                  {c.location.country}
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galerie" className="mx-auto max-w-[1440px] px-4 py-24 md:px-12 md:py-36">
          <Reveal>
            <p className="eyebrow text-terracotta">{c.gallery.eyebrow}</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
              {c.gallery.title1}
              <br />
              {c.gallery.title2}
            </h2>
            <p className="mt-6 max-w-lg border-s-2 border-terracotta/50 ps-4 text-sm italic text-muted-foreground">
              {c.gallery.note}
            </p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[42vw] grid-cols-2 gap-3 sm:auto-rows-[19vw] sm:grid-cols-4 md:gap-4">
            {galleryItems.map((g, i) => (
              <Reveal as="figure" key={i} delay={(i % 4) * 80} className={`overflow-hidden ${g.span}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className={btnOutlineDark}>
              {c.gallery.cta}
            </a>
          </div>
        </section>

        {/* EXPERIENCE THEMES */}
        <section className="bg-secondary/60 py-24 md:py-36">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <Reveal>
              <h2 className="max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
                {c.experience.title}
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                {c.experience.text}
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
              {c.experience.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 120}>
                  <img
                    src={experienceImgs[i]}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <h3 className="mt-6 text-xs uppercase tracking-[0.24em] text-terracotta">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="relative overflow-hidden">
          <img
            src={ctaImg}
            alt={rtl ? "شرفة مضاءة عند الغسق" : "Terrasse méditerranéenne éclairée à la tombée de la nuit"}
            loading="lazy"
            width={1920}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center md:px-12 md:py-40">
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-[color:var(--ivory)]">
                {c.booking.title1}
                <br />
                <em className="not-italic text-[color:var(--sand)]">{c.booking.title2}</em>
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[color:var(--ivory)]/80">
                {c.booking.text}
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnTerracotta} w-full sm:w-auto`}
                >
                  💬 {c.booking.wa}
                </a>
                <a href={contact.tel} className={`${btnOutlineLight} w-full sm:w-auto`}>
                  {c.booking.call}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-terracotta">{c.contact.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-olive">
                {c.contact.title1}
                <br />
                {c.contact.title2}
              </h2>

              <address className="mt-12 not-italic">
                <p className="font-display text-2xl tracking-[0.2em] text-olive">CASA FIRMA</p>
                <dl className="mt-8 space-y-6 text-sm">
                  <div>
                    <dt className="eyebrow text-muted-foreground">{c.contact.addressLabel}</dt>
                    <dd className="mt-2 text-base text-foreground">📍 {contact.address}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">{c.contact.phoneLabel}</dt>
                    <dd className="mt-2 text-base">
                      <a href={contact.tel} className="hover:text-terracotta" dir="ltr">
                        📞 {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">{c.contact.instaLabel}</dt>
                    <dd className="mt-2 text-base">
                      <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-terracotta"
                        dir="ltr"
                      >
                        📸 {contact.instagramHandle}
                      </a>
                    </dd>
                  </div>
                </dl>
              </address>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a href={contact.maps} target="_blank" rel="noreferrer" className={btnSolid}>
                  {c.contact.maps}
                </a>
                <a href={contact.tel} className={btnOutlineDark}>
                  {c.contact.call}
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className={btnTerracotta}>
                  {c.contact.wa}
                </a>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className={btnOutlineDark}>
                  {c.contact.insta}
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={contact.maps}
                target="_blank"
                rel="noreferrer"
                className="group block h-full min-h-[380px] border border-border bg-secondary/50 p-8 transition-colors hover:bg-secondary md:p-12"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="rule-line" />
                    <p className="mt-6 font-display text-4xl text-olive">
                      {rtl ? "تازركة" : "Tazarka"}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted-foreground">
                      {contact.address}
                    </p>
                  </div>
                  <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
                    {c.contact.mapNote}
                    <span className="mt-4 block text-olive underline underline-offset-4 group-hover:text-terracotta">
                      {c.contact.maps} →
                    </span>
                  </p>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-charcoal text-[color:var(--ivory)]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-4 md:px-12 md:py-20">
          <div className="md:col-span-2">
            <p className="font-display text-xl tracking-[0.3em]">CASA FIRMA</p>
            <p className="mt-4 text-sm text-[color:var(--ivory)]/60">
              {c.footer.tagline}
              <br />
              {c.footer.city}
            </p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--sand)]">{c.footer.links}</p>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--ivory)]/70">
              {nav[lang].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-[color:var(--ivory)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--sand)]">{c.footer.social}</p>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--ivory)]/70">
              <li>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ivory)]">
                  Instagram
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[color:var(--ivory)]">
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="eyebrow mt-8 text-[color:var(--sand)]">{c.footer.contact}</p>
            <a href={contact.tel} className="mt-4 block text-sm text-[color:var(--ivory)]/70 hover:text-[color:var(--ivory)]" dir="ltr">
              {contact.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-[color:var(--ivory)]/10 px-6 py-6 text-center text-xs tracking-[0.2em] text-[color:var(--ivory)]/40 md:px-12">
          {c.footer.rights}
        </div>
      </footer>

      {/* Mobile sticky WhatsApp */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-40 flex min-h-14 items-center justify-center bg-terracotta text-xs uppercase tracking-[0.2em] text-[color:var(--ivory)] shadow-lg md:hidden"
      >
        💬 {c.booking.wa}
      </a>
    </div>
  );
}
