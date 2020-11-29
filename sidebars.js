module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'about'
    },
    {
      type: 'doc',
      id: 'getting-started'
    },
    {
      type: 'doc',
      id: 'dashboard'
    },
    {
      type: 'category',
      label: 'Members',
      items: [
        'member/member-profile',
        'member/cert-share',
        'member/class-calendar'
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
    }
  ],
  someSidebar: {
    CertGround: ['about', 'getting-started', 'dashboard'],
    Members: []
    // Admins: [
    //   {
    //     Classes: ['create', 'calendar', 'search'],
    //     Members: [
    //       'create',
    //       'list',
    //       'search',
    //       'course-certify',
    //       'required-course-payment',
    //       'spreadsheet-csv'
    //     ],
    //     Courses: ['create', 'list', 'job-ready']
    //   }
    // ]
  }
}
