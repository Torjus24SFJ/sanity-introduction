export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(), 
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", 
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "text", 
    },
  ],
});
