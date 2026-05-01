window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Stored procedure invocation, input/output parameter management.' },
call: { label: 'Call', title: 'Call Syntax.', desc: 'StatementType.CALL / EXECUTE enum values are defined.', note: 'Note: Current version orchestrates queries at Python level via Procedure, not SQL CALL generation.' },
params: { label: 'Parameters', title: 'Parameter Binding.', input: 'Input parameters — defined via Procedure class attribute annotations.', output: 'Output parameters — ctx.execute(output=True) returns results.', inout: 'ProcedureContext.bind() — bind intermediate data.' },
procedure: { label: 'Procedure', title: 'Procedure Base Class.', desc: 'Inherit Procedure, implement run(ctx) method.', params_method: 'get_parameters() — introspect class attribute annotations.', diagram: 'static_diagram() — generate Mermaid flowchart.' },
backend_diff: { label: 'Backend Diff', title: 'Backend Differences.', desc: 'Database-specific stored procedure call syntax handled via the dialect system.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
