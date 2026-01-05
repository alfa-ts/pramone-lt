import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { legalDocumentsQuery } from "@/sanity/lib/queries";
import PortableText from "@/app/components/PortableText";
import {
  Scale,
  CheckCircle,
  ExternalLink,
  Eye,
  Heart,
  Handshake,
  Leaf,
  ShieldX,
  Lock,
  Shield,
  type LucideIcon,
} from "lucide-react";

// Icon mapping for dynamic icons
const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  heart: Heart,
  handshake: Handshake,
  leaf: Leaf,
  shieldX: ShieldX,
  lock: Lock,
  shield: Shield,
  check: CheckCircle,
};

// Note icons cycle
const noteIcons = [CheckCircle, Scale, Shield];

export default async function IstataiPage() {
  const { data } = await sanityFetch({ query: legalDocumentsQuery });

  // Extract data
  const introTitle = data?.introTitle;
  const introText = data?.introText;
  const introImageUrl = data?.introImageUrl;
  const statutesUrl = data?.statutesUrl;
  const ethicsTitle = data?.ethicsTitle;
  const ethicsDescription = data?.ethicsDescription;
  const ethicsValuesIntro = data?.ethicsValuesIntro;
  const ethicsValues = data?.ethicsValues;
  const ethicsNotes = data?.ethicsNotes;
  const ethicsUrl = data?.ethicsUrl;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 pt-12 pb-16 border-b border-gray-200/50 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-gray-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-gray-200/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-gray-200/40 rounded-2xl rotate-12" />
        <div className="absolute bottom-8 right-12 w-24 h-24 border-2 border-blue-200/30 rounded-full" />
        <div className="absolute top-8 left-1/2 w-16 h-16 bg-gray-300/10 rounded-lg rotate-45" />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Pradžia
            </Link>
            <svg
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <Link href="/apie/istorija" className="hover:text-gray-700">
              Apie mus
            </Link>
            <svg
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <span className="text-gray-900">Įstatai</span>
          </div>

          <div className="mb-12">
            <h1 className="mb-3 text-5xl md:text-6xl lg:text-7xl">Įstatai</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      {(introTitle || introText || introImageUrl || statutesUrl) && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {introTitle && (
                  <h2 className="text-3xl text-gray-900 mb-8">{introTitle}</h2>
                )}

                {introText && (
                  <article className="prose prose-lg max-w-none text-gray-600">
                    <PortableText value={introText as any} />
                  </article>
                )}

                {statutesUrl && (
                  <a
                    href={statutesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-xl font-medium hover:from-slate-800 hover:to-slate-900 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Peržiūrėti KKPDA įstatus
                    <ExternalLink className="size-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              {introImageUrl && (
                <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-slate-500/10 transition-shadow">
                  <Image
                    src={introImageUrl}
                    alt="Įstatai"
                    fill
                    className="object-cover object-right"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Ethics Code Detailed Section */}
      {(ethicsTitle || ethicsDescription || ethicsValues?.length || ethicsNotes?.length || ethicsUrl) && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto px-8 lg:px-12">
            {/* Header */}
            {(ethicsTitle || ethicsDescription) && (
              <div className="mb-12">
                {ethicsTitle && (
                  <h2 className="text-3xl text-gray-900 mb-4">{ethicsTitle}</h2>
                )}
                {ethicsDescription && (
                  <p className="text-gray-600 leading-relaxed">
                    {ethicsDescription}
                  </p>
                )}
              </div>
            )}

            {/* Core Values - Highlighted Section */}
            {(ethicsValuesIntro || (ethicsValues && ethicsValues.length > 0)) && (
              <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg mb-16">
                {ethicsValuesIntro && (
                  <p className="text-gray-800 text-xl sm:text-2xl leading-relaxed mb-8 text-center">
                    {ethicsValuesIntro}
                  </p>
                )}

                {ethicsValues && ethicsValues.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ethicsValues.map(
                      (
                        value: { title: string; icon?: string },
                        index: number
                      ) => {
                        const IconComponent =
                          iconMap[value.icon || "shield"] || Shield;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                          >
                            <div className="size-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shrink-0">
                              <IconComponent className="size-7 text-slate-700" />
                            </div>
                            <span className="text-gray-900 font-medium leading-tight">
                              {value.title}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Section */}
            {((ethicsNotes && ethicsNotes.length > 0) || ethicsUrl) && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                {ethicsNotes && ethicsNotes.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-8 lg:mb-10">
                    {ethicsNotes.map(
                      (
                        note: { text: string; isItalic?: boolean },
                        index: number
                      ) => {
                        const NoteIcon = noteIcons[index % noteIcons.length];
                        return (
                          <div key={index} className="flex gap-3">
                            <NoteIcon className="size-5 text-slate-600 shrink-0 mt-0.5" />
                            <p
                              className={`text-gray-700 leading-relaxed text-sm ${
                                note.isItalic ? "italic" : ""
                              }`}
                            >
                              {note.text}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}

                {/* CTA Button */}
                {ethicsUrl && (
                  <div className="text-center pt-2 lg:pt-4">
                    <a
                      href={ethicsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-xl font-medium hover:from-slate-800 hover:to-slate-900 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      Peržiūrėti Etikos Kodeksą
                      <ExternalLink className="size-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
