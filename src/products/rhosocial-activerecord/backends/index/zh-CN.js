window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { eyebrow: 'Pluggable Backends', title: '用 <em>Backend ABC</em> 写你的数据库。', sub: '后端可插拔，一套 API 兼容多方言。', back: '返回后端' },
  backends: { label: 'Supported', title: '选择你的<em>后端</em>。', sqlite: { desc: '内置，无需安装。' }, postgres: { desc: '30+ 扩展，支持向量搜索。' }, mysql: { desc: 'JSON、全文搜索、空间数据。' }, mariadb: { desc: 'MySQL 分支，GaussDB 兼容。' }, sqlserver: { desc: 'T-SQL，Window Functions。' }, oracle: { desc: 'PL/SQL，企业级。' } },
  features: { label: 'Features', title: 'SQLite 特性。', zero: { title: '零配置', desc: '开箱即用，无需安装服务器。' }, file: { title: '单文件', desc: '整个数据库是一个文件，便于分发。' }, acid: { title: '完整 ACID', desc: '事务保证原子性、一致性、隔离性、持久性。' }, cross: { title: '跨平台', desc: 'Windows、Linux、macOS、Android、iOS 通用的。' } },
  example: { label: 'Example', title: '快速开始。' },
  abc: { label: 'Backend ABC', title: '写你自己的<em>后端</em>，也就几十行。', intro: '实现 Backend 接口，即可接入新数据库。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' },
  create: { label: 'Create', title: '创建记录。' },
  read: { label: 'Read', title: '读取记录。' },
  update: { label: 'Update', title: '更新记录。' },
  delete: { label: 'Delete', title: '删除记录。' }
};