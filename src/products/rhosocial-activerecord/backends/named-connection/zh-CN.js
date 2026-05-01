window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '连接别名管理，多数据源切换。' },
resolver: { label: 'Resolver', title: 'NamedConnectionResolver。', desc: '通过完全限定名解析 Python 可调用对象返回 ConnectionConfig。', lifecycle: '生命周期：create → load() → describe() → resolve()' },
validators: { label: 'Validators', title: '安全验证。', validate: 'validate_connection_config() 校验返回类型为 BaseConfig。', filter: 'filter_sensitive_fields() 脱敏字段：password / secret / token / api_key / private_key。' },
module_scan: { label: 'Module Scan', title: '模块扫描。', desc: 'list_named_connections_in_module() 自动发现模块中所有可调用对象。' },
convenience: { label: 'Convenience', title: '一步解析。', desc: 'resolve_named_connection(qualified_name, user_params) 便捷函数。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
