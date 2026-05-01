window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Predefined SQL queries, parameterization and modular management.' },
resolver: { label: 'Resolver', title: 'NamedQueryResolver.', desc: 'Resolve Python callable objects by fully qualified name, inject dialect, return BaseExpression.', lifecycle: 'Lifecycle: create → load() → describe() → execute(dialect)' },
procedure: { label: 'Procedure', title: 'Procedure Base Class.', desc: 'Inherit Procedure, implement run(self, ctx) method.', runner: 'ProcedureRunner.run(backend, user_params, transaction_mode) — Execution entry point.' },
context: { label: 'Context', title: 'ProcedureContext.', execute: 'execute(qualified_name, params, bind, output) — Execute a named query.', scalar: 'scalar(var_name, column) — Get scalar value from bound result.', rows: 'rows(var_name) — Iterate bound result rows.', bind: 'bind(name, data) — Bind data to context.', log: 'log(message, level) — Record log entry.', abort: 'abort(procedure_name, reason) — Abort procedure.', parallel: 'parallel(*steps, max_concurrency) — Execute steps in parallel.' },
module_scan: { label: 'Module Scan', title: 'Module Scanning.', queries: 'list_named_queries_in_module() — Discover callables with dialect as first param.', procedures: 'list_named_procedures_in_module() — Discover Procedure subclasses.' },
transaction_mode: { label: 'Transaction Mode', title: 'Transaction Modes.', auto: 'AUTO — Entire run() wrapped in single transaction.', step: 'STEP — Each ctx.execute() runs in its own transaction.', none: 'NONE — No transaction management.' },
convenience: { label: 'Convenience', title: 'One-step Resolution.', desc: 'resolve_named_query(qualified_name, dialect, params) returns (expression, sql, params).' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
