## Modules

<dl>
<dt><a href="#module_jaaJSU">jaaJSU</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#types">types</a> : <code>object</code> ℗</dt>
<dd><p>Just virtual key!!! This is overwiev of all internal types for better description.</p>
</dd>
<dt><a href="#$array">$array</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for Arrays.</p>
</dd>
<dt><a href="#$async">$async</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for async (mainly Promise) functions.</p>
</dd>
<dt><a href="#$dom">$dom</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for DOM elemnts.</p>
</dd>
<dt><a href="#$function">$function</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for async (mainly Promise) functions.</p>
</dd>
<dt><a href="#$optimizier">$optimizier</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for optimizations.</p>
</dd>
</dl>

<a name="module_jaaJSU"></a>

## jaaJSU

* [jaaJSU](#module_jaaJSU)
    * [~$object](#module_jaaJSU..$object) : <code>object</code>
    * [~$string](#module_jaaJSU..$string) : <code>object</code>
    * [~$time](#module_jaaJSU..$time) : <code>object</code>


* * *

<a name="module_jaaJSU..$object"></a>

### jaaJSU~$object : <code>object</code>
This NAMESPACE provides features for Objects.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$object" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1363" title="jaaJSU.js:1363"><small>(defined@1363)</small></a>  

* * *

<a name="module_jaaJSU..$string"></a>

### jaaJSU~$string : <code>object</code>
This NAMESPACE provides features for strings.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$string" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1822" title="jaaJSU.js:1822"><small>(defined@1822)</small></a>  

* * *

<a name="module_jaaJSU..$time"></a>

### jaaJSU~$time : <code>object</code>
This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$time" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L2104" title="jaaJSU.js:2104"><small>(defined@2104)</small></a>  

* * *

<a name="types"></a>

## types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: global namespace <a name="types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L11" title="jaaJSU.js:11"><small>(defined@11)</small></a>  
**Access**: private  
**Read only**: true  

* [types](#types) : <code>object</code> ℗
    * [.function_filterCallback(i_value, i)](#types.function_filterCallback) ⇒ <code>Boolean</code>
    * [.function_reduceCallback(accumulator, i_value, i)](#types.function_reduceCallback) ⇒ <code>Mixed</code>
    * [.IterableCallback(IterableArrayObject)](#types.IterableCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
    * [.IterableArrayObject](#types.IterableArrayObject) : <code>Object</code>
    * [.ArrayPartition](#types.ArrayPartition) : <code>Object</code>
        * [.head()](#types.ArrayPartition.head) ⇒ <code>Array</code>
        * [.tail()](#types.ArrayPartition.tail) ⇒ <code>Array</code>
        * [.onIndex(index)](#types.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.byCondition(fn)](#types.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.DomPreparedSelector](#types.DomPreparedSelector) : <code>Object</code>


* * *

<a name="types.function_filterCallback"></a>

### types.function\_filterCallback(i_value, i) ⇒ <code>Boolean</code>
This kind of function is typically used in `Array.prototype.filter`.

**Kind**: static method of [<code>types</code>](#types) <a name="types.function_filterCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L26" title="jaaJSU.js:26"><small>(defined@26)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="types.function_reduceCallback"></a>

### types.function\_reduceCallback(accumulator, i_value, i) ⇒ <code>Mixed</code>
This kind of function is typically used in `Array.prototype.reduce`.

**Kind**: static method of [<code>types</code>](#types) <a name="types.function_reduceCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L34" title="jaaJSU.js:34"><small>(defined@34)</small></a>  
**Returns**: <code>Mixed</code> - accumulator  

| Param | Type | Description |
| --- | --- | --- |
| accumulator | <code>Mixed</code> |  |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="types.IterableCallback"></a>

### types.IterableCallback(IterableArrayObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: static method of [<code>types</code>](#types) <a name="types.IterableCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L43" title="jaaJSU.js:43"><small>(defined@43)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableArrayObject](#types.IterableArrayObject).  

| Param | Type |
| --- | --- |
| IterableArrayObject | [<code>IterableArrayObject</code>](#types.IterableArrayObject) | 


* * *

<a name="types.IterableArrayObject"></a>

### types.IterableArrayObject : <code>Object</code>
**Kind**: static typedef of [<code>types</code>](#types) <a name="types.IterableArrayObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L18" title="jaaJSU.js:18"><small>(defined@18)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| item | <code>Mixed</code> | Nth value for `key` in `iterable`. |
| key | <code>Number</code> | Idicies 0...`Object.keys(iterable).length`. |
| last | <code>Boolean</code> | Is setted True, if it is the last element in array. |
| share | <code>Mixed</code> \| <code>Undefined</code> | shared variable - works similar to `*.reduce` method |


* * *

<a name="types.ArrayPartition"></a>

### types.ArrayPartition : <code>Object</code>
Methods around array `arr` exported by [partition](#$array.partition) method.

**Kind**: static typedef of [<code>types</code>](#types) <a name="types.ArrayPartition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L122" title="jaaJSU.js:122"><small>(defined@122)</small></a>  

* [.ArrayPartition](#types.ArrayPartition) : <code>Object</code>
    * [.head()](#types.ArrayPartition.head) ⇒ <code>Array</code>
    * [.tail()](#types.ArrayPartition.tail) ⇒ <code>Array</code>
    * [.onIndex(index)](#types.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.byCondition(fn)](#types.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="types.ArrayPartition.head"></a>

#### ArrayPartition.head() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.head" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L136" title="jaaJSU.js:136"><small>(defined@136)</small></a>  
**Returns**: <code>Array</code> - two items Array `[x, ...xs]` (first element and rest array)  

* * *

<a name="types.ArrayPartition.tail"></a>

#### ArrayPartition.tail() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.tail" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L145" title="jaaJSU.js:145"><small>(defined@145)</small></a>  
**Returns**: <code>Array</code> - two items Array `[...xs, x]` (rest array and last element)  

* * *

<a name="types.ArrayPartition.onIndex"></a>

#### ArrayPartition.onIndex(index) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.onIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L155" title="jaaJSU.js:155"><small>(defined@155)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Position (in fact for `*.splice(0, index)`) where to split array. |


* * *

<a name="types.ArrayPartition.byCondition"></a>

#### ArrayPartition.byCondition(fn) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.byCondition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L165" title="jaaJSU.js:165"><small>(defined@165)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2] based on `fn`.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function\_filterCallback</code>](#types.function_filterCallback) | In fact index of inner array (see return part). |


* * *

<a name="types.DomPreparedSelector"></a>

### types.DomPreparedSelector : <code>Object</code>
Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...).
Value is argument for selection function

**Kind**: static typedef of [<code>types</code>](#types) <a name="types.DomPreparedSelector" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L377" title="jaaJSU.js:377"><small>(defined@377)</small></a>  
**Example**  
```js
{ getElementsByClassname: "class_name" }
```

* * *

<a name="$array"></a>

## $array : <code>object</code>
This NAMESPACE provides features for Arrays.

**Kind**: global namespace <a name="$array" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L67" title="jaaJSU.js:67"><small>(defined@67)</small></a>  

* [$array](#$array) : <code>object</code>
    * [.arrayIndex(i, s, l)](#$array.arrayIndex) ⇒ <code>Number</code>
    * [.each(iterable, i_function, scope)](#$array.each) ⇒ <code>Mixed</code>
    * [.eachDynamic(iterable, i_function, scope)](#$array.eachDynamic) ⇒ <code>Mixed</code>
    * [.getLast(arr)](#$array.getLast) ⇒ <code>Mixed</code>
    * [.partition(arr)](#$array.partition) ⇒ [<code>ArrayPartition</code>](#types.ArrayPartition)
    * [.removeItem(arr, item)](#$array.removeItem) ⇒ <code>Array</code>
    * [.sortRandom()](#$array.sortRandom) ⇒ <code>Number</code>


* * *

<a name="$array.arrayIndex"></a>

### $array.arrayIndex(i, s, l) ⇒ <code>Number</code>
Function which calculate final index for cylce looping.
Means from current index `i` get `s`th value in array which length is `l`.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.arrayIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L74" title="jaaJSU.js:74"><small>(defined@74)</small></a>  
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

<a name="$array.each"></a>

### $array.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught Array `iterable`.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L92" title="jaaJSU.js:92"><small>(defined@92)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#types.IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="$array.eachDynamic"></a>

### $array.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught Array `iterable` like [each](#$array.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L102" title="jaaJSU.js:102"><small>(defined@102)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#types.IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="$array.getLast"></a>

### $array.getLast(arr) ⇒ <code>Mixed</code>
Function returns last element in array without editing the original.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.getLast" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L112" title="jaaJSU.js:112"><small>(defined@112)</small></a>  
**Returns**: <code>Mixed</code> - Last element in `arr`  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="$array.partition"></a>

### $array.partition(arr) ⇒ [<code>ArrayPartition</code>](#types.ArrayPartition)
Function returns methods for splitting array by condition.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.partition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L127" title="jaaJSU.js:127"><small>(defined@127)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="$array.removeItem"></a>

### $array.removeItem(arr, item) ⇒ <code>Array</code>
Function returns new array without any `item`

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.removeItem" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L178" title="jaaJSU.js:178"><small>(defined@178)</small></a>  
**Returns**: <code>Array</code> - New {Array} from `arr` without `item`s  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Original array |
| item | <code>Mixed</code> | Item for searching in `arr`. Make sence, if it is possible to compare with `===` operation |


* * *

<a name="$array.sortRandom"></a>

### $array.sortRandom() ⇒ <code>Number</code>
Function returns random number for Array.sort function

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.sortRandom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L195" title="jaaJSU.js:195"><small>(defined@195)</small></a>  
**Returns**: <code>Number</code> - Number in interval <-0.5,0.5>  

* * *

<a name="$async"></a>

## $async : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: global namespace <a name="$async" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L206" title="jaaJSU.js:206"><small>(defined@206)</small></a>  

* [$async](#$async) : <code>object</code>
    * [.CANCEL](#$async.CANCEL)
    * [.types](#$async.types) : <code>object</code> ℗
        * [.function_Undefined2Promise()](#$async.types.function_Undefined2Promise) ⇒ <code>Promise</code>
        * [.function_MultipleMixed2Promise(...Mixed)](#$async.types.function_MultipleMixed2Promise) ⇒ <code>Promise</code>
    * ~~[.serialize(funcs)](#$async.serialize) ⇒ <code>Promise</code>~~
    * [.iterate_(iterablePromises)](#$async.iterate_) ⇒ <code>Promise</code>
    * [.iterateMixed_(tasks)](#$async.iterateMixed_) ⇒ <code>Promise</code>
    * [.sequention_(...functions)](#$async.sequention_) ⇒ <code>Promise</code>
    * [.each_(...functions)](#$async.each_) ⇒ [<code>function\_MultipleMixed2Promise</code>](#$async.types.function_MultipleMixed2Promise)


* * *

<a name="$async.CANCEL"></a>

### $async.CANCEL
It is used in [iterateMixed_](#$async.iterateMixed_)

**Kind**: static property of [<code>$async</code>](#$async) <a name="$async.CANCEL" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L285" title="jaaJSU.js:285"><small>(defined@285)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| CANCEL | <code>Symbol</code> | 


* * *

<a name="$async.types"></a>

### $async.types : <code>object</code> ℗
**Kind**: static namespace of [<code>$async</code>](#$async) <a name="$async.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L212" title="jaaJSU.js:212"><small>(defined@212)</small></a>  
**Access**: private  

* [.types](#$async.types) : <code>object</code> ℗
    * [.function_Undefined2Promise()](#$async.types.function_Undefined2Promise) ⇒ <code>Promise</code>
    * [.function_MultipleMixed2Promise(...Mixed)](#$async.types.function_MultipleMixed2Promise) ⇒ <code>Promise</code>


* * *

<a name="$async.types.function_Undefined2Promise"></a>

#### types.function\_Undefined2Promise() ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>types</code>](#$async.types) <a name="$async.types.function_Undefined2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L217" title="jaaJSU.js:217"><small>(defined@217)</small></a>  

* * *

<a name="$async.types.function_MultipleMixed2Promise"></a>

#### types.function\_MultipleMixed2Promise(...Mixed) ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>types</code>](#$async.types) <a name="$async.types.function_MultipleMixed2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L223" title="jaaJSU.js:223"><small>(defined@223)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| ...Mixed | <code>Mixed</code> | Various arguments |


* * *

<a name="$async.serialize"></a>

### ~~$async.serialize(funcs) ⇒ <code>Promise</code>~~
***Deprecated:*** Use [iterate_](#$async.iterate_), [sequention_](#$async.sequention_), [each_](#$async.each_).

Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.serialize" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L231" title="jaaJSU.js:231"><small>(defined@231)</small></a>  
**.then**: <code>Mixed[]</code> Array of results from `funcs`  
**.catch**: <code>Error</code> Error in `funcs[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| funcs | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#$async.types.function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

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

<a name="$async.iterate_"></a>

### $async.iterate\_(iterablePromises) ⇒ <code>Promise</code>
Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.iterate_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L255" title="jaaJSU.js:255"><small>(defined@255)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `iterablePromises`  
**.catch**: <code>Error</code> Error in `iterablePromises[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| iterablePromises | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#$async.types.function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

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

<a name="$async.iterateMixed_"></a>

### $async.iterateMixed\_(tasks) ⇒ <code>Promise</code>
Like `iterate_`, but also allows iterate throught non-promise functions

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.iterateMixed_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L286" title="jaaJSU.js:286"><small>(defined@286)</small></a>  
**Beta**: Use [iterate_](#$async.iterate_), [sequention_](#$async.sequention_), [each_](#$async.each_).  

| Param | Type |
| --- | --- |
| tasks | <code>Promise</code> \| <code>function\_Undefined2Promise</code> | 


* * *

<a name="$async.sequention_"></a>

### $async.sequention\_(...functions) ⇒ <code>Promise</code>
Procedure for iterating throught **Promise** functions (wait pattern).

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.sequention_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L313" title="jaaJSU.js:313"><small>(defined@313)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function\_Undefined2Promise</code> | Functions for iterating (the next always waiting fro previous). |


* * *

<a name="$async.each_"></a>

### $async.each\_(...functions) ⇒ [<code>function\_MultipleMixed2Promise</code>](#$async.types.function_MultipleMixed2Promise)
Procedure for iterating throught **Promise** functions (race pattern).

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.each_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L327" title="jaaJSU.js:327"><small>(defined@327)</small></a>  
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

<a name="$dom"></a>

## $dom : <code>object</code>
This NAMESPACE provides features for DOM elemnts.

**Kind**: global namespace <a name="$dom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L350" title="jaaJSU.js:350"><small>(defined@350)</small></a>  

* [$dom](#$dom) : <code>object</code>
    * [.types](#$dom.types) : <code>object</code> ℗
        * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
            * [.mount()](#$dom.types.ComponentEmpty.mount)
        * [.Component](#$dom.types.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
            * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
            * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.mount)
            * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
            * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
            * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
            * [.share](#$dom.types.Component.share) : <code>Object</code>
                * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
                * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.share.mount)
                * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>
        * [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
            * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
            * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.onUpdateFunction](#$dom.types.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
        * [.Component__AddText](#$dom.types.Component__AddText) : <code>Component</code>
            * [.oninit(fn)](#$dom.types.Component__AddText.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.DomAssignObject](#$dom.types.DomAssignObject) : <code>Object</code>
    * [.ready_(...args)](#$dom.ready_) ⇒ <code>Promise</code>
    * [.elementReady_(el_selector, [parent])](#$dom.elementReady_) ⇒ <code>Promise</code>
    * [.empty(container)](#$dom.empty)
    * [.insertAfter(new_element, reference)](#$dom.insertAfter)
    * [.removeElements(els_to_delete, [from_index], [to_index])](#$dom.removeElements)
    * [.replace(el_old, el_new)](#$dom.replace)
    * [.toggleAttribute(element, attribute_name, attribute_a, attribute_b)](#$dom.toggleAttribute) ⇒ <code>String</code>
    * [.toggleDataset(element, data_name, data_a, data_b)](#$dom.toggleDataset) ⇒ <code>String</code>
    * [.each(iterable, i_function, scope)](#$dom.each) ⇒ <code>Mixed</code>
    * [.eachDynamic(iterable, i_function, scope)](#$dom.eachDynamic) ⇒ <code>Mixed</code>
    * [.component_cordova([el_name], attrs, [params])](#$dom.component_cordova) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
    * [.assign_cordova(element, ...object_attributes)](#$dom.assign_cordova)
    * ~~[.add_cordova(parent, ...$$$, [call_parseHTML])](#$dom.add_cordova) ⇒ <code>NodeElement</code>~~
    * [.forceRedraw_cordova([element], [platform])](#$dom.forceRedraw_cordova)


* * *

<a name="$dom.types"></a>

### $dom.types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: static namespace of [<code>$dom</code>](#$dom) <a name="$dom.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L550" title="jaaJSU.js:550"><small>(defined@550)</small></a>  
**Access**: private  

* [.types](#$dom.types) : <code>object</code> ℗
    * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
        * [.mount()](#$dom.types.ComponentEmpty.mount)
    * [.Component](#$dom.types.Component) : <code>Object</code>
        * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
        * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
        * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.mount)
        * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
        * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
        * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
        * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
        * [.share](#$dom.types.Component.share) : <code>Object</code>
            * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
            * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
            * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.share.mount)
            * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>
    * [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
        * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
        * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onUpdateFunction](#$dom.types.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
    * [.Component__AddText](#$dom.types.Component__AddText) : <code>Component</code>
        * [.oninit(fn)](#$dom.types.Component__AddText.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.DomAssignObject](#$dom.types.DomAssignObject) : <code>Object</code>


* * *

<a name="$dom.types.ComponentEmpty"></a>

#### types.ComponentEmpty : [<code>Component</code>](#$dom.types.Component)
In generall, all methods from [Component](#$dom.types.Component) don't do anything. Also during "mounting" there are some changes see method [mount](#$dom.types.ComponentEmpty.mount).

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.ComponentEmpty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L506" title="jaaJSU.js:506"><small>(defined@506)</small></a>  

* * *

<a name="$dom.types.ComponentEmpty.mount"></a>

##### ComponentEmpty.mount()
The same syntax as [mount](#$dom.types.Component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty) <a name="$dom.types.ComponentEmpty.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L516" title="jaaJSU.js:516"><small>(defined@516)</small></a>  

* * *

<a name="$dom.types.Component"></a>

#### types.Component : <code>Object</code>
This is minimal export of "functional class" [$dom.component]($dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L593" title="jaaJSU.js:593"><small>(defined@593)</small></a>  

* [.Component](#$dom.types.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
    * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
    * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.mount)
    * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
    * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
    * [.share](#$dom.types.Component.share) : <code>Object</code>
        * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.share.mount)
        * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="$dom.types.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L606" title="jaaJSU.js:606"><small>(defined@606)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | Internally uses [$dom.assign]($dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
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

<a name="$dom.types.Component.addText"></a>

##### Component.addText(text, [shift]) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.addText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L702" title="jaaJSU.js:702"><small>(defined@702)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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

<a name="$dom.types.Component.component"></a>

##### Component.component(share, [shift]) ⇒ [<code>Component</code>](#$dom.types.Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L746" title="jaaJSU.js:746"><small>(defined@746)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#$dom.types.Component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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

<a name="$dom.types.Component.mount"></a>

##### Component.mount(element, call_parseHTML, [type])
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L776" title="jaaJSU.js:776"><small>(defined@776)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="$dom.types.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.recalculateDeep" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L837" title="jaaJSU.js:837"><small>(defined@837)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |


* * *

<a name="$dom.types.Component.getParentElement"></a>

##### Component.getParentElement() ⇒ <code>NodeElement</code> ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.getParentElement" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L849" title="jaaJSU.js:849"><small>(defined@849)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="$dom.types.Component.setShift"></a>

##### Component.setShift([shift]) ⇒ [<code>Component</code>](#$dom.types.Component)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.setShift" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L860" title="jaaJSU.js:860"><small>(defined@860)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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

<a name="$dom.types.Component.initStorage"></a>

##### Component.initStorage() ⇒ <code>Object</code> ℗
Initialize internal storage

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.initStorage" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L898" title="jaaJSU.js:898"><small>(defined@898)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="$dom.types.Component.update"></a>

##### Component.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L976" title="jaaJSU.js:976"><small>(defined@976)</small></a>  
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

<a name="$dom.types.Component.share"></a>

##### Component.share : <code>Object</code>
Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#$dom.types.Component.component) method).

**Kind**: static typedef of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.share" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L585" title="jaaJSU.js:585"><small>(defined@585)</small></a>  

* [.share](#$dom.types.Component.share) : <code>Object</code>
    * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, call_parseHTML, [type])](#$dom.types.Component.share.mount)
    * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="$dom.types.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.destroy" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L820" title="jaaJSU.js:820"><small>(defined@820)</small></a>  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="$dom.types.Component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.isStatic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1017" title="jaaJSU.js:1017"><small>(defined@1017)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="$dom.types.Component.share.mount"></a>

###### share.mount(element, call_parseHTML, [type])
Add element to live DOM

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L776" title="jaaJSU.js:776"><small>(defined@776)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="$dom.types.Component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L976" title="jaaJSU.js:976"><small>(defined@976)</small></a>  
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

<a name="$dom.types.Component__Add"></a>

#### types.Component\_\_Add : [<code>Component</code>](#$dom.types.Component)
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component__Add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L600" title="jaaJSU.js:600"><small>(defined@600)</small></a>  

* [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
    * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)


* * *

<a name="$dom.types.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.getReference" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L646" title="jaaJSU.js:646"><small>(defined@646)</small></a>  

* * *

<a name="$dom.types.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L653" title="jaaJSU.js:653"><small>(defined@653)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#$dom.types.Component)
This method allows to register function ([onUpdateFunction](#$dom.types.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#$dom.types.Component.update)).

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.onupdate" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L661" title="jaaJSU.js:661"><small>(defined@661)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#$dom.types.onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

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

<a name="$dom.types.onUpdateFunction"></a>

#### types.onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.onUpdateFunction" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L681" title="jaaJSU.js:681"><small>(defined@681)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#$dom.types.Component.update) is called. This callback can be registered when element is created (see method [add](#$dom.types.Component.add)) see [Component__Add](#$dom.types.Component__Add).  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#$dom.types.Component__Add.onupdate) |


* * *

<a name="$dom.types.Component__AddText"></a>

#### types.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component__AddText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L696" title="jaaJSU.js:696"><small>(defined@696)</small></a>  

* * *

<a name="$dom.types.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText) <a name="$dom.types.Component__AddText.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L735" title="jaaJSU.js:735"><small>(defined@735)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.DomAssignObject"></a>

#### types.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [$dom.assign]($dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.DomAssignObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1029" title="jaaJSU.js:1029"><small>(defined@1029)</small></a>  

* * *

<a name="$dom.ready_"></a>

### $dom.ready\_(...args) ⇒ <code>Promise</code>
Calls `.then` when the DOM is ready

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.ready_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L357" title="jaaJSU.js:357"><small>(defined@357)</small></a>  
**.then**: <code>Mixed</code> See `args`  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Mixed</code> | As params for `.then` |


* * *

<a name="$dom.elementReady_"></a>

### $dom.elementReady\_(el_selector, [parent]) ⇒ <code>Promise</code>
Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.elementReady_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L385" title="jaaJSU.js:385"><small>(defined@385)</small></a>  
**.then**: <code>NodeElement</code> Target elemnet based on `el_selector`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_selector | [<code>DomPreparedSelector</code>](#types.DomPreparedSelector) |  |  |
| [parent] | <code>DOMElement</code> | <code>document</code> | Where to search `el_selector` |


* * *

<a name="$dom.empty"></a>

### $dom.empty(container)
Procedure remove children of given element `container`.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.empty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L406" title="jaaJSU.js:406"><small>(defined@406)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>NodeElement</code> | Remove all its children |


* * *

<a name="$dom.insertAfter"></a>

### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.insertAfter" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L416" title="jaaJSU.js:416"><small>(defined@416)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="$dom.removeElements"></a>

### $dom.removeElements(els_to_delete, [from_index], [to_index])
Remove elements in given {NodeList} or {HTMLCollection}

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.removeElements" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L428" title="jaaJSU.js:428"><small>(defined@428)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| els_to_delete | <code>NodeList</code> \| <code>HTMLCollection</code> |  | Array(-like) object of elements |
| [from_index] | <code>Number</code> | <code>0</code> | Params allowing skip elements in `els_to_delete` |
| [to_index] | <code>Number</code> | <code>els_to_delete.lenght</code> | Params allowing skip elements in `els_to_delete` |


* * *

<a name="$dom.replace"></a>

### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.replace" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L444" title="jaaJSU.js:444"><small>(defined@444)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="$dom.toggleAttribute"></a>

### $dom.toggleAttribute(element, attribute_name, attribute_a, attribute_b) ⇒ <code>String</code>
Alias for `element.setAttribute(attribute_name, element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a)`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.toggleAttribute" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L455" title="jaaJSU.js:455"><small>(defined@455)</small></a>  
**Returns**: <code>String</code> - `attribute_a` or `attribute_b`  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>NodeElement</code> | Element target |
| attribute_name | <code>String</code> | Name of attribute |
| attribute_a | <code>String</code> | Value of attribute |
| attribute_b | <code>String</code> | Value of attribute |


* * *

<a name="$dom.toggleDataset"></a>

### $dom.toggleDataset(element, data_name, data_a, data_b) ⇒ <code>String</code>
Alias for `element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.toggleDataset" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L470" title="jaaJSU.js:470"><small>(defined@470)</small></a>  
**Returns**: <code>String</code> - `data_a` or `data_b`  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>NodeElement</code> | Element target |
| data_name | <code>String</code> | Name of dataset key |
| data_a | <code>String</code> | Name of dataset value |
| data_b | <code>String</code> | Name of dataset |


* * *

<a name="$dom.each"></a>

### $dom.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught NodeList `iterable`.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L483" title="jaaJSU.js:483"><small>(defined@483)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#types.IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="$dom.eachDynamic"></a>

### $dom.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
Procedure for iterating throught NodeList `iterable` like [each](#$dom.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L493" title="jaaJSU.js:493"><small>(defined@493)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#types.IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="$dom.component_cordova"></a>

### $dom.component\_cordova([el_name], attrs, [params]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.component_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L556" title="jaaJSU.js:556"><small>(defined@556)</small></a>  
**Returns**: [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | The second argument for [$dom.assign]($dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#$dom.types.Component.add) |


* * *

<a name="$dom.assign_cordova"></a>

### $dom.assign\_cordova(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.assign_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1041" title="jaaJSU.js:1041"><small>(defined@1041)</small></a>  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) | 

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

<a name="$dom.add_cordova"></a>

### ~~$dom.add\_cordova(parent, ...$$$, [call_parseHTML]) ⇒ <code>NodeElement</code>~~
***Deprecated:*** true

See [$dom.add]($dom.add)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.add_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1115" title="jaaJSU.js:1115"><small>(defined@1115)</small></a>  
**Returns**: <code>NodeElement</code> - First created element (usualy wrapper thanks nesting)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>NodeElement</code> |  |
| ...$$$ | <code>Array</code> | Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova]) |
| [call_parseHTML] | <code>Boolean</code> | If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))` |


* * *

<a name="$dom.forceRedraw_cordova"></a>

### $dom.forceRedraw\_cordova([element], [platform])
Redraw element using cheat `*.offsetHeight`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.forceRedraw_cordova" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1143" title="jaaJSU.js:1143"><small>(defined@1143)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>NodeElement</code> | <code>active_page_el</code> | Element for redraw |
| [platform] | <code>String</code> | <code>&quot;iOS&quot;</code> | Redraw only for specific `device.platform` ("Android", "iOS") |


* * *

<a name="$function"></a>

## $function : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: global namespace <a name="$function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1160" title="jaaJSU.js:1160"><small>(defined@1160)</small></a>  

* [$function](#$function) : <code>object</code>
    * [.types](#$function.types) : <code>object</code> ℗
        * [.function_Mixed2Undefined(input)](#$function.types.function_Mixed2Undefined) ⇒ <code>Undefined</code>
        * [.function_Mixed2Mixed(input)](#$function.types.function_Mixed2Mixed) ⇒ <code>Mixed</code>
        * [.function_MultipleMixed2Mixed(...input)](#$function.types.function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
        * [.function_MultipleMixed2Function(...input)](#$function.types.function_MultipleMixed2Function) ⇒ <code>function</code>
        * [.function_MultipleFunction2Function(...Functions)](#$function.types.function_MultipleFunction2Function) ⇒ <code>function</code>
    * [.branches([reduceFun], [reduceInitValueCreator])](#$function.branches) ⇒ <code>function</code>
    * [.component(transform)](#$function.component) ⇒ <code>component</code>
    * [.conditionalCall(mixed, fun)](#$function.conditionalCall) ⇒ <code>Boolean</code> \| <code>Mixed</code>
    * [.constant(constantArg)](#$function.constant) ⇒ <code>function</code>
    * [.each()](#$function.each) ⇒ [<code>function\_Mixed2Undefined</code>](#$function.types.function_Mixed2Undefined)
    * [.identity(id)](#$function.identity) ⇒ <code>Mixed</code>
    * [.partial(fn, ...presetArgs)](#$function.partial) ⇒ <code>function</code>
    * [.schedule(...functions, def)](#$function.schedule)
    * [.sequention(...functions)](#$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#$function.types.function_Mixed2Mixed)


* * *

<a name="$function.types"></a>

### $function.types : <code>object</code> ℗
**Kind**: static namespace of [<code>$function</code>](#$function) <a name="$function.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1166" title="jaaJSU.js:1166"><small>(defined@1166)</small></a>  
**Access**: private  

* [.types](#$function.types) : <code>object</code> ℗
    * [.function_Mixed2Undefined(input)](#$function.types.function_Mixed2Undefined) ⇒ <code>Undefined</code>
    * [.function_Mixed2Mixed(input)](#$function.types.function_Mixed2Mixed) ⇒ <code>Mixed</code>
    * [.function_MultipleMixed2Mixed(...input)](#$function.types.function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
    * [.function_MultipleMixed2Function(...input)](#$function.types.function_MultipleMixed2Function) ⇒ <code>function</code>
    * [.function_MultipleFunction2Function(...Functions)](#$function.types.function_MultipleFunction2Function) ⇒ <code>function</code>


* * *

<a name="$function.types.function_Mixed2Undefined"></a>

#### types.function\_Mixed2Undefined(input) ⇒ <code>Undefined</code>
`function(input){  }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_Mixed2Undefined" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1171" title="jaaJSU.js:1171"><small>(defined@1171)</small></a>  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_Mixed2Mixed"></a>

#### types.function\_Mixed2Mixed(input) ⇒ <code>Mixed</code>
`function(input){ return ...; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_Mixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1178" title="jaaJSU.js:1178"><small>(defined@1178)</small></a>  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleMixed2Mixed"></a>

#### types.function\_MultipleMixed2Mixed(...input) ⇒ <code>Mixed</code>
`function(...input){ return ...; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleMixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1185" title="jaaJSU.js:1185"><small>(defined@1185)</small></a>  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleMixed2Function"></a>

#### types.function\_MultipleMixed2Function(...input) ⇒ <code>function</code>
`function(...input){ return function(...){...}; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleMixed2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1192" title="jaaJSU.js:1192"><small>(defined@1192)</small></a>  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleFunction2Function"></a>

#### types.function\_MultipleFunction2Function(...Functions) ⇒ <code>function</code>
`function(...Functions){ return function(...){...}; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleFunction2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1199" title="jaaJSU.js:1199"><small>(defined@1199)</small></a>  

| Param | Type |
| --- | --- |
| ...Functions | <code>function</code> | 


* * *

<a name="$function.branches"></a>

### $function.branches([reduceFun], [reduceInitValueCreator]) ⇒ <code>function</code>
Provide **input →⇶ …functions ⇛ reduction → output** functionality.

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.branches" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1207" title="jaaJSU.js:1207"><small>(defined@1207)</small></a>  
**Returns**: <code>function</code> - - `...functions`**&lt;…Function&gt;** `=>` **&lt;Function&gt;**
     - `...inputs`**&lt;…Mixed&gt;** `=>` **&lt;Mixed&gt;**
     - result of `reduceFun`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reduceFun] | [<code>function\_reduceCallback</code>](#types.function_reduceCallback) |  | **By default behaves like 'map'** |
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

<a name="$function.component"></a>

### $function.component(transform) ⇒ <code>component</code>
EXPERIMENT!: Function composing using `$dom.component` like syntax

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1236" title="jaaJSU.js:1236"><small>(defined@1236)</small></a>  
**Returns**: <code>component</code> - * `{ pipe, run }`  

| Param | Type | Description |
| --- | --- | --- |
| transform | <code>function</code> | * ... |


* * *

<a name="$function.conditionalCall"></a>

### $function.conditionalCall(mixed, fun) ⇒ <code>Boolean</code> \| <code>Mixed</code>
Shorthand for `const mixed= ...; if(mixed) fun(mixed);`

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.conditionalCall" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1252" title="jaaJSU.js:1252"><small>(defined@1252)</small></a>  
**Returns**: <code>Boolean</code> \| <code>Mixed</code> - * **False** or output of `fun`  

| Param | Type | Description |
| --- | --- | --- |
| mixed | <code>Mixed</code> | * If `mixed=true` the `fun` is called |
| fun | <code>function</code> | * 'Refular' function as argument accepts `mixed` |


* * *

<a name="$function.constant"></a>

### $function.constant(constantArg) ⇒ <code>function</code>
Helper for returnin constant

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.constant" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1268" title="jaaJSU.js:1268"><small>(defined@1268)</small></a>  
**Returns**: <code>function</code> - `()=> constantArg`  

| Param | Type |
| --- | --- |
| constantArg | <code>Mixed</code> | 

**Example**  
```js
$function.constant(5)(10);//= `5`
```

* * *

<a name="$function.each"></a>

### $function.each() ⇒ [<code>function\_Mixed2Undefined</code>](#$function.types.function_Mixed2Undefined)
Functional-like alternative for `for(...){functions[nth](..input);}`.

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1278" title="jaaJSU.js:1278"><small>(defined@1278)</small></a>  

| Param | Type |
| --- | --- |
| ......functions | [<code>function\_Mixed2Undefined</code>](#$function.types.function_Mixed2Undefined) | 


* * *

<a name="$function.identity"></a>

### $function.identity(id) ⇒ <code>Mixed</code>
`id=> id`

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.identity" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1286" title="jaaJSU.js:1286"><small>(defined@1286)</small></a>  
**Returns**: <code>Mixed</code> - `id`  

| Param | Type |
| --- | --- |
| id | <code>Mixed</code> | 

**Example**  
```js
$function.identity(10);//= `10`
```

* * *

<a name="$function.partial"></a>

### $function.partial(fn, ...presetArgs) ⇒ <code>function</code>
EXPERIMENT!: "Bind" alternative
vs *.bind(?,...) - it depends if/when you prefer to set `this` (`bind`= when you define partial fn or `partial`= when you call it)

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.partial" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1314" title="jaaJSU.js:1314"><small>(defined@1314)</small></a>  
**Returns**: <code>function</code> - ...  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | ... |
| ...presetArgs | <code>Mixed</code> | ... |


* * *

<a name="$function.schedule"></a>

### $function.schedule(...functions, def)
Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.schedule" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1326" title="jaaJSU.js:1326"><small>(defined@1326)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ...functions | <code>Functions</code> |  | Array of functions for iteratings |
| def | <code>Object</code> |  |  |
| [def.context] | <code>Object</code> | <code>window</code> | Parameter for `*.call(context)` |
| [def.delay] | <code>Object</code> | <code>150</code> | Parameter for `$optimizier.timeoutAnimationFrame` |


* * *

<a name="$function.sequention"></a>

### $function.sequention(...functions) ⇒ [<code>function\_Mixed2Mixed</code>](#$function.types.function_Mixed2Mixed)
Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to [each](#methods_each). But, as arguments for current function is used output frome previous function.

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.sequention" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1336" title="jaaJSU.js:1336"><small>(defined@1336)</small></a>  
**Returns**: [<code>function\_Mixed2Mixed</code>](#$function.types.function_Mixed2Mixed) - For given `input` calls all functions in `...functions` (use `input` as arguments for first function). Returns output of last `functions`.  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_Mixed2Mixed</code>](#$function.types.function_Mixed2Mixed) | List of functions: <br/>`...functions[nth](__INPUT__){... return __OUTPUT__;}` <br/>`__INPUT__` is `input` (for first function) or `__OUTPUT__` <br/>`__OUTPUT__`! `__OUTPUT__` is used as argument for next function in `...functions`. |

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

<a name="$optimizier"></a>

## $optimizier : <code>object</code>
This NAMESPACE provides features for optimizations.

**Kind**: global namespace <a name="$optimizier" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1620" title="jaaJSU.js:1620"><small>(defined@1620)</small></a>  

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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.debounce" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1627" title="jaaJSU.js:1627"><small>(defined@1627)</small></a>  
**Returns**: <code>function</code> - Debounced function `fun` (accepts same arguments)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | Function for debounce |
| [wait] | <code>Number</code> | <code>150</code> | How much wait for next calling |
| [immediate] | <code>Boolean</code> |  | First time wait since `wait` (**false**), or call immediate and after wait (**true**) - infact switch *debounce/trottle* |

**Example**  
```js
graphically (wait= 4symbols)
I call (| symbol) fun:    .|||.|.|||..
             debounce:    .....|....|.
              trottle:    .|.....|....
```

* * *

<a name="$optimizier.trottle"></a>

### $optimiziers.trottle(func, [cycles_leap]) ⇒ <code>function</code>
Very similar to [debounce](#methods_debounce), but uses `requestAnimationFrame`

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.trottle" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1660" title="jaaJSU.js:1660"><small>(defined@1660)</small></a>  
**Returns**: <code>function</code> - Trottled function `fun`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  |  |
| [cycles_leap] | <code>Number</code> | <code>1</code> | similar to `wait` - how many times calls `requestAnimationFrame` |


* * *

<a name="$optimizier.poll_"></a>

### $optimiziers.poll\_(fn, [timeout], [interval]) ⇒ <code>Promise</code>
Calls `.then` when `fn` returns **true**

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.poll_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1688" title="jaaJSU.js:1688"><small>(defined@1688)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.once" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1719" title="jaaJSU.js:1719"><small>(defined@1719)</small></a>  

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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.timeoutAnimationFrame" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1742" title="jaaJSU.js:1742"><small>(defined@1742)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | * Function to call later (`delay`+next animation frame) |
| [delay] | <code>Number</code> | <code>150</code> | * When call `f` (ms) |


* * *

<a name="$optimizier.requestAnimationFrame_"></a>

### $optimiziers.requestAnimationFrame\_() ⇒ <code>Promise</code>
Promise wrapper around [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.requestAnimationFrame_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1752" title="jaaJSU.js:1752"><small>(defined@1752)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setTimeout_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1762" title="jaaJSU.js:1762"><small>(defined@1762)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1781" title="jaaJSU.js:1781"><small>(defined@1781)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.getIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1799" title="jaaJSU.js:1799"><small>(defined@1799)</small></a>  
**Returns**: <code>Mixed</code> - - Output of `initFunction` — see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

<a name="$optimizier.clearIdleValue"></a>

### $optimiziers.clearIdleValue(idle_value) ⇒ <code>Mixed</code> \| <code>Undefined</code>
Stops **\<IdleValue\>** evaluating. Infact calls `cancelIdleCallback` — see [`setIdleValue`](#methods_setIdleValue)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.clearIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1809" title="jaaJSU.js:1809"><small>(defined@1809)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - - returns current value or `undefined` if `initFunction` wasn't called — see see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

