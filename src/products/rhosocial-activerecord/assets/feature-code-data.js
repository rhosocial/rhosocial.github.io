/**
 * Feature Code Data
 * Two-layer tab structure: Python version (outer) → Sync/Async (inner)
 */
window.FEATURE_CODE_DATA = {
  // Feature 1: Type-safe
  f1: {
    py38: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> Optional, List, Dict
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>
    tags: <span class="tok-cls">List</span>[<span class="tok-cls">str</span>] = []
    meta: <span class="tok-cls">Dict</span>[<span class="tok-cls">str</span>, <span class="tok-cls">str</span>] = {}`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> Optional, List, Dict
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>
    tags: <span class="tok-cls">List</span>[<span class="tok-cls">str</span>] = []
    meta: <span class="tok-cls">Dict</span>[<span class="tok-cls">str</span>, <span class="tok-cls">str</span>] = {}`
    },
    py39: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>
    tags: <span class="tok-cls">list</span>[<span class="tok-cls">str</span>] = []        <span class="tok-c"># PEP 585</span>
    meta: <span class="tok-cls">dict</span>[<span class="tok-cls">str</span>, <span class="tok-cls">str</span>] = {}  <span class="tok-c"># PEP 585</span>`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>
    tags: <span class="tok-cls">list</span>[<span class="tok-cls">str</span>] = []        <span class="tok-c"># PEP 585</span>
    meta: <span class="tok-cls">dict</span>[<span class="tok-cls">str</span>, <span class="tok-cls">str</span>] = {}  <span class="tok-c"># PEP 585</span>`
    },
    py310: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>  <span class="tok-c"># PEP 604</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>  <span class="tok-c"># PEP 604</span>
    name: <span class="tok-cls">str</span>
    age: <span class="tok-cls">int</span> = <span class="tok-num">18</span>`
    },
    py311: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> <span class="tok-cls">Self</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>

    <span class="tok-k">def</span> <span class="tok-f">activate</span>(<span class="tok-self">self</span>) -> <span class="tok-cls">Self</span>:   <span class="tok-c"># PEP 673</span>
        <span class="tok-self">self</span>.is_active = <span class="tok-k">True</span>
        <span class="tok-k">return</span> <span class="tok-self">self</span>`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> <span class="tok-cls">Self</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>

    <span class="tok-k">async def</span> <span class="tok-f">activate</span>(<span class="tok-self">self</span>) -> <span class="tok-cls">Self</span>:
        <span class="tok-self">self</span>.is_active = <span class="tok-k">True</span>
        <span class="tok-k">return</span> <span class="tok-self">self</span>`
    }
  },

  // Feature 2: Async first
  f2: {
    py38: {
      sync: `<span class="tok-c"># Query</span>
users = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()

<span class="tok-c"># Chain</span>
active_users = (<span class="tok-cls">User</span>.query()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .where(<span class="tok-cls">User</span>.is_active == <span class="tok-k">True</span>)
    .order_by(<span class="tok-cls">User</span>.created_at.desc())
    .limit(<span class="tok-num">10</span>)
    .all())

<span class="tok-c"># Save</span>
user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>, age=<span class="tok-num">20</span>)
user.save()

<span class="tok-c"># Transaction</span>
with <span class="tok-cls">User</span>.transaction():
    user.save()
    user.profile.save()`,
      async: `<span class="tok-c"># Query</span>
users = await <span class="tok-cls">User</span>.aquery().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()

<span class="tok-c"># Chain</span>
active_users = await (<span class="tok-cls">User</span>.aquery()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .where(<span class="tok-cls">User</span>.is_active == <span class="tok-k">True</span>)
    .order_by(<span class="tok-cls">User</span>.created_at.desc())
    .limit(<span class="tok-num">10</span>)
    .all())

<span class="tok-c"># Save</span>
user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>, age=<span class="tok-num">20</span>)
await user.asave()

<span class="tok-c"># Transaction</span>
async with <span class="tok-cls">User</span>.transaction():
    await user.asave()
    await user.profile.asave()`
    },
    py39: {
      sync: `<span class="tok-c"># Query</span>
users = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()

<span class="tok-c"># Chain</span>
active_users = (<span class="tok-cls">User</span>.query()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .limit(<span class="tok-num">10</span>)
    .all())`,
      async: `<span class="tok-c"># Query</span>
users = await <span class="tok-cls">User</span>.aquery().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()

<span class="tok-c"># Chain</span>
active_users = await (<span class="tok-cls">User</span>.aquery()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .limit(<span class="tok-num">10</span>)
    .all())`
    },
    py310: {
      sync: `<span class="tok-c"># Query</span>
users = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()`,
      async: `<span class="tok-c"># Query</span>
users = await <span class="tok-cls">User</span>.aquery().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()`
    },
    py311: {
      sync: `<span class="tok-k">def</span> <span class="tok-f">activate</span>(<span class="tok-self">self</span>) -> <span class="tok-cls">Self</span>:
    <span class="tok-self">self</span>.is_active = <span class="tok-k">True</span>
    <span class="tok-k">return</span> <span class="tok-self">self</span>

user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
user.activate().save()

users = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()`,
      async: `<span class="tok-k">async def</span> <span class="tok-f">activate</span>(<span class="tok-self">self</span>) -> <span class="tok-cls">Self</span>:
    <span class="tok-self">self</span>.is_active = <span class="tok-k">True</span>
    <span class="tok-k">return</span> <span class="tok-self">self</span>

user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
await (await user.activate()).asave()

users = await <span class="tok-cls">User</span>.aquery().where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>).all()`
    }
  },

  // Feature 3: Pluggable backends
  f3: {
    py38: {
      sync: `<span class="tok-c"># SQLite (built-in)</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.backend.impl.sqlite <span class="tok-k">import</span> <span class="tok-cls">SQLiteBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">SQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-c"># PostgreSQL (separate package)</span>
<span class="tok-c"># pip install rhosocial-activerecord-postgres</span>
<span class="tok-k">from</span> rhosocial_activerecord_postgres <span class="tok-k">import</span> <span class="tok-cls">PostgresBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">PostgresBackend</span>(
    host=<span class="tok-s">'localhost'</span>,
    database=<span class="tok-s">'mydb'</span>,
    user=<span class="tok-s">'user'</span>,
    password=<span class="tok-s">'pass'</span>
))`,
      async: `<span class="tok-c"># SQLite (built-in)</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.backend.impl.sqlite <span class="tok-k">import</span> <span class="tok-cls">AsyncSQLiteBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">AsyncSQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-c"># PostgreSQL async</span>
<span class="tok-k">from</span> rhosocial_activerecord_postgres <span class="tok-k">import</span> <span class="tok-cls">AsyncPostgresBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">AsyncPostgresBackend</span>(
    host=<span class="tok-s">'localhost'</span>,
    database=<span class="tok-s">'mydb'</span>
))`
    },
    py39: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">SQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    name: <span class="tok-cls">str</span>
    age: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>  <span class="tok-c"># PEP 604</span>`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">AsyncSQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    name: <span class="tok-cls">str</span>
    age: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>`
    },
    py310: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.backend.impl.sqlite <span class="tok-k">import</span> <span class="tok-cls">SQLiteBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">SQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>  <span class="tok-c"># PEP 604</span>
    name: <span class="tok-cls">str</span>`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.backend.impl.sqlite <span class="tok-k">import</span> <span class="tok-cls">AsyncSQLiteBackend</span>

<span class="tok-cls">User</span>.configure(backend=<span class="tok-cls">AsyncSQLiteBackend</span>(<span class="tok-s">':memory:'</span>))

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>`
    },
    py311: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> <span class="tok-cls">Self</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">def</span> <span class="tok-f">configure_backend</span>(<span class="tok-self">self</span>, backend) -> <span class="tok-cls">Self</span>:
    <span class="tok-self">self</span>.__class__.configure(backend=backend)
    <span class="tok-k">return</span> <span class="tok-self">self</span>`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> <span class="tok-cls">Self</span>
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">async def</span> <span class="tok-f">configure_backend</span>(<span class="tok-self">self</span>, backend) -> <span class="tok-cls">Self</span>:
    <span class="tok-self">self</span>.__class__.configure(backend=backend)
    <span class="tok-k">return</span> <span class="tok-self">self</span>`
    }
  },

  // Feature 4: Relations
  f4: {
    py38: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar, Optional
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.descriptors <span class="tok-k">import</span> HasMany, BelongsTo

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>

    posts: <span class="tok-cls">ClassVar</span>[HasMany[<span class="tok-cls">'Post'</span>]] = HasMany(foreign_key=<span class="tok-s">'user_id'</span>, inverse_of=<span class="tok-s">'user'</span>)

<span class="tok-k">class</span> <span class="tok-cls">Post</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'posts'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    title: <span class="tok-cls">str</span>
    user_id: int

    user: <span class="tok-cls">ClassVar</span>[BelongsTo[<span class="tok-cls">'User'</span>]] = BelongsTo(foreign_key=<span class="tok-s">'user_id'</span>, inverse_of=<span class="tok-s">'posts'</span>)

<span class="tok-c"># Access</span>
user = <span class="tok-cls">User</span>.find_one(<span class="tok-num">1</span>)
posts = user.posts().where(<span class="tok-cls">Post</span>.published == <span class="tok-k">True</span>).all()`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar, Optional
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.async_descriptors <span class="tok-k">import</span> AsyncHasMany, AsyncBelongsTo

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>

    posts: <span class="tok-cls">ClassVar</span>[AsyncHasMany[<span class="tok-cls">'AsyncPost'</span>]] = AsyncHasMany(foreign_key=<span class="tok-s">'user_id'</span>)

<span class="tok-k">class</span> <span class="tok-cls">AsyncPost</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'posts'</span>
    id: Optional[int] = <span class="tok-k">None</span>
    title: <span class="tok-cls">str</span>
    user_id: int

    user: <span class="tok-cls">ClassVar</span>[AsyncBelongsTo[<span class="tok-cls">'User'</span>]] = AsyncBelongsTo(foreign_key=<span class="tok-s">'user_id'</span>)

<span class="tok-c"># Access</span>
user = await <span class="tok-cls">User</span>.afind_one(<span class="tok-num">1</span>)
posts = await user.posts().all()`
    },
    py39: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.descriptors <span class="tok-k">import</span> HasMany, BelongsTo

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    name: <span class="tok-cls">str</span>

    posts: <span class="tok-cls">ClassVar</span>[HasMany[<span class="tok-cls">'Post'</span>]] = HasMany(foreign_key=<span class="tok-s">'user_id'</span>)

<span class="tok-k">class</span> <span class="tok-cls">Post</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'posts'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    user_id: int

    user: <span class="tok-cls">ClassVar</span>[BelongsTo[<span class="tok-cls">'User'</span>]] = BelongsTo(foreign_key=<span class="tok-s">'user_id'</span>)`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.async_descriptors <span class="tok-k">import</span> AsyncHasMany, AsyncBelongsTo

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>

    posts: <span class="tok-cls">ClassVar</span>[AsyncHasMany[<span class="tok-cls">'AsyncPost'</span>]] = AsyncHasMany(foreign_key=<span class="tok-s">'user_id'</span>)`
    },
    py310: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.descriptors <span class="tok-k">import</span> HasMany

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    posts: <span class="tok-cls">ClassVar</span>[HasMany[<span class="tok-cls">'Post'</span>]] = HasMany(foreign_key=<span class="tok-s">'user_id'</span>)`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.async_descriptors <span class="tok-k">import</span> AsyncHasMany

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    posts: <span class="tok-cls">ClassVar</span>[AsyncHasMany[<span class="tok-cls">'AsyncPost'</span>]] = AsyncHasMany(foreign_key=<span class="tok-s">'user_id'</span>)`
    },
    py311: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar, Self
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.descriptors <span class="tok-k">import</span> HasMany

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    posts: <span class="tok-cls">ClassVar</span>[HasMany[<span class="tok-cls">'Post'</span>]] = HasMany(foreign_key=<span class="tok-s">'user_id'</span>)

    <span class="tok-k">def</span> <span class="tok-f">get_posts</span>(<span class="tok-self">self</span>) -> list[<span class="tok-cls">'Post'</span>]:
        <span class="tok-k">return</span> <span class="tok-self">self</span>.posts().all()`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> ClassVar, Self
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>
<span class="tok-k">from</span> rhosocial.activerecord.relation.async_descriptors <span class="tok-k">import</span> AsyncHasMany

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>
    posts: <span class="tok-cls">ClassVar</span>[AsyncHasMany[<span class="tok-cls">'AsyncPost'</span>]] = AsyncHasMany(foreign_key=<span class="tok-s">'user_id'</span>)

    <span class="tok-k">async def</span> <span class="tok-f">get_posts</span>(<span class="tok-self">self</span>) -> list[<span class="tok-cls">'AsyncPost'</span>]:
        <span class="tok-k">return</span> await <span class="tok-self">self</span>.posts().all()`
    }
  },

  // Feature 5: Transactions
  f5: {
    py38: {
      sync: `<span class="tok-c"># Basic transaction</span>
with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
    user.save()

<span class="tok-c"># Nested (auto savepoint)</span>
with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>.find_one(<span class="tok-num">1</span>)
    user.name = <span class="tok-s">'Bob'</span>
    user.save()

    with <span class="tok-cls">User</span>.transaction():
        profile = <span class="tok-cls">Profile</span>(bio=<span class="tok-s">'Hello'</span>, user_id=user.id)
        profile.save()

<span class="tok-c"># Auto rollback</span>
try:
    with <span class="tok-cls">User</span>.transaction():
        user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Charlie'</span>)
        user.save()
        raise <span class="tok-cls">ValueError</span>(<span class="tok-s">'Rollback!'</span>)
except <span class="tok-cls">ValueError</span>:
    pass`,
      async: `<span class="tok-c"># Basic transaction</span>
async with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
    await user.asave()

<span class="tok-c"># Nested (auto savepoint)</span>
async with <span class="tok-cls">User</span>.transaction():
    user = await <span class="tok-cls">User</span>.afind_one(<span class="tok-num">1</span>)
    user.name = <span class="tok-s">'Bob'</span>
    await user.asave()

    async with <span class="tok-cls">User</span>.transaction():
        profile = <span class="tok-cls">Profile</span>(bio=<span class="tok-s">'Hello'</span>, user_id=user.id)
        await profile.asave()

<span class="tok-c"># Auto rollback</span>
try:
    async with <span class="tok-cls">User</span>.transaction():
        user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Charlie'</span>)
        await user.asave()
        raise <span class="tok-cls">ValueError</span>(<span class="tok-s">'Rollback!'</span>)
except <span class="tok-cls">ValueError</span>:
    pass`
    },
    py39: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>

with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
    user.save()`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>

async with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>(name=<span class="tok-s">'Alice'</span>)
    await user.asave()`
    },
    py310: {
      sync: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">ActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>

with <span class="tok-cls">User</span>.transaction():
    user = <span class="tok-cls">User</span>.find_one(<span class="tok-num">1</span>)
    user.save()`,
      async: `<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">class</span> <span class="tok-cls">User</span>(<span class="tok-cls">AsyncActiveRecord</span>):
    __table_name__ = <span class="tok-s">'users'</span>
    id: int | <span class="tok-k">None</span> = <span class="tok-k">None</span>

async with <span class="tok-cls">User</span>.transaction():
    user = await <span class="tok-cls">User</span>.afind_one(<span class="tok-num">1</span>)
    await user.asave()`
    },
    py311: {
      sync: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> Self
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">ActiveRecord</span>

<span class="tok-k">def</span> <span class="tok-f">update_with_transaction</span>(<span class="tok-self">self</span>, new_name: str) -> <span class="tok-cls">Self</span>:
    with <span class="tok-cls">User</span>.transaction():
        <span class="tok-self">self</span>.name = new_name
        <span class="tok-self">self</span>.save()
    <span class="tok-k">return</span> <span class="tok-self">self</span>`,
      async: `<span class="tok-k">from</span> typing <span class="tok-k">import</span> Self
<span class="tok-k">from</span> rhosocial.activerecord <span class="tok-k">import</span> <span class="tok-cls">AsyncActiveRecord</span>

<span class="tok-k">async def</span> <span class="tok-f">update_with_transaction</span>(<span class="tok-self">self</span>, new_name: str) -> <span class="tok-cls">Self</span>:
    async with <span class="tok-cls">User</span>.transaction():
        <span class="tok-self">self</span>.name = new_name
        await <span class="tok-self">self</span>.asave()
    <span class="tok-k">return</span> <span class="tok-self">self</span>`
    }
  },

  // Feature 6: Pythonic
  f6: {
    py38: {
      sync: `<span class="tok-c"># Chain reads like English</span>
users = (<span class="tok-cls">User</span>.query()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .where(<span class="tok-cls">User</span>.status == <span class="tok-s">'active'</span>)
    .order_by(<span class="tok-cls">User</span>.created_at.desc())
    .limit(<span class="tok-num">10</span>)
    .all())

<span class="tok-c"># Transparent SQL for debugging</span>
print(users.to_sql())

<span class="tok-c"># More chains</span>
count = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.status == <span class="tok-s">'active'</span>).count()
first = <span class="tok-cls">User</span>.query().order_by(<span class="tok-cls">User</span>.name).one()
exists = <span class="tok-cls">User</span>.query().where(<span class="tok-cls">User</span>.name == <span class="tok-s">'Alice'</span>).exists()`,
      async: `<span class="tok-c"># Chain (same as sync, just await)</span>
users = await (<span class="tok-cls">User</span>.aquery()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .where(<span class="tok-cls">User</span>.status == <span class="tok-s">'active'</span>)
    .order_by(<span class="tok-cls">User</span>.created_at.desc())
    .limit(<span class="tok-num">10</span>)
    .all())

<span class="tok-c"># Transparent SQL</span>
print(users.to_sql())

<span class="tok-c"># More chains</span>
count = await <span class="tok-cls">User</span>.aquery().where(<span class="tok-cls">User</span>.status == <span class="tok-s">'active'</span>).count()
first = await <span class="tok-cls">User</span>.aquery().order_by(<span class="tok-cls">User</span>.name).afirst()`
    },
    py39: {
      sync: `<span class="tok-c"># PEP 585 syntax</span>
users = (<span class="tok-cls">User</span>.query()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .order_by(<span class="tok-cls">User</span>.name)
    .limit(<span class="tok-num">10</span>)
    .all())

print(users.to_sql())`,
      async: `users = await (<span class="tok-cls">User</span>.aquery()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
    .order_by(<span class="tok-cls">User</span>.name)
    .limit(<span class="tok-num">10</span>)
    .all())

print(users.to_sql())`
    },
    py310: {
      sync: `<span class="tok-c"># PEP 604 union syntax</span>
users = (<span class="tok-cls">User</span>.query()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span> | <span class="tok-cls">User</span>.age == <span class="tok-num">0</span>)
    .order_by(<span class="tok-cls">User</span>.name.desc())
    .all())

print(users.to_sql())`,
      async: `users = await (<span class="tok-cls">User</span>.aquery()
    .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span> | <span class="tok-cls">User</span>.age == <span class="tok-num">0</span>)
    .order_by(<span class="tok-cls">User</span>.name.desc())
    .all())

print(users.to_sql())`
    },
    py311: {
      sync: `<span class="tok-k">def</span> <span class="tok-f">find_active</span>(<span class="tok-self">self</span>) -> list[<span class="tok-cls">'User'</span>]:
    <span class="tok-k">return</span> (<span class="tok-cls">User</span>.query()
        .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
        .order_by(<span class="tok-cls">User</span>.name)
        .all())

<span class="tok-k">def</span> <span class="tok-f">find_by_name</span>(<span class="tok-self">self</span>, name: str) -> <span class="tok-cls">Self</span> | <span class="tok-k">None</span>:
    <span class="tok-k">return</span> (<span class="tok-cls">User</span>.query()
        .where(<span class="tok-cls">User</span>.name == name)
        .one())`,
      async: `<span class="tok-k">async def</span> <span class="tok-f">find_active</span>(<span class="tok-self">self</span>) -> list[<span class="tok-cls">'User'</span>]:
    <span class="tok-k">return</span> await (<span class="tok-cls">User</span>.aquery()
        .where(<span class="tok-cls">User</span>.age >= <span class="tok-num">18</span>)
        .order_by(<span class="tok-cls">User</span>.name)
        .all())

<span class="tok-k">async def</span> <span class="tok-f">find_by_name</span>(<span class="tok-self">self</span>, name: str) -> <span class="tok-cls">Self</span> | <span class="tok-k">None</span>:
    <span class="tok-k">return</span> await (<span class="tok-cls">User</span>.aquery()
        .where(<span class="tok-cls">User</span>.name == name)
        .afirst())`
    }
  }
};

/**
 * Render feature code based on current tab selection
 */
function renderFeatureCode(featureId, pyVersion, syncAsync) {
  const data = window.FEATURE_CODE_DATA[featureId];
  if (!data || !data[pyVersion] || !data[pyVersion][syncAsync]) {
    return '<pre>No code available</pre>';
  }
  return '<pre>' + data[pyVersion][syncAsync] + '</pre>';
}

/**
 * Initialize feature code tab listeners
 */
function initFeatureCodeTabs() {
  document.querySelectorAll('.feature-code-container').forEach(function(container) {
    const featureId = container.dataset.feature;
    const outerTabs = container.querySelector('.tabs[data-tabs*="python"]');
    const innerTabsContainer = container.querySelector('.tab-panel.is-active .tabs');

    // Outer tab (Python version) listener
    if (outerTabs) {
      outerTabs.querySelectorAll('.tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
          const pyVersion = tab.dataset.tab.replace(featureId + '-', '').replace('f1-', '');
          updateFeatureCode(featureId, pyVersion, 'sync');
        });
      });
    }

    // Inner tab (sync/async) listeners
    container.querySelectorAll('.tabs .tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        const pyVersion = container.querySelector('.tabs-list > .tab.is-active').dataset.tab.replace(featureId + '-', '').replace('f1-', '');
        const syncAsync = tab.dataset.tab.includes('async') ? 'async' : 'sync';
        updateFeatureCode(featureId, pyVersion, syncAsync);
      });
    });
  });
}

function updateFeatureCode(featureId, pyVersion, syncAsync) {
  const container = document.querySelector('.feature-code-container[data-feature="' + featureId + '"]');
  const codeBody = container.querySelector('.code-body');
  if (codeBody) {
    codeBody.innerHTML = renderFeatureCode(featureId, pyVersion, syncAsync);
  }
}