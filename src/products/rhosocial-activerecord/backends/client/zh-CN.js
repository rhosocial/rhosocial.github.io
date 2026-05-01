window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '后端客户端架构，Mixin 组合模式。' },
mro: { label: 'MRO', title: 'Mixin 组合。', desc: 'StorageBackendBase → Logging → TypeAdaption → SQLBuilding → Returning → ResultProcessing → SQLOperations → Execution → BatchExecution → ExecutionHooks → Connection → TransactionManagement' },
config: { label: 'Config', title: '连接配置。', basic: 'BasicConnectionMixin — host / port / database / username / password。', pool: 'ConnectionPoolMixin — 连接池参数。', ssl: 'SSLMixin — SSL/TLS 配置。', charset: 'CharsetMixin — 字符集设置。', timezone: 'TimezoneMixin — 时区设置。', version: 'VersionMixin — 服务器版本。', logging: 'LoggingMixin — 日志与警告。' },
options: { label: 'Options', title: '执行选项。', execution: 'ExecutionOptions — stmt_type / column_adapters / column_mapping / process_result_set。', insert: 'InsertOptions — table / data / auto_commit / primary_key / returning_columns。', update: 'UpdateOptions — table / data / where / auto_commit / returning_columns。', delete: 'DeleteOptions — table / where / auto_commit / returning_columns。' },
type_adapter: { label: 'Type Adapter', title: '类型适配器。', protocol: 'SQLTypeAdapter 协议：to_database(value, target_type, options) / from_database(value, target_type, options) / supported_types。', builtins: '内置适配器：DateTime / JSON / UUID / Enum / Boolean / Decimal / Array。' },
result: { label: 'Result', title: '结果类型。', query: 'QueryResult[T] — data / affected_rows / last_insert_id / duration。', batch_dml: 'BatchDMLResult — results / batch_index / batch_size / total_affected_rows / duration。', batch_dql: 'BatchDQLResult — data / page_index / page_size / has_more / duration。', commit_mode: 'BatchCommitMode — WHOLE / PER_BATCH。' },
batch: { label: 'Batch', title: '批量执行。', dml: 'execute_batch_dml() — 批量 DML 迭代器。', dql: 'execute_batch_dql() — 批量 DQL 分页迭代器。' },
hooks: { label: 'Hooks', title: '执行基础设施。', desc: 'ExecutionHooksMixin — 游标获取、查询执行、自动提交、错误处理。', cursor: '_get_cursor() — 获取游标。', execute: '_execute_query() — 执行 SQL。', auto_commit: '_handle_auto_commit() — 自动提交。', error: '_handle_execution_error() — 错误处理。' },
concurrency: { label: 'Concurrency', title: '并发提示。', protocol: 'ConcurrencyAware 协议 — get_concurrency_hint()。', hint: 'ConcurrencyHint(max_concurrency, reason) — 并发约束数据类。', sqlite: 'SQLite — max_concurrency=1，文件级写锁串行化。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
