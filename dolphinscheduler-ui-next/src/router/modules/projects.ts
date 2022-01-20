/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Component } from 'vue'
import utils from '@/utils'

// All TSX files under the views folder automatically generate mapping relationship
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

export default {
  path: '/projects',
  name: 'projects',
  redirect: { name: 'projects-list' },
  meta: { title: '项目管理' },
  component: () => import('@/layouts/content'),
  children: [
    {
      path: '/projects/list',
      name: 'projects-list',
      component: components['list'],
      meta: {
        title: '项目',
        showSide: false
      }
    },
    {
      path: '/projects/:projectCode/workflow-monitor',
      name: 'workflow-monitor',
      component: components['workflow-monitor'],
      meta: {
        title: '工作流监控',
        showSide: true
      }
    },
    {
      path: '/projects/:projectCode/workflow-relation',
      name: 'workflow-relation',
      component: components['workflow-relation'],
      meta: {
        title: '工作流关系'
      }
    },
    {
      path: '/projects/:projectCode/workflow-definitions',
      name: 'workflow-definition-list',
      component: components['workflow-definition-list'],
      meta: {
        title: '工作流定义'
      }
    },
    {
      path: '/projects/:projectCode/workflow-definitions/create',
      name: 'workflow-definition-create',
      component: components['workflow-definition-create'],
      meta: {
        title: '创建工作流定义'
      }
    },
    {
      path: '/projects/:projectCode/workflow-definitions/:code',
      name: 'workflow-definition-details',
      component: components['workflow-definition-details'],
      meta: {
        title: '工作流定义详情'
      }
    },
    {
      path: '/projects/:projectCode/workflow-instances',
      name: 'workflow-instance-list',
      component: components['workflow-instance-list'],
      meta: {
        title: '工作流实例'
      }
    },
    {
      path: '/projects/:projectCode/workflow-instances/:id',
      name: 'workflow-instance-details',
      component: components['workflow-instance-details'],
      meta: {
        title: '工作流实例详情'
      }
    },
    {
      path: '/projects/:projectCode/task-instances',
      name: 'task-instance-list',
      component: components['task-instance-list'],
      meta: {
        title: '任务实例'
      }
    },
    {
      path: '/projects/:projectCode/task-definitions',
      name: 'task-definition-list',
      component: components['task-definition-list'],
      meta: {
        title: '任务定义'
      }
    }
  ]
}
