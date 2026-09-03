import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Rééducation sportive après une blessure",
    description:
      "Bilan, récupération, renforcement et tests fonctionnels : découvrez les étapes d’une reprise sportive progressive.",
    image: "/images/blog/reeducation-sportive.webp",
    alt: "Patient réalisant un exercice de rééducation sportive encadré",
    href: "/blog/reeducation-sportive",
  },
  {
    title: "Mal de dos : quand consulter un kinésithérapeute ?",
    description:
      "Douleur lombaire, raideur ou gêne persistante : découvrez quand consulter et quels signes ne doivent pas être ignorés.",
    image: "/images/blog/mal-de-dos-kinesitherapie.webp",
    alt: "Kinésithérapeute guidant un patient pendant un exercice du dos",
    href: "/blog/mal-de-dos-kinesitherapie",
  },
];

export default function ArticleCardGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6 xl1440:mt-40 mt-14 mb-24">
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            aria-label={`Lire : ${article.title}`}
            className="group"
          >
            <article className="relative bg-white rounded-3xl overflow-hidden shadow-lg h-96 cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
              <Image
                src={article.image}
                alt={article.alt}
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-xl xl1440:text-2xl font-semibold mb-3">
                  {article.title}
                </h2>
                <p className="text-sm xl1440:text-base leading-6 opacity-95">
                  {article.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
