"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ui/ScrollToTop";
import BeforeFooter from "@/Components/BeforeFooter";

export default function BackPainPhysiotherapyArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mal de dos : quand consulter un kinésithérapeute ?",
    description:
      "Douleur lombaire, raideur ou gêne persistante : découvrez quand consulter, comment se déroule le bilan et quels signes nécessitent un avis médical urgent.",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    inLanguage: "fr-MA",
    mainEntityOfPage:
      "https://www.racinesphysio.com/blog/mal-de-dos-kinesitherapie",
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
            <p className="text-main font-medium mb-3">Douleurs et mobilité</p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Mal de dos : quand consulter un kinésithérapeute ?
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Comprendre les différents types de douleur, le rôle du bilan et
              les signes qui nécessitent un avis médical rapide.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span>Publié le 3 septembre 2026</span>
            <span>•</span>
            <span>Rédaction : Cabinet Racines</span>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Une douleur dans le bas du dos peut apparaître après un effort,
              une longue période assise, un changement d’activité ou sans cause
              évidente. Elle peut rester localisée, s’accompagner de raideur ou
              parfois descendre dans une jambe. Derrière l’expression « mal de
              dos » se trouvent donc des situations différentes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Le kinésithérapeute intervient principalement sur les mouvements,
              les capacités physiques et la reprise des activités. Son rôle
              commence par un bilan : il ne s’agit pas d’appliquer
              automatiquement le même massage ou la même série d’exercices à
              tous les patients.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Lombalgie, douleur irradiée, sciatique : quelle différence ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La lombalgie désigne une douleur située dans la région basse du
              dos. Elle peut être liée à plusieurs facteurs et ne permet pas, à
              elle seule, d’identifier une structure précise.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Une douleur irradiée peut s’étendre vers la fesse ou la jambe. Le
              terme sciatique est souvent utilisé lorsqu’un nerf est concerné,
              mais seul un examen permet d’orienter correctement le diagnostic.
              Une douleur dans la jambe n’est donc pas automatiquement une
              sciatique, et une imagerie n’est pas systématiquement nécessaire.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Quand prendre rendez-vous avec un kinésithérapeute ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un bilan peut être pertinent lorsque :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>la douleur persiste ou revient régulièrement ;</li>
              <li>la raideur limite les mouvements ;</li>
              <li>
                certaines tâches, la marche, le travail ou le sport deviennent
                difficiles ;
              </li>
              <li>
                la peur de bouger entraîne un évitement croissant des activités ;
              </li>
              <li>
                la reprise d’activité après un épisode douloureux semble
                incertaine ;
              </li>
              <li>un médecin a prescrit ou conseillé une rééducation.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Le professionnel vérifie aussi si la situation relève bien de la
              kinésithérapie ou si un avis médical préalable est nécessaire.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Quels signes nécessitent un avis médical rapide ou urgent ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Certaines manifestations ne doivent pas être traitées comme une
              simple douleur mécanique. Il faut demander rapidement un avis
              médical, voire contacter les urgences selon la gravité, lorsque
              le mal de dos s’accompagne notamment :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                d’une difficulté nouvelle à uriner ou à contrôler la vessie ou
                les selles ;
              </li>
              <li>
                d’un engourdissement autour des organes génitaux, du périnée ou
                de l’intérieur des cuisses ;
              </li>
              <li>
                d’une faiblesse nouvelle ou qui progresse dans une ou deux
                jambes ;
              </li>
              <li>d’une douleur apparue après un traumatisme important ;</li>
              <li>
                de fièvre, d’un état général altéré ou d’une douleur nocturne
                inhabituelle ;
              </li>
              <li>
                d’une perte de poids inexpliquée ou d’un antécédent médical
                préoccupant ;
              </li>
              <li>
                d’une douleur brutale, intense ou qui s’aggrave rapidement.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Cette liste n’est pas exhaustive. En cas de doute ou de symptôme
              inhabituel, mieux vaut consulter.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Que comprend le bilan de kinésithérapie ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le bilan commence par des questions : depuis quand la douleur
              est-elle présente ? Dans quelles positions augmente-t-elle ?
              Quelles activités sont devenues difficiles ? Y a-t-il eu un
              traumatisme, une irradiation, un engourdissement ou une faiblesse ?
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              L’examen peut ensuite porter sur :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>la mobilité du dos et des hanches ;</li>
              <li>la force et l’endurance ;</li>
              <li>les mouvements fonctionnels ;</li>
              <li>
                la sensibilité ou certains signes neurologiques lorsque cela
                est indiqué ;
              </li>
              <li>les positions et efforts liés au travail ou au sport ;</li>
              <li>
                la réaction des symptômes à différents mouvements.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Le but est de définir un plan adapté aux objectifs de la personne,
              et non de rechercher une posture « parfaite » applicable à tous.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              À quoi sert la rééducation du dos ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Selon la situation, la prise en charge peut associer plusieurs
              éléments :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                comprendre les facteurs qui entretiennent ou apaisent la
                douleur ;
              </li>
              <li>reprendre progressivement les mouvements évités ;</li>
              <li>
                améliorer la mobilité lorsque celle-ci est limitée ;
              </li>
              <li>
                renforcer le tronc, les hanches ou les membres inférieurs selon
                les besoins ;
              </li>
              <li>développer l’endurance et la tolérance à l’effort ;</li>
              <li>adapter temporairement certaines tâches ;</li>
              <li>préparer le retour au travail ou au sport.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Les recommandations de l’Organisation mondiale de la Santé pour
              la lombalgie chronique insistent sur une approche individualisée
              et globale. Le NICE indique que les techniques manuelles peuvent
              être envisagées dans certains cas, mais dans un ensemble
              comprenant notamment l’exercice, plutôt que comme solution
              isolée.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Faut-il rester au repos lorsqu’on a mal au dos ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un repos bref peut parfois être nécessaire lorsque la douleur est
              très vive, mais l’inactivité prolongée n’est généralement pas
              l’objectif. Lorsque la situation ne présente pas de signe
              d’alerte, maintenir ou reprendre progressivement des activités
              tolérées peut aider à restaurer la confiance et les capacités
              physiques.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Il ne s’agit pas d’ignorer la douleur ni de forcer. Le bon niveau
              d’activité est celui qui reste supportable et dont la progression
              est adaptée à la réaction du corps.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Une radiographie ou une IRM est-elle toujours nécessaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Non. Les recommandations cliniques ne préconisent pas une imagerie
              de routine pour toute lombalgie dans un contexte non spécialisé.
              Elle peut être indiquée lorsque l’examen révèle un signe
              préoccupant ou lorsque son résultat est susceptible de modifier
              la prise en charge. La décision appartient au professionnel
              habilité à prescrire et dépend du contexte clinique, pas seulement
              de l’intensité ressentie de la douleur.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Massage ou exercices : que faut-il privilégier ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il n’existe pas une seule technique efficace pour toutes les
              douleurs de dos. Certaines techniques manuelles peuvent diminuer
              temporairement la gêne ou faciliter le mouvement. Pour construire
              une amélioration durable des capacités, elles sont généralement
              intégrées à une démarche active comprenant conseils, exercices et
              reprise progressive des activités.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Le programme doit rester réaliste. Quelques exercices bien
              choisis et régulièrement adaptés sont souvent plus utiles qu’une
              longue liste difficile à suivre.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Comment limiter les récidives ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Il est impossible de garantir qu’une douleur ne reviendra jamais.
              On peut néanmoins agir sur plusieurs facteurs :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                conserver une activité physique régulière adaptée à ses
                capacités ;
              </li>
              <li>varier les positions au cours de la journée ;</li>
              <li>
                augmenter progressivement les charges de travail ou
                d’entraînement ;
              </li>
              <li>entretenir force et endurance ;</li>
              <li>respecter le sommeil et la récupération ;</li>
              <li>
                réagir tôt lorsqu’une gêne recommence à limiter les activités.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              En résumé
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Consulter un kinésithérapeute est pertinent lorsque la douleur du
              dos persiste, récidive ou limite les activités. Le bilan sert à
              écarter les situations nécessitant une orientation médicale, à
              comprendre les limitations et à construire une reprise progressive
              du mouvement.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Le Cabinet Racines, situé à Sala Al Jadida, peut vous accompagner
              à partir d’une évaluation individualisée et coordonner la prise en
              charge avec votre médecin lorsque la situation le nécessite.
            </p>

            <aside className="bg-white/70 border-l-4 border-main rounded-r-2xl p-6 my-8">
              <p className="text-gray-800 leading-relaxed m-0">
                <strong>Information importante :</strong> cet article ne permet
                pas de poser un diagnostic et ne remplace pas une consultation.
                En présence d’une perte de contrôle urinaire ou intestinal,
                d’un engourdissement du périnée, d’une faiblesse progressive,
                d’un traumatisme important ou d’une aggravation rapide, demandez
                une assistance médicale urgente.
              </p>
            </aside>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Sources de référence
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
              <li>
                <a
                  href="https://www.who.int/publications/i/item/9789240081789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  Organisation mondiale de la Santé — Prise en charge non
                  chirurgicale de la lombalgie chronique primaire
                </a>
              </li>
              <li>
                <a
                  href="https://www.nice.org.uk/guidance/ng59"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  NICE — Évaluation et prise en charge de la lombalgie et de la
                  sciatique chez les personnes de plus de 16 ans
                </a>
              </li>
            </ul>
          </div>

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
