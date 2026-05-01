window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '后端层面事务控制，保存点与隔离级别。' },
manager: { label: 'Manager', title: 'TransactionManager。', sync: 'TransactionManager — 同步事务管理器。', async_: 'AsyncTransactionManager — 异步事务管理器。', base: 'TransactionManagerBase(ABC) — 共享非 I/O 逻辑。' },
isolation: { label: 'Isolation', title: '隔离级别。', read_uncommitted: 'READ_UNCOMMITTED — 读未提交。', read_committed: 'READ_COMMITTED — 读已提交。', repeatable_read: 'REPEATABLE_READ — 可重复读。', serializable: 'SERIALIZABLE — 可串行化。' },
state: { label: 'State', title: '事务状态。', inactive: 'INACTIVE — 无活跃事务。', active: 'ACTIVE — 事务进行中。', committed: 'COMMITTED — 已提交。', rolled_back: 'ROLLED_BACK — 已回滚。' },
control_expr: { label: 'Control Expression', title: '事务控制表达式。', begin: 'BeginTransactionExpression — BEGIN TRANSACTION。', commit: 'CommitTransactionExpression — COMMIT。', rollback: 'RollbackTransactionExpression — ROLLBACK。', savepoint: 'SavepointExpression — SAVEPOINT。', release: 'ReleaseSavepointExpression — RELEASE SAVEPOINT。', set: 'SetTransactionExpression — SET TRANSACTION。' },
savepoint: { label: 'Savepoint', title: '保存点。', desc: '嵌套事务通过保存点实现：level=1 真实 BEGIN，level>1 创建 SAVEPOINT。', create: 'savepoint(name=None) — 创建保存点，自动生成名称。', release: 'release(name) — 释放指定保存点。', rollback_to: 'rollback_to(name) — 回滚到指定保存点。' },
mode: { label: 'Mode', title: '事务模式。', read_write: 'READ_WRITE — 读写模式（默认）。', read_only: 'READ_ONLY — 只读模式。', deferrable: 'DEFERRABLE — PostgreSQL 特有，可延迟约束检查。' },
backend_diff: { label: 'Backend Diff', title: '各后端差异。', sqlite: 'SQLite — 仅 SERIALIZABLE / READ_UNCOMMITTED；DEFERRED / IMMEDIATE / EXCLUSIVE 开始类型。', mysql: 'MySQL — REPEATABLE_READ 默认。', postgres: 'PostgreSQL — 所有标准隔离级别 + DEFERRABLE + READ ONLY / READ WRITE。', oracle: 'Oracle — READ_COMMITTED / SERIALIZABLE。', sqlserver: 'SQL Server — 支持 SNAPSHOT 隔离。' },
context: { label: 'Context Manager', title: '上下文管理器。', desc: 'backend.transaction() — 自动提交/回滚。', isolation: 'manager.transaction(isolation_level=..., mode=...) — 指定隔离级别和模式。' },
errors: { label: 'Errors', title: '错误类型。', transaction: 'TransactionError — 事务基础错误。', isolation: 'IsolationLevelError — 活跃事务中不可更改隔离级别。', unsupported_mode: 'UnsupportedTransactionModeError — 后端不支持该事务模式。', unsupported_isolation: 'UnsupportedIsolationLevelError — 后端不支持该隔离级别。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
