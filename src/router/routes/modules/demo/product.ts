import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const product: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/productInfoManagement',
  meta: {
    orderNo: 2001,
    icon: 'ion:settings-outline',
    title: t('routes.demo.product.productName'),
  },
  children: [
    {
      path: 'productInfoManagement',
      name: 'productInfoManagement',
      meta: {
        title: t('routes.demo.product.productInfoManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/product/productInfoManagement/index.vue'),
    },
    {
      path: 'productNumberManagement',
      name: 'productNumberManagement',
      meta: {
        title: t('routes.demo.product.productNumberManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/product/productNumberManagement/index.vue'),
    },
  ],
}

export default product
