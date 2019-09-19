## Modules

<dl>
<dt><a href="#module_jaaJSU">jaaJSU</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#$array">$array</a> : <code>object</code></dt>
<dd><p>Exported namespace of <a href="#module_jaaJSU..$array">$array</a>.</p>
</dd>
<dt><a href="#$async">$async</a> : <code>object</code></dt>
<dd><p>Exported namespace of <a href="#module_jaaJSU..$async">$async</a>.</p>
</dd>
<dt><a href="#$dom">$dom</a> : <code>object</code></dt>
<dd><p>Exported namespace of <a href="#module_jaaJSU..$dom">$dom</a>.</p>
</dd>
<dt><a href="#$function">$function</a> : <code>object</code></dt>
<dd><p>Exported namespace of <a href="#module_jaaJSU..$function">$function</a>.</p>
</dd>
<dt><a href="#$object">$object</a> : <code>object</code></dt>
<dd><p>Exported namespace of <a href="#module_jaaJSU..$object">$object</a>.</p>
</dd>
<dt><a href="#$optimizier">$optimizier</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for optimizations.</p>
</dd>
</dl>

<a name="module_jaaJSU"></a>

## jaaJSU
**Version**: 0.8.1  

* [jaaJSU](#module_jaaJSU)
    * [~$object](#module_jaaJSU..$object) : <code>object</code>
        * [.each(iterable, i_function, scope)](#module_jaaJSU..$object.each) ⇒ <code>Mixed</code>
        * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$object.eachDynamic) ⇒ <code>Mixed</code>
        * [.fromArray(arr, [fun], [default_value])](#module_jaaJSU..$object.fromArray) ⇒ <code>Object</code>
        * [.hasProp(obj, prop)](#module_jaaJSU..$object.hasProp) ⇒ <code>Boolean</code>
        * [.immutable_keys([obj_input])](#module_jaaJSU..$object.immutable_keys) ⇒ <code>Proxy</code>
        * [.method(methodName, ...args)](#module_jaaJSU..$object.method) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
        * [.methodFrom()](#module_jaaJSU..$object.methodFrom)
        * [.pluck(key)](#module_jaaJSU..$object.pluck) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
        * [.pluckFrom()](#module_jaaJSU..$object.pluckFrom)
        * [.setter(setterName, arg)](#module_jaaJSU..$object.setter) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object.function_Object2Object)
        * [.setterFrom()](#module_jaaJSU..$object.setterFrom)
        * _virtual_
            * [.function_Object2Mixed(input_object)](#module_jaaJSU..$object.function_Object2Mixed) ⇒ <code>Mixed</code>
            * [.function_Object2Object(input_object)](#module_jaaJSU..$object.function_Object2Object) ⇒ <code>Object</code>
            * [.IterableObjectCallback(IterableObjectObject)](#module_jaaJSU..$object.IterableObjectCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
            * [.IterableObjectObject](#module_jaaJSU..$object.IterableObjectObject) : <code>Object</code>
    * [~$string](#module_jaaJSU..$string) : <code>object</code>
    * [~$time](#module_jaaJSU..$time) : <code>object</code>
    * _namespaces_
        * [~$array](#module_jaaJSU..$array) : <code>object</code>
            * [.arrayIndex(i, s, l)](#module_jaaJSU..$array.arrayIndex) ⇒ <code>Number</code>
            * [.each(iterable, i_function, scope)](#module_jaaJSU..$array.each) ⇒ <code>Mixed</code>
            * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$array.eachDynamic) ⇒ <code>Mixed</code>
            * [.getLast(arr)](#module_jaaJSU..$array.getLast) ⇒ <code>Mixed</code>
            * [.partition(arr)](#module_jaaJSU..$array.partition) ⇒ [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition)
            * [.removeItem(arr, item)](#module_jaaJSU..$array.removeItem) ⇒ <code>Array</code>
            * [.sortRandom()](#module_jaaJSU..$array.sortRandom) ⇒ <code>Number</code>
            * _virtual_
                * [.ArrayPartition](#module_jaaJSU..$array.ArrayPartition) : <code>Object</code>
                    * [.head()](#module_jaaJSU..$array.ArrayPartition.head) ⇒ <code>Array</code>
                    * [.tail()](#module_jaaJSU..$array.ArrayPartition.tail) ⇒ <code>Array</code>
                    * [.onIndex(index)](#module_jaaJSU..$array.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
                    * [.byCondition(fn)](#module_jaaJSU..$array.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>
        * [~$async](#module_jaaJSU..$async) : <code>object</code>
            * [.CANCEL](#module_jaaJSU..$async.CANCEL)
            * ~~[.serialize(funcs)](#module_jaaJSU..$async.serialize) ⇒ <code>Promise</code>~~
            * [.iterate_(iterablePromises)](#module_jaaJSU..$async.iterate_) ⇒ <code>Promise</code>
            * [.iterateMixed_(tasks)](#module_jaaJSU..$async.iterateMixed_) ⇒ <code>Promise</code>
            * [.sequention_(...functions)](#module_jaaJSU..$async.sequention_) ⇒ <code>Promise</code>
            * [.each_(...functions)](#module_jaaJSU..$async.each_) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async.function_MultipleMixed2Promise)
            * _virtual_
                * [.function_Undefined2Promise()](#module_jaaJSU..$async.function_Undefined2Promise) ⇒ <code>Promise</code>
                * [.function_MultipleMixed2Promise(...Mixed)](#module_jaaJSU..$async.function_MultipleMixed2Promise) ⇒ <code>Promise</code>
        * [~$dom](#module_jaaJSU..$dom) : <code>object</code>
            * [.ready_(...args)](#module_jaaJSU..$dom.ready_) ⇒ <code>Promise</code>
            * [.elementReady_(el_selector, [parent])](#module_jaaJSU..$dom.elementReady_) ⇒ <code>Promise</code>
            * [.empty(container)](#module_jaaJSU..$dom.empty)
            * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
            * [.removeElements(els_to_delete, [from_index], [to_index])](#module_jaaJSU..$dom.removeElements)
            * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
            * [.toggleAttribute(element, attribute_name, attribute_a, attribute_b)](#module_jaaJSU..$dom.toggleAttribute) ⇒ <code>String</code>
            * [.toggleDataset(element, data_name, data_a, data_b)](#module_jaaJSU..$dom.toggleDataset) ⇒ <code>String</code>
            * [.each(iterable, i_function, scope)](#module_jaaJSU..$dom.each) ⇒ <code>Mixed</code>
            * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$dom.eachDynamic) ⇒ <code>Mixed</code>
            * [.component_cordova([el_name], attrs, [params])](#module_jaaJSU..$dom.component_cordova) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
            * [.assign_cordova(element, ...object_attributes)](#module_jaaJSU..$dom.assign_cordova)
            * ~~[.add_cordova(parent, ...$$$, [call_parseHTML])](#module_jaaJSU..$dom.add_cordova) ⇒ <code>NodeElement</code>~~
            * _virtual_
                * [.DomPreparedSelector](#module_jaaJSU..$dom.DomPreparedSelector) : <code>Object</code>
                * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
                    * [.mount()](#module_jaaJSU..$dom.ComponentEmpty.mount)
                * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
                    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
                    * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
                    * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.mount)
                    * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
                    * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
                    * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                    * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
                    * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
                    * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
                        * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
                        * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
                        * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.share.mount)
                        * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>
                * [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
                    * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
                    * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
                * [.Component__AddText](#module_jaaJSU..$dom.Component__AddText) : <code>Component</code>
                    * [.oninit(fn)](#module_jaaJSU..$dom.Component__AddText.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.DomAssignObject](#module_jaaJSU..$dom.DomAssignObject) : <code>Object</code>
        * [~$function](#module_jaaJSU..$function) : <code>object</code>
            * [.branches([reduceFun], [reduceInitValueCreator])](#module_jaaJSU..$function.branches) ⇒ <code>function</code>
            * [.component(transform)](#module_jaaJSU..$function.component) ⇒ <code>component</code>
            * [.conditionalCall(mixed, fun)](#module_jaaJSU..$function.conditionalCall) ⇒ <code>Boolean</code> \| <code>Mixed</code>
            * [.constant(constantArg)](#module_jaaJSU..$function.constant) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function.function_Undefined2Mixed)
            * [.each()](#module_jaaJSU..$function.each) ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function.function_Mixed2Undefined)
            * [.identity(id)](#module_jaaJSU..$function.identity) ⇒ <code>Mixed</code>
            * [.partial(fn, ...presetArgs)](#module_jaaJSU..$function.partial) ⇒ <code>function</code>
            * [.schedule(...functions, def)](#module_jaaJSU..$function.schedule)
            * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed)
            * _virtual_
                * [.function_Mixed2Undefined(input)](#module_jaaJSU..$function.function_Mixed2Undefined) ⇒ <code>Undefined</code>
                * [.function_Mixed2Mixed(input)](#module_jaaJSU..$function.function_Mixed2Mixed) ⇒ <code>Mixed</code>
                * [.function_Undefined2Mixed()](#module_jaaJSU..$function.function_Undefined2Mixed) ⇒ <code>Mixed</code>
                * [.function_MultipleMixed2Mixed(...input)](#module_jaaJSU..$function.function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
                * [.function_MultipleMixed2Function(...input)](#module_jaaJSU..$function.function_MultipleMixed2Function) ⇒ <code>function</code>
                * [.function_MultipleFunction2Function(...Functions)](#module_jaaJSU..$function.function_MultipleFunction2Function) ⇒ <code>function</code>
    * _virtual_
        * [~function_filterCallback(i_value, i)](#module_jaaJSU..function_filterCallback) ⇒ <code>Boolean</code>
        * [~function_reduceCallback(accumulator, i_value, i)](#module_jaaJSU..function_reduceCallback) ⇒ <code>Mixed</code>
        * [~IterableCallback(IterableArrayObject)](#module_jaaJSU..IterableCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
        * [~IterableArrayObject](#module_jaaJSU..IterableArrayObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$object"></a>

### jaaJSU~$object : <code>object</code>
This NAMESPACE provides features for Objects.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$object" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1378" title="jaaJSU.js:1378"><small>(defined@1378)</small></a>  

* [~$object](#module_jaaJSU..$object) : <code>object</code>
    * [.each(iterable, i_function, scope)](#module_jaaJSU..$object.each) ⇒ <code>Mixed</code>
    * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$object.eachDynamic) ⇒ <code>Mixed</code>
    * [.fromArray(arr, [fun], [default_value])](#module_jaaJSU..$object.fromArray) ⇒ <code>Object</code>
    * [.hasProp(obj, prop)](#module_jaaJSU..$object.hasProp) ⇒ <code>Boolean</code>
    * [.immutable_keys([obj_input])](#module_jaaJSU..$object.immutable_keys) ⇒ <code>Proxy</code>
    * [.method(methodName, ...args)](#module_jaaJSU..$object.method) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
    * [.methodFrom()](#module_jaaJSU..$object.methodFrom)
    * [.pluck(key)](#module_jaaJSU..$object.pluck) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
    * [.pluckFrom()](#module_jaaJSU..$object.pluckFrom)
    * [.setter(setterName, arg)](#module_jaaJSU..$object.setter) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object.function_Object2Object)
    * [.setterFrom()](#module_jaaJSU..$object.setterFrom)
    * _virtual_
        * [.function_Object2Mixed(input_object)](#module_jaaJSU..$object.function_Object2Mixed) ⇒ <code>Mixed</code>
        * [.function_Object2Object(input_object)](#module_jaaJSU..$object.function_Object2Object) ⇒ <code>Object</code>
        * [.IterableObjectCallback(IterableObjectObject)](#module_jaaJSU..$object.IterableObjectCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
        * [.IterableObjectObject](#module_jaaJSU..$object.IterableObjectObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$object.each"></a>

#### $object.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
Function for iterating throught Object `iterable`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1416" title="jaaJSU.js:1416"><small>(defined@1416)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Object</code> | An object for iterating. |
| i_function | <code>module:jaaJSU~IterableObjectCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$object.eachDynamic"></a>

#### $object.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught Object `iterable` like [each](#module_jaaJSU..$object.each), but use `for(... in ...)...if(Object.prototype.hasOwnProperty...`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1426" title="jaaJSU.js:1426"><small>(defined@1426)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Object</code> | An object for iterating. |
| i_function | <code>module:jaaJSU~IterableObjectCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$object.fromArray"></a>

#### $object.fromArray(arr, [fun], [default_value]) ⇒ <code>Object</code>
Function for converting Array `arr` to Object. Uses `fun` for converting.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.fromArray" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1436" title="jaaJSU.js:1436"><small>(defined@1436)</small></a>  
**Returns**: <code>Object</code> - Created object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | Array-like parameter. |
| [fun] | [<code>function\_reduceCallback</code>](#module_jaaJSU..function_reduceCallback) | <code>&#x60;(acc, curr, i)&#x3D;&gt; acc[&quot;&quot;+i]&#x3D; curr&#x60;</code> | Function for converting. In fact, it is wrapper around `Array.reduce`. |
| [default_value] | <code>Object</code> | <code>{}</code> | Initial value. |


* * *

<a name="module_jaaJSU..$object.hasProp"></a>

#### $object.hasProp(obj, prop) ⇒ <code>Boolean</code>
Wrapper around `Object.prototype.hasOwnProperty`. It is more trustable, because you can sets `var obj= { hasOwnProperty: "gotcha" }`

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.hasProp" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1446" title="jaaJSU.js:1446"><small>(defined@1446)</small></a>  
**Returns**: <code>Boolean</code> - True, if `obj` has property `prop`  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | **Mandatory**. Object where to search `prop`. |
| prop | <code>String</code> | **Mandatory**. Poperty to searching for. |


* * *

<a name="module_jaaJSU..$object.immutable_keys"></a>

#### $object.immutable\_keys([obj_input]) ⇒ <code>Proxy</code>
Function for creating non-rewritable object

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.immutable_keys" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1455" title="jaaJSU.js:1455"><small>(defined@1455)</small></a>  
**Returns**: <code>Proxy</code> - <br/>getter `Proxy.key_name` Mixed: returns key_name if defined
<br/>getter `Proxy.set(key_name, value)` Function:
<br/>&nbsp;&nbsp;- define `key_name` in object if isn't already defined (**returns True**, else **False**).
<br/>getter `Proxy.keys` Number: Wrapper around `Object.keys(*)`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj_input] | <code>Object</code> | <code>{}</code> | Initial value |


* * *

<a name="module_jaaJSU..$object.method"></a>

#### $object.method(methodName, ...args) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
Wrapper around `object[methodName](...args)`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.method" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1494" title="jaaJSU.js:1494"><small>(defined@1494)</small></a>  
**Returns**: [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed) - `(target) => target[key](...args)`  

| Param | Type | Description |
| --- | --- | --- |
| methodName | <code>String</code> | Key in Object `object`. |
| ...args | <code>Mixed</code> | Arguments for method `methodName` |

**Example**  
```js
$object.method("trim")(" Hi ");//= `Hi`
$object.method("split", " ")("Hello world");//= `[ "Hello", "world" ]`
```

* * *

<a name="module_jaaJSU..$object.methodFrom"></a>

#### $object.methodFrom()
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.methodFrom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1506" title="jaaJSU.js:1506"><small>(defined@1506)</small></a>  
**Example**  
```js
$object.methodFrom(" Hi ")("trim")()====$object.method("trim")(" Hi ");
$object.methodFrom("Hello world")("split")(" ")===$object.method("split", " ")("Hello world");
```

* * *

<a name="module_jaaJSU..$object.pluck"></a>

#### $object.pluck(key) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed)
Wrapper around `object[key]`, usefull for binding.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.pluck" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1514" title="jaaJSU.js:1514"><small>(defined@1514)</small></a>  
**Returns**: [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object.function_Object2Mixed) - `(target) => target[key]`  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Key in Object `object`. |

**Example**  
```js
$object.pluck("length")("Test");//= `4`
```

* * *

<a name="module_jaaJSU..$object.pluckFrom"></a>

#### $object.pluckFrom()
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.pluckFrom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1524" title="jaaJSU.js:1524"><small>(defined@1524)</small></a>  
**Example**  
```js
$object.pluckFrom("Test")("length")===$object.pluck("length")("Test");
```

* * *

<a name="module_jaaJSU..$object.setter"></a>

#### $object.setter(setterName, arg) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object.function_Object2Object)
Wrapper around `object[setterName]= arg`

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.setter" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1531" title="jaaJSU.js:1531"><small>(defined@1531)</small></a>  
**Returns**: [<code>function\_Object2Object</code>](#module_jaaJSU..$object.function_Object2Object) - `object=> (object[setterName]= arg, object)`  

| Param | Type | Description |
| --- | --- | --- |
| setterName | <code>String</code> | Key in Object `object`. |
| arg | <code>Mixed</code> | Setter value |

**Example**  
```js
$object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });//= `{ test_key: "test_value", other_key: "other_value" }`
```

* * *

<a name="module_jaaJSU..$object.setterFrom"></a>

#### $object.setterFrom()
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.setterFrom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1542" title="jaaJSU.js:1542"><small>(defined@1542)</small></a>  
**Example**  
```js
$object.setterFrom({ test_key: "test_init_value", other_key: "other_value" })("test_key")("test_value")===$object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });
```

* * *

<a name="module_jaaJSU..$object.function_Object2Mixed"></a>

#### $object.function\_Object2Mixed(input_object) ⇒ <code>Mixed</code>
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.function_Object2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1383" title="jaaJSU.js:1383"><small>(defined@1383)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| input_object | <code>Object</code> | 


* * *

<a name="module_jaaJSU..$object.function_Object2Object"></a>

#### $object.function\_Object2Object(input_object) ⇒ <code>Object</code>
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.function_Object2Object" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1390" title="jaaJSU.js:1390"><small>(defined@1390)</small></a>  
**Returns**: <code>Object</code> - Modified version of `input_object` (By reference!)  
**Category**: virtual  

| Param | Type |
| --- | --- |
| input_object | <code>Object</code> | 


* * *

<a name="module_jaaJSU..$object.IterableObjectCallback"></a>

#### $object.IterableObjectCallback(IterableObjectObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.IterableObjectCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1408" title="jaaJSU.js:1408"><small>(defined@1408)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableObjectObject](#module_jaaJSU..$object.IterableObjectObject).  
**Category**: virtual  

| Param | Type |
| --- | --- |
| IterableObjectObject | [<code>IterableObjectObject</code>](#module_jaaJSU..$object.IterableObjectObject) | 


* * *

<a name="module_jaaJSU..$object.IterableObjectObject"></a>

#### $object.IterableObjectObject : <code>Object</code>
Similar to [IterableArrayObject](#module_jaaJSU..IterableArrayObject)

**Kind**: static typedef of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.IterableObjectObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1397" title="jaaJSU.js:1397"><small>(defined@1397)</small></a>  
**Category**: virtual  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| item | <code>Mixed</code> | Nth value for `key` in `iterable`. |
| key | <code>Mixed</code> | Name of key |
| index | <code>Number</code> | Idicies 0...`Object.keys(iterable).length`. |
| last | <code>Boolean</code> | Is setted True, if it is the last element in array. |
| share | <code>Mixed</code> \| <code>Undefined</code> | shared variable - works similar to `*.reduce` method |


* * *

<a name="module_jaaJSU..$string"></a>

### jaaJSU~$string : <code>object</code>
This NAMESPACE provides features for strings.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$string" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1826" title="jaaJSU.js:1826"><small>(defined@1826)</small></a>  

* * *

<a name="module_jaaJSU..$time"></a>

### jaaJSU~$time : <code>object</code>
This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$time" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L2108" title="jaaJSU.js:2108"><small>(defined@2108)</small></a>  

* * *

<a name="module_jaaJSU..$array"></a>

### jaaJSU~$array : <code>object</code>
This NAMESPACE provides features for Arrays.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$array" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L61" title="jaaJSU.js:61"><small>(defined@61)</small></a>  
**Category**: namespaces  

* [~$array](#module_jaaJSU..$array) : <code>object</code>
    * [.arrayIndex(i, s, l)](#module_jaaJSU..$array.arrayIndex) ⇒ <code>Number</code>
    * [.each(iterable, i_function, scope)](#module_jaaJSU..$array.each) ⇒ <code>Mixed</code>
    * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$array.eachDynamic) ⇒ <code>Mixed</code>
    * [.getLast(arr)](#module_jaaJSU..$array.getLast) ⇒ <code>Mixed</code>
    * [.partition(arr)](#module_jaaJSU..$array.partition) ⇒ [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition)
    * [.removeItem(arr, item)](#module_jaaJSU..$array.removeItem) ⇒ <code>Array</code>
    * [.sortRandom()](#module_jaaJSU..$array.sortRandom) ⇒ <code>Number</code>
    * _virtual_
        * [.ArrayPartition](#module_jaaJSU..$array.ArrayPartition) : <code>Object</code>
            * [.head()](#module_jaaJSU..$array.ArrayPartition.head) ⇒ <code>Array</code>
            * [.tail()](#module_jaaJSU..$array.ArrayPartition.tail) ⇒ <code>Array</code>
            * [.onIndex(index)](#module_jaaJSU..$array.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
            * [.byCondition(fn)](#module_jaaJSU..$array.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="module_jaaJSU..$array.arrayIndex"></a>

#### $array.arrayIndex(i, s, l) ⇒ <code>Number</code>
Function which calculate final index for cylce looping.
Means from current index `i` get `s`th value in array which length is `l`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.arrayIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L68" title="jaaJSU.js:68"><small>(defined@68)</small></a>  
**Returns**: <code>Number</code> - Index in array  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Number</code> | Current index in array (typycally 0) |
| s | <code>Number</code> | Steps from `i` |
| l | <code>Number</code> | Array length |

**Example**  
```js
const a= ["0", "1"];
console.log(a[0]===a[$array.arrayIndex(0,0,a.length)]);
console.log(a[0]===a[$array.arrayIndex(1,1,a.length)]);
console.log(a[0]===a[$array.arrayIndex(0,2,a.length)]);
```

* * *

<a name="module_jaaJSU..$array.each"></a>

#### $array.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught Array `iterable`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L86" title="jaaJSU.js:86"><small>(defined@86)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#module_jaaJSU..IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$array.eachDynamic"></a>

#### $array.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught Array `iterable` like [each](#module_jaaJSU..$array.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L96" title="jaaJSU.js:96"><small>(defined@96)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#module_jaaJSU..IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$array.getLast"></a>

#### $array.getLast(arr) ⇒ <code>Mixed</code>
Function returns last element in array without editing the original.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.getLast" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L106" title="jaaJSU.js:106"><small>(defined@106)</small></a>  
**Returns**: <code>Mixed</code> - Last element in `arr`  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="module_jaaJSU..$array.partition"></a>

#### $array.partition(arr) ⇒ [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition)
Function returns methods for splitting array by condition.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.partition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L122" title="jaaJSU.js:122"><small>(defined@122)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="module_jaaJSU..$array.removeItem"></a>

#### $array.removeItem(arr, item) ⇒ <code>Array</code>
Function returns new array without any `item`

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.removeItem" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L173" title="jaaJSU.js:173"><small>(defined@173)</small></a>  
**Returns**: <code>Array</code> - New {Array} from `arr` without `item`s  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Original array |
| item | <code>Mixed</code> | Item for searching in `arr`. Make sence, if it is possible to compare with `===` operation |


* * *

<a name="module_jaaJSU..$array.sortRandom"></a>

#### $array.sortRandom() ⇒ <code>Number</code>
Function returns random number for Array.sort function

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.sortRandom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L190" title="jaaJSU.js:190"><small>(defined@190)</small></a>  
**Returns**: <code>Number</code> - Number in interval <-0.5,0.5>  

* * *

<a name="module_jaaJSU..$array.ArrayPartition"></a>

#### $array.ArrayPartition : <code>Object</code>
Methods around array `arr` exported by [partition](#module_jaaJSU..$array.partition) method.

**Kind**: static typedef of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.ArrayPartition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L116" title="jaaJSU.js:116"><small>(defined@116)</small></a>  
**Category**: virtual  

* [.ArrayPartition](#module_jaaJSU..$array.ArrayPartition) : <code>Object</code>
    * [.head()](#module_jaaJSU..$array.ArrayPartition.head) ⇒ <code>Array</code>
    * [.tail()](#module_jaaJSU..$array.ArrayPartition.tail) ⇒ <code>Array</code>
    * [.onIndex(index)](#module_jaaJSU..$array.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.byCondition(fn)](#module_jaaJSU..$array.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="module_jaaJSU..$array.ArrayPartition.head"></a>

##### ArrayPartition.head() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition) <a name="module_jaaJSU..$array.ArrayPartition.head" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L131" title="jaaJSU.js:131"><small>(defined@131)</small></a>  
**Returns**: <code>Array</code> - two items Array `[x, ...xs]` (first element and rest array)  

* * *

<a name="module_jaaJSU..$array.ArrayPartition.tail"></a>

##### ArrayPartition.tail() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition) <a name="module_jaaJSU..$array.ArrayPartition.tail" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L140" title="jaaJSU.js:140"><small>(defined@140)</small></a>  
**Returns**: <code>Array</code> - two items Array `[...xs, x]` (rest array and last element)  

* * *

<a name="module_jaaJSU..$array.ArrayPartition.onIndex"></a>

##### ArrayPartition.onIndex(index) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition) <a name="module_jaaJSU..$array.ArrayPartition.onIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L150" title="jaaJSU.js:150"><small>(defined@150)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Position (in fact for `*.splice(0, index)`) where to split array. |


* * *

<a name="module_jaaJSU..$array.ArrayPartition.byCondition"></a>

##### ArrayPartition.byCondition(fn) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#module_jaaJSU..$array.ArrayPartition) <a name="module_jaaJSU..$array.ArrayPartition.byCondition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L160" title="jaaJSU.js:160"><small>(defined@160)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2] based on `fn`.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function\_filterCallback</code> | In fact index of inner array (see return part). |


* * *

<a name="module_jaaJSU..$async"></a>

### jaaJSU~$async : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$async" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L206" title="jaaJSU.js:206"><small>(defined@206)</small></a>  
**Category**: namespaces  

* [~$async](#module_jaaJSU..$async) : <code>object</code>
    * [.CANCEL](#module_jaaJSU..$async.CANCEL)
    * ~~[.serialize(funcs)](#module_jaaJSU..$async.serialize) ⇒ <code>Promise</code>~~
    * [.iterate_(iterablePromises)](#module_jaaJSU..$async.iterate_) ⇒ <code>Promise</code>
    * [.iterateMixed_(tasks)](#module_jaaJSU..$async.iterateMixed_) ⇒ <code>Promise</code>
    * [.sequention_(...functions)](#module_jaaJSU..$async.sequention_) ⇒ <code>Promise</code>
    * [.each_(...functions)](#module_jaaJSU..$async.each_) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async.function_MultipleMixed2Promise)
    * _virtual_
        * [.function_Undefined2Promise()](#module_jaaJSU..$async.function_Undefined2Promise) ⇒ <code>Promise</code>
        * [.function_MultipleMixed2Promise(...Mixed)](#module_jaaJSU..$async.function_MultipleMixed2Promise) ⇒ <code>Promise</code>


* * *

<a name="module_jaaJSU..$async.CANCEL"></a>

#### $async.CANCEL
It is used in [iterateMixed_](#module_jaaJSU..$async.iterateMixed_)

**Kind**: static property of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.CANCEL" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L282" title="jaaJSU.js:282"><small>(defined@282)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| CANCEL | <code>Symbol</code> | 


* * *

<a name="module_jaaJSU..$async.serialize"></a>

#### ~~$async.serialize(funcs) ⇒ <code>Promise</code>~~
***Deprecated:*** Use [iterate_](#module_jaaJSU..$async.iterate_), [sequention_](#module_jaaJSU..$async.sequention_), [each_](#module_jaaJSU..$async.each_).

Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.serialize" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L228" title="jaaJSU.js:228"><small>(defined@228)</small></a>  
**.then**: <code>Mixed[]</code> Array of results from `funcs`  
**.catch**: <code>Error</code> Error in `funcs[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| funcs | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#module_jaaJSU..$async.function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

**Example**  
```js
const timeout= interval=> function(){return new Promise(function(resolve,reject){
    setTimeout(resolve, interval, interval);
});}
const timeouts= [ 50, 100, 150 ].map(timeout);
$async.serialize(timeouts).then(console.log).catch(console.error);
//log> [50, 100, 150]
```

* * *

<a name="module_jaaJSU..$async.iterate_"></a>

#### $async.iterate\_(iterablePromises) ⇒ <code>Promise</code>
Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.iterate_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L252" title="jaaJSU.js:252"><small>(defined@252)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `iterablePromises`  
**.catch**: <code>Error</code> Error in `iterablePromises[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| iterablePromises | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#module_jaaJSU..$async.function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

**Example**  
```js
const timeout= interval=> function(){return new Promise(function(resolve,reject){
    setTimeout(resolve, interval, interval);
});}
const timeouts= [ 50, 100, 150 ].map(timeout);
$async.serialize(timeouts).then(console.log).catch(console.error);
//log> 150
```

* * *

<a name="module_jaaJSU..$async.iterateMixed_"></a>

#### $async.iterateMixed\_(tasks) ⇒ <code>Promise</code>
Like `iterate_`, but also allows iterate throught non-promise functions

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.iterateMixed_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L283" title="jaaJSU.js:283"><small>(defined@283)</small></a>  
**Beta**: Use [iterate_](#module_jaaJSU..$async.iterate_), [sequention_](#module_jaaJSU..$async.sequention_), [each_](#module_jaaJSU..$async.each_).  

| Param | Type |
| --- | --- |
| tasks | <code>Promise</code> \| [<code>function\_Undefined2Promise</code>](#module_jaaJSU..$async.function_Undefined2Promise) | 


* * *

<a name="module_jaaJSU..$async.sequention_"></a>

#### $async.sequention\_(...functions) ⇒ <code>Promise</code>
Procedure for iterating throught **Promise** functions (wait pattern).

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.sequention_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L310" title="jaaJSU.js:310"><small>(defined@310)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_Undefined2Promise</code>](#module_jaaJSU..$async.function_Undefined2Promise) | Functions for iterating (the next always waiting fro previous). |


* * *

<a name="module_jaaJSU..$async.each_"></a>

#### $async.each\_(...functions) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async.function_MultipleMixed2Promise)
Procedure for iterating throught **Promise** functions (race pattern).

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.each_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L324" title="jaaJSU.js:324"><small>(defined@324)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function\_MultipleMixed2Promise</code> | Promises for iterating (race pattern). |

**Example**  
```js
const timeout= interval=> function(){return new Promise(function(resolve,reject){
    setTimeout(resolve, interval, interval);
});}
const timeouts= [ 50, 100, 150 ].map(timeout);
$async.each_(...timeouts)().then(console.log).catch(console.error);
//log> [50, 100, 150]
```

* * *

<a name="module_jaaJSU..$async.function_Undefined2Promise"></a>

#### $async.function\_Undefined2Promise() ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.function_Undefined2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L212" title="jaaJSU.js:212"><small>(defined@212)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$async.function_MultipleMixed2Promise"></a>

#### $async.function\_MultipleMixed2Promise(...Mixed) ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.function_MultipleMixed2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L219" title="jaaJSU.js:219"><small>(defined@219)</small></a>  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| ...Mixed | <code>Mixed</code> | Various arguments |


* * *

<a name="module_jaaJSU..$dom"></a>

### jaaJSU~$dom : <code>object</code>
This NAMESPACE provides features for DOM elemnts.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$dom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L352" title="jaaJSU.js:352"><small>(defined@352)</small></a>  
**Category**: namespaces  

* [~$dom](#module_jaaJSU..$dom) : <code>object</code>
    * [.ready_(...args)](#module_jaaJSU..$dom.ready_) ⇒ <code>Promise</code>
    * [.elementReady_(el_selector, [parent])](#module_jaaJSU..$dom.elementReady_) ⇒ <code>Promise</code>
    * [.empty(container)](#module_jaaJSU..$dom.empty)
    * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
    * [.removeElements(els_to_delete, [from_index], [to_index])](#module_jaaJSU..$dom.removeElements)
    * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
    * [.toggleAttribute(element, attribute_name, attribute_a, attribute_b)](#module_jaaJSU..$dom.toggleAttribute) ⇒ <code>String</code>
    * [.toggleDataset(element, data_name, data_a, data_b)](#module_jaaJSU..$dom.toggleDataset) ⇒ <code>String</code>
    * [.each(iterable, i_function, scope)](#module_jaaJSU..$dom.each) ⇒ <code>Mixed</code>
    * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$dom.eachDynamic) ⇒ <code>Mixed</code>
    * [.component_cordova([el_name], attrs, [params])](#module_jaaJSU..$dom.component_cordova) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
    * [.assign_cordova(element, ...object_attributes)](#module_jaaJSU..$dom.assign_cordova)
    * ~~[.add_cordova(parent, ...$$$, [call_parseHTML])](#module_jaaJSU..$dom.add_cordova) ⇒ <code>NodeElement</code>~~
    * _virtual_
        * [.DomPreparedSelector](#module_jaaJSU..$dom.DomPreparedSelector) : <code>Object</code>
        * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.mount()](#module_jaaJSU..$dom.ComponentEmpty.mount)
        * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
            * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
            * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.mount)
            * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
            * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
            * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
            * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
                * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
                * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.share.mount)
                * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>
        * [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
        * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
        * [.Component__AddText](#module_jaaJSU..$dom.Component__AddText) : <code>Component</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.Component__AddText.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
        * [.DomAssignObject](#module_jaaJSU..$dom.DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom.ready_"></a>

#### $dom.ready\_(...args) ⇒ <code>Promise</code>
Calls `.then` when the DOM is ready

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.ready_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L359" title="jaaJSU.js:359"><small>(defined@359)</small></a>  
**.then**: <code>Mixed</code> See `args`  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Mixed</code> | As params for `.then` |


* * *

<a name="module_jaaJSU..$dom.elementReady_"></a>

#### $dom.elementReady\_(el_selector, [parent]) ⇒ <code>Promise</code>
Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.elementReady_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L388" title="jaaJSU.js:388"><small>(defined@388)</small></a>  
**.then**: <code>NodeElement</code> Target elemnet based on `el_selector`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_selector | [<code>DomPreparedSelector</code>](#module_jaaJSU..$dom.DomPreparedSelector) |  |  |
| [parent] | <code>DOMElement</code> | <code>document</code> | Where to search `el_selector` |


* * *

<a name="module_jaaJSU..$dom.empty"></a>

#### $dom.empty(container)
Procedure remove children of given element `container`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.empty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L409" title="jaaJSU.js:409"><small>(defined@409)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>NodeElement</code> | Remove all its children |


* * *

<a name="module_jaaJSU..$dom.insertAfter"></a>

#### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.insertAfter" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L419" title="jaaJSU.js:419"><small>(defined@419)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.removeElements"></a>

#### $dom.removeElements(els_to_delete, [from_index], [to_index])
Remove elements in given {NodeList} or {HTMLCollection}

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.removeElements" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L431" title="jaaJSU.js:431"><small>(defined@431)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| els_to_delete | <code>NodeList</code> \| <code>HTMLCollection</code> |  | Array(-like) object of elements |
| [from_index] | <code>Number</code> | <code>0</code> | Params allowing skip elements in `els_to_delete` |
| [to_index] | <code>Number</code> | <code>els_to_delete.lenght</code> | Params allowing skip elements in `els_to_delete` |


* * *

<a name="module_jaaJSU..$dom.replace"></a>

#### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.replace" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L447" title="jaaJSU.js:447"><small>(defined@447)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.toggleAttribute"></a>

#### $dom.toggleAttribute(element, attribute_name, attribute_a, attribute_b) ⇒ <code>String</code>
Alias for `element.setAttribute(attribute_name, element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a)`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.toggleAttribute" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L458" title="jaaJSU.js:458"><small>(defined@458)</small></a>  
**Returns**: <code>String</code> - `attribute_a` or `attribute_b`  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>NodeElement</code> | Element target |
| attribute_name | <code>String</code> | Name of attribute |
| attribute_a | <code>String</code> | Value of attribute |
| attribute_b | <code>String</code> | Value of attribute |


* * *

<a name="module_jaaJSU..$dom.toggleDataset"></a>

#### $dom.toggleDataset(element, data_name, data_a, data_b) ⇒ <code>String</code>
Alias for `element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.toggleDataset" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L473" title="jaaJSU.js:473"><small>(defined@473)</small></a>  
**Returns**: <code>String</code> - `data_a` or `data_b`  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>NodeElement</code> | Element target |
| data_name | <code>String</code> | Name of dataset key |
| data_a | <code>String</code> | Name of dataset value |
| data_b | <code>String</code> | Name of dataset |


* * *

<a name="module_jaaJSU..$dom.each"></a>

#### $dom.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught NodeList `iterable`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L486" title="jaaJSU.js:486"><small>(defined@486)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | <code>types.IterableCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$dom.eachDynamic"></a>

#### $dom.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught NodeList `iterable` like [each](#module_jaaJSU..$dom.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L496" title="jaaJSU.js:496"><small>(defined@496)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | <code>types.IterableCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$dom.component_cordova"></a>

#### $dom.component\_cordova([el_name], attrs, [params]) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.component_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L554" title="jaaJSU.js:554"><small>(defined@554)</small></a>  
**Returns**: [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) |  | The second argument for [module:jaaJSU~$dom.assign](module:jaaJSU~$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#module_jaaJSU..$dom.Component.add) |


* * *

<a name="module_jaaJSU..$dom.assign_cordova"></a>

#### $dom.assign\_cordova(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.assign_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1044" title="jaaJSU.js:1044"><small>(defined@1044)</small></a>  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) | 

**Example**  
```js
const el= document.body;
const onclick= function(){ console.log(this.dataset.js_param); };
$dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
//result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
$dom.assign(el, { style: { color: "green" } });
//result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
```
**Example**  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="">…</body>
```
**Example**  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: true } });//or 1
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: false } });//or 0
//result HTML: <body class="">…</body>
//...
```
**Example**  
```js
$dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
$dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
```

* * *

<a name="module_jaaJSU..$dom.add_cordova"></a>

#### ~~$dom.add\_cordova(parent, ...$$$, [call_parseHTML]) ⇒ <code>NodeElement</code>~~
***Deprecated:*** true

See [module:jaaJSU~$dom.add](module:jaaJSU~$dom.add)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.add_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1118" title="jaaJSU.js:1118"><small>(defined@1118)</small></a>  
**Returns**: <code>NodeElement</code> - First created element (usualy wrapper thanks nesting)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>NodeElement</code> |  |
| ...$$$ | <code>Array</code> | Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova]) |
| [call_parseHTML] | <code>Boolean</code> | If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))` |


* * *

<a name="module_jaaJSU..$dom.DomPreparedSelector"></a>

#### $dom.DomPreparedSelector : <code>Object</code>
Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...).
Value is argument for selection function

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.DomPreparedSelector" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L379" title="jaaJSU.js:379"><small>(defined@379)</small></a>  
**Category**: virtual  
**Example**  
```js
{ getElementsByClassname: "class_name" }
```

* * *

<a name="module_jaaJSU..$dom.ComponentEmpty"></a>

#### $dom.ComponentEmpty : [<code>Component</code>](#module_jaaJSU..$dom.Component)
In generall, all methods from [Component](#module_jaaJSU..$dom.Component) don't do anything. Also during "mounting" there are some changes see method [mount](#module_jaaJSU..$dom.ComponentEmpty.mount).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.ComponentEmpty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L509" title="jaaJSU.js:509"><small>(defined@509)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.ComponentEmpty.mount"></a>

##### ComponentEmpty.mount()
The same syntax as [mount](#module_jaaJSU..$dom.Component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty) <a name="module_jaaJSU..$dom.ComponentEmpty.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L520" title="jaaJSU.js:520"><small>(defined@520)</small></a>  

* * *

<a name="module_jaaJSU..$dom.Component"></a>

#### $dom.Component : <code>Object</code>
This is minimal export of "functional class" [module:jaaJSU~$dom.component](module:jaaJSU~$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L591" title="jaaJSU.js:591"><small>(defined@591)</small></a>  
**Category**: virtual  

* [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
    * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
    * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.mount)
    * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
    * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
    * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
        * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.share.mount)
        * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L606" title="jaaJSU.js:606"><small>(defined@606)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) |  | Internally uses [module:jaaJSU~$dom.assign](module:jaaJSU~$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
| [shift] | <code>Number</code> | <code>0</code> | Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example. |

**Example**  
```js
const UL= document.getElementById('SOME UL');
const { add }= $dom.component("LI", { className: "list_item" });
//result: <li class="list_item">...</li>
add("DIV", { textContent: "Child of .list_item", className: "deep1" });
//result: <li class="list_item"><div class="deep1">...</div></li>
    add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
    //result: ...<div class="deep1"><div class="deep2">...</div></div>...
        add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
        //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
        add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
        //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
//next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
    add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
    //result: this is on 2nd level
add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
//result: this is on 0 level
    add("DIV", null);
    //just DIV without attributes
```

* * *

<a name="module_jaaJSU..$dom.Component.addText"></a>

##### Component.addText(text, [shift]) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.addText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L704" title="jaaJSU.js:704"><small>(defined@704)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

**Example**  
```js
const c1= $dom.component("P", { textContent: "TEXT" });
const c2= $dom.component("P", null);
    c2.addText("TEXT");
//c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
```
**Example**  
```js
function testTextLi({ href= "https://www.seznam.cz" }= {}){
    const c= $dom.component("LI", null);
        c.add("P", { textContent: "Link test: " });
            c.add("A", { textContent: "link ", href });
                c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
            c.addText("!", -2);
            c.add("BR", null, -1);
            c.addText("Test new line.", -1);
    return c.share;
}
//result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
```

* * *

<a name="module_jaaJSU..$dom.Component.component"></a>

##### Component.component(share, [shift]) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L748" title="jaaJSU.js:748"><small>(defined@748)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#module_jaaJSU..$dom.Component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

**Example**  
```js
function p({ textContent }){
     const cP= $dom.component("P", { textContent });
     return cP.share;
}
const c= $dom.component("DIV", null);
for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
c.mount(document.body, "replaceContent");
//= <body><div><p>0</p><p>1</p><p>2</p></div></body>
```

* * *

<a name="module_jaaJSU..$dom.Component.mount"></a>

##### Component.mount(element, call_parseHTML, [type])
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L778" title="jaaJSU.js:778"><small>(defined@778)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.recalculateDeep" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L839" title="jaaJSU.js:839"><small>(defined@839)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#module_jaaJSU..$dom.Component.add) |


* * *

<a name="module_jaaJSU..$dom.Component.getParentElement"></a>

##### Component.getParentElement() ⇒ <code>NodeElement</code> ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.getParentElement" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L851" title="jaaJSU.js:851"><small>(defined@851)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom.Component.setShift"></a>

##### Component.setShift([shift]) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.setShift" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L862" title="jaaJSU.js:862"><small>(defined@862)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

**Example**  
```js
function testNesting(){
    const c= $dom.component("DIV", null);
        c.setShift(0);
    for(let i= 0; i<5; i++){
        c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
    }
    return c.share;
}
//=> div> 5*p
```
**Example**  
```js
function testNesting(){
    const c= $dom.component("DIV", null);
    for(let i= 0; i<5; i++){
        c.add("P", { textContent: `Paragraph no. ${i}.` });
         //c.setShift();//or 0 => div> p> p> p> …
      //c.setShift(-1); => div> p> p> p> …
    c.setShift(-2);
    }
    return c.share;
}
//=> div> 5*p
```

* * *

<a name="module_jaaJSU..$dom.Component.initStorage"></a>

##### Component.initStorage() ⇒ <code>Object</code> ℗
Initialize internal storage

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.initStorage" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L900" title="jaaJSU.js:900"><small>(defined@900)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom.Component.update"></a>

##### Component.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L978" title="jaaJSU.js:978"><small>(defined@978)</small></a>  
**Returns**: <code>Boolean</code> - If success `1`, else `0`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate` <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!** <br/>- It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
const data_A= { a: "A" };
const data_A_update= { a: "AAA" };
const c= $dom.component("UL", null);
    c.add("LI", null)
         .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
c.mount(document.body);
c.update(data_A_update);
```
**Example**  
```js
// EXAMPLE WITH `mapUpdate`
const data_B= { a: { b: "A" }};
const data_B_update= { a: { b: "AAA" }};
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate(data_B, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(data_B_update);
```
**Example**  
```js
// EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(({ a })=> { a: ++a });
```

* * *

<a name="module_jaaJSU..$dom.Component.share"></a>

##### Component.share : <code>Object</code>
Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#module_jaaJSU..$dom.Component.component) method).

**Kind**: static typedef of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.share" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L583" title="jaaJSU.js:583"><small>(defined@583)</small></a>  

* [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
    * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom.Component.share.mount)
    * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.destroy" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L822" title="jaaJSU.js:822"><small>(defined@822)</small></a>  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="module_jaaJSU..$dom.Component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.isStatic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1019" title="jaaJSU.js:1019"><small>(defined@1019)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="module_jaaJSU..$dom.Component.share.mount"></a>

###### share.mount(element, call_parseHTML, [type])
Add element to live DOM

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L778" title="jaaJSU.js:778"><small>(defined@778)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom.Component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L978" title="jaaJSU.js:978"><small>(defined@978)</small></a>  
**Returns**: <code>Boolean</code> - If success `1`, else `0`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate` <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!** <br/>- It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
const data_A= { a: "A" };
const data_A_update= { a: "AAA" };
const c= $dom.component("UL", null);
    c.add("LI", null)
         .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
c.mount(document.body);
c.update(data_A_update);
```
**Example**  
```js
// EXAMPLE WITH `mapUpdate`
const data_B= { a: { b: "A" }};
const data_B_update= { a: { b: "AAA" }};
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate(data_B, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(data_B_update);
```
**Example**  
```js
// EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(({ a })=> { a: ++a });
```

* * *

<a name="module_jaaJSU..$dom.Component__Add"></a>

#### $dom.Component\_\_Add : [<code>Component</code>](#module_jaaJSU..$dom.Component)
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component__Add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L599" title="jaaJSU.js:599"><small>(defined@599)</small></a>  
**Category**: virtual  

* [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)


* * *

<a name="module_jaaJSU..$dom.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.getReference" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L646" title="jaaJSU.js:646"><small>(defined@646)</small></a>  

* * *

<a name="module_jaaJSU..$dom.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L653" title="jaaJSU.js:653"><small>(defined@653)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This method allows to register function ([onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#module_jaaJSU..$dom.Component.update)).

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.onupdate" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L661" title="jaaJSU.js:661"><small>(defined@661)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#module_jaaJSU..$dom.onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

**Example**  
```js
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
…
c.update({ key: "Value changed" });//=> <p>Value changed</p>
```
**Example**  
```js
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
…
c.update({ B: "B" });//=> <p>AB</p>
```

* * *

<a name="module_jaaJSU..$dom.onUpdateFunction"></a>

#### $dom.onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.onUpdateFunction" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L681" title="jaaJSU.js:681"><small>(defined@681)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#module_jaaJSU..$dom.Component.update) is called. This callback can be registered when element is created (see method [add](#module_jaaJSU..$dom.Component.add)) see [Component__Add](#module_jaaJSU..$dom.Component__Add).  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom.Component__Add.onupdate) |


* * *

<a name="module_jaaJSU..$dom.Component__AddText"></a>

#### $dom.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component__AddText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L697" title="jaaJSU.js:697"><small>(defined@697)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText) <a name="module_jaaJSU..$dom.Component__AddText.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L737" title="jaaJSU.js:737"><small>(defined@737)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom.DomAssignObject"></a>

#### $dom.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [$dom.assign]($dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.DomAssignObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1031" title="jaaJSU.js:1031"><small>(defined@1031)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$function"></a>

### jaaJSU~$function : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1168" title="jaaJSU.js:1168"><small>(defined@1168)</small></a>  
**Category**: namespaces  

* [~$function](#module_jaaJSU..$function) : <code>object</code>
    * [.branches([reduceFun], [reduceInitValueCreator])](#module_jaaJSU..$function.branches) ⇒ <code>function</code>
    * [.component(transform)](#module_jaaJSU..$function.component) ⇒ <code>component</code>
    * [.conditionalCall(mixed, fun)](#module_jaaJSU..$function.conditionalCall) ⇒ <code>Boolean</code> \| <code>Mixed</code>
    * [.constant(constantArg)](#module_jaaJSU..$function.constant) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function.function_Undefined2Mixed)
    * [.each()](#module_jaaJSU..$function.each) ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function.function_Mixed2Undefined)
    * [.identity(id)](#module_jaaJSU..$function.identity) ⇒ <code>Mixed</code>
    * [.partial(fn, ...presetArgs)](#module_jaaJSU..$function.partial) ⇒ <code>function</code>
    * [.schedule(...functions, def)](#module_jaaJSU..$function.schedule)
    * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed)
    * _virtual_
        * [.function_Mixed2Undefined(input)](#module_jaaJSU..$function.function_Mixed2Undefined) ⇒ <code>Undefined</code>
        * [.function_Mixed2Mixed(input)](#module_jaaJSU..$function.function_Mixed2Mixed) ⇒ <code>Mixed</code>
        * [.function_Undefined2Mixed()](#module_jaaJSU..$function.function_Undefined2Mixed) ⇒ <code>Mixed</code>
        * [.function_MultipleMixed2Mixed(...input)](#module_jaaJSU..$function.function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
        * [.function_MultipleMixed2Function(...input)](#module_jaaJSU..$function.function_MultipleMixed2Function) ⇒ <code>function</code>
        * [.function_MultipleFunction2Function(...Functions)](#module_jaaJSU..$function.function_MultipleFunction2Function) ⇒ <code>function</code>


* * *

<a name="module_jaaJSU..$function.branches"></a>

#### $function.branches([reduceFun], [reduceInitValueCreator]) ⇒ <code>function</code>
Provide **input →⇶ …functions ⇛ reduction → output** functionality.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.branches" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1222" title="jaaJSU.js:1222"><small>(defined@1222)</small></a>  
**Returns**: <code>function</code> - - `...functions`**&lt;…Function&gt;** `=>` **&lt;Function&gt;**
     - `...inputs`**&lt;…Mixed&gt;** `=>` **&lt;Mixed&gt;**
     - result of `reduceFun`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reduceFun] | <code>types.function\_reduceCallback</code> |  | **By default behaves like 'map'** |
| [reduceInitValueCreator] | <code>function</code> \| <code>Mixed</code> | <code>()&#x3D;&gt;[]</code> | Initial value for `acc` in `reduceFun`. <br/>- **if** not functions, the same behaviour is used as in case of `*.reduce(...)` <br/>- **else** the result of function is used (because of *call-by-reference* in case of **Array**s, **Object**s, …). |

**Example**  
```js
const testFunction= $function.branches((acc, curr)=> acc&&curr, true)(
    ({ a })=> a==="A",
    ({ b })=> b==="B"
);
testFunction({ a: "A", b: "B" });//= true
testFunction({ a: "B", b: "A" });//= false
```

* * *

<a name="module_jaaJSU..$function.component"></a>

#### $function.component(transform) ⇒ <code>component</code>
EXPERIMENT!: Function composing using `$dom.component` like syntax

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1251" title="jaaJSU.js:1251"><small>(defined@1251)</small></a>  
**Returns**: <code>component</code> - `{ pipe, run }`  

| Param | Type | Description |
| --- | --- | --- |
| transform | <code>function</code> | ... |


* * *

<a name="module_jaaJSU..$function.conditionalCall"></a>

#### $function.conditionalCall(mixed, fun) ⇒ <code>Boolean</code> \| <code>Mixed</code>
Shorthand for `const mixed= ...; if(mixed) fun(mixed);`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.conditionalCall" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1265" title="jaaJSU.js:1265"><small>(defined@1265)</small></a>  
**Returns**: <code>Boolean</code> \| <code>Mixed</code> - **False** or output of `fun`  

| Param | Type | Description |
| --- | --- | --- |
| mixed | <code>Mixed</code> | If `mixed=true` the `fun` is called |
| fun | [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed) | 'Refular' function as argument accepts `mixed` |


* * *

<a name="module_jaaJSU..$function.constant"></a>

#### $function.constant(constantArg) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function.function_Undefined2Mixed)
Helper for returnin constant

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.constant" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1278" title="jaaJSU.js:1278"><small>(defined@1278)</small></a>  
**Returns**: [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function.function_Undefined2Mixed) - `()=> constantArg`  

| Param | Type |
| --- | --- |
| constantArg | <code>Mixed</code> | 

**Example**  
```js
$function.constant(5)(10);//= `5`
```

* * *

<a name="module_jaaJSU..$function.each"></a>

#### $function.each() ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function.function_Mixed2Undefined)
Functional-like alternative for `for(...){functions[nth](..input);}`.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1288" title="jaaJSU.js:1288"><small>(defined@1288)</small></a>  

| Param | Type |
| --- | --- |
| ......functions | [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function.function_Mixed2Undefined) | 


* * *

<a name="module_jaaJSU..$function.identity"></a>

#### $function.identity(id) ⇒ <code>Mixed</code>
`id=> id`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.identity" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1296" title="jaaJSU.js:1296"><small>(defined@1296)</small></a>  
**Returns**: <code>Mixed</code> - `id`  

| Param | Type |
| --- | --- |
| id | <code>Mixed</code> | 

**Example**  
```js
$function.identity(10);//= `10`
```

* * *

<a name="module_jaaJSU..$function.partial"></a>

#### $function.partial(fn, ...presetArgs) ⇒ <code>function</code>
EXPERIMENT!: "Bind" alternative
vs *.bind(?,...) - it depends if/when you prefer to set `this` (`bind`= when you define partial fn or `partial`= when you call it)

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.partial" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1324" title="jaaJSU.js:1324"><small>(defined@1324)</small></a>  
**Returns**: <code>function</code> - ...  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | ... |
| ...presetArgs | <code>Mixed</code> | ... |


* * *

<a name="module_jaaJSU..$function.schedule"></a>

#### $function.schedule(...functions, def)
Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.schedule" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1336" title="jaaJSU.js:1336"><small>(defined@1336)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ...functions | <code>Functions</code> |  | Array of functions for iteratings |
| def | <code>Object</code> |  |  |
| [def.context] | <code>Object</code> | <code>window</code> | Parameter for `*.call(context)` |
| [def.delay] | <code>Object</code> | <code>150</code> | Parameter for `$optimizier.timeoutAnimationFrame` |


* * *

<a name="module_jaaJSU..$function.sequention"></a>

#### $function.sequention(...functions) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed)
Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to [each](#methods_each). But, as arguments for current function is used output frome previous function.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.sequention" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1346" title="jaaJSU.js:1346"><small>(defined@1346)</small></a>  
**Returns**: [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed) - For given `input` calls all functions in `...functions` (use `input` as arguments for first function). Returns output of last `functions`.  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function.function_Mixed2Mixed) | List of functions: <br/>`...functions[nth](__INPUT__){... return __OUTPUT__;}` <br/>`__INPUT__` is `input` (for first function) or `__OUTPUT__` <br/>`__OUTPUT__`! `__OUTPUT__` is used as argument for next function in `...functions`. |

**Example**  
```js
console.log($function.sequention(
     a=>[a+1, a-1],
     ([a,b])=>[b-1, a+1]
 )(5));//= [3, 7]

 console.log($function.sequention(
     a=>a+1,
     a=>a+2
 )(5));//= [8]
```

* * *

<a name="module_jaaJSU..$function.function_Mixed2Undefined"></a>

#### $function.function\_Mixed2Undefined(input) ⇒ <code>Undefined</code>
`function(input){  }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_Mixed2Undefined" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1174" title="jaaJSU.js:1174"><small>(defined@1174)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function.function_Mixed2Mixed"></a>

#### $function.function\_Mixed2Mixed(input) ⇒ <code>Mixed</code>
`function(input){ return ...; }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_Mixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1182" title="jaaJSU.js:1182"><small>(defined@1182)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function.function_Undefined2Mixed"></a>

#### $function.function\_Undefined2Mixed() ⇒ <code>Mixed</code>
`function(){ return ...; }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_Undefined2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1190" title="jaaJSU.js:1190"><small>(defined@1190)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$function.function_MultipleMixed2Mixed"></a>

#### $function.function\_MultipleMixed2Mixed(...input) ⇒ <code>Mixed</code>
`function(...input){ return ...; }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_MultipleMixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1197" title="jaaJSU.js:1197"><small>(defined@1197)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function.function_MultipleMixed2Function"></a>

#### $function.function\_MultipleMixed2Function(...input) ⇒ <code>function</code>
`function(...input){ return function(...){...}; }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_MultipleMixed2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1205" title="jaaJSU.js:1205"><small>(defined@1205)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function.function_MultipleFunction2Function"></a>

#### $function.function\_MultipleFunction2Function(...Functions) ⇒ <code>function</code>
`function(...Functions){ return function(...){...}; }`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.function_MultipleFunction2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1213" title="jaaJSU.js:1213"><small>(defined@1213)</small></a>  
**Category**: virtual  

| Param | Type |
| --- | --- |
| ...Functions | <code>function</code> | 


* * *

<a name="module_jaaJSU..function_filterCallback"></a>

### jaaJSU~function\_filterCallback(i_value, i) ⇒ <code>Boolean</code>
This kind of function is typically used in `Array.prototype.filter`.

**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..function_filterCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L12" title="jaaJSU.js:12"><small>(defined@12)</small></a>  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="module_jaaJSU..function_reduceCallback"></a>

### jaaJSU~function\_reduceCallback(accumulator, i_value, i) ⇒ <code>Mixed</code>
This kind of function is typically used in `Array.prototype.reduce`.

**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..function_reduceCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L20" title="jaaJSU.js:20"><small>(defined@20)</small></a>  
**Returns**: <code>Mixed</code> - accumulator  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| accumulator | <code>Mixed</code> |  |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="module_jaaJSU..IterableCallback"></a>

### jaaJSU~IterableCallback(IterableArrayObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..IterableCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L37" title="jaaJSU.js:37"><small>(defined@37)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableArrayObject](IterableArrayObject).  
**Category**: virtual  

| Param | Type |
| --- | --- |
| IterableArrayObject | <code>IterableArrayObject</code> | 


* * *

<a name="module_jaaJSU..IterableArrayObject"></a>

### jaaJSU~IterableArrayObject : <code>Object</code>
**Kind**: inner typedef of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..IterableArrayObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L29" title="jaaJSU.js:29"><small>(defined@29)</small></a>  
**Category**: virtual  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| item | <code>Mixed</code> | Nth value for `key` in `iterable`. |
| key | <code>Number</code> | Idicies 0...`iterable.length`. |
| last | <code>Boolean</code> | Is setted True, if it is the last element in array. |
| share | <code>Mixed</code> \| <code>Undefined</code> | shared variable - works similar to `*.reduce` method |


* * *

<a name="$array"></a>

## $array : <code>object</code>
Exported namespace of [$array](#module_jaaJSU..$array).

**Kind**: global namespace <a name="$array" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L200" title="jaaJSU.js:200"><small>(defined@200)</small></a>  

* * *

<a name="$async"></a>

## $async : <code>object</code>
Exported namespace of [$async](#module_jaaJSU..$async).

**Kind**: global namespace <a name="$async" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L344" title="jaaJSU.js:344"><small>(defined@344)</small></a>  

* * *

<a name="$dom"></a>

## $dom : <code>object</code>
Exported namespace of [$dom](#module_jaaJSU..$dom).

**Kind**: global namespace <a name="$dom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1161" title="jaaJSU.js:1161"><small>(defined@1161)</small></a>  

* * *

<a name="$dom.forceRedraw_cordova"></a>

### $dom.forceRedraw\_cordova([element], [platform])
Redraw element using cheat `*.offsetHeight`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.forceRedraw_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1146" title="jaaJSU.js:1146"><small>(defined@1146)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>NodeElement</code> | <code>active_page_el</code> | Element for redraw |
| [platform] | <code>String</code> | <code>&quot;iOS&quot;</code> | Redraw only for specific `device.platform` ("Android", "iOS") |


* * *

<a name="$function"></a>

## $function : <code>object</code>
Exported namespace of [$function](#module_jaaJSU..$function).

**Kind**: global namespace <a name="$function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1369" title="jaaJSU.js:1369"><small>(defined@1369)</small></a>  

* * *

<a name="$object"></a>

## $object : <code>object</code>
Exported namespace of [$object](#module_jaaJSU..$object).

**Kind**: global namespace <a name="$object" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1550" title="jaaJSU.js:1550"><small>(defined@1550)</small></a>  

* * *

<a name="$optimizier"></a>

## $optimizier : <code>object</code>
This NAMESPACE provides features for optimizations.

**Kind**: global namespace <a name="$optimizier" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1624" title="jaaJSU.js:1624"><small>(defined@1624)</small></a>  

* [$optimizier](#$optimizier) : <code>object</code>
    * [.debounce(func, [wait], [immediate])](#$optimizier.debounce) ⇒ <code>function</code>
    * [.trottle(func, [cycles_leap])](#$optimizier.trottle) ⇒ <code>function</code>
    * [.poll_(fn, [timeout], [interval])](#$optimizier.poll_) ⇒ <code>Promise</code>
    * [.once(fn, context)](#$optimizier.once)
    * [.timeoutAnimationFrame(f, [delay])](#$optimizier.timeoutAnimationFrame)
    * [.requestAnimationFrame_()](#$optimizier.requestAnimationFrame_) ⇒ <code>Promise</code>
    * [.setTimeout_([timeout])](#$optimizier.setTimeout_) ⇒ <code>function</code>
    * [.setIdleValue(initFunction)](#$optimizier.setIdleValue) ⇒ <code>IdleValue</code>
    * [.getIdleValue(idle_value)](#$optimizier.getIdleValue) ⇒ <code>Mixed</code>
    * [.clearIdleValue(idle_value)](#$optimizier.clearIdleValue) ⇒ <code>Mixed</code> \| <code>Undefined</code>


* * *

<a name="$optimizier.debounce"></a>

### $optimiziers.debounce(func, [wait], [immediate]) ⇒ <code>function</code>
Prevent multiple calling (typically for "onresize" events) - use google for more detail

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.debounce" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1631" title="jaaJSU.js:1631"><small>(defined@1631)</small></a>  
**Returns**: <code>function</code> - Debounced function `fun` (accepts same arguments)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | Function for debounce |
| [wait] | <code>Number</code> | <code>150</code> | How much wait for next calling |
| [immediate] | <code>Boolean</code> |  | First time wait since `wait` (**false**), or call immediate and after wait (**true**) - infact switch *debounce/trottle* |

**Example**  
```text
graphically (wait= 4symbols)
I call (| symbol) fun:    .|||.|.|||..
             debounce:    .....|....|.
              trottle:    .|.....|....
```

* * *

<a name="$optimizier.trottle"></a>

### $optimiziers.trottle(func, [cycles_leap]) ⇒ <code>function</code>
Very similar to [debounce](#methods_debounce), but uses `requestAnimationFrame`

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.trottle" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1664" title="jaaJSU.js:1664"><small>(defined@1664)</small></a>  
**Returns**: <code>function</code> - Trottled function `fun`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  |  |
| [cycles_leap] | <code>Number</code> | <code>1</code> | similar to `wait` - how many times calls `requestAnimationFrame` |


* * *

<a name="$optimizier.poll_"></a>

### $optimiziers.poll\_(fn, [timeout], [interval]) ⇒ <code>Promise</code>
Calls `.then` when `fn` returns **true**

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.poll_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1692" title="jaaJSU.js:1692"><small>(defined@1692)</small></a>  
**.then**: <code>Mixed</code> result of `fn`  
**.catch**: <code>Error</code> If timeout  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Conditional function |
| [timeout] | <code>Number</code> | <code>2000</code> | Timeout limit for requesting `fn` (ms) |
| [interval] | <code>Number</code> | <code>100</code> | Interval for calling `fn` (ms) |

**Example**  
```js
poll_(()=>document.readyState!=='loading').then(console.log).catch(console.error);
```

* * *

<a name="$optimizier.once"></a>

### $optimiziers.once(fn, context)
Prevent multiple calling of `fn`

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.once" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1723" title="jaaJSU.js:1723"><small>(defined@1723)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | * Function which must be called only onetime |
| context | <code>Object</code> | * Typically `window` |

**Example**  
```js
console_log= $optimizier.once(()=>console.log("hi"));
    console_log();//=hi
    console_log();//nothing
```

* * *

<a name="$optimizier.timeoutAnimationFrame"></a>

### $optimiziers.timeoutAnimationFrame(f, [delay])
Combination of `setTimeout`->`requestAnimationFrame`

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.timeoutAnimationFrame" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1746" title="jaaJSU.js:1746"><small>(defined@1746)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | * Function to call later (`delay`+next animation frame) |
| [delay] | <code>Number</code> | <code>150</code> | * When call `f` (ms) |


* * *

<a name="$optimizier.requestAnimationFrame_"></a>

### $optimiziers.requestAnimationFrame\_() ⇒ <code>Promise</code>
Promise wrapper around [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.requestAnimationFrame_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1756" title="jaaJSU.js:1756"><small>(defined@1756)</small></a>  
**Example**  
```js
$optimizier.requestAnimationFrame_().then(()=> console.log("Hi")); //-> "Hi"
     Promise.resolve().then($optimiziers.requestAnimationFrame_).then(()=> console.log("Hi")); //-> "Hi"
```

* * *

<a name="$optimizier.setTimeout_"></a>

### $optimiziers.setTimeout\_([timeout]) ⇒ <code>function</code>
Promise wrapper around `setTimeout`.

Links:
 1) [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
 2) [`setTimeout Arguments`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Arguments)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setTimeout_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1766" title="jaaJSU.js:1766"><small>(defined@1766)</small></a>  
**Returns**: <code>function</code> - - **(…params)=> \<Promise\>**
 - where `params` are `arg1, ..., argN` arguments for `setTimeout` — see **Links (2)**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>0</code> | - Optional parameter to sets the time delay in milliseconds  - `delay` argument for `setTimeout` — see **Links (2)** |

**Example**  
```js
$optimizier.setTimeout_(30)("Hi").then(console.log); //-> "Hi" "after 30ms"
         Promise.resolve("Hi").then($optimiziers.setTimeout_()).then(console.log); //-> "Hi" "after 0ms"
```

* * *

<a name="$optimizier.setIdleValue"></a>

### $optimiziers.setIdleValue(initFunction) ⇒ <code>IdleValue</code>
This function creates **\<IdleValue\>**. It is value which is not actually used immediately during assignment but it’s needed later in code. For getting value use [`getIdleValue`](#methods_getIdleValue).

This is infact *idle-until-urgent* evaluation pattern.

Internally uses `requestIdleCallback` (`cancelIdleCallback`), or `setTimeout` (`clearTimeout`) as shim/ponyfill.

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1785" title="jaaJSU.js:1785"><small>(defined@1785)</small></a>  
**Returns**: <code>IdleValue</code> - - argument for [`getIdleValue`](#methods_getIdleValue) or [`cancelIdleValue`](#methods_cancelIdleValue).  

| Param | Type | Description |
| --- | --- | --- |
| initFunction | <code>function</code> | - this function is called to get value |

**Example**  
```js
const formatter_idled= $optimizier.setIdleValue(()=> new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles' }));
     // …
     console.log($optimizier.getIdleValue(formatter_idled).format(new Date()));
```

* * *

<a name="$optimizier.getIdleValue"></a>

### $optimiziers.getIdleValue(idle_value) ⇒ <code>Mixed</code>
Returns result of **\<IdleValue\>**.

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.getIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1803" title="jaaJSU.js:1803"><small>(defined@1803)</small></a>  
**Returns**: <code>Mixed</code> - - Output of `initFunction` — see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

<a name="$optimizier.clearIdleValue"></a>

### $optimiziers.clearIdleValue(idle_value) ⇒ <code>Mixed</code> \| <code>Undefined</code>
Stops **\<IdleValue\>** evaluating. Infact calls `cancelIdleCallback` — see [`setIdleValue`](#methods_setIdleValue)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.clearIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1813" title="jaaJSU.js:1813"><small>(defined@1813)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - - returns current value or `undefined` if `initFunction` wasn't called — see see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

