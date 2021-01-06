const router = [{
        title: '工作台',
        icon: 'home',
        key: 'home',
        path: 'home'
    },
    {
        title: '系统管理',
        icon: 'system',
        key: 'system',
        children: [{
                title: '用户管理',
                icon: 'user',
                key: 'user',
                path: 'system/user'
            },
            {
                title: '部门管理',
                icon: 'dept',
                key: 'dept',
                path: 'system/dept'
            },
            {
                title: '岗位管理',
                icon: 'post',
                key: 'post',
                path: 'system/post'
            },
            {
                title: '角色管理',
                icon: 'role',
                key: 'role',
                path: 'system/role'
            },
            {
                title: '菜单管理',
                icon: 'menu',
                key: 'menu',
                path: 'system/menu'
            },
            {
                title: '日志监控',
                icon: 'log',
                key: 'log',
                children: [
                    {
                        title: '操作日志',
                        icon: 'oper',
                        key: 'oper',
                        path: 'system/log/oper'
                    },
                    {
                        title: '登录日志',
                        icon: 'login',
                        key: 'login',
                        path: 'system/log/login'
                    }
                ]
            }
        ]
    }
];

export default router;