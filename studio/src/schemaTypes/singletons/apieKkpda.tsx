import { defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export default defineType({
  name: "apieKkpda",
  title: "Apie KKPDA",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    {
      name: "kasEsame",
      title: "Kas esame",
      type: "array",
      of: [{ type: "block" }],
      description: "Tekstas apie tai, kas mes esame",
    },
    {
      name: "kaAtstovaujame",
      title: "Ką atstovaujame",
      type: "array",
      of: [{ type: "block" }],
      description: "Tekstas apie tai, ką atstovaujame",
    },
    {
      name: "musuMisija",
      title: "Mūsų misija",
      type: "array",
      of: [{ type: "block" }],
      description: "Asociacijos misija",
    },
    {
      name: "musuVizija",
      title: "Mūsų vizija",
      type: "array",
      of: [{ type: "block" }],
      description: "Asociacijos vizija",
    },
    {
      name: "partneryste",
      title: "Verslo ir valstybės partnerystė",
      type: "array",
      of: [{ type: "block" }],
      description: "Tekstas apie verslo ir valstybės partnerystę (bullet points)",
    },
    {
      name: "darboVietos",
      title: "Darbo vietos (tūkst.)",
      type: "number",
      description: "Darbo vietų skaičius tūkstančiais",
    },
    {
      name: "apyvarta",
      title: "Apyvarta (mlrd.)",
      type: "number",
      description: "Apyvarta milijardais eurų",
    },
    {
      name: "organizacijos",
      title: "Verslo organizacijos",
      type: "array",
      of: [
        {
          type: "object",
          name: "organizacija",
          title: "Organizacija",
          fields: [
            {
              name: "logo",
              title: "Logotipas",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "pavadinimas",
              title: "Pavadinimas",
              type: "string",
              description: "Pvz. 'LPK narys'",
            },
            {
              name: "aprasymas",
              title: "Aprašymas",
              type: "text",
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: "pavadinimas",
              media: "logo",
            },
          },
        },
      ],
      description: "Nacionalinės ir tarptautinės verslo organizacijos",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Apie KKPDA",
      };
    },
  },
});

