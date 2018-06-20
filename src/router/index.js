import Vue from 'vue'
import Router from 'vue-router'
import Tables from '@/components/Tables'
import TableDetail from '@/components/TableDetail'
import Notes from '@/components/Notes'
import NoteDetail from '@/components/NoteDetail'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import UpdatedTablesList from '@/components/Tables/UpdatedTablesList'
import CreateEditTable from '@/components/CreateEditTable'
import UpdatedNotesList from '@/components/Notes/UpdatedNotesList'
import CreateEditNote from '@/components/CreateEditNote'

Vue.use(Router)
Vue.use(VueBreadcrumbs)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tables',
      component: Tables,
      meta: {
        breadcrumb: 'Tables'
      },
      children: [
        {
          path: 'details',
          name: 'TableDetail',
          component: TableDetail,
          meta: {
            breadcrumb: 'Table Metadata'
          }
        }
      ]
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes,
      meta: {
        breadcrumb: 'Notes'
      },
      children: [
        {
          path: 'details',
          name: 'NoteDetail',
          component: NoteDetail,
          meta: {
            breadcrumb: 'Note Metadata'
          }
        }
      ]
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2/:id',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/updatedTablesList',
      name: 'UpdatedTablesList',
      component: UpdatedTablesList,
      meta: {
        breadcrumb: 'Tables'
      }
    },
    {
      path: '/createedittable/:tableString',
      name: 'CreateEditTable',
      component: CreateEditTable,
      meta: {
        breadcrumb: 'Tables > Table Metadata'
      }
    },
    {
      path: '/updatedNotesList',
      name: 'UpdatedNotesList',
      component: UpdatedNotesList,
      meta: {
        breadcrumb: 'Notes'
      }
    },
    {
      path: '/createeditnote/:noteString',
      name: 'CreateEditNote',
      component: CreateEditNote,
      meta: {
        breadcrumb: 'Notes > Note Metadata'
      }
    }
  ]
})
