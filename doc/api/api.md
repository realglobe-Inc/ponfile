# ponfile@4.1.9

Configuration file for pon

+ Functions
  + [create(args)](#ponfile-function-create)
  + [lookup(basedir)](#ponfile-function-lookup)
+ [`Ponfile`](#ponfile-class) Class
  + [new Ponfile(config, options)](#ponfile-class-ponfile-constructor)
  + [ponfile.run(patterns)](#ponfile-class-ponfile-run)
  + [ponfile.bind()](#ponfile-class-ponfile-bind)
  + [ponfile.set(tasks)](#ponfile-class-ponfile-set)
  + [ponfile.alias(pointers)](#ponfile-class-ponfile-alias)

## Functions

<a class='md-heading-link' name="ponfile-function-create" ></a>

### create(args) -> `Ponfile`

Create a Ponfile instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |

<a class='md-heading-link' name="ponfile-function-lookup" ></a>

### lookup(basedir)

Lookup ponfile

| Param | Type | Description |
| ----- | --- | -------- |
| basedir | string |  |



<a class='md-heading-link' name="ponfile-class"></a>

## `Ponfile` Class

Ponfile configuration

**Extends**:

+ `PonRunner`



<a class='md-heading-link' name="ponfile-class-ponfile-constructor" ></a>

### new Ponfile(config, options)

Constructor of Ponfile class

| Param | Type | Description |
| ----- | --- | -------- |
| config | string,Object | Task configuration or it file path |
| options | Object | Optional settings |


<a class='md-heading-link' name="ponfile-class-ponfile-run" ></a>

### ponfile.run(patterns) -> `Promise`

Run a function

| Param | Type | Description |
| ----- | --- | -------- |
| patterns | string | Name patten(s) to run |


<a class='md-heading-link' name="ponfile-class-ponfile-bind" ></a>

### ponfile.bind() -> `ponBound`

Returns runner function bound to the instance

<a class='md-heading-link' name="ponfile-class-ponfile-set" ></a>

### ponfile.set(tasks)

Set tasks

| Param | Type | Description |
| ----- | --- | -------- |
| tasks | Object.&lt;string, function()&gt; | Tasks to register |


<a class='md-heading-link' name="ponfile-class-ponfile-alias" ></a>

### ponfile.alias(pointers)

Set task aliases

| Param | Type | Description |
| ----- | --- | -------- |
| pointers | Object.&lt;string, string&gt; |  |




