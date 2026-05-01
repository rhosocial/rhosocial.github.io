window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'Backends', sub: 'Implement StorageBackend + SQLDialectBase + ConnectionConfig + TypeAdapter + TransactionManager to support any database.' },
  overview: {
    label: 'Overview', title: 'Backend Architecture.',
    desc: 'Each backend consists of five core components: Backend (connection & execution), Dialect (SQL generation), Config (connection configuration), TypeAdapter (type conversion), TransactionManager (transaction control).'
  },
  file_structure: { label: 'Structure', title: 'File Structure.' },
  backend_abc: {
    label: 'Backend ABC', title: 'Implement Backend.',
    desc: 'StorageBackend composes 12 Mixins, only 6 abstract methods + transaction_manager property need implementation.'
  },
  dialect_base: {
    label: 'Dialect', title: 'Implement Dialect.',
    desc: 'SQLDialectBase is not an ABC — it provides default implementations for all methods. Subclasses only override format_*() methods where their SQL syntax differs. 33 Protocol classes define capability interfaces.'
  },
  config_class: {
    label: 'Config', title: 'Implement Config.',
    desc: 'ConnectionConfig extends BaseConfig + BasicConnectionMixin. 7 mixin groups available: Pool / SSL / Charset / Timezone / Version / Logging.'
  },
  type_adapter: {
    label: 'TypeAdapter', title: 'Implement TypeAdapter.',
    desc: 'BaseSQLTypeAdapter defines two abstract methods: _do_to_database() and _do_from_database(). Framework provides 7 standard adapters.'
  },
  transaction_mgr: {
    label: 'Transaction', title: 'Implement TransactionManager.',
    desc: 'TransactionManager uses Template Method pattern with 6 _do_*() hook methods to override. Default implementations send SQL via backend.execute().'
  },
  protocol_classes: { label: 'Protocols', title: '33 Capability Protocols.' },
  registration: {
    label: 'Registration', title: 'Registration & Discovery.',
    desc: 'Uses namespace package architecture (rhosocial.activerecord.backend.impl.<name>), no central registry. Users import backends directly or configure via BackendGroup.'
  },
  testing: { label: 'Testing', title: 'Testing Strategy.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
