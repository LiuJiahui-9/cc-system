import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const financialManagement: AppRouteModule = {
  path: '/financialManagement',
  name: 'FinancialManagement',
  component: LAYOUT,
  redirect: '/financialManagement/productInfoManagement',
  meta: {
    orderNo: 2003,
    icon: 'ion:settings-outline',
    title: t('routes.demo.financialManagement.name'),
  },
  children: [
    {
      path: 'institutionalAccountManagement',
      name: 'institutionalAccountManagement',
      meta: {
        title: t('routes.demo.financialManagement.institutionalAccountManagement'),
        ignoreKeepAlive: false,
      },
      component: () =>
        import('/@/views/demo/financialManagement/institutionalAccountManagement/index.vue'),
    },
    // {
    //   path: 'productNumberManagement',
    //   name: 'productNumberManagement',
    //   meta: {
    //     title: t('routes.demo.financialManagement.productNumberManagement'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () =>
    //     import('/@/views/demo/financialManagement/productNumberManagement/index.vue'),
    // },
  ],
}

export default financialManagement
