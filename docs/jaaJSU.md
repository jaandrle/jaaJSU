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

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$object" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1391" title="jaaJSU.js:1391"><small>(defined@1391)</small></a>  

* * *

<a name="module_jaaJSU..$string"></a>

### jaaJSU~$string : <code>object</code>
This NAMESPACE provides features for strings.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$string" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1850" title="jaaJSU.js:1850"><small>(defined@1850)</small></a>  

* * *

<a name="module_jaaJSU..$time"></a>

### jaaJSU~$time : <code>object</code>
This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$time" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L2132" title="jaaJSU.js:2132"><small>(defined@2132)</small></a>  

* * *

<a name="types"></a>

## types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: global namespace <a name="types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L23" title="jaaJSU.js:23"><small>(defined@23)</small></a>  
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

**Kind**: static method of [<code>types</code>](#types) <a name="types.function_filterCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L38" title="jaaJSU.js:38"><small>(defined@38)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="types.function_reduceCallback"></a>

### types.function\_reduceCallback(accumulator, i_value, i) ⇒ <code>Mixed</code>
This kind of function is typically used in `Array.prototype.reduce`.

**Kind**: static method of [<code>types</code>](#types) <a name="types.function_reduceCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L46" title="jaaJSU.js:46"><small>(defined@46)</small></a>  
**Returns**: <code>Mixed</code> - accumulator  

| Param | Type | Description |
| --- | --- | --- |
| accumulator | <code>Mixed</code> |  |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="types.IterableCallback"></a>

### types.IterableCallback(IterableArrayObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: static method of [<code>types</code>](#types) <a name="types.IterableCallback" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L55" title="jaaJSU.js:55"><small>(defined@55)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableArrayObject](#types.IterableArrayObject).  

| Param | Type |
| --- | --- |
| IterableArrayObject | [<code>IterableArrayObject</code>](#types.IterableArrayObject) | 


* * *

<a name="types.IterableArrayObject"></a>

### types.IterableArrayObject : <code>Object</code>
**Kind**: static typedef of [<code>types</code>](#types) <a name="types.IterableArrayObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L30" title="jaaJSU.js:30"><small>(defined@30)</small></a>  
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

**Kind**: static typedef of [<code>types</code>](#types) <a name="types.ArrayPartition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L142" title="jaaJSU.js:142"><small>(defined@142)</small></a>  

* [.ArrayPartition](#types.ArrayPartition) : <code>Object</code>
    * [.head()](#types.ArrayPartition.head) ⇒ <code>Array</code>
    * [.tail()](#types.ArrayPartition.tail) ⇒ <code>Array</code>
    * [.onIndex(index)](#types.ArrayPartition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.byCondition(fn)](#types.ArrayPartition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="types.ArrayPartition.head"></a>

#### ArrayPartition.head() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.head" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L156" title="jaaJSU.js:156"><small>(defined@156)</small></a>  
**Returns**: <code>Array</code> - two items Array `[x, ...xs]` (first element and rest array)  

* * *

<a name="types.ArrayPartition.tail"></a>

#### ArrayPartition.tail() ⇒ <code>Array</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.tail" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L165" title="jaaJSU.js:165"><small>(defined@165)</small></a>  
**Returns**: <code>Array</code> - two items Array `[...xs, x]` (rest array and last element)  

* * *

<a name="types.ArrayPartition.onIndex"></a>

#### ArrayPartition.onIndex(index) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.onIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L175" title="jaaJSU.js:175"><small>(defined@175)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Position (in fact for `*.splice(0, index)`) where to split array. |


* * *

<a name="types.ArrayPartition.byCondition"></a>

#### ArrayPartition.byCondition(fn) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>ArrayPartition</code>](#types.ArrayPartition) <a name="types.ArrayPartition.byCondition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L185" title="jaaJSU.js:185"><small>(defined@185)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2] based on `fn`.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function\_filterCallback</code>](#types.function_filterCallback) | In fact index of inner array (see return part). |


* * *

<a name="types.DomPreparedSelector"></a>

### types.DomPreparedSelector : <code>Object</code>
Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...).
Value is argument for selection function

**Kind**: static typedef of [<code>types</code>](#types) <a name="types.DomPreparedSelector" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L397" title="jaaJSU.js:397"><small>(defined@397)</small></a>  
**Example**  
```js
{ getElementsByClassname: "class_name" }
```

* * *

<a name="$array"></a>

## $array : <code>object</code>
This NAMESPACE provides features for Arrays.

**Kind**: global namespace <a name="$array" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L87" title="jaaJSU.js:87"><small>(defined@87)</small></a>  

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

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.arrayIndex" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L94" title="jaaJSU.js:94"><small>(defined@94)</small></a>  
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

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L112" title="jaaJSU.js:112"><small>(defined@112)</small></a>  
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

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L122" title="jaaJSU.js:122"><small>(defined@122)</small></a>  
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

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.getLast" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L132" title="jaaJSU.js:132"><small>(defined@132)</small></a>  
**Returns**: <code>Mixed</code> - Last element in `arr`  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="$array.partition"></a>

### $array.partition(arr) ⇒ [<code>ArrayPartition</code>](#types.ArrayPartition)
Function returns methods for splitting array by condition.

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.partition" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L147" title="jaaJSU.js:147"><small>(defined@147)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="$array.removeItem"></a>

### $array.removeItem(arr, item) ⇒ <code>Array</code>
Function returns new array without any `item`

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.removeItem" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L198" title="jaaJSU.js:198"><small>(defined@198)</small></a>  
**Returns**: <code>Array</code> - New {Array} from `arr` without `item`s  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Original array |
| item | <code>Mixed</code> | Item for searching in `arr`. Make sence, if it is possible to compare with `===` operation |


* * *

<a name="$array.sortRandom"></a>

### $array.sortRandom() ⇒ <code>Number</code>
Function returns random number for Array.sort function

**Kind**: static method of [<code>$array</code>](#$array) <a name="$array.sortRandom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L215" title="jaaJSU.js:215"><small>(defined@215)</small></a>  
**Returns**: <code>Number</code> - Number in interval <-0.5,0.5>  

* * *

<a name="$async"></a>

## $async : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: global namespace <a name="$async" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L226" title="jaaJSU.js:226"><small>(defined@226)</small></a>  

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

**Kind**: static property of [<code>$async</code>](#$async) <a name="$async.CANCEL" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L305" title="jaaJSU.js:305"><small>(defined@305)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| CANCEL | <code>Symbol</code> | 


* * *

<a name="$async.types"></a>

### $async.types : <code>object</code> ℗
**Kind**: static namespace of [<code>$async</code>](#$async) <a name="$async.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L232" title="jaaJSU.js:232"><small>(defined@232)</small></a>  
**Access**: private  

* [.types](#$async.types) : <code>object</code> ℗
    * [.function_Undefined2Promise()](#$async.types.function_Undefined2Promise) ⇒ <code>Promise</code>
    * [.function_MultipleMixed2Promise(...Mixed)](#$async.types.function_MultipleMixed2Promise) ⇒ <code>Promise</code>


* * *

<a name="$async.types.function_Undefined2Promise"></a>

#### types.function\_Undefined2Promise() ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>types</code>](#$async.types) <a name="$async.types.function_Undefined2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L237" title="jaaJSU.js:237"><small>(defined@237)</small></a>  

* * *

<a name="$async.types.function_MultipleMixed2Promise"></a>

#### types.function\_MultipleMixed2Promise(...Mixed) ⇒ <code>Promise</code>
This kind of function schould returns `Promise`.

**Kind**: static method of [<code>types</code>](#$async.types) <a name="$async.types.function_MultipleMixed2Promise" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L243" title="jaaJSU.js:243"><small>(defined@243)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| ...Mixed | <code>Mixed</code> | Various arguments |


* * *

<a name="$async.serialize"></a>

### ~~$async.serialize(funcs) ⇒ <code>Promise</code>~~
***Deprecated:*** Use [iterate_](#$async.iterate_), [sequention_](#$async.sequention_), [each_](#$async.each_).

Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.serialize" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L251" title="jaaJSU.js:251"><small>(defined@251)</small></a>  
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

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.iterate_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L275" title="jaaJSU.js:275"><small>(defined@275)</small></a>  
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

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.iterateMixed_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L306" title="jaaJSU.js:306"><small>(defined@306)</small></a>  
**Beta**: Use [iterate_](#$async.iterate_), [sequention_](#$async.sequention_), [each_](#$async.each_).  

| Param | Type |
| --- | --- |
| tasks | <code>Promise</code> \| <code>function\_Undefined2Promise</code> | 


* * *

<a name="$async.sequention_"></a>

### $async.sequention\_(...functions) ⇒ <code>Promise</code>
Procedure for iterating throught **Promise** functions (wait pattern).

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.sequention_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L333" title="jaaJSU.js:333"><small>(defined@333)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function\_Undefined2Promise</code> | Functions for iterating (the next always waiting fro previous). |


* * *

<a name="$async.each_"></a>

### $async.each\_(...functions) ⇒ [<code>function\_MultipleMixed2Promise</code>](#$async.types.function_MultipleMixed2Promise)
Procedure for iterating throught **Promise** functions (race pattern).

**Kind**: static method of [<code>$async</code>](#$async) <a name="$async.each_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L347" title="jaaJSU.js:347"><small>(defined@347)</small></a>  
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

**Kind**: global namespace <a name="$dom" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L370" title="jaaJSU.js:370"><small>(defined@370)</small></a>  

* [$dom](#$dom) : <code>object</code>
    * [.types](#$dom.types) : <code>object</code> ℗
        * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
            * [.mount()](#$dom.types.ComponentEmpty.mount)
        * [.Component](#$dom.types.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
            * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
            * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
            * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
            * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
            * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
            * [.share](#$dom.types.Component.share) : <code>Object</code>
                * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
                * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
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
    * [.component([el_name], attrs, [params])](#$dom.component) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
    * [.assign(element, ...object_attributes)](#$dom.assign)
    * ~~[.add(parent, ...$$$)](#$dom.add) ⇒ <code>NodeElement</code>~~
    * [.forceRedraw([element])](#$dom.forceRedraw)


* * *

<a name="$dom.types"></a>

### $dom.types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: static namespace of [<code>$dom</code>](#$dom) <a name="$dom.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L569" title="jaaJSU.js:569"><small>(defined@569)</small></a>  
**Access**: private  

* [.types](#$dom.types) : <code>object</code> ℗
    * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
        * [.mount()](#$dom.types.ComponentEmpty.mount)
    * [.Component](#$dom.types.Component) : <code>Object</code>
        * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
        * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
        * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
        * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
        * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
        * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
        * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
        * [.share](#$dom.types.Component.share) : <code>Object</code>
            * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
            * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
            * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
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

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.ComponentEmpty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L525" title="jaaJSU.js:525"><small>(defined@525)</small></a>  

* * *

<a name="$dom.types.ComponentEmpty.mount"></a>

##### ComponentEmpty.mount()
The same syntax as [mount](#$dom.types.Component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty) <a name="$dom.types.ComponentEmpty.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L535" title="jaaJSU.js:535"><small>(defined@535)</small></a>  

* * *

<a name="$dom.types.Component"></a>

#### types.Component : <code>Object</code>
This is minimal export of "functional class" [component](#$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L612" title="jaaJSU.js:612"><small>(defined@612)</small></a>  

* [.Component](#$dom.types.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
    * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
    * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
    * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
    * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#$dom.types.Component.setShift) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#$dom.types.Component.update) ⇒ <code>Boolean</code>
    * [.share](#$dom.types.Component.share) : <code>Object</code>
        * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
        * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="$dom.types.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L625" title="jaaJSU.js:625"><small>(defined@625)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | Internally uses [assign](#$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
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

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.addText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L721" title="jaaJSU.js:721"><small>(defined@721)</small></a>  
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

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L765" title="jaaJSU.js:765"><small>(defined@765)</small></a>  
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

##### Component.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L795" title="jaaJSU.js:795"><small>(defined@795)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="$dom.types.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.recalculateDeep" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L851" title="jaaJSU.js:851"><small>(defined@851)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |


* * *

<a name="$dom.types.Component.getParentElement"></a>

##### Component.getParentElement() ⇒ <code>NodeElement</code> ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.getParentElement" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L863" title="jaaJSU.js:863"><small>(defined@863)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="$dom.types.Component.setShift"></a>

##### Component.setShift([shift]) ⇒ [<code>Component</code>](#$dom.types.Component)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.setShift" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L874" title="jaaJSU.js:874"><small>(defined@874)</small></a>  
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

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.initStorage" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L912" title="jaaJSU.js:912"><small>(defined@912)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="$dom.types.Component.update"></a>

##### Component.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L990" title="jaaJSU.js:990"><small>(defined@990)</small></a>  
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

**Kind**: static typedef of [<code>Component</code>](#$dom.types.Component) <a name="$dom.types.Component.share" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L604" title="jaaJSU.js:604"><small>(defined@604)</small></a>  

* [.share](#$dom.types.Component.share) : <code>Object</code>
    * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
    * [.update(new_data)](#$dom.types.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="$dom.types.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.destroy" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L834" title="jaaJSU.js:834"><small>(defined@834)</small></a>  
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

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.isStatic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1031" title="jaaJSU.js:1031"><small>(defined@1031)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="$dom.types.Component.share.mount"></a>

###### share.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.mount" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L795" title="jaaJSU.js:795"><small>(defined@795)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="$dom.types.Component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share) <a name="$dom.types.Component.share.update" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L990" title="jaaJSU.js:990"><small>(defined@990)</small></a>  
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

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component__Add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L619" title="jaaJSU.js:619"><small>(defined@619)</small></a>  

* [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
    * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)


* * *

<a name="$dom.types.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.getReference" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L665" title="jaaJSU.js:665"><small>(defined@665)</small></a>  

* * *

<a name="$dom.types.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L672" title="jaaJSU.js:672"><small>(defined@672)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#$dom.types.Component)
This method allows to register function ([onUpdateFunction](#$dom.types.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#$dom.types.Component.update)).

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add) <a name="$dom.types.Component__Add.onupdate" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L680" title="jaaJSU.js:680"><small>(defined@680)</small></a>  

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
**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.onUpdateFunction" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L700" title="jaaJSU.js:700"><small>(defined@700)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#$dom.types.Component.update) is called. This callback can be registered when element is created (see method [add](#$dom.types.Component.add)) see [Component__Add](#$dom.types.Component__Add).  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#$dom.types.Component__Add.onupdate) |


* * *

<a name="$dom.types.Component__AddText"></a>

#### types.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.Component__AddText" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L715" title="jaaJSU.js:715"><small>(defined@715)</small></a>  

* * *

<a name="$dom.types.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText) <a name="$dom.types.Component__AddText.oninit" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L754" title="jaaJSU.js:754"><small>(defined@754)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.DomAssignObject"></a>

#### types.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [assign](#$dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: static typedef of [<code>types</code>](#$dom.types) <a name="$dom.types.DomAssignObject" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1043" title="jaaJSU.js:1043"><small>(defined@1043)</small></a>  

* * *

<a name="$dom.ready_"></a>

### $dom.ready\_(...args) ⇒ <code>Promise</code>
Calls `.then` when the DOM is ready

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.ready_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L377" title="jaaJSU.js:377"><small>(defined@377)</small></a>  
**.then**: <code>Mixed</code> See `args`  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Mixed</code> | As params for `.then` |


* * *

<a name="$dom.elementReady_"></a>

### $dom.elementReady\_(el_selector, [parent]) ⇒ <code>Promise</code>
Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.elementReady_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L405" title="jaaJSU.js:405"><small>(defined@405)</small></a>  
**.then**: <code>NodeElement</code> Target elemnet based on `el_selector`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_selector | [<code>DomPreparedSelector</code>](#types.DomPreparedSelector) |  |  |
| [parent] | <code>DOMElement</code> | <code>document</code> | Where to search `el_selector` |


* * *

<a name="$dom.empty"></a>

### $dom.empty(container)
Procedure remove children of given element `container`.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.empty" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L426" title="jaaJSU.js:426"><small>(defined@426)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>NodeElement</code> | Remove all its children |


* * *

<a name="$dom.insertAfter"></a>

### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.insertAfter" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L436" title="jaaJSU.js:436"><small>(defined@436)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="$dom.removeElements"></a>

### $dom.removeElements(els_to_delete, [from_index], [to_index])
Remove elements in given {NodeList} or {HTMLCollection}

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.removeElements" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L448" title="jaaJSU.js:448"><small>(defined@448)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| els_to_delete | <code>NodeList</code> \| <code>HTMLCollection</code> |  | Array(-like) object of elements |
| [from_index] | <code>Number</code> | <code>0</code> | Params allowing skip elements in `els_to_delete` |
| [to_index] | <code>Number</code> | <code>els_to_delete.lenght</code> | Params allowing skip elements in `els_to_delete` |


* * *

<a name="$dom.replace"></a>

### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.replace" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L464" title="jaaJSU.js:464"><small>(defined@464)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="$dom.toggleAttribute"></a>

### $dom.toggleAttribute(element, attribute_name, attribute_a, attribute_b) ⇒ <code>String</code>
Alias for `element.setAttribute(attribute_name, element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a)`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.toggleAttribute" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L475" title="jaaJSU.js:475"><small>(defined@475)</small></a>  
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

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.toggleDataset" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L490" title="jaaJSU.js:490"><small>(defined@490)</small></a>  
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

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L503" title="jaaJSU.js:503"><small>(defined@503)</small></a>  
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

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.eachDynamic" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L513" title="jaaJSU.js:513"><small>(defined@513)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#types.IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="$dom.component"></a>

### $dom.component([el_name], attrs, [params]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L575" title="jaaJSU.js:575"><small>(defined@575)</small></a>  
**Returns**: [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | The second argument for [assign](#$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#$dom.types.Component.add) |


* * *

<a name="$dom.assign"></a>

### $dom.assign(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.assign" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1055" title="jaaJSU.js:1055"><small>(defined@1055)</small></a>  

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

<a name="$dom.add"></a>

### ~~$dom.add(parent, ...$$$) ⇒ <code>NodeElement</code>~~
***Deprecated:*** true

Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.add" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1125" title="jaaJSU.js:1125"><small>(defined@1125)</small></a>  
**Returns**: <code>NodeElement</code> - First created element (usualy wrapper thanks nesting)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>NodeElement</code> | Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`) |
| ...$$$ | <code>Array</code> | <br/>* `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`  <br/>* Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`  <br/>* `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)  <br/>* `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...  <br/>    * see [$dom.assign](#methods_assign)  <br/>    * There is one change with using key "$", which modify elements order and it is not parsed by [$dom.assign](#methods_assign)  <br/>        * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>` |

**Example**  
```js
$dom.add(ul_element,[
    ["LI", {className: "nejake-tridy", onclick: clickFCE}],
        ["SPAN", {innerText: "Prvni SPAN v LI"}],
        ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
]);
// = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
// !!! VS !!!
$dom.add(ul_element,[
    ["LI", {className: "nejake-tridy", onclick: clickFCE}],
        ["SPAN", {innerText: "Prvni SPAN v LI"}],
            ["SPAN", {innerText: "Druhy SPAN v LI"}]
]);
// = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
```

* * *

<a name="$dom.forceRedraw"></a>

### $dom.forceRedraw([element])
Redraw element using cheat `*.offsetHeight`

**Kind**: static method of [<code>$dom</code>](#$dom) <a name="$dom.forceRedraw" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1171" title="jaaJSU.js:1171"><small>(defined@1171)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>NodeElement</code> | <code>document.body</code> | Element for redraw |


* * *

<a name="$function"></a>

## $function : <code>object</code>
This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: global namespace <a name="$function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1188" title="jaaJSU.js:1188"><small>(defined@1188)</small></a>  

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
**Kind**: static namespace of [<code>$function</code>](#$function) <a name="$function.types" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1194" title="jaaJSU.js:1194"><small>(defined@1194)</small></a>  
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

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_Mixed2Undefined" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1199" title="jaaJSU.js:1199"><small>(defined@1199)</small></a>  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_Mixed2Mixed"></a>

#### types.function\_Mixed2Mixed(input) ⇒ <code>Mixed</code>
`function(input){ return ...; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_Mixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1206" title="jaaJSU.js:1206"><small>(defined@1206)</small></a>  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleMixed2Mixed"></a>

#### types.function\_MultipleMixed2Mixed(...input) ⇒ <code>Mixed</code>
`function(...input){ return ...; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleMixed2Mixed" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1213" title="jaaJSU.js:1213"><small>(defined@1213)</small></a>  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleMixed2Function"></a>

#### types.function\_MultipleMixed2Function(...input) ⇒ <code>function</code>
`function(...input){ return function(...){...}; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleMixed2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1220" title="jaaJSU.js:1220"><small>(defined@1220)</small></a>  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="$function.types.function_MultipleFunction2Function"></a>

#### types.function\_MultipleFunction2Function(...Functions) ⇒ <code>function</code>
`function(...Functions){ return function(...){...}; }`

**Kind**: static method of [<code>types</code>](#$function.types) <a name="$function.types.function_MultipleFunction2Function" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1227" title="jaaJSU.js:1227"><small>(defined@1227)</small></a>  

| Param | Type |
| --- | --- |
| ...Functions | <code>function</code> | 


* * *

<a name="$function.branches"></a>

### $function.branches([reduceFun], [reduceInitValueCreator]) ⇒ <code>function</code>
Provide **input →⇶ …functions ⇛ reduction → output** functionality.

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.branches" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1235" title="jaaJSU.js:1235"><small>(defined@1235)</small></a>  
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

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.component" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1264" title="jaaJSU.js:1264"><small>(defined@1264)</small></a>  
**Returns**: <code>component</code> - * `{ pipe, run }`  

| Param | Type | Description |
| --- | --- | --- |
| transform | <code>function</code> | * ... |


* * *

<a name="$function.conditionalCall"></a>

### $function.conditionalCall(mixed, fun) ⇒ <code>Boolean</code> \| <code>Mixed</code>
Shorthand for `const mixed= ...; if(mixed) fun(mixed);`

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.conditionalCall" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1280" title="jaaJSU.js:1280"><small>(defined@1280)</small></a>  
**Returns**: <code>Boolean</code> \| <code>Mixed</code> - * **False** or output of `fun`  

| Param | Type | Description |
| --- | --- | --- |
| mixed | <code>Mixed</code> | * If `mixed=true` the `fun` is called |
| fun | <code>function</code> | * 'Refular' function as argument accepts `mixed` |


* * *

<a name="$function.constant"></a>

### $function.constant(constantArg) ⇒ <code>function</code>
Helper for returnin constant

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.constant" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1296" title="jaaJSU.js:1296"><small>(defined@1296)</small></a>  
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

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.each" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1306" title="jaaJSU.js:1306"><small>(defined@1306)</small></a>  

| Param | Type |
| --- | --- |
| ......functions | [<code>function\_Mixed2Undefined</code>](#$function.types.function_Mixed2Undefined) | 


* * *

<a name="$function.identity"></a>

### $function.identity(id) ⇒ <code>Mixed</code>
`id=> id`

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.identity" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1314" title="jaaJSU.js:1314"><small>(defined@1314)</small></a>  
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

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.partial" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1342" title="jaaJSU.js:1342"><small>(defined@1342)</small></a>  
**Returns**: <code>function</code> - ...  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | ... |
| ...presetArgs | <code>Mixed</code> | ... |


* * *

<a name="$function.schedule"></a>

### $function.schedule(...functions, def)
Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.schedule" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1354" title="jaaJSU.js:1354"><small>(defined@1354)</small></a>  

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

**Kind**: static method of [<code>$function</code>](#$function) <a name="$function.sequention" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1364" title="jaaJSU.js:1364"><small>(defined@1364)</small></a>  
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

**Kind**: global namespace <a name="$optimizier" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1648" title="jaaJSU.js:1648"><small>(defined@1648)</small></a>  

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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.debounce" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1655" title="jaaJSU.js:1655"><small>(defined@1655)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.trottle" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1688" title="jaaJSU.js:1688"><small>(defined@1688)</small></a>  
**Returns**: <code>function</code> - Trottled function `fun`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  |  |
| [cycles_leap] | <code>Number</code> | <code>1</code> | similar to `wait` - how many times calls `requestAnimationFrame` |


* * *

<a name="$optimizier.poll_"></a>

### $optimiziers.poll\_(fn, [timeout], [interval]) ⇒ <code>Promise</code>
Calls `.then` when `fn` returns **true**

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.poll_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1716" title="jaaJSU.js:1716"><small>(defined@1716)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.once" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1747" title="jaaJSU.js:1747"><small>(defined@1747)</small></a>  

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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.timeoutAnimationFrame" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1770" title="jaaJSU.js:1770"><small>(defined@1770)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | * Function to call later (`delay`+next animation frame) |
| [delay] | <code>Number</code> | <code>150</code> | * When call `f` (ms) |


* * *

<a name="$optimizier.requestAnimationFrame_"></a>

### $optimiziers.requestAnimationFrame\_() ⇒ <code>Promise</code>
Promise wrapper around [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.requestAnimationFrame_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1780" title="jaaJSU.js:1780"><small>(defined@1780)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setTimeout_" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1790" title="jaaJSU.js:1790"><small>(defined@1790)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.setIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1809" title="jaaJSU.js:1809"><small>(defined@1809)</small></a>  
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

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.getIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1827" title="jaaJSU.js:1827"><small>(defined@1827)</small></a>  
**Returns**: <code>Mixed</code> - - Output of `initFunction` — see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

<a name="$optimizier.clearIdleValue"></a>

### $optimiziers.clearIdleValue(idle_value) ⇒ <code>Mixed</code> \| <code>Undefined</code>
Stops **\<IdleValue\>** evaluating. Infact calls `cancelIdleCallback` — see [`setIdleValue`](#methods_setIdleValue)

**Kind**: static method of [<code>$optimizier</code>](#$optimizier) <a name="$optimizier.clearIdleValue" href="https://github.com/jaandrle/jaaJSU#readme/blob/master/undefined/jaaJSU.js#L1837" title="jaaJSU.js:1837"><small>(defined@1837)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - - returns current value or `undefined` if `initFunction` wasn't called — see see [`setIdleValue`](#methods_setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | - Output of [`setIdleValue`](#methods_setIdleValue) |


* * *

