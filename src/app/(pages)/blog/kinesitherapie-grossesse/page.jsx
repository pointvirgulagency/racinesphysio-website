"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ui/ScrollToTop";
import BeforeFooter from "@/Components/BeforeFooter";
import RelatedArticles from "@/Components/RelatedArticles";

export default function PregnancyPhysiotherapyArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Kinésithérapie pendant la grossesse : bienfaits, indications et précautions",
    description:
      "Découvrez comment la kinésithérapie peut accompagner les changements et certaines douleurs liés à la grossesse.",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    inLanguage: "fr-MA",
    image:
      "https://www.racinesphysio.com/images/blog/kinesitherapie-grossesse.webp",
    mainEntityOfPage:
      "https://www.racinesphysio.com/blog/kinesitherapie-grossesse",
    author: {
      "@type": "Organization",
      name: "Cabinet Racines",
      url: "https://www.racinesphysio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Cabinet Racines",
      url: "https://www.racinesphysio.com",
    },
  };

  return (
    <section className="xl1440:bg-[#8ECFB9]">
      <Navbar />
      <ScrollToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 z-20 relative">
        <article className="xl1440:mt-32 mt-20">
          <header className="mb-8">
            <p className="text-main font-medium mb-3">
              Grossesse et santé de la femme
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Kinésithérapie pendant la grossesse : bienfaits, indications et
              précautions
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Comprendre comment un accompagnement adapté peut aider à mieux
              vivre certains changements et inconforts de la grossesse.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span>Publié le 3 septembre 2026</span>
            <span>•</span>
            <span>Rédaction : Cabinet Racines</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>

          <div className="mb-10 overflow-hidden rounded-3xl">
            <Image
              src="/images/blog/kinesitherapie-grossesse.webp"
              alt="Femme enceinte accompagnée pendant un exercice de mobilité adapté"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La grossesse transforme progressivement le corps. Le centre de
              gravité se déplace, la posture évolue et les muscles doivent
              s’adapter à de nouvelles contraintes. Ces changements sont
              physiologiques, mais ils peuvent s’accompagner de douleurs
              lombaires, de tensions, d’une gêne au niveau du bassin ou d’une
              sensation de mobilité réduite.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La kinésithérapie peut contribuer à mieux vivre certaines de ces
              évolutions. Elle ne suit toutefois pas un programme identique
              pour toutes les femmes enceintes : l’accompagnement dépend du
              stade de la grossesse, des symptômes, des antécédents et des
              recommandations du professionnel qui assure le suivi médical.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Pourquoi des douleurs peuvent-elles apparaître ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              À mesure que la grossesse progresse, plusieurs facteurs peuvent
              modifier la façon de bouger :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                l’augmentation du volume abdominal change l’équilibre et la
                posture ;
              </li>
              <li>
                les muscles du dos, du bassin et des hanches sont davantage
                sollicités ;
              </li>
              <li>certaines articulations peuvent devenir plus sensibles ;</li>
              <li>
                la fatigue, le sommeil ou une position prolongée peuvent
                accentuer l’inconfort ;
              </li>
              <li>
                les habitudes de marche, de travail ou de repos peuvent devenir
                moins confortables.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Une douleur n’a pas toujours une cause unique. Une évaluation
              individualisée est donc préférable à l’application d’exercices
              trouvés au hasard en ligne.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Dans quelles situations consulter un kinésithérapeute ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un avis peut être utile lorsque la gêne limite les activités
              quotidiennes ou persiste malgré l’adaptation des habitudes. Les
              motifs fréquents incluent notamment :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>une douleur dans le bas du dos ;</li>
              <li>
                une douleur autour du bassin, du pubis, des hanches ou des
                fesses ;
              </li>
              <li>
                une gêne lors de la marche, dans les escaliers ou pendant les
                changements de position ;
              </li>
              <li>des tensions musculaires récurrentes ;</li>
              <li>une difficulté à rester assise ou debout longtemps ;</li>
              <li>
                le besoin d’être accompagnée pour maintenir une activité
                physique adaptée.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Une prise en charge précoce peut aider à mieux comprendre la
              douleur, à ajuster les mouvements du quotidien et à éviter que la
              gêne ne prenne trop de place. Elle ne dispense pas du suivi
              obstétrical habituel.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Comment se déroule une séance ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              La première consultation commence généralement par un échange et
              un bilan. Le kinésithérapeute s’intéresse à la localisation de la
              douleur, aux mouvements qui l’augmentent ou la diminuent, au
              niveau d’activité, aux antécédents et au déroulement de la
              grossesse.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Selon la situation et après vérification de l’absence de
              contre-indication, l’accompagnement peut comprendre :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                des conseils pour les positions de repos, de sommeil ou de
                travail ;
              </li>
              <li>
                des adaptations pour se lever, s’asseoir, marcher ou porter une
                charge ;
              </li>
              <li>
                des exercices doux de mobilité, de respiration et de
                renforcement ;
              </li>
              <li>
                un travail progressif autour du dos, des hanches et du bassin ;
              </li>
              <li>
                certaines techniques manuelles adaptées lorsqu’elles sont
                pertinentes ;
              </li>
              <li>un programme simple à reproduire à domicile.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              L’objectif n’est pas de forcer le corps, mais de trouver des
              mouvements tolérés et utiles. La séance doit être réévaluée en
              fonction des sensations et de l’évolution de la grossesse.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              L’activité physique est-elle recommandée pendant la grossesse ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              En l’absence de contre-indication médicale, les recommandations
              internationales encouragent généralement une activité physique
              régulière et d’intensité modérée pendant la grossesse. L’American
              College of Obstetricians and Gynecologists évoque un objectif de
              150 minutes par semaine pour les grossesses sans complication, en
              commençant progressivement si la personne était auparavant peu
              active.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ce repère ne constitue pas une prescription individuelle. Le type
              d’activité, sa durée et son intensité doivent être adaptés. Une
              femme suivie pour une complication ou présentant une douleur
              importante doit demander conseil au professionnel de santé qui
              suit sa grossesse.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Quelles précautions faut-il respecter ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il faut interrompre l’exercice et demander rapidement un avis
              médical en présence de signes tels que des saignements, une perte
              de liquide, des contractions douloureuses régulières, un malaise,
              une douleur thoracique, un essoufflement inhabituel, une faiblesse
              importante ou une douleur brutale.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>évitez l’automédication et les exercices douloureux ;</li>
              <li>
                signalez toujours la grossesse et son terme au professionnel ;
              </li>
              <li>
                transmettez les consignes données par le médecin ou la
                sage-femme ;
              </li>
              <li>
                hydratez-vous et évitez les efforts intenses par forte chaleur ;
              </li>
              <li>
                privilégiez une progression lente plutôt qu’un objectif de
                performance.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              La kinésithérapie est-elle utile après l’accouchement ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Après la naissance, la reprise dépend du type d’accouchement, de
              la cicatrisation, de la fatigue et des éventuelles douleurs. Une
              évaluation peut aider à organiser le retour aux activités
              quotidiennes puis sportives. Toute rééducation abdominale ou
              périnéale doit être adaptée au bilan et aux recommandations
              médicales : il n’existe pas un calendrier identique pour toutes
              les patientes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              En résumé
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La kinésithérapie peut accompagner certaines douleurs et
              limitations liées à la grossesse grâce à un bilan, des conseils
              et des exercices adaptés. La priorité reste la sécurité : chaque
              prise en charge doit tenir compte du suivi obstétrical et de la
              situation individuelle.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Vous êtes enceinte et une douleur gêne vos mouvements ou vos
              activités ? Le Cabinet Racines, à Sala Al Jadida, peut vous
              orienter vers une évaluation adaptée après vérification de votre
              situation et des recommandations de votre professionnel de santé.
            </p>

            <aside className="bg-white/70 border-l-4 border-main rounded-r-2xl p-6 my-8">
              <p className="text-gray-800 leading-relaxed m-0">
                <strong>Information importante :</strong> cet article a une
                vocation informative. Il ne remplace ni une consultation, ni un
                diagnostic, ni les recommandations du médecin ou de la
                sage-femme qui suit votre grossesse. En présence d’un symptôme
                inhabituel ou inquiétant, demandez un avis médical sans attendre.
              </p>
            </aside>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Sources de référence
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
              <li>
                <a
                  href="https://www.acog.org/womens-health/faqs/exercise-during-pregnancy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  American College of Obstetricians and Gynecologists —
                  Exercise During Pregnancy
                </a>
              </li>
              <li>
                <a
                  href="https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pelvic-girdle-pain-and-pregnancy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  Royal College of Obstetricians and Gynaecologists — Pelvic
                  girdle pain and pregnancy
                </a>
              </li>
              <li>
                <a
                  href="https://www.nhs.uk/pregnancy/common-symptoms/pelvic-pain/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  NHS — Pelvic pain in pregnancy
                </a>
              </li>
            </ul>
          </div>

          <RelatedArticles currentSlug="kinesitherapie-grossesse" />

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-main text-white font-medium rounded-3xl hover:bg-second transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour au blog
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-main text-main font-medium rounded-3xl hover:bg-white transition-colors duration-200"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </article>
      </main>

      <div className="-mt-72">
        <BeforeFooter />
      </div>
    </section>
  );
}
