export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7b773b84588e0e85e7935c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4tqi6kzs',
                  apiId: '1614d024-6b00-425a-97a2-fa9a2ab48ee5'
                },
                {
                  buildHookId: '5d7b773b07424b61ee4205de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ttyqanf2',
                  apiId: 'd07e5693-5443-48c0-9823-73e8102905f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MBehtemam/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ttyqanf2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
