import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "kinesitherapie-grossesse",
    category: "Grossesse et santé de la femme",
    title: "Kinésithérapie pendant la grossesse",
    description:
      "Découvrez quand consulter et comment un accompagnement adapté peut aider pendant la grossesse.",
    image: "/images/blog/kinesitherapie-grossesse.webp",
    alt: "Femme enceinte accompagnée pendant un exercice de mobilité adapté",
  },
  {
    slug: "reeducation-sportive",
    category: "Sport et rééducation",
    title: "Rééducation sportive après une blessure",
    description:
      "Les étapes d’une reprise progressive : bilan, renforcement et gestes spécifiques au sport.",
    image: "/images/blog/reeducation-sportive.webp",
    alt: "Patient réalisant un exercice de rééducation sportive encadré",
  },
  {
    slug: "mal-de-dos-kinesitherapie",
    category: "Douleurs et mobilité",
    title: "Mal de dos : quand consulter ?",
    description:
      "Comprendre le rôle du bilan et reconnaître les signes qui nécessitent un avis médical.",
    image: "/images/blog/mal-de-dos-kinesitherapie.webp",
    alt: "Kinésithérapeute guidant un patient pendant un exercice du dos",
  },
];

export default function RelatedArticles({ currentSlug }) {
  const relatedArticles = articles.filter(
    (article) => article.slug !== currentSlug
  );

  return (
    <section
      aria-labelledby="related-articles-title"
      className="mt-16 pt-10 border-t border-gray-200"
    >
      <h2
        id="related-articles-title"
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
      >
        À lire aussi
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <article>
              <Image
                src={article.image}
                alt={article.alt}
                width={600}
                height={320}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-main font-medium mb-2">
                  {article.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-main transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.description}
                </p>
                <span className="text-main font-medium">Lire l’article →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
