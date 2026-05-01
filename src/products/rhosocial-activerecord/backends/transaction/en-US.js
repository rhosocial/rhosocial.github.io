window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Backend-level transaction control, savepoints and isolation levels.' },
manager: { label: 'Manager', title: 'TransactionManager.', sync: 'TransactionManager — Synchronous transaction manager.', async_: 'AsyncTransactionManager — Asynchronous transaction manager.', base: 'TransactionManagerBase(ABC) — Shared non-I/O logic.' },
isolation: { label: 'Isolation', title: 'Isolation Levels.', read_uncommitted: 'READ_UNCOMMITTED — Read uncommitted.', read_committed: 'READ_COMMITTED — Read committed.', repeatable_read: 'REPEATABLE_READ — Repeatable read.', serializable: 'SERIALIZABLE — Serializable.' },
state: { label: 'State', title: 'Transaction State.', inactive: 'INACTIVE — No active transaction.', active: 'ACTIVE — Transaction in progress.', committed: 'COMMITTED — Transaction committed.', rolled_back: 'ROLLED_BACK — Transaction rolled back.' },
control_expr: { label: 'Control Expression', title: 'Transaction Control Expressions.', begin: 'BeginTransactionExpression — BEGIN TRANSACTION.', commit: 'CommitTransactionExpression — COMMIT.', rollback: 'RollbackTransactionExpression — ROLLBACK.', savepoint: 'SavepointExpression — SAVEPOINT.', release: 'ReleaseSavepointExpression — RELEASE SAVEPOINT.', set: 'SetTransactionExpression — SET TRANSACTION.' },
savepoint: { label: 'Savepoint', title: 'Savepoints.', desc: 'Nested transactions via savepoints: level=1 real BEGIN, level>1 creates SAVEPOINT.', create: 'savepoint(name=None) — Create savepoint, auto-generates name.', release: 'release(name) — Release a specific savepoint.', rollback_to: 'rollback_to(name) — Rollback to a specific savepoint.' },
mode: { label: 'Mode', title: 'Transaction Modes.', read_write: 'READ_WRITE — Read-write mode (default).', read_only: 'READ_ONLY — Read-only mode.', deferrable: 'DEFERRABLE — PostgreSQL-specific, deferrable constraint checking.' },
backend_diff: { label: 'Backend Diff', title: 'Backend Differences.', sqlite: 'SQLite — SERIALIZABLE / READ_UNCOMMITTED only; DEFERRED / IMMEDIATE / EXCLUSIVE begin types.', mysql: 'MySQL — REPEATABLE_READ default.', postgres: 'PostgreSQL — All standard isolation levels + DEFERRABLE + READ ONLY / READ WRITE.', oracle: 'Oracle — READ_COMMITTED / SERIALIZABLE.', sqlserver: 'SQL Server — SNAPSHOT isolation support.' },
context: { label: 'Context Manager', title: 'Context Manager.', desc: 'backend.transaction() — Auto commit/rollback.', isolation: 'manager.transaction(isolation_level=..., mode=...) — Specify isolation level and mode.' },
errors: { label: 'Errors', title: 'Error Types.', transaction: 'TransactionError — Base transaction error.', isolation: 'IsolationLevelError — Cannot change isolation during active transaction.', unsupported_mode: 'UnsupportedTransactionModeError — Backend does not support the transaction mode.', unsupported_isolation: 'UnsupportedIsolationLevelError — Backend does not support the isolation level.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
