const router = [{
        title: '工作台',
        icon: 'workspace',
        key: '/workspace',
        path: '/workspace'
    },
    {
        title: '系统管理',
        icon: 'system',
        key: '/workspace/system',
        children: [{
                title: '用户管理',
                icon: 'user',
                key: '/workspace/system/user',
                path: '/workspace/system/user'
            },
            {
                title: '部门管理',
                icon: 'dept',
                key: '/workspace/system/dept',
                path: '/workspace/system/dept'
            },
            {
                title: '岗位管理',
                icon: 'post',
                key: '/workspace/system/post',
                path: '/workspace/system/post'
            },
            {
                title: '角色管理',
                icon: 'role',
                key: '/workspace/system/role',
                path: '/workspace/system/role'
            },
            {
                title: '菜单管理',
                icon: 'menu',
                key: '/workspace/system/menu',
                path: '/workspace/system/menu'
            },
            {
                title: '日志监控',
                icon: 'log',
                key: '/workspace/system/log',
                children: [
                    {
                        title: '操作日志',
                        icon: 'oper',
                        key: '/workspace/system/log/oper',
                        path: '/workspace/system/log/oper'
                    },
                    {
                        title: '登录日志',
                        icon: 'login',
                        key: '/workspace/system/log/login',
                        path: '/workspace/system/log/login'
                    }
                ]
            }
        ]
    }
];

export default router;