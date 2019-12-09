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
                  buildHookId: '5dee7f721180bd5faf032a5c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-he2fhp4b',
                  apiId: '20288ec2-ff62-4eea-be37-c24cc6ac429b'
                },
                {
                  buildHookId: '5dee7f72605af3480689fe8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w4axrfpq',
                  apiId: '33e2f994-a94a-4cd3-9880-639181ea2c9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reyrahn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w4axrfpq.netlify.com', category: 'apps'}
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
