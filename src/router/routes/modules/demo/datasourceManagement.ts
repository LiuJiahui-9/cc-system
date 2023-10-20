import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const datasource: AppRouteModule = {
  path: '/datasource',
  name: 'Datasource',
  component: LAYOUT,
  redirect: '/datasource/basic',
  meta: {
    orderNo: 2004,
    icon: 'ion:global-outline',
    title: t('routes.demo.datasource.name'),
  },
  children: [
    {
      path: 'basic',
      name: 'BasicInfo',
      meta: {
        title: t('routes.demo.datasource.basic'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/datasource/basic/index.vue'),
    },
    {
      path: 'mappingConfiguration',
      name: 'MappingConfiguration',
      meta: {
        title: t('routes.demo.datasource.mappingConfiguration'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/datasource/mappingConfiguration/index.vue'),
    },
    {
      path: 'distributionRuleConfiguration',
      name: 'DistributionRuleConfiguration',
      meta: {
        title: t('routes.demo.datasource.distributionRuleConfiguration'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/datasource/distributionRuleConfiguration/index.vue'),
    },
    {
      path: 'switchChainConfiguration',
      name: 'SwitchChainConfiguration',
      meta: {
        title: t('routes.demo.datasource.switchChainConfiguration'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/datasource/switchChainConfiguration/index.vue'),
    },
    {
      path: 'switchRuleConfiguration',
      name: 'SwitchRuleConfiguration',
      meta: {
        title: t('routes.demo.datasource.switchRuleConfiguration'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/datasource/switchRuleConfiguration/index.vue'),
    },
    {
      path: 'errorCodeMapping',
      name: 'ErrorCodeMapping',
      meta: {
        title: t('routes.demo.datasource.errorCodeMapping'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/datasource/errorCodeMapping/index.vue'),
    },
  ],
}

export default datasource
