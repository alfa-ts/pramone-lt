import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import {
  activityReportsQuery,
  strategicDirectionsQuery,
} from "@/sanity/lib/queries";
import {
  Sparkles,
  GraduationCap,
  Handshake,
  Shield,
  FileText,
  ExternalLink,
} from "lucide-react";

export default async function VeiklaPage() {
  const [{ data: veiklaReportsData }, { data: veiklaData }] = await Promise.all(
    [
      sanityFetch({ query: activityReportsQuery }),
      sanityFetch({ query: strategicDirectionsQuery }),
    ]
  );

  const reports = veiklaReportsData?.reports || [];
  const misija =
    veiklaData?.misija ||
    "Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus.";
  const vizija =
    veiklaData?.vizija ||
    "Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga.";
  const strategicDirections = veiklaData?.strategicDirections || [];

  // Map strategic directions with icons
  const strategicIcons = [Sparkles, GraduationCap, Handshake, Shield];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Pradžia
            </Link>
            <svg
              className="size-3.5 text-gray-400"
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
            <Link
              href="/apie/istorija"
              className="text-gray-500 hover:text-gray-700"
            >
              Apie mus
            </Link>
            <svg
              className="size-3.5 text-gray-400"
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
            <span className="text-gray-900">Veikla</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Veikla</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            KKPDA atstovauja savo narių interesus įvairiose tarybose ir
            komisijose nacionaliniu ir regioniniu mastu
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Mission, Vision & Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80"
                alt="Business teamwork"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-900 mb-3">Misija</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {misija}
                </p>
              </div>

              <div className="h-px bg-gray-200" />

              <div>
                <h2 className="text-2xl text-gray-900 mb-3">Vizija</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {vizija}
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Directions */}
          {strategicDirections && strategicDirections.length > 0 && (
            <div>
              <div className="text-center mb-10">
                <h2 className="text-2xl text-gray-900 mb-3">
                  Strateginės veiklos kryptys
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strategicDirections.map((direction: any, index: number) => {
                  const IconComponent =
                    strategicIcons[index % strategicIcons.length];
                  return (
                    <div
                      key={direction._key}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#fe9a00] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shrink-0 text-gray-400 group-hover:border-[#fe9a00] group-hover:text-[#fe9a00] transition-colors text-sm font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <IconComponent className="size-5 text-[#fe9a00] mt-0.5 shrink-0" />
                            <h4 className="text-gray-900 font-medium">
                              {direction.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Documents Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full px-4 py-2 mb-4">
            <FileText className="size-5 text-white" />
            <span className="text-white font-medium">Veiklos ataskaitos</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Peržiūrėkite ir atsisiųskite KKPDA metines veiklos ataskaitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {Array.isArray(reports) && reports.length > 0 ? (
            reports.map((report: any) => (
              <div
                key={report._key}
                className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-xl p-3 border border-orange-200 group-hover:bg-gradient-to-b group-hover:from-[#fe9a00] group-hover:to-[#e17100] transition-all">
                    <FileText className="size-8 text-[#fe9a00] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-medium text-gray-900 mb-1">
                      KKPDA {report.period} m. veiklos ataskaita
                    </h4>
                    {report.fileName && (
                      <p className="text-gray-600 text-sm mb-3">
                        {report.fileName}
                      </p>
                    )}
                    {report.fileUrl ? (
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border border-[#fe9a00] text-[#fe9a00] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#fe9a00] hover:text-white transition-colors"
                      >
                        <ExternalLink className="size-4" />
                        Atidaryti dokumentą
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        (failas nepasiekiamas)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-500">Šiuo metu ataskaitų nėra.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
