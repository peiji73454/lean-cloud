import {AnyAction} from "redux";
export const routecss = (state = "left", action: any) => {
    switch (action.type) {
        case 'left':
            return "left"
        case 'right':
            return "right"
        default :
            return state
    }
}


const initData = {
    Curl: '// how to save a new object.\n' +
        'curl -X POST\n' +
        '  -H "X-LC-Id: {yourAppId}"\n' +
        '  -H "X-LC-Key: {yourAppKey}"\n' +
        '  -H "Content-Type: application/json"\n' +
        '  -d \'{"content": "每个 Java 程序员必备的 8 个开发工具","pubUser": "LeanCloud官方客服","pubTimestamp": 1435541999}\'\n' +
        'https://zep7vtap.api.lncld.net/1.1/classes/Post',
    Java: 'AVObject post = new AVObject("Post");\n' +
        'post.put("content", "每个 Java 程序员必备的 8 个开发工具");\n' +
        'post.put("pubUser", "LeanCloud官方客服");\n' +
        'post.put("pubTimestamp", 1435541999);\n' +
        'post.saveInBackground();  // save to LeanCloud',
    JS: 'var Post = AV.Object.extend(\'Post\');\n' +
        '// create a new post instance.\n' +
        'var post = new Post();\n' +
        'post.set(\'content\',\'每个 Java 程序员必备的 8 个开发工具\');\n' +
        'post.set(\'pubUser\', \'LeanCloud官方客服\');\n' +
        'post.set(\'pubTimestamp\',1435541999);\n' +
        'post.save().then(function (post) {\n' +
        '  console.log(\'objectId is \' + post.id);\n' +
        '}, function (error) {\n' +
        '  console.error(error);',
    'Obj-C': 'AVObject *post = [[AVObject alloc] initWithClassName:@"Post"];\n' +
        '[post setObject:@"每个 Java 程序员必备的 8 个开发工具" forKey:@"content"];\n' +
        '[post setObject:@"LeanCloud官方客服" forKey:@"pubUser"];\n' +
        '[post setObject:@1435541999 forKey:@"pubTimestamp"];\n' +
        '[post saveInBackground];  // save to LeanCloud',
    Swift: 'let post = LCObject(className: "Post")\n' +
        'post.set("content", value: "每个 Java 程序员必备的 8 个开发工具")\n' +
        'post.set("pubUser", value: "LeanCloud官方客服")\n' +
        'post.set("pubTimestamp", value: 1435541999)\n' +
        'post.save { result in\n' +
        '  switch result {\n' +
        '    case .success:\n' +
        '      break\n' +
        '    case .failure(let error):\n' +
        '      print(error)\n' +
        '  }\n' +
        '}',
    'C#': 'AVObject post = new AVObject("Post");\n' +
        'post["content"] = "每个 Java 程序员必备的 8 个开发工具";\n' +
        'post["pubUser"] = "LeanCloud官方客服";\n' +
        'post["pubTimestamp"] = 1435541999;\n' +
        'Task saveTask = post.SaveAsync();\n' +
        'await saveTask;',
    Python: 'import leancloud\n' +
        'Post = leancloud.Object.extend(\'Post\')\n' +
        'post = Post()\n' +
        'post.set(\'pubUser\', \'LeanCloud官方客服\')\n' +
        'post.set(\'content\', \'每个 Java 程序员必备的 8 个开发工具\')\n' +
        'post.set(\'pubTimestamp\', 1435541999)\n' +
        'post.save()',
    PHP: 'use LeanCloudLeanObject;\n' +
        '\n' +
        '$post = new LeanObject("Post");\n' +
        '$post->set(\'pubUser\', \'LeanCloud官方客服\');\n' +
        '$post->set(\'content\', \'每个 Java 程序员必备的 8 个开发工具\');\n' +
        '$post->set(\'pubTimestamp\', 1435541999);\n' +
        'try {\n' +
        '  $post->save();\n' +
        '} catch (CloudException $ex) {\n' +
        '  // handle exception.\n' +
        '}'
}


const PROGRAM = 'PROGRAM'
const PROGRAMDETAIL = 'PROGRAMDETAIL'
const program = (state = initData, action: AnyAction) => {
    switch (action.type) {
        case PROGRAM:
            return state
        default:
            return initData
    }
};
const programDetail = (state = initData.Curl, action: AnyAction) => {
    switch (action.type) {
        case PROGRAMDETAIL:
            // @ts-ignore
            return initData[action.lang]
        default:
            return initData.Curl
    }
};
const headerData = {
    homeList: [{id: 1, name: '产品', url: '/product'},
        {id: 2, name: '价格', url: '/pricing'},
        {id: 3, name: '用户', url: '/customers'},
        {id: 4, name: '文档', url: '/docs'},
        {id: 5, name: '学习', url: '/tutorials'},
        {id: 6, name: '帮助', url: '/support'},
        {id: 7, name: '国际版', url: '/pricing'},
    ],
    docList: [
        {id: 0, name: '文档首页', url: '/docs', islink: true},
        {id: 1, name: 'SDK下载', url: '/docs/download', islink: true},
        {id: 2, name: 'Demos', url: '/docs/demo', islink: true},
        {id: 3, name: 'API 文档', url: '/docs/api', islink: false},
        {id: 4, name: 'SDK 数据收集', url: '/docs/dataSearch', islink: false},
        {id: 5, name: '帮助', url: '/docs/help', islink: false},
        {id: 6, name: '国际版 (English)', url: '/docs/i18n', islink: true},
    ],
    subHeadQueryList: [
        {
            id: 1, name: '功能概览', detail:
                [{id: 1, name: '数据存储服务总览', url: '/storage_overview'},
                    {id: 2, name: '云引擎服务总览', url: '/leanengine_overview'},
                    {id: 3, name: '推送通知服务总览', url: '/push_guide'},
                    {id: 4, name: '即时通讯服务总览', url: '/realtime_v2'},
                    {id: 5, name: '管理控制台使用指南', url: '/dashboard_guide'},
                    {id: 6, name: '数据和安全', url: '/data_security'},
                    {id: 7, name: '错误码详解', url: '/error_code'},
                    {id: 8, name: '常见问题一览', url: '/faq'},
                    {id: 9, name: '常见功能提示', url: '/tool_tips'},
                ]
        },
        {
            id: 1, name: 'Objective-C', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                    {id: 2, name: '数据存储开发指南', url: '/leanstorage_guide-objc'},
                    {id: 3, name: '消息推送开发指南', url: '/ios_push_guide'},
                    {id: 4, name: 'iOS 推送设置指南', url: '/ios_push_cert'},
                    {id: 5, name: '即时通讯开发指南', url: '/realtime-guide-beginner'},
                    {id: 6, name: '数据模型设计指南', url: '/relation-guide'},
                    {id: 7, name: 'ACL 权限管理指南', url: '/acl-guide'},
                    {id: 8, name: '短信服务使用指南', url: '/sms-guide'},
                    {id: 9, name: 'FAQ', url: '/faq/hash-1279497952'},
                    {id: 10, name: 'SDK API', url: '/api-docs/iOS/index'},
                ]
        },
        {
            id: 1, name: 'Swift', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'Android', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'JavaScript', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: '.NET/Unity', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'Python', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },    {
            id: 1, name: 'PHP', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'Java', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'Go', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: 'REST API', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: '云引擎', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: '游戏解决方案', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
        {
            id: 1, name: '更多', detail:
                [{id: 1, name: 'SDK 安装指南', url: '/sdk_setup-objc'},
                ]
        },
    ]
}
const HOMELIST = 'HOMELIST'
const DOCLIST = 'DOCLIST'
const queryList = (state = headerData, action: any) => {
    switch (action.type) {
        case HOMELIST:
            return headerData['homeList']
        case DOCLIST:
            return headerData['docList']
        default :
            return headerData['homeList']
    }
}
const docQueryList = (state = headerData, action: any) => {
    switch (action.type) {
        case DOCLIST:
            return headerData['docList']
        default :
            return headerData['docList']
    }
}

const docResults = (state = [], action: any) => {
    let res: string[] = [];
    const {type} = action
    if (!type || type.indexOf('@') >= 0) {
        res = [];
    } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${type}@${domain}`);
    }
    return res
}
const subHeadQueryList = () =>headerData['subHeadQueryList']


export {program, programDetail, queryList, docQueryList, docResults,subHeadQueryList}
