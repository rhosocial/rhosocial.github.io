window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回后端', sub: '实现 StorageBackend + SQLDialectBase + ConnectionConfig + TypeAdapter + TransactionManager，接入任意数据库。' },
  overview: {
    label: 'Overview', title: '后端架构。',
    desc: '每个后端由五个核心组件构成：Backend（连接与执行）、Dialect（SQL 生成）、Config（连接配置）、TypeAdapter（类型转换）、TransactionManager（事务控制）。'
  },
  file_structure: { label: 'Structure', title: '文件结构。' },
  backend_abc: {
    label: 'Backend ABC', title: '实现 Backend。',
    desc: 'StorageBackend 组合 12 个 Mixin，仅需实现 6 个抽象方法 + transaction_manager 属性。'
  },
  dialect_base: {
    label: 'Dialect', title: '实现 Dialect。',
    desc: 'SQLDialectBase 不是 ABC，提供全部默认实现。子类仅需覆盖目标数据库语法不同的 format_*() 方法。33 个 Protocol 类定义能力接口。'
  },
  config_class: {
    label: 'Config', title: '实现 Config。',
    desc: 'ConnectionConfig 继承 BaseConfig + BasicConnectionMixin。7 组 Mixin 可按需混入：Pool / SSL / Charset / Timezone / Version / Logging。'
  },
  type_adapter: {
    label: 'TypeAdapter', title: '实现 TypeAdapter。',
    desc: 'BaseSQLTypeAdapter 定义两个抽象方法：_do_to_database() 和 _do_from_database()。框架提供 7 个标准适配器。'
  },
  transaction_mgr: {
    label: 'Transaction', title: '实现 TransactionManager。',
    desc: 'TransactionManager 使用模板方法模式，6 个 _do_*() 钩子方法可按需覆盖。默认实现通过 backend.execute() 发送 SQL。'
  },
  protocol_classes: { label: 'Protocols', title: '33 个能力协议。' },
  registration: {
    label: 'Registration', title: '注册与发现。',
    desc: '采用命名空间包架构（rhosocial.activerecord.backend.impl.<name>），无集中注册表。用户通过直接导入或 BackendGroup 配置使用后端。'
  },
  testing: { label: 'Testing', title: '测试策略。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
