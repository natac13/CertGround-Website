module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started'
    },
    {
      type: 'category',
      label: 'Members',
      items: [
        'member/member-profile',
        'member/cert-share',
        'member/class-calendar',
        {
          type: 'category',
          label: 'Helper Tools',
          items: [
            {
              type: 'category',
              label: 'Electrical',
              items: [
                'member/tools/electrical/phase-color-finder',
                'member/tools/electrical/conduit-bending-chart'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Admins',
      items: [
        {
          type: 'category',
          label: 'Classes',
          items: [
            'admins/class/create',
            'admins/class/calendar',
            'admins/class/search'
          ]
        },
        {
          type: 'category',
          label: 'Members',
          items: [
            'admins/member/create',
            'admins/member/list',
            'admins/member/details',
            'admins/member/search',
            'admins/member/course-certify',
            'admins/member/required-course-payment',
            'admins/member/spreadsheet-csv'
          ]
        },
        {
          type: 'category',
          label: 'Courses',
          items: [
            'admins/course/create',
            'admins/course/list',
            'admins/course/job-ready'
          ]
        }
      ]
    },
    {
      type: 'doc',
      id: 'dashboard'
    },
    {
      type: 'doc',
      id: 'about'
    },
    {
      type: 'doc',
      id: 'faqs'
    }
  ]
}
