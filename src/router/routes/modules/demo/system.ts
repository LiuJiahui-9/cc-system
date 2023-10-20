import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.demo.system.account'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/demo/system/account/AccountDetail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.demo.system.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/role/index.vue'),
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.demo.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/menu/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.demo.system.dept'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/dept/index.vue'),
    },
    // {
    //   path: 'changePassword',
    //   name: 'ChangePassword',
    //   meta: {
    //     title: t('routes.demo.system.password'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/password/index.vue'),
    // },
    {
      path: 'positionManagement',
      name: 'positionManagement',
      meta: {
        title: t('routes.demo.system.positionManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/positionManagement/index.vue'),
    },
    {
      path: 'dictionaryManagement',
      name: 'dictionaryManagement',
      meta: {
        title: t('routes.demo.system.dictionaryManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/dictionaryManagement/index.vue'),
    },
    {
      path: 'parameterManagement',
      name: 'parameterManagement',
      meta: {
        title: t('routes.demo.system.parameterManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/parameterManagement/index.vue'),
    },
    {
      path: 'announcement',
      name: 'announcement',
      meta: {
        title: t('routes.demo.system.announcement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/announcement/index.vue'),
    },
    {
      path: 'logManagement',
      name: 'logManagement',
      meta: {
        title: t('routes.demo.system.logManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/logManagement/index.vue'),
    },
  ],
}

export default system
