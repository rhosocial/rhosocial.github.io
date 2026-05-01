window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '存储过程调用，输入/输出参数管理。' },
call: { label: 'Call', title: '调用语法。', desc: 'StatementType.CALL / EXECUTE 枚举值已定义。', note: '注意：当前版本通过 Procedure 编排 Python 层查询流程，非 SQL CALL 语句生成。' },
params: { label: 'Parameters', title: '参数绑定。', input: '输入参数 — Procedure 类属性注解定义。', output: '输出参数 — ctx.execute(output=True) 返回结果。', inout: 'ProcedureContext.bind() — 绑定中间数据。' },
procedure: { label: 'Procedure', title: 'Procedure 基类。', desc: '继承 Procedure，实现 run(ctx) 方法。', params_method: 'get_parameters() — 自省类属性注解。', diagram: 'static_diagram() — 生成 Mermaid 流程图。' },
backend_diff: { label: 'Backend Diff', title: '后端差异。', desc: '各数据库存储过程调用语法差异通过方言系统处理。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
