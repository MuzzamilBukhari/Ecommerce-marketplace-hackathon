import { defineType } from "sanity";

export default defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      // validation: (Rule) => Rule.required,
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Sneakers", value: "sneakers" },
          { title: "Joggers", value: "joggers" },
          { title: "Glasses", value: "glasses" },
          { title: "Skechers", value: "skechers" },
          { title: "Slides", value: "slides" },
        ],
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "discountPercent",
      title: "Discount Percent",
      type: "number",
    },
    {
      name: "stock",
      title: "Product Stock",
      type: "number",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "bestSelling",
      type: "boolean",
      title: "Best Selling",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
