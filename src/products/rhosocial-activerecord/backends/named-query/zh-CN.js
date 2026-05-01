window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '预定义 SQL 查询，参数化与模块化管理。' },
resolver: { label: 'Resolver', title: 'NamedQueryResolver。', desc: '通过完全限定名解析 Python 可调用对象，注入 dialect 返回 BaseExpression。', lifecycle: '生命周期：create → load() → describe() → execute(dialect)' },
procedure: { label: 'Procedure', title: 'Procedure 基类。', desc: '继承 Procedure，实现 run(self, ctx) 方法。', runner: 'ProcedureRunner.run(backend, user_params, transaction_mode) — 执行入口。' },
context: { label: 'Context', title: 'ProcedureContext。', execute: 'execute(qualified_name, params, bind, output) — 执行命名查询。', scalar: 'scalar(var_name, column) — 获取绑定结果标量值。', rows: 'rows(var_name) — 迭代绑定结果行。', bind: 'bind(name, data) — 绑定数据到上下文。', log: 'log(message, level) — 记录日志。', abort: 'abort(procedure_name, reason) — 中止过程。', parallel: 'parallel(*steps, max_concurrency) — 并行执行步骤。' },
module_scan: { label: 'Module Scan', title: '模块扫描。', queries: 'list_named_queries_in_module() — 发现首参数为 dialect 的可调用对象。', procedures: 'list_named_procedures_in_module() — 发现 Procedure 子类。' },
transaction_mode: { label: 'Transaction Mode', title: '事务模式。', auto: 'AUTO — 整个 run() 包裹在单事务中。', step: 'STEP — 每个 ctx.execute() 独立事务。', none: 'NONE — 无事务管理。' },
convenience: { label: 'Convenience', title: '一步解析。', desc: 'resolve_named_query(qualified_name, dialect, params) 返回 (expression, sql, params)。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
