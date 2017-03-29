# ponfile@1.0.2

Configuration file for pon

+ Functions
  + [create(args)](#ponfile-function-create)
  + [lookup(basedir)](#ponfile-function-lookup)
+ [`Ponfile`](#ponfile-class) Class
  + [new Ponfile(config)](#ponfile-class-ponfile-constructor)
  + [ponfile.run(patterns)](#ponfile-class-ponfile-run)
  + [ponfile.bind()](#ponfile-class-ponfile-bind)

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

+ `Pon`



<a class='md-heading-link' name="ponfile-class-ponfile-constructor" ></a>

### new Ponfile(config)

Constructor of Ponfile class

| Param | Type | Description |
| ----- | --- | -------- |
| config | string,Object |  |


<a class='md-heading-link' name="ponfile-class-ponfile-run" ></a>

### ponfile.run(patterns) -> `Promise`

Run a function

| Param | Type | Description |
| ----- | --- | -------- |
| patterns | string | Name patten(s) to run |


<a class='md-heading-link' name="ponfile-class-ponfile-bind" ></a>

### ponfile.bind() -> `ponBound`

Returns runner function bound to the instance



