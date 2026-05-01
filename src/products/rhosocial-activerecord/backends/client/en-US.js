window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Backend client architecture, Mixin composition pattern.' },
mro: { label: 'MRO', title: 'Mixin Composition.', desc: 'StorageBackendBase → Logging → TypeAdaption → SQLBuilding → Returning → ResultProcessing → SQLOperations → Execution → BatchExecution → ExecutionHooks → Connection → TransactionManagement' },
config: { label: 'Config', title: 'Connection Config.', basic: 'BasicConnectionMixin — host / port / database / username / password.', pool: 'ConnectionPoolMixin — Connection pool parameters.', ssl: 'SSLMixin — SSL/TLS configuration.', charset: 'CharsetMixin — Character set settings.', timezone: 'TimezoneMixin — Timezone settings.', version: 'VersionMixin — Server version.', logging: 'LoggingMixin — Logging and warnings.' },
options: { label: 'Options', title: 'Execution Options.', execution: 'ExecutionOptions — stmt_type / column_adapters / column_mapping / process_result_set.', insert: 'InsertOptions — table / data / auto_commit / primary_key / returning_columns.', update: 'UpdateOptions — table / data / where / auto_commit / returning_columns.', delete: 'DeleteOptions — table / where / auto_commit / returning_columns.' },
type_adapter: { label: 'Type Adapter', title: 'Type Adapters.', protocol: 'SQLTypeAdapter protocol: to_database(value, target_type, options) / from_database(value, target_type, options) / supported_types.', builtins: 'Built-in adapters: DateTime / JSON / UUID / Enum / Boolean / Decimal / Array.' },
result: { label: 'Result', title: 'Result Types.', query: 'QueryResult[T] — data / affected_rows / last_insert_id / duration.', batch_dml: 'BatchDMLResult — results / batch_index / batch_size / total_affected_rows / duration.', batch_dql: 'BatchDQLResult — data / page_index / page_size / has_more / duration.', commit_mode: 'BatchCommitMode — WHOLE / PER_BATCH.' },
batch: { label: 'Batch', title: 'Batch Execution.', dml: 'execute_batch_dml() — Batch DML iterator.', dql: 'execute_batch_dql() — Batch DQL paging iterator.' },
hooks: { label: 'Hooks', title: 'Execution Infrastructure.', desc: 'ExecutionHooksMixin — cursor acquisition, query execution, auto-commit, error handling.', cursor: '_get_cursor() — Get cursor.', execute: '_execute_query() — Execute SQL.', auto_commit: '_handle_auto_commit() — Auto commit.', error: '_handle_execution_error() — Error handling.' },
concurrency: { label: 'Concurrency', title: 'Concurrency Hints.', protocol: 'ConcurrencyAware protocol — get_concurrency_hint().', hint: 'ConcurrencyHint(max_concurrency, reason) — Concurrency constraint dataclass.', sqlite: 'SQLite — max_concurrency=1, file-level write lock serialization.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
