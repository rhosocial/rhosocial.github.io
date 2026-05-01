window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Connection alias management, multi-datasource switching.' },
resolver: { label: 'Resolver', title: 'NamedConnectionResolver.', desc: 'Resolve Python callable objects by fully qualified name to return ConnectionConfig.', lifecycle: 'Lifecycle: create → load() → describe() → resolve()' },
validators: { label: 'Validators', title: 'Validation & Security.', validate: 'validate_connection_config() validates return type is BaseConfig.', filter: 'filter_sensitive_fields() redacts: password / secret / token / api_key / private_key.' },
module_scan: { label: 'Module Scan', title: 'Module Scanning.', desc: 'list_named_connections_in_module() auto-discovers all callables in a module.' },
convenience: { label: 'Convenience', title: 'One-step Resolution.', desc: 'resolve_named_connection(qualified_name, user_params) convenience function.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
