import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobtitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'is Currently Working Here',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Tachnologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skil'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
