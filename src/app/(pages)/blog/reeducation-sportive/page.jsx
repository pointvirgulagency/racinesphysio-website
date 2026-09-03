"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ui/ScrollToTop";
import BeforeFooter from "@/Components/BeforeFooter";
import RelatedArticles from "@/Components/RelatedArticles";

export default function SportsRehabilitationArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Rééducation sportive après une blessure : les étapes d’une reprise réussie",
    description:
      "Découvrez les étapes d’une rééducation sportive progressive : bilan, récupération, renforcement, tests fonctionnels et reprise sécurisée de l’activité.",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    inLanguage: "fr-MA",
    image:
      "https://www.racinesphysio.com/images/blog/reeducation-sportive.webp",
    mainEntityOfPage:
      "https://www.racinesphysio.com/blog/reeducation-sportive",
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
            <p className="text-main font-medium mb-3">Sport et rééducation</p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Rééducation sportive après une blessure : les étapes d’une reprise
              réussie
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Reprendre le sport ne dépend pas seulement du temps écoulé : le
              bilan, les capacités fonctionnelles et les exigences de votre
              discipline guident la progression.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span>Publié le 3 septembre 2026</span>
            <span>•</span>
            <span>Rédaction : Cabinet Racines</span>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>

          <div className="mb-10 overflow-hidden rounded-3xl">
            <Image
              src="/images/blog/reeducation-sportive.webp"
              alt="Patient réalisant un exercice de rééducation sportive encadré"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Après une entorse, une lésion musculaire, une tendinopathie ou une
              intervention chirurgicale, l’envie de reprendre le sport peut être
              forte. Pourtant, la disparition de la douleur au repos ne signifie
              pas nécessairement que le corps est prêt à courir, sauter, changer
              de direction ou retrouver l’intensité d’avant la blessure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Une rééducation sportive bien conduite vise à restaurer les
              capacités nécessaires à l’activité pratiquée. Elle ne se résume ni
              à attendre un nombre fixe de semaines, ni à enchaîner quelques
              exercices standards. La progression dépend de la blessure, du
              sport, du niveau de pratique, des objectifs et de la réponse du
              corps à l’effort.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              La reprise du sport est un processus, pas une date
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le consensus international de Berne sur le retour au sport décrit
              une progression en plusieurs étapes : retour à la participation,
              retour au sport, puis retour au niveau de performance souhaité.
              Une personne peut donc recommencer certains entraînements sans
              être encore prête pour une compétition complète.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Cette distinction permet d’augmenter les contraintes de façon
              graduelle, d’observer la réaction du corps et d’éviter une décision
              fondée uniquement sur le calendrier.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Étape 1 : comprendre la blessure et établir un bilan
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              La première étape consiste à préciser le contexte : mécanisme de
              la blessure, douleur, gonflement, mouvements limités, traitements
              déjà réalisés et objectifs sportifs. Un diagnostic médical ou des
              examens complémentaires peuvent être nécessaires selon le
              traumatisme et les signes observés.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Le bilan de kinésithérapie peut notamment évaluer :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>la mobilité de l’articulation concernée ;</li>
              <li>la force et l’endurance musculaires ;</li>
              <li>l’équilibre et le contrôle du mouvement ;</li>
              <li>la douleur pendant et après l’effort ;</li>
              <li>les gestes propres au sport pratiqué ;</li>
              <li>la confiance de la personne dans le membre blessé ;</li>
              <li>les facteurs susceptibles de ralentir la récupération.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ce point de départ permet de fixer des objectifs mesurables et
              réalistes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Étape 2 : diminuer les limitations sans arrêter tout mouvement
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dans la phase initiale, la priorité peut être de protéger la zone
              lésée, de réduire la douleur ou le gonflement et de retrouver
              progressivement une mobilité utile. Cela ne signifie pas
              nécessairement immobiliser tout le corps. Lorsque la situation le
              permet, certaines activités peuvent être maintenues ou adaptées
              afin de préserver la condition générale.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              La charge doit rester compatible avec la blessure et les consignes
              médicales. Une douleur qui augmente nettement, un gonflement qui
              réapparaît ou une perte de fonction après les exercices sont des
              informations à signaler au professionnel.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Étape 3 : reconstruire force, endurance et contrôle
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              La reprise demande souvent de restaurer plusieurs qualités :
              force, endurance, stabilité, coordination, vitesse de réaction et
              tolérance aux efforts répétés. Le programme évolue donc au fil des
              séances.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Selon la blessure et le sport, il peut inclure :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>des exercices de mobilité ;</li>
              <li>du renforcement progressif ;</li>
              <li>un travail d’équilibre et de proprioception ;</li>
              <li>des exercices sur un seul membre ;</li>
              <li>
                des mouvements fonctionnels comme s’accroupir, pousser, tirer
                ou sauter ;
              </li>
              <li>un travail cardiovasculaire adapté ;</li>
              <li>
                une augmentation graduelle du volume et de l’intensité.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              La qualité du mouvement compte autant que le nombre de
              répétitions. Des compensations persistantes peuvent indiquer que
              la difficulté doit être ajustée.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Étape 4 : réintroduire les gestes spécifiques au sport
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Une personne peut être à l’aise dans les exercices de base mais
              encore en difficulté face aux exigences réelles de son sport. La
              rééducation doit donc progressivement intégrer les gestes
              concernés : course, accélération, freinage, changement de
              direction, frappe, saut, réception, lancer ou contact selon la
              discipline. Cette phase rapproche la séance du terrain, sans
              passer brutalement d’un environnement contrôlé à une compétition.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Étape 5 : tester avant de reprendre pleinement
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La décision de reprise s’appuie sur un ensemble d’éléments. Selon
              la blessure, le kinésithérapeute peut comparer la mobilité, la
              force, l’équilibre, la qualité des gestes et certains tests
              fonctionnels. Il tient également compte de la réaction dans les
              heures suivant l’effort et de la confiance du sportif.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Aucun test isolé ne garantit l’absence de récidive. L’objectif est
              de rassembler suffisamment d’informations pour prendre une
              décision partagée et raisonnable avec le patient et, lorsque cela
              est nécessaire, le médecin, l’entraîneur ou le préparateur
              physique.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Quels signes montrent que la reprise est peut-être trop rapide ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Il est préférable de ralentir la progression et de demander un
              avis lorsque :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>la douleur augmente de séance en séance ;</li>
              <li>un gonflement revient après l’effort ;</li>
              <li>le mouvement reste nettement asymétrique ;</li>
              <li>la personne compense ou évite certains appuis ;</li>
              <li>
                la force ou le contrôle restent insuffisants pour les gestes du
                sport ;
              </li>
              <li>
                l’appréhension empêche d’exécuter normalement les mouvements ;
              </li>
              <li>
                les symptômes perturbent la vie quotidienne ou le sommeil.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Les erreurs fréquentes lors du retour au sport
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Reprendre dès que la douleur disparaît.</strong> La douleur
              est un indicateur utile, mais elle ne résume pas la récupération
              de la force, de l’endurance ou du contrôle.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Passer directement de la rééducation à la compétition.</strong>{" "}
              Une phase d’entraînement progressif permet de retrouver les
              contraintes réelles du sport.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Se concentrer uniquement sur la zone blessée.</strong> Le
              tronc, l’autre membre, la mobilité générale et la condition
              physique peuvent aussi influencer le geste sportif.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Augmenter trop vite le volume.</strong> Une hausse brutale
              des séances, de la durée ou de l’intensité peut dépasser la
              capacité actuelle du corps.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>N’utiliser que des soins passifs.</strong> Les techniques
              manuelles peuvent avoir leur place, mais la récupération sportive
              nécessite généralement un travail actif et progressif.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Combien de temps dure une rééducation sportive ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il n’existe pas de durée universelle. Deux personnes ayant reçu le
              même diagnostic peuvent évoluer différemment. La gravité de la
              blessure, les tissus concernés, le traitement médical, les
              antécédents, le sommeil, la régularité des exercices et les
              exigences du sport influencent le parcours.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Le critère le plus utile n’est donc pas seulement « depuis combien
              de temps suis-je blessé ? », mais aussi « quelles capacités ai-je
              réellement retrouvées ? ».
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
              En résumé
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une reprise réussie se construit étape par étape : comprendre la
              blessure, restaurer les capacités physiques, réintroduire les
              gestes sportifs, tester la réponse du corps et augmenter
              progressivement les contraintes. Cette méthode ne supprime jamais
              totalement le risque, mais elle évite de fonder la décision sur la
              seule disparition de la douleur ou sur une date arbitraire.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Vous souhaitez reprendre votre activité après une blessure ? Le
              Cabinet Racines, à Sala Al Jadida, peut réaliser un bilan
              fonctionnel et définir une progression adaptée à votre situation,
              en coordination avec votre médecin lorsque cela est nécessaire.
            </p>

            <aside className="bg-white/70 border-l-4 border-main rounded-r-2xl p-6 my-8">
              <p className="text-gray-800 leading-relaxed m-0">
                <strong>Information importante :</strong> cet article est
                général et ne remplace pas une évaluation médicale ou
                kinésithérapique. Après un traumatisme important, en cas
                d’impossibilité d’appui, de déformation, de douleur intense, de
                perte de sensibilité ou d’aggravation rapide, consultez un
                professionnel de santé sans attendre.
              </p>
            </aside>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Source de référence
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
              <li>
                <a
                  href="https://bjsm.bmj.com/content/50/14/853"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main underline"
                >
                  British Journal of Sports Medicine — Consensus international
                  sur le retour au sport
                </a>
              </li>
            </ul>
          </div>

          <RelatedArticles currentSlug="reeducation-sportive" />

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
