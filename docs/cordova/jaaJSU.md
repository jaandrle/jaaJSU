## Modules

<dl>
<dt><a href="#module_jaaJSU">jaaJSU</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#$array">$array</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$array">$array</a> namespace.</p>
</dd>
<dt><a href="#$async">$async</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$async">$async</a> namespace.</p>
</dd>
<dt><a href="#$dom">$dom</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$dom">$dom</a> namespace.</p>
</dd>
<dt><a href="#$function">$function</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$function">$function</a> namespace.</p>
</dd>
<dt><a href="#$object">$object</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$object">$object</a> namespace.</p>
</dd>
<dt><a href="#$optimiziers">$optimiziers</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$optimizier">$optimizier</a> namespace.</p>
</dd>
<dt><a href="#$string">$string</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$string">$string</a> namespace.</p>
</dd>
<dt><a href="#$time">$time</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$time">$time</a> namespace.</p>
</dd>
</dl>

<a name="module_jaaJSU"></a>

## jaaJSU
**Version**: 0.8.5  

* [jaaJSU](#module_jaaJSU)
    * _namespaces_
        * [~$array](#module_jaaJSU..$array) : <code>object</code>
            * _static_
                * [.arrayIndex(i, s, l)](#module_jaaJSU..$array.arrayIndex) ⇒ <code>Number</code>
                * [.each(iterable, i_function, scope)](#module_jaaJSU..$array.each) ⇒ <code>Mixed</code>
                * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$array.eachDynamic) ⇒ <code>Mixed</code>
                * [.getLast(arr)](#module_jaaJSU..$array.getLast) ⇒ <code>Mixed</code>
                * [.partition(arr)](#module_jaaJSU..$array.partition) ⇒ [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition)
                * [.removeItem(arr, item)](#module_jaaJSU..$array.removeItem) ⇒ <code>Array</code>
                * [.sortRandom()](#module_jaaJSU..$array.sortRandom) ⇒ <code>Number</code>
            * _inner_
                * _types descriptions_
                    * [~instance_partition](#module_jaaJSU..$array..instance_partition) : <code>Object</code>
                        * [.head()](#module_jaaJSU..$array..instance_partition.head) ⇒ <code>Array</code>
                        * [.tail()](#module_jaaJSU..$array..instance_partition.tail) ⇒ <code>Array</code>
                        * [.onIndex(index)](#module_jaaJSU..$array..instance_partition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
                        * [.byCondition(fn)](#module_jaaJSU..$array..instance_partition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>
        * [~$async](#module_jaaJSU..$async) : <code>object</code>
            * _static_
                * [.CANCEL](#module_jaaJSU..$async.CANCEL)
                * ~~[.serialize(funcs)](#module_jaaJSU..$async.serialize) ⇒ <code>Promise</code>~~
                * [.iterate_(iterablePromises)](#module_jaaJSU..$async.iterate_) ⇒ <code>Promise</code>
                * [.iterateMixed_(tasks)](#module_jaaJSU..$async.iterateMixed_) ⇒ <code>Promise</code>
                * [.sequention_(...functions)](#module_jaaJSU..$async.sequention_) ⇒ <code>Promise</code>
                * [.each_(...functions)](#module_jaaJSU..$async.each_) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async..function_MultipleMixed2Promise)
            * _inner_
                * _types descriptions_
                    * [~function_Undefined2Promise()](#module_jaaJSU..$async..function_Undefined2Promise) ⇒ <code>Promise</code>
                    * [~function_MultipleMixed2Promise(...Mixed)](#module_jaaJSU..$async..function_MultipleMixed2Promise) ⇒ <code>Promise</code>
        * [~$dom](#module_jaaJSU..$dom) : <code>object</code>
            * _static_
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
                * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
                * [.componentListener(event_name, ...args)](#module_jaaJSU..$dom.componentListener) ⇒ [<code>component\_listener</code>](#module_jaaJSU..$dom..component_listener)
                * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign) ⇒ <code>NodeElement</code>
                * ~~[.add(parent, ...$$$, [call_parseHTML])](#module_jaaJSU..$dom.add) ⇒ <code>NodeElement</code>~~
                * [.forceRedraw([element], [platform])](#module_jaaJSU..$dom.forceRedraw)
            * _inner_
                * _types descriptions_
                    * [~DomPreparedSelector](#module_jaaJSU..$dom..DomPreparedSelector) : <code>Object</code>
                    * [~instance_componentEmpty](#module_jaaJSU..$dom..instance_componentEmpty) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.mount()](#module_jaaJSU..$dom..instance_componentEmpty.mount)
                    * [~onUpdateFunction](#module_jaaJSU..$dom..onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
                    * [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
                        * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                        * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
                        * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.dynamicComponent(data, generator, [shift])](#module_jaaJSU..$dom..instance_component.dynamicComponent) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.mount)
                        * [.ondestroy(onDestroyFunction)](#module_jaaJSU..$dom..instance_component.ondestroy)
                        * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
                        * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
                        * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
                        * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
                        * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
                            * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
                            * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
                            * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.share.mount)
                            * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>
                    * [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
                        * [.on(...listeners)](#module_jaaJSU..$dom..instance_componentAdd.on) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                        * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                        * [.onmount(onMountFunction)](#module_jaaJSU..$dom..instance_componentAdd.onmount) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                        * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                    * [~instance_componentAddText](#module_jaaJSU..$dom..instance_componentAddText) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                        * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAddText.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [~componentGenerator](#module_jaaJSU..$dom..componentGenerator) ⇒ <code>Mixed</code>
                    * [~component_listener](#module_jaaJSU..$dom..component_listener) : <code>Array</code>
                    * [~DomAssignObject](#module_jaaJSU..$dom..DomAssignObject) : <code>Object</code>
        * [~$function](#module_jaaJSU..$function) : <code>object</code>
            * _static_
                * [.arguments(fun, ...indicies)](#module_jaaJSU..$function.arguments) ⇒ <code>function</code>
                * [.branches([reduceFun], [reduceInitValueCreator])](#module_jaaJSU..$function.branches) ⇒ <code>function</code>
                * [.call(...args)](#module_jaaJSU..$function.call) ⇒ <code>function</code>
                * [.conditionalCall(mixed, fun)](#module_jaaJSU..$function.conditionalCall) ⇒ <code>Boolean</code> \| <code>Mixed</code>
                * [.constant(constantArg)](#module_jaaJSU..$function.constant) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function..function_Undefined2Mixed)
                * [.each()](#module_jaaJSU..$function.each) ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function..function_Mixed2Undefined)
                * [.exception(_throw)](#module_jaaJSU..$function.exception)
                * [.exceptionError(message)](#module_jaaJSU..$function.exceptionError)
                * [.gather(fun, ...spliced)](#module_jaaJSU..$function.gather) ⇒ <code>function</code>
                * [.identity(id)](#module_jaaJSU..$function.identity) ⇒ <code>Mixed</code>
                * [.partial(fn, ...presetArgs)](#module_jaaJSU..$function.partial) ⇒ <code>function</code>
                * [.schedule(...functions, def)](#module_jaaJSU..$function.schedule)
                * [.self()](#module_jaaJSU..$function.self) ⇒ <code>Mixed</code>
                * [.spread(fun, ...spliced)](#module_jaaJSU..$function.spread) ⇒ <code>function</code>
                * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
                * [.sequentionCatch(fun)](#module_jaaJSU..$function.sequentionCatch) ⇒ <code>function</code>
                * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
            * _inner_
                * _types description_
                    * [~function_Mixed2Undefined(input)](#module_jaaJSU..$function..function_Mixed2Undefined) ⇒ <code>Undefined</code>
                    * [~function_Mixed2Mixed(input)](#module_jaaJSU..$function..function_Mixed2Mixed) ⇒ <code>Mixed</code>
                    * [~function_Undefined2Mixed()](#module_jaaJSU..$function..function_Undefined2Mixed) ⇒ <code>Mixed</code>
                    * [~function_MultipleMixed2Mixed(...input)](#module_jaaJSU..$function..function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
                    * [~function_MultipleMixed2Function(...input)](#module_jaaJSU..$function..function_MultipleMixed2Function) ⇒ <code>function</code>
                    * [~function_MultipleFunction2Function(...Functions)](#module_jaaJSU..$function..function_MultipleFunction2Function) ⇒ <code>function</code>
        * [~$object](#module_jaaJSU..$object) : <code>object</code>
            * _static_
                * [.each(iterable, i_function, scope)](#module_jaaJSU..$object.each) ⇒ <code>Mixed</code>
                * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$object.eachDynamic) ⇒ <code>Mixed</code>
                * [.fromArray(arr, [fun], [default_value])](#module_jaaJSU..$object.fromArray) ⇒ <code>Object</code>
                * [.hasProp(obj, prop)](#module_jaaJSU..$object.hasProp) ⇒ <code>Boolean</code>
                * [.immutable_keys([obj_input])](#module_jaaJSU..$object.immutable_keys) ⇒ <code>Proxy</code>
                * [.method(methodName, ...args)](#module_jaaJSU..$object.method) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
                * [.methodFrom()](#module_jaaJSU..$object.methodFrom)
                * [.pluck(key)](#module_jaaJSU..$object.pluck) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
                * [.pluckFrom()](#module_jaaJSU..$object.pluckFrom)
                * [.setter(setterName, arg)](#module_jaaJSU..$object.setter) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object..function_Object2Object)
                * [.setterFrom()](#module_jaaJSU..$object.setterFrom)
            * _inner_
                * _types description_
                    * [~function_Object2Mixed(input_object)](#module_jaaJSU..$object..function_Object2Mixed) ⇒ <code>Mixed</code>
                    * [~function_Object2Object(input_object)](#module_jaaJSU..$object..function_Object2Object) ⇒ <code>Object</code>
                    * [~IterableObjectCallback(IterableObjectObject)](#module_jaaJSU..$object..IterableObjectCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
                    * [~IterableObjectObject](#module_jaaJSU..$object..IterableObjectObject) : <code>Object</code>
        * [~$optimizier](#module_jaaJSU..$optimizier) : <code>object</code>
            * [.debounce(func, [wait], [immediate])](#module_jaaJSU..$optimizier.debounce) ⇒ <code>function</code>
            * [.trottle(func, [cycles_leap])](#module_jaaJSU..$optimizier.trottle) ⇒ <code>function</code>
            * [.poll_(fn, [timeout], [interval])](#module_jaaJSU..$optimizier.poll_) ⇒ <code>Promise</code>
            * [.once(fn, context)](#module_jaaJSU..$optimizier.once)
            * [.timeoutAnimationFrame(f, [delay])](#module_jaaJSU..$optimizier.timeoutAnimationFrame)
            * [.requestAnimationFrame_()](#module_jaaJSU..$optimizier.requestAnimationFrame_) ⇒ <code>Promise</code>
            * [.setTimeout_([timeout])](#module_jaaJSU..$optimizier.setTimeout_) ⇒ <code>function</code>
            * [.setIdleValue(initFunction)](#module_jaaJSU..$optimizier.setIdleValue) ⇒ <code>IdleValue</code>
            * [.getIdleValue(idle_value)](#module_jaaJSU..$optimizier.getIdleValue) ⇒ <code>Mixed</code>
            * [.clearIdleValue(idle_value)](#module_jaaJSU..$optimizier.clearIdleValue) ⇒ <code>Mixed</code> \| <code>Undefined</code>
        * [~$string](#module_jaaJSU..$string) : <code>object</code>
            * [.clearSpaces(str)](#module_jaaJSU..$string.clearSpaces) ⇒ <code>String</code>
            * [.countChars(str)](#module_jaaJSU..$string.countChars) ⇒ <code>Number</code>
            * [.generateUnique()](#module_jaaJSU..$string.generateUnique) ⇒ <code>String</code>
            * [.getSubstring(str, len, [start])](#module_jaaJSU..$string.getSubstring) ⇒ <code>String</code>
            * [.letterInc(str, [inc], [pos])](#module_jaaJSU..$string.letterInc) ⇒ <code>String</code>
            * [.escapeHTML(str)](#module_jaaJSU..$string.escapeHTML) ⇒ <code>String</code>
            * [.clearHTML(str)](#module_jaaJSU..$string.clearHTML) ⇒ <code>String</code>
            * [.concatLeft(text_right)](#module_jaaJSU..$string.concatLeft) ⇒ <code>function</code>
            * [.concatLeft(text_left)](#module_jaaJSU..$string.concatLeft) ⇒ <code>function</code>
            * [.containsRepeatingChars(str, [quantity])](#module_jaaJSU..$string.containsRepeatingChars) ⇒ <code>Boolean</code>
            * [.containsSequential(str, [quantity])](#module_jaaJSU..$string.containsSequential) ⇒ <code>Boolean</code>
            * [.isEmail(email_candidate)](#module_jaaJSU..$string.isEmail) ⇒ <code>Boolean</code>
            * [.isFilled(str)](#module_jaaJSU..$string.isFilled) ⇒ <code>String</code> \| <code>Boolean</code>
            * [.template(str)](#module_jaaJSU..$string.template) ⇒ <code>Object</code>
        * [~$time](#module_jaaJSU..$time) : <code>object</code>
            * _static_
                * [._](#module_jaaJSU..$time._)
                * [.format_objects](#module_jaaJSU..$time.format_objects) : <code>object</code> ℗
                * [.format_arrays](#module_jaaJSU..$time.format_arrays) : <code>object</code> ℗
                * [.Date](#module_jaaJSU..$time.Date) : <code>object</code>
                    * [.addDays(days_num)](#module_jaaJSU..$time.Date.addDays) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
                    * [.addMonths(months_num)](#module_jaaJSU..$time.Date.addMonths) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
                    * [.getWeekDay([type], [toLocaleStringOptions])](#module_jaaJSU..$time.Date.getWeekDay) ⇒ [<code>function\_Date2Number</code>](#module_jaaJSU..$time..function_Date2Number)
                    * [.getWeekNumber(date_instance)](#module_jaaJSU..$time.Date.getWeekNumber) ⇒ <code>Number</code>
                * [.formats](#module_jaaJSU..$time.formats) : <code>object</code>
                * [.ordinal_numbers](#module_jaaJSU..$time.ordinal_numbers) ℗
                * [.ary_ianna_time_zones](#module_jaaJSU..$time.ary_ianna_time_zones) ℗
                * [.ary_ianna_time_offsets](#module_jaaJSU..$time.ary_ianna_time_offsets) ℗
                * [.isDateString(date_string)](#module_jaaJSU..$time.isDateString) ⇒ <code>Boolean</code> ℗
                * [.isTimeString(date_string)](#module_jaaJSU..$time.isTimeString) ⇒ <code>Boolean</code> ℗
                * [.fromDate(date_instance)](#module_jaaJSU..$time.fromDate) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
                * [.fromDateArguments(...args)](#module_jaaJSU..$time.fromDateArguments) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
                * [.fromNow()](#module_jaaJSU..$time.fromNow) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
                * [.fromString([timestamp_string], [timezone])](#module_jaaJSU..$time.fromString) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
                * [.toDateArray(timestamp_string)](#module_jaaJSU..$time.toDateArray) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) ℗
                * [.toStringFromObject(format, params_obj)](#module_jaaJSU..$time.toStringFromObject) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String) ℗
                * [.getFormatObject(format_string)](#module_jaaJSU..$time.getFormatObject) ⇒ [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) ℗
                * [.toDate(date_array)](#module_jaaJSU..$time.toDate) ⇒ <code>Date</code>
                * [.toLocaleString([format_object_name], [toLocaleStringOptions])](#module_jaaJSU..$time.toLocaleString) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
                * [.toString([format], [toLocaleStringOptions])](#module_jaaJSU..$time.toString) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
                * [.getTimeZone(date, parameters)](#module_jaaJSU..$time.getTimeZone) ⇒ <code>String</code>
                * [.getCurrentTimeZone(parameters)](#module_jaaJSU..$time.getCurrentTimeZone) ⇒ <code>String</code>
                * [.modify(mod_obj)](#module_jaaJSU..$time.modify) ⇒ [<code>function\_DateArray2DateArray</code>](#module_jaaJSU..$time..function_DateArray2DateArray)
                * [.modifyAdditions(operation, value, dateObject)](#module_jaaJSU..$time.modifyAdditions) ⇒ <code>Date</code> ℗
                * [.double(time)](#module_jaaJSU..$time.double) ⇒ <code>String</code>
                * [.daysInMonth(month, [year])](#module_jaaJSU..$time.daysInMonth) ⇒ <code>Number</code>
                * [.getDaysInMonth([date_array])](#module_jaaJSU..$time.getDaysInMonth) ⇒ <code>Number</code>
                * [.getMonthName(n, [l])](#module_jaaJSU..$time.getMonthName) ⇒ <code>String</code>
                * [.getOrdinalSuffix(n)](#module_jaaJSU..$time.getOrdinalSuffix) ⇒ <code>String</code>
                * [.getTimeStamp([time])](#module_jaaJSU..$time.getTimeStamp) ⇒ <code>String</code>
                * [.getDateStamp([time])](#module_jaaJSU..$time.getDateStamp) ⇒ <code>String</code>
            * _inner_
                * _types descriptions_
                    * [~function_DateArray2String(date_array)](#module_jaaJSU..$time..function_DateArray2String) ⇒ <code>String</code>
                    * [~function_Date2Date(date_instance)](#module_jaaJSU..$time..function_Date2Date) ⇒ <code>Date</code>
                    * [~function_Date2Number(date_instance)](#module_jaaJSU..$time..function_Date2Number) ⇒ <code>Number</code>
                    * [~function_DateArray2DateArray(date_array)](#module_jaaJSU..$time..function_DateArray2DateArray) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
                    * [~DateArray](#module_jaaJSU..$time..DateArray) : <code>Array</code>
                    * [~toLocaleStringOptions](#module_jaaJSU..$time..toLocaleStringOptions) : <code>Object</code>
                    * [~ArrayOfOperation](#module_jaaJSU..$time..ArrayOfOperation) : <code>Array</code>
    * _types description_
        * [~function_filterCallback(i_value, i)](#module_jaaJSU..function_filterCallback) ⇒ <code>Boolean</code>
        * [~function_reduceCallback(accumulator, i_value, i)](#module_jaaJSU..function_reduceCallback) ⇒ <code>Mixed</code>
        * [~IterableCallback(IterableArrayObject)](#module_jaaJSU..IterableCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
        * [~IterableArrayObject](#module_jaaJSU..IterableArrayObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$array"></a>

### jaaJSU~$array : <code>object</code>
>This NAMESPACE provides features for Arrays.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$array" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L61" title="jaaJSU.js:61"><small>(defined@61)</small></a>  
**Category**: namespaces  

* [~$array](#module_jaaJSU..$array) : <code>object</code>
    * _static_
        * [.arrayIndex(i, s, l)](#module_jaaJSU..$array.arrayIndex) ⇒ <code>Number</code>
        * [.each(iterable, i_function, scope)](#module_jaaJSU..$array.each) ⇒ <code>Mixed</code>
        * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$array.eachDynamic) ⇒ <code>Mixed</code>
        * [.getLast(arr)](#module_jaaJSU..$array.getLast) ⇒ <code>Mixed</code>
        * [.partition(arr)](#module_jaaJSU..$array.partition) ⇒ [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition)
        * [.removeItem(arr, item)](#module_jaaJSU..$array.removeItem) ⇒ <code>Array</code>
        * [.sortRandom()](#module_jaaJSU..$array.sortRandom) ⇒ <code>Number</code>
    * _inner_
        * _types descriptions_
            * [~instance_partition](#module_jaaJSU..$array..instance_partition) : <code>Object</code>
                * [.head()](#module_jaaJSU..$array..instance_partition.head) ⇒ <code>Array</code>
                * [.tail()](#module_jaaJSU..$array..instance_partition.tail) ⇒ <code>Array</code>
                * [.onIndex(index)](#module_jaaJSU..$array..instance_partition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
                * [.byCondition(fn)](#module_jaaJSU..$array..instance_partition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="module_jaaJSU..$array.arrayIndex"></a>

#### $array.arrayIndex(i, s, l) ⇒ <code>Number</code>
>Function which calculate final index for cylce looping.
Means from current index `i` get `s`th value in array which length is `l`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.arrayIndex" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L67" title="jaaJSU.js:67"><small>(defined@67)</small></a>  
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
>Procedure for iterating throught Array `iterable`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.each" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L85" title="jaaJSU.js:85"><small>(defined@85)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#module_jaaJSU..IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$array.eachDynamic"></a>

#### $array.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
>Procedure for iterating throught Array `iterable` like [each](#module_jaaJSU..$array.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.eachDynamic" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L95" title="jaaJSU.js:95"><small>(defined@95)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | [<code>IterableCallback</code>](#module_jaaJSU..IterableCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$array.getLast"></a>

#### $array.getLast(arr) ⇒ <code>Mixed</code>
>Function returns last element in array without editing the original.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.getLast" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L105" title="jaaJSU.js:105"><small>(defined@105)</small></a>  
**Returns**: <code>Mixed</code> - Last element in `arr`  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="module_jaaJSU..$array.partition"></a>

#### $array.partition(arr) ⇒ [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition)
>Function returns methods for splitting array by condition.

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.partition" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L122" title="jaaJSU.js:122"><small>(defined@122)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Input array. |


* * *

<a name="module_jaaJSU..$array.removeItem"></a>

#### $array.removeItem(arr, item) ⇒ <code>Array</code>
>Function returns new array without any `item`

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.removeItem" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L173" title="jaaJSU.js:173"><small>(defined@173)</small></a>  
**Returns**: <code>Array</code> - New {Array} from `arr` without `item`s  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Mixed&gt;</code> | Original array |
| item | <code>Mixed</code> | Item for searching in `arr`. Make sence, if it is possible to compare with `===` operation |


* * *

<a name="module_jaaJSU..$array.sortRandom"></a>

#### $array.sortRandom() ⇒ <code>Number</code>
>Function returns random number for Array.sort function

**Kind**: static method of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array.sortRandom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L190" title="jaaJSU.js:190"><small>(defined@190)</small></a>  
**Returns**: <code>Number</code> - Number in interval <-0.5,0.5>  

* * *

<a name="module_jaaJSU..$array..instance_partition"></a>

#### $array~instance\_partition : <code>Object</code>
>Methods around array `arr` exported by [partition](#module_jaaJSU..$array.partition) method.

**Kind**: inner typedef of [<code>$array</code>](#module_jaaJSU..$array) <a name="module_jaaJSU..$array..instance_partition" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L115" title="jaaJSU.js:115"><small>(defined@115)</small></a>  
**Category**: types descriptions  

* [~instance_partition](#module_jaaJSU..$array..instance_partition) : <code>Object</code>
    * [.head()](#module_jaaJSU..$array..instance_partition.head) ⇒ <code>Array</code>
    * [.tail()](#module_jaaJSU..$array..instance_partition.tail) ⇒ <code>Array</code>
    * [.onIndex(index)](#module_jaaJSU..$array..instance_partition.onIndex) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.byCondition(fn)](#module_jaaJSU..$array..instance_partition.byCondition) ⇒ <code>Array.&lt;Array&gt;</code>


* * *

<a name="module_jaaJSU..$array..instance_partition.head"></a>

##### instance_partition.head() ⇒ <code>Array</code>
**Kind**: static method of [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition) <a name="module_jaaJSU..$array..instance_partition.head" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L131" title="jaaJSU.js:131"><small>(defined@131)</small></a>  
**Returns**: <code>Array</code> - two items Array `[x, ...xs]` (first element and rest array)  

* * *

<a name="module_jaaJSU..$array..instance_partition.tail"></a>

##### instance_partition.tail() ⇒ <code>Array</code>
**Kind**: static method of [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition) <a name="module_jaaJSU..$array..instance_partition.tail" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L140" title="jaaJSU.js:140"><small>(defined@140)</small></a>  
**Returns**: <code>Array</code> - two items Array `[...xs, x]` (rest array and last element)  

* * *

<a name="module_jaaJSU..$array..instance_partition.onIndex"></a>

##### instance_partition.onIndex(index) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition) <a name="module_jaaJSU..$array..instance_partition.onIndex" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L150" title="jaaJSU.js:150"><small>(defined@150)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Position (in fact for `*.splice(0, index)`) where to split array. |


* * *

<a name="module_jaaJSU..$array..instance_partition.byCondition"></a>

##### instance_partition.byCondition(fn) ⇒ <code>Array.&lt;Array&gt;</code>
**Kind**: static method of [<code>instance\_partition</code>](#module_jaaJSU..$array..instance_partition) <a name="module_jaaJSU..$array..instance_partition.byCondition" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L160" title="jaaJSU.js:160"><small>(defined@160)</small></a>  
**Returns**: <code>Array.&lt;Array&gt;</code> - Two items Array [arr1, arr2] based on `fn`.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function\_filterCallback</code> | In fact index of inner array (see return part). |


* * *

<a name="module_jaaJSU..$async"></a>

### jaaJSU~$async : <code>object</code>
>This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$async" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L206" title="jaaJSU.js:206"><small>(defined@206)</small></a>  
**Category**: namespaces  
**Todo**

- [ ] https://github.com/Sullux/fp-light/blob/master/lib/async/async.js


* [~$async](#module_jaaJSU..$async) : <code>object</code>
    * _static_
        * [.CANCEL](#module_jaaJSU..$async.CANCEL)
        * ~~[.serialize(funcs)](#module_jaaJSU..$async.serialize) ⇒ <code>Promise</code>~~
        * [.iterate_(iterablePromises)](#module_jaaJSU..$async.iterate_) ⇒ <code>Promise</code>
        * [.iterateMixed_(tasks)](#module_jaaJSU..$async.iterateMixed_) ⇒ <code>Promise</code>
        * [.sequention_(...functions)](#module_jaaJSU..$async.sequention_) ⇒ <code>Promise</code>
        * [.each_(...functions)](#module_jaaJSU..$async.each_) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async..function_MultipleMixed2Promise)
    * _inner_
        * _types descriptions_
            * [~function_Undefined2Promise()](#module_jaaJSU..$async..function_Undefined2Promise) ⇒ <code>Promise</code>
            * [~function_MultipleMixed2Promise(...Mixed)](#module_jaaJSU..$async..function_MultipleMixed2Promise) ⇒ <code>Promise</code>


* * *

<a name="module_jaaJSU..$async.CANCEL"></a>

#### $async.CANCEL
>It is used in [iterateMixed_](#module_jaaJSU..$async.iterateMixed_)

**Kind**: static property of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.CANCEL" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L284" title="jaaJSU.js:284"><small>(defined@284)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| CANCEL | <code>Symbol</code> | 


* * *

<a name="module_jaaJSU..$async.serialize"></a>

#### ~~$async.serialize(funcs) ⇒ <code>Promise</code>~~
***Deprecated:*** Use [iterate_](#module_jaaJSU..$async.iterate_), [sequention_](#module_jaaJSU..$async.sequention_), [each_](#module_jaaJSU..$async.each_).

>Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.serialize" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L230" title="jaaJSU.js:230"><small>(defined@230)</small></a>  
**.then**: <code>Mixed[]</code> Array of results from `funcs`  
**.catch**: <code>Error</code> Error in `funcs[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| funcs | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#module_jaaJSU..$async..function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

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
>Procedure for iterating thorught **Promise** function array `funcs`.

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.iterate_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L254" title="jaaJSU.js:254"><small>(defined@254)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `iterablePromises`  
**.catch**: <code>Error</code> Error in `iterablePromises[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| iterablePromises | [<code>Array.&lt;function\_Undefined2Promise&gt;</code>](#module_jaaJSU..$async..function_Undefined2Promise) | Array of functions for iterating (the next always waiting fro previous Promise). |

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
>Like `iterate_`, but also allows iterate throught non-promise functions

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.iterateMixed_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L285" title="jaaJSU.js:285"><small>(defined@285)</small></a>  
**Beta**: Use [iterate_](#module_jaaJSU..$async.iterate_), [sequention_](#module_jaaJSU..$async.sequention_), [each_](#module_jaaJSU..$async.each_).  

| Param | Type |
| --- | --- |
| tasks | <code>Promise</code> \| [<code>function\_Undefined2Promise</code>](#module_jaaJSU..$async..function_Undefined2Promise) | 


* * *

<a name="module_jaaJSU..$async.sequention_"></a>

#### $async.sequention\_(...functions) ⇒ <code>Promise</code>
>Procedure for iterating throught **Promise** functions (wait pattern).

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.sequention_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L312" title="jaaJSU.js:312"><small>(defined@312)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_Undefined2Promise</code>](#module_jaaJSU..$async..function_Undefined2Promise) | Functions for iterating (the next always waiting fro previous). |


* * *

<a name="module_jaaJSU..$async.each_"></a>

#### $async.each\_(...functions) ⇒ [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async..function_MultipleMixed2Promise)
>Procedure for iterating throught **Promise** functions (race pattern).

**Kind**: static method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async.each_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L326" title="jaaJSU.js:326"><small>(defined@326)</small></a>  
**.then**: <code>Mixed</code> Result of last function in `functions`  
**.catch**: <code>Error</code> Error in `functions[nth]`  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_MultipleMixed2Promise</code>](#module_jaaJSU..$async..function_MultipleMixed2Promise) | Promises for iterating (race pattern). |

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

<a name="module_jaaJSU..$async..function_Undefined2Promise"></a>

#### $async~function\_Undefined2Promise() ⇒ <code>Promise</code>
>This kind of function schould returns `Promise`.

**Kind**: inner method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async..function_Undefined2Promise" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L212" title="jaaJSU.js:212"><small>(defined@212)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$async..function_MultipleMixed2Promise"></a>

#### $async~function\_MultipleMixed2Promise(...Mixed) ⇒ <code>Promise</code>
>This kind of function schould returns `Promise`.

**Kind**: inner method of [<code>$async</code>](#module_jaaJSU..$async) <a name="module_jaaJSU..$async..function_MultipleMixed2Promise" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L220" title="jaaJSU.js:220"><small>(defined@220)</small></a>  
**Category**: types descriptions  

| Param | Type | Description |
| --- | --- | --- |
| ...Mixed | <code>Mixed</code> | Various arguments |


* * *

<a name="module_jaaJSU..$dom"></a>

### jaaJSU~$dom : <code>object</code>
>This NAMESPACE provides features for DOM elemnts.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$dom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L354" title="jaaJSU.js:354"><small>(defined@354)</small></a>  
**Category**: namespaces  

* [~$dom](#module_jaaJSU..$dom) : <code>object</code>
    * _static_
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
        * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
        * [.componentListener(event_name, ...args)](#module_jaaJSU..$dom.componentListener) ⇒ [<code>component\_listener</code>](#module_jaaJSU..$dom..component_listener)
        * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign) ⇒ <code>NodeElement</code>
        * ~~[.add(parent, ...$$$, [call_parseHTML])](#module_jaaJSU..$dom.add) ⇒ <code>NodeElement</code>~~
        * [.forceRedraw([element], [platform])](#module_jaaJSU..$dom.forceRedraw)
    * _inner_
        * _types descriptions_
            * [~DomPreparedSelector](#module_jaaJSU..$dom..DomPreparedSelector) : <code>Object</code>
            * [~instance_componentEmpty](#module_jaaJSU..$dom..instance_componentEmpty) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.mount()](#module_jaaJSU..$dom..instance_componentEmpty.mount)
            * [~onUpdateFunction](#module_jaaJSU..$dom..onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
            * [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
                * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
                * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.dynamicComponent(data, generator, [shift])](#module_jaaJSU..$dom..instance_component.dynamicComponent) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.mount)
                * [.ondestroy(onDestroyFunction)](#module_jaaJSU..$dom..instance_component.ondestroy)
                * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
                * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
                * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
                * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
                * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
                    * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
                    * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
                    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.share.mount)
                    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>
            * [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
                * [.on(...listeners)](#module_jaaJSU..$dom..instance_componentAdd.on) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                * [.onmount(onMountFunction)](#module_jaaJSU..$dom..instance_componentAdd.onmount) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
            * [~instance_componentAddText](#module_jaaJSU..$dom..instance_componentAddText) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAddText.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
            * [~componentGenerator](#module_jaaJSU..$dom..componentGenerator) ⇒ <code>Mixed</code>
            * [~component_listener](#module_jaaJSU..$dom..component_listener) : <code>Array</code>
            * [~DomAssignObject](#module_jaaJSU..$dom..DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom.ready_"></a>

#### $dom.ready\_(...args) ⇒ <code>Promise</code>
>Calls `.then` when the DOM is ready

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.ready_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L360" title="jaaJSU.js:360"><small>(defined@360)</small></a>  
**.then**: <code>Mixed</code> See `args`  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Mixed</code> | As params for `.then` |


* * *

<a name="module_jaaJSU..$dom.elementReady_"></a>

#### $dom.elementReady\_(el_selector, [parent]) ⇒ <code>Promise</code>
>Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.elementReady_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L390" title="jaaJSU.js:390"><small>(defined@390)</small></a>  
**.then**: <code>NodeElement</code> Target elemnet based on `el_selector`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_selector | [<code>DomPreparedSelector</code>](#module_jaaJSU..$dom..DomPreparedSelector) |  |  |
| [parent] | <code>DOMElement</code> | <code>document</code> | Where to search `el_selector` |


* * *

<a name="module_jaaJSU..$dom.empty"></a>

#### $dom.empty(container)
>Procedure remove children of given element `container`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.empty" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L411" title="jaaJSU.js:411"><small>(defined@411)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>NodeElement</code> | Remove all its children |


* * *

<a name="module_jaaJSU..$dom.insertAfter"></a>

#### $dom.insertAfter(new_element, reference)
>Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.insertAfter" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L421" title="jaaJSU.js:421"><small>(defined@421)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.removeElements"></a>

#### $dom.removeElements(els_to_delete, [from_index], [to_index])
>Remove elements in given {NodeList} or {HTMLCollection}

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.removeElements" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L433" title="jaaJSU.js:433"><small>(defined@433)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| els_to_delete | <code>NodeList</code> \| <code>HTMLCollection</code> |  | Array(-like) object of elements |
| [from_index] | <code>Number</code> | <code>0</code> | Params allowing skip elements in `els_to_delete` |
| [to_index] | <code>Number</code> | <code>els_to_delete.lenght</code> | Params allowing skip elements in `els_to_delete` |


* * *

<a name="module_jaaJSU..$dom.replace"></a>

#### $dom.replace(el_old, el_new)
>Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.replace" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L449" title="jaaJSU.js:449"><small>(defined@449)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.toggleAttribute"></a>

#### $dom.toggleAttribute(element, attribute_name, attribute_a, attribute_b) ⇒ <code>String</code>
>Alias for `element.setAttribute(attribute_name, element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a)`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.toggleAttribute" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L460" title="jaaJSU.js:460"><small>(defined@460)</small></a>  
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
>Alias for `element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.toggleDataset" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L475" title="jaaJSU.js:475"><small>(defined@475)</small></a>  
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
>Procedure for iterating throught NodeList `iterable`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.each" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L488" title="jaaJSU.js:488"><small>(defined@488)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | <code>types.IterableCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$dom.eachDynamic"></a>

#### $dom.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
>Procedure for iterating throught NodeList `iterable` like [each](#module_jaaJSU..$dom.each), but use `for(...;(item= iterable[i]);i++)...`.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.eachDynamic" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L498" title="jaaJSU.js:498"><small>(defined@498)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Array.&lt;Mixed&gt;</code> | An array-like object for iterating. |
| i_function | <code>types.IterableCallback</code> |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$dom.component"></a>

#### $dom.component([el_name], attrs, [params]) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
>This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.component" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L558" title="jaaJSU.js:558"><small>(defined@558)</small></a>  
**Returns**: [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**See**: [https://github.com/jaandrle/dollar_dom_component](https://github.com/jaandrle/dollar_dom_component)  
**Version**: 1.0.5  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) |  | The second argument for [assign](#module_jaaJSU..$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#module_jaaJSU..$dom..instance_component.add) |


* * *

<a name="module_jaaJSU..$dom.componentListener"></a>

#### $dom.componentListener(event_name, ...args) ⇒ [<code>component\_listener</code>](#module_jaaJSU..$dom..component_listener)
>This provide more DRY way to register events listeners for [component](#module_jaaJSU..$dom.component) such as `onupdate`, `oninit`, ….

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.componentListener" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1210" title="jaaJSU.js:1210"><small>(defined@1210)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| event_name | <code>String</code> | Name of event (prefered way is to use without `on*` like native `addEventListener`) |
| ...args | <code>Mixed</code> | See [component_listener](#module_jaaJSU..$dom..component_listener)[1]. |


* * *

<a name="module_jaaJSU..$dom.assign"></a>

#### $dom.assign(element, ...object_attributes) ⇒ <code>NodeElement</code>
>Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.assign" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1239" title="jaaJSU.js:1239"><small>(defined@1239)</small></a>  
**Returns**: <code>NodeElement</code> - Givven `element` (follows similar behaviour in `Object.assign`)  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) | 

**Example** *(#1: All together)*  
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
**Example** *(#2 **\*.classList.toggle**)*  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="">…</body>

$dom.assign(el, { classList: { testClass: true } });//or 1
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: false } });//or 0
//result HTML: <body class="">…</body>
//...
```
**Example** *(#3 Links and images)*  
```js
$dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
$dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
```

* * *

<a name="module_jaaJSU..$dom.add"></a>

#### ~~$dom.add(parent, ...$$$, [call_parseHTML]) ⇒ <code>NodeElement</code>~~
***Deprecated:*** Please use [component](#module_jaaJSU..$dom.component)

>See [add](#module_jaaJSU..$dom.add)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.add" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1314" title="jaaJSU.js:1314"><small>(defined@1314)</small></a>  
**Returns**: <code>NodeElement</code> - First created element (usualy wrapper thanks nesting)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>NodeElement</code> |  |
| ...$$$ | <code>Array</code> | Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova]) |
| [call_parseHTML] | <code>Boolean</code> | If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))` |


* * *

<a name="module_jaaJSU..$dom.forceRedraw"></a>

#### $dom.forceRedraw([element], [platform])
>Redraw element using cheat `*.offsetHeight`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.forceRedraw" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1342" title="jaaJSU.js:1342"><small>(defined@1342)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>NodeElement</code> | <code>active_page_el</code> | Element for redraw |
| [platform] | <code>String</code> | <code>&quot;iOS&quot;</code> | Redraw only for specific `device.platform` ("Android", "iOS") |


* * *

<a name="module_jaaJSU..$dom..DomPreparedSelector"></a>

#### $dom~DomPreparedSelector : <code>Object</code>
>Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...).
Value is argument for selection function

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..DomPreparedSelector" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L380" title="jaaJSU.js:380"><small>(defined@380)</small></a>  
**Category**: types descriptions  
**Example**  
```js
{ getElementsByClassname: "class_name" }
```

* * *

<a name="module_jaaJSU..$dom..instance_componentEmpty"></a>

#### $dom~instance\_componentEmpty : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>In generall, all methods from [instance_component](#module_jaaJSU..$dom..instance_component) don't do anything. Also during "mounting" there are some changes see method [mount](#module_jaaJSU..$dom..instance_componentEmpty.mount).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentEmpty" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L511" title="jaaJSU.js:511"><small>(defined@511)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$dom..instance_componentEmpty.mount"></a>

##### instance_componentEmpty.mount()
>The same syntax as [mount](#module_jaaJSU..$dom..instance_component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty) <a name="module_jaaJSU..$dom..instance_componentEmpty.mount" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L523" title="jaaJSU.js:523"><small>(defined@523)</small></a>  

* * *

<a name="module_jaaJSU..$dom..onUpdateFunction"></a>

#### $dom~onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..onUpdateFunction" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L687" title="jaaJSU.js:687"><small>(defined@687)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#module_jaaJSU..$dom..instance_component.update) is called. This callback can be registered when element is created (see method [add](#module_jaaJSU..$dom..instance_component.add)) see [instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd).  
**Category**: types descriptions  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom..instance_componentAdd.onupdate) |


* * *

<a name="module_jaaJSU..$dom..instance_component"></a>

#### $dom~instance\_component : <code>Object</code>
>This is minimal export of "functional class" [component](#module_jaaJSU..$dom.component) and its methods (if they are chainable).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_component" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L710" title="jaaJSU.js:710"><small>(defined@710)</small></a>  
**Category**: types descriptions  

* [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
    * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
    * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.dynamicComponent(data, generator, [shift])](#module_jaaJSU..$dom..instance_component.dynamicComponent) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.mount)
    * [.ondestroy(onDestroyFunction)](#module_jaaJSU..$dom..instance_component.ondestroy)
    * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
    * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
    * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
        * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.share.mount)
        * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom..instance_component.add"></a>

##### instance_component.add(el_name, attrs, [shift]) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>This add element to component

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.add" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L727" title="jaaJSU.js:727"><small>(defined@727)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) |  | Internally uses [assign](#module_jaaJSU..$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
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

<a name="module_jaaJSU..$dom..instance_component.addText"></a>

##### instance_component.addText(text, [shift]) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
>This add element to component

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.addText" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L784" title="jaaJSU.js:784"><small>(defined@784)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

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

<a name="module_jaaJSU..$dom..instance_component.component"></a>

##### instance_component.component(share, [shift]) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>Method for including another component by usint its `share` key.

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.component" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L828" title="jaaJSU.js:828"><small>(defined@828)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

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

<a name="module_jaaJSU..$dom..instance_component.dynamicComponent"></a>

##### instance_component.dynamicComponent(data, generator, [shift]) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.dynamicComponent" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L858" title="jaaJSU.js:858"><small>(defined@858)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom..instance_componentAdd.onupdate) |
| generator | [<code>componentGenerator</code>](#module_jaaJSU..$dom..componentGenerator) |  | Function for registering components based on updates of `data`. |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |


* * *

<a name="module_jaaJSU..$dom..instance_component.mount"></a>

##### instance_component.mount(element, call_parseHTML, [type])
>Add element to live DOM

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.mount" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L898" title="jaaJSU.js:898"><small>(defined@898)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom..instance_component.ondestroy"></a>

##### instance_component.ondestroy(onDestroyFunction)
>This provide ability to register function which should be called when the component will be destroyed.

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.ondestroy" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L986" title="jaaJSU.js:986"><small>(defined@986)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| onDestroyFunction | <code>function</code> | Function will be called when the component will be destroyed. |


* * *

<a name="module_jaaJSU..$dom..instance_component.recalculateDeep"></a>

##### instance_component.recalculateDeep(shift) ℗
>Updates `deep`

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.recalculateDeep" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L999" title="jaaJSU.js:999"><small>(defined@999)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |


* * *

<a name="module_jaaJSU..$dom..instance_component.getParentElement"></a>

##### instance_component.getParentElement() ⇒ <code>NodeElement</code> ℗
>Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.getParentElement" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1011" title="jaaJSU.js:1011"><small>(defined@1011)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom..instance_component.setShift"></a>

##### instance_component.setShift([shift]) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.setShift" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1022" title="jaaJSU.js:1022"><small>(defined@1022)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

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

<a name="module_jaaJSU..$dom..instance_component.initStorage"></a>

##### instance_component.initStorage() ⇒ <code>Object</code> ℗
>Initialize internal storage

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.initStorage" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1060" title="jaaJSU.js:1060"><small>(defined@1060)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom..instance_component.update"></a>

##### instance_component.update(new_data) ⇒ <code>Boolean</code>
>Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.update" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1147" title="jaaJSU.js:1147"><small>(defined@1147)</small></a>  
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

<a name="module_jaaJSU..$dom..instance_component.share"></a>

##### instance_component.share : <code>Object</code>
>Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#module_jaaJSU..$dom..instance_component.component) method).

**Kind**: static typedef of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.share" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L702" title="jaaJSU.js:702"><small>(defined@702)</small></a>  

* [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
    * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, call_parseHTML, [type])](#module_jaaJSU..$dom..instance_component.share.mount)
    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom..instance_component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
>Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.destroy" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L956" title="jaaJSU.js:956"><small>(defined@956)</small></a>  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="module_jaaJSU..$dom..instance_component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
>Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.isStatic" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1188" title="jaaJSU.js:1188"><small>(defined@1188)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="module_jaaJSU..$dom..instance_component.share.mount"></a>

###### share.mount(element, call_parseHTML, [type])
>Add element to live DOM

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.mount" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L898" title="jaaJSU.js:898"><small>(defined@898)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| call_parseHTML | <code>Boolean</code> |  | If call parseHTML |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom..instance_component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
>Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.update" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1147" title="jaaJSU.js:1147"><small>(defined@1147)</small></a>  
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

<a name="module_jaaJSU..$dom..instance_componentAdd"></a>

#### $dom~instance\_componentAdd : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This is `Component` with aditional methods

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentAdd" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L719" title="jaaJSU.js:719"><small>(defined@719)</small></a>  
**Category**: types descriptions  

* [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
    * [.on(...listeners)](#module_jaaJSU..$dom..instance_componentAdd.on) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
    * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
    * [.onmount(onMountFunction)](#module_jaaJSU..$dom..instance_componentAdd.onmount) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)


* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.getReference"></a>

##### instance_componentAdd.getReference() ⇒ <code>NodeElement</code>
>Returns reference of currently added element

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.getReference" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L593" title="jaaJSU.js:593"><small>(defined@593)</small></a>  

* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.on"></a>

##### instance_componentAdd.on(...listeners) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>Method for batch registering `on*` methods for current element.

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.on" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L600" title="jaaJSU.js:600"><small>(defined@600)</small></a>  

| Param | Type |
| --- | --- |
| ...listeners | [<code>component\_listener</code>](#module_jaaJSU..$dom..component_listener) | 

**Example**  
```js
const select_component= select();
select_component.mount(parent);
// default ⇣
select_component.update({ value: "no_default_1" });
// no_default_1 ⇣

function select(init= { value: "default" }){
    const default_value= $dom.componentListener("mount", ()=> init);
    const update_value= $dom.componentListener("update", init, ({ value })=> ({ value }));
    
    const c= $dom.component("SELECT", null).on( default_value, update_value );
        c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
        c.add("OPTION", { value: "default", textContent: "default" }, -1);
    return share;
}
```

* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.oninit"></a>

##### instance_componentAdd.oninit(fn) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.oninit" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L627" title="jaaJSU.js:627"><small>(defined@627)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.onmount"></a>

##### instance_componentAdd.onmount(onMountFunction) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>This procedure allows to call given function `onMountFunction` during mounting component.

It can for example solve problem setting default value for `select` (`option`s elements not exist when the `select` itself is declared!).

As alternative for some cases, you can use `active` label for `option`s instead.

For now, only first mount!

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.onmount" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L635" title="jaaJSU.js:635"><small>(defined@635)</small></a>  

| Param | Type |
| --- | --- |
| onMountFunction | <code>function</code> | 

**Example**  
```js
const select_component= select({ value: "default" });
select_component.mount(parent);
// default ⇣

function select(init){
    const c= $dom.component("SELECT", null)
     .onmount(()=> init);
        c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
        c.add("OPTION", { value: "no_default_2", textContent: "no_default_2" }, -1);
        c.add("OPTION", { value: "no_default_3", textContent: "no_default_3" }, -1);
        c.add("OPTION", { value: "default", textContent: "default" }, -1);
    return c.share;
}
```

* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.onupdate"></a>

##### instance_componentAdd.onupdate(data, onUpdateFunction) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>This method allows to register function ([module:jaaJSU~$dom.onUpdateFunction](module:jaaJSU~$dom.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#module_jaaJSU..$dom..instance_component.update)).

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.onupdate" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L667" title="jaaJSU.js:667"><small>(defined@667)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#module_jaaJSU..$dom..onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

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

<a name="module_jaaJSU..$dom..instance_componentAddText"></a>

#### $dom~instance\_componentAddText : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This is `Component` with aditional methods

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentAddText" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L776" title="jaaJSU.js:776"><small>(defined@776)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$dom..instance_componentAddText.oninit"></a>

##### instance_componentAddText.oninit(fn) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText) <a name="module_jaaJSU..$dom..instance_componentAddText.oninit" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L817" title="jaaJSU.js:817"><small>(defined@817)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom..componentGenerator"></a>

#### $dom~componentGenerator ⇒ <code>Mixed</code>
>This is function for registering component for [dynamicComponent](#module_jaaJSU..$dom..instance_component.dynamicComponent).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..componentGenerator" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L882" title="jaaJSU.js:882"><small>(defined@882)</small></a>  
**Returns**: <code>Mixed</code> - current_value  
**Category**: types descriptions  

| Param | Type | Description |
| --- | --- | --- |
| mount | <code>function</code> | Function which consumes [share](#module_jaaJSU..$dom..instance_component.share). |
| current_component | <code>Null</code> \| [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) | Previously registered component |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom..instance_componentAdd.onupdate) |
| current_value | <code>Null</code> \| <code>Mixed</code> | Shared value across multiple calling |


* * *

<a name="module_jaaJSU..$dom..component_listener"></a>

#### $dom~component\_listener : <code>Array</code>
>This is in fact argument for [on](#module_jaaJSU..$dom..instance_componentAdd.on).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..component_listener" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1200" title="jaaJSU.js:1200"><small>(defined@1200)</small></a>  
**Category**: types descriptions  

| Param | Type | Description |
| --- | --- | --- |
| 0 | <code>String</code> | Name of method in [instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd). |
| 1 | <code>Array</code> | In fact arguments for `on*` methods in [instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd). |


* * *

<a name="module_jaaJSU..$dom..DomAssignObject"></a>

#### $dom~DomAssignObject : <code>Object</code>
>Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [assign](#module_jaaJSU..$dom.assign). There are some notes and changes:
 - In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..DomAssignObject" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1224" title="jaaJSU.js:1224"><small>(defined@1224)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$function"></a>

### jaaJSU~$function : <code>object</code>
>This NAMESPACE provides features for async (mainly Promise) functions.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$function" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1364" title="jaaJSU.js:1364"><small>(defined@1364)</small></a>  
**Category**: namespaces  

* [~$function](#module_jaaJSU..$function) : <code>object</code>
    * _static_
        * [.arguments(fun, ...indicies)](#module_jaaJSU..$function.arguments) ⇒ <code>function</code>
        * [.branches([reduceFun], [reduceInitValueCreator])](#module_jaaJSU..$function.branches) ⇒ <code>function</code>
        * [.call(...args)](#module_jaaJSU..$function.call) ⇒ <code>function</code>
        * [.conditionalCall(mixed, fun)](#module_jaaJSU..$function.conditionalCall) ⇒ <code>Boolean</code> \| <code>Mixed</code>
        * [.constant(constantArg)](#module_jaaJSU..$function.constant) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function..function_Undefined2Mixed)
        * [.each()](#module_jaaJSU..$function.each) ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function..function_Mixed2Undefined)
        * [.exception(_throw)](#module_jaaJSU..$function.exception)
        * [.exceptionError(message)](#module_jaaJSU..$function.exceptionError)
        * [.gather(fun, ...spliced)](#module_jaaJSU..$function.gather) ⇒ <code>function</code>
        * [.identity(id)](#module_jaaJSU..$function.identity) ⇒ <code>Mixed</code>
        * [.partial(fn, ...presetArgs)](#module_jaaJSU..$function.partial) ⇒ <code>function</code>
        * [.schedule(...functions, def)](#module_jaaJSU..$function.schedule)
        * [.self()](#module_jaaJSU..$function.self) ⇒ <code>Mixed</code>
        * [.spread(fun, ...spliced)](#module_jaaJSU..$function.spread) ⇒ <code>function</code>
        * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
        * [.sequentionCatch(fun)](#module_jaaJSU..$function.sequentionCatch) ⇒ <code>function</code>
        * [.sequention(...functions)](#module_jaaJSU..$function.sequention) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
    * _inner_
        * _types description_
            * [~function_Mixed2Undefined(input)](#module_jaaJSU..$function..function_Mixed2Undefined) ⇒ <code>Undefined</code>
            * [~function_Mixed2Mixed(input)](#module_jaaJSU..$function..function_Mixed2Mixed) ⇒ <code>Mixed</code>
            * [~function_Undefined2Mixed()](#module_jaaJSU..$function..function_Undefined2Mixed) ⇒ <code>Mixed</code>
            * [~function_MultipleMixed2Mixed(...input)](#module_jaaJSU..$function..function_MultipleMixed2Mixed) ⇒ <code>Mixed</code>
            * [~function_MultipleMixed2Function(...input)](#module_jaaJSU..$function..function_MultipleMixed2Function) ⇒ <code>function</code>
            * [~function_MultipleFunction2Function(...Functions)](#module_jaaJSU..$function..function_MultipleFunction2Function) ⇒ <code>function</code>


* * *

<a name="module_jaaJSU..$function.arguments"></a>

#### $function.arguments(fun, ...indicies) ⇒ <code>function</code>
>Rearrange arguments base on indicies [spread](#module_jaaJSU..$function.spread).

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.arguments" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1423" title="jaaJSU.js:1423"><small>(defined@1423)</small></a>  
**Returns**: <code>function</code> - `args`=>`fun` returns  

| Param | Type | Description |
| --- | --- | --- |
| fun | <code>function</code> |  |
| ...indicies | <code>number</code> | Indicies of arguments |


* * *

<a name="module_jaaJSU..$function.branches"></a>

#### $function.branches([reduceFun], [reduceInitValueCreator]) ⇒ <code>function</code>
>Provide **input →⇶ …functions ⇛ reduction → output** functionality.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.branches" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1435" title="jaaJSU.js:1435"><small>(defined@1435)</small></a>  
**Returns**: <code>function</code> - - `...functions`**&lt;…Function&gt;** `=>` **&lt;Function&gt;**
     - `...inputs`**&lt;…Mixed&gt;** `=>` **&lt;Mixed&gt;**
     - result of `reduceFun`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reduceFun] | [<code>function\_reduceCallback</code>](#module_jaaJSU..function_reduceCallback) |  | **By default behaves like 'map'** |
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

<a name="module_jaaJSU..$function.call"></a>

#### $function.call(...args) ⇒ <code>function</code>
>Curried function `...args=> fun=> fun(...args)`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.call" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1464" title="jaaJSU.js:1464"><small>(defined@1464)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | Arguments for curried output function |


* * *

<a name="module_jaaJSU..$function.conditionalCall"></a>

#### $function.conditionalCall(mixed, fun) ⇒ <code>Boolean</code> \| <code>Mixed</code>
>Shorthand for `const mixed= ...; if(mixed) fun(mixed);`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.conditionalCall" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1472" title="jaaJSU.js:1472"><small>(defined@1472)</small></a>  
**Returns**: <code>Boolean</code> \| <code>Mixed</code> - **False** or output of `fun`  

| Param | Type | Description |
| --- | --- | --- |
| mixed | <code>Mixed</code> | If `mixed=true` the `fun` is called |
| fun | [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed) | 'Refular' function as argument accepts `mixed` |


* * *

<a name="module_jaaJSU..$function.constant"></a>

#### $function.constant(constantArg) ⇒ [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function..function_Undefined2Mixed)
>Helper for returnin constant

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.constant" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1485" title="jaaJSU.js:1485"><small>(defined@1485)</small></a>  
**Returns**: [<code>function\_Undefined2Mixed</code>](#module_jaaJSU..$function..function_Undefined2Mixed) - `()=> constantArg`  

| Param | Type |
| --- | --- |
| constantArg | <code>Mixed</code> | 

**Example**  
```js
$function.constant(5)(10);//= `5`
```

* * *

<a name="module_jaaJSU..$function.each"></a>

#### $function.each() ⇒ [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function..function_Mixed2Undefined)
>Functional-like alternative for `for(...){functions[nth](..input);}`.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.each" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1495" title="jaaJSU.js:1495"><small>(defined@1495)</small></a>  

| Param | Type |
| --- | --- |
| ......functions | [<code>function\_Mixed2Undefined</code>](#module_jaaJSU..$function..function_Mixed2Undefined) | 


* * *

<a name="module_jaaJSU..$function.exception"></a>

#### $function.exception(_throw)
**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.exception" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1503" title="jaaJSU.js:1503"><small>(defined@1503)</small></a>  
**Throws**:

- <code>Mixed</code> `_throw`


| Param | Type | Description |
| --- | --- | --- |
| _throw | <code>Mixed</code> | What to throw. |


* * *

<a name="module_jaaJSU..$function.exceptionError"></a>

#### $function.exceptionError(message)
**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.exceptionError" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1510" title="jaaJSU.js:1510"><small>(defined@1510)</small></a>  
**Throws**:

- <code>Error</code> Error with message `message`.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | What message to throw as Error. |


* * *

<a name="module_jaaJSU..$function.gather"></a>

#### $function.gather(fun, ...spliced) ⇒ <code>function</code>
>Opposite operation to [spread](#module_jaaJSU..$function.spread).

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.gather" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1517" title="jaaJSU.js:1517"><small>(defined@1517)</small></a>  
**Returns**: <code>function</code> - `args`=>`fun` returns  

| Param | Type | Description |
| --- | --- | --- |
| fun | <code>function</code> |  |
| ...spliced | <code>any</code> | Arguments for `*.splice` |


* * *

<a name="module_jaaJSU..$function.identity"></a>

#### $function.identity(id) ⇒ <code>Mixed</code>
>`id=> id`

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.identity" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1529" title="jaaJSU.js:1529"><small>(defined@1529)</small></a>  
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
>EXPERIMENT!: "Bind" alternative
vs *.bind(?,...) - it depends if/when you prefer to set `this` (`bind`= when you define partial fn or `partial`= when you call it)

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.partial" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1557" title="jaaJSU.js:1557"><small>(defined@1557)</small></a>  
**Returns**: <code>function</code> - ...  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | ... |
| ...presetArgs | <code>Mixed</code> | ... |


* * *

<a name="module_jaaJSU..$function.schedule"></a>

#### $function.schedule(...functions, def)
>Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.schedule" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1569" title="jaaJSU.js:1569"><small>(defined@1569)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ...functions | <code>Functions</code> |  | Array of functions for iteratings |
| def | <code>Object</code> |  |  |
| [def.context] | <code>Object</code> | <code>window</code> | Parameter for `*.call(context)` |
| [def.delay] | <code>Object</code> | <code>150</code> | Parameter for `$optimizier.timeoutAnimationFrame` |


* * *

<a name="module_jaaJSU..$function.self"></a>

#### $function.self() ⇒ <code>Mixed</code>
>Return current `this`.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.self" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1579" title="jaaJSU.js:1579"><small>(defined@1579)</small></a>  

* * *

<a name="module_jaaJSU..$function.spread"></a>

#### $function.spread(fun, ...spliced) ⇒ <code>function</code>
>Created curried function from `fun`: `fun=> (args=[])=> fun(...args)`. Vs `$object.method("apply", this)` is in specification of `this`.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.spread" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1586" title="jaaJSU.js:1586"><small>(defined@1586)</small></a>  
**Returns**: <code>function</code> - `args`=>`fun` returns  

| Param | Type | Description |
| --- | --- | --- |
| fun | <code>function</code> |  |
| ...spliced | <code>any</code> | Arguments for `*.splice` |


* * *

<a name="module_jaaJSU..$function.sequention"></a>

#### $function.sequention(...functions) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
>Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to [each](#module_jaaJSU..$function.each). But, as arguments for current function is used output frome previous function.

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.sequention" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1598" title="jaaJSU.js:1598"><small>(defined@1598)</small></a>  
**Returns**: [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed) - For given `input` calls all functions in `...functions` (use `input` as arguments for first function). Returns output of last `functions`.  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed) | List of functions: <br/>`...functions[nth](__INPUT__){... return __OUTPUT__;}` <br/>`__INPUT__` is `input` (for first function) or `__OUTPUT__` <br/>`__OUTPUT__`! `__OUTPUT__` is used as argument for next function in `...functions`. |

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

<a name="module_jaaJSU..$function.sequentionCatch"></a>

#### $function.sequentionCatch(fun) ⇒ <code>function</code>
>Helper function for [module:jaaJSU~$function.sequentionTry](module:jaaJSU~$function.sequentionTry).

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.sequentionCatch" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1619" title="jaaJSU.js:1619"><small>(defined@1619)</small></a>  

| Param | Type |
| --- | --- |
| fun | <code>function</code> | 


* * *

<a name="module_jaaJSU..$function.sequention"></a>

#### $function.sequention(...functions) ⇒ [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed)
>Extended version of [sequention](#module_jaaJSU..$function.sequention). As function in `functions` can be used [sequentionCatch](#module_jaaJSU..$function.sequentionCatch) with the same logic as in `Promise`s (`….then(…).catch(…).then(…)`).

**Kind**: static method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function.sequention" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1629" title="jaaJSU.js:1629"><small>(defined@1629)</small></a>  

| Param | Type |
| --- | --- |
| ...functions | [<code>function\_Mixed2Mixed</code>](#module_jaaJSU..$function..function_Mixed2Mixed) | 

**Example**  
```js
const fun= $function.sequentionTry(
     $function.ifElse($function.exception, undefined, a=> a>8),
     a=> a+1,
     $function.sequentionCatch(a=> a%9-1),
     a=> a+1
);
console.log([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map(fun));
//> Array(13) [2,3,4,5,6,7,8,9,10,0,1,2,3]
```

* * *

<a name="module_jaaJSU..$function..function_Mixed2Undefined"></a>

#### $function~function\_Mixed2Undefined(input) ⇒ <code>Undefined</code>
>`function(input){  }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_Mixed2Undefined" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1369" title="jaaJSU.js:1369"><small>(defined@1369)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function..function_Mixed2Mixed"></a>

#### $function~function\_Mixed2Mixed(input) ⇒ <code>Mixed</code>
>`function(input){ return ...; }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_Mixed2Mixed" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1378" title="jaaJSU.js:1378"><small>(defined@1378)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function..function_Undefined2Mixed"></a>

#### $function~function\_Undefined2Mixed() ⇒ <code>Mixed</code>
>`function(){ return ...; }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_Undefined2Mixed" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1387" title="jaaJSU.js:1387"><small>(defined@1387)</small></a>  
**Category**: types description  

* * *

<a name="module_jaaJSU..$function..function_MultipleMixed2Mixed"></a>

#### $function~function\_MultipleMixed2Mixed(...input) ⇒ <code>Mixed</code>
>`function(...input){ return ...; }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_MultipleMixed2Mixed" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1395" title="jaaJSU.js:1395"><small>(defined@1395)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function..function_MultipleMixed2Function"></a>

#### $function~function\_MultipleMixed2Function(...input) ⇒ <code>function</code>
>`function(...input){ return function(...){...}; }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_MultipleMixed2Function" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1404" title="jaaJSU.js:1404"><small>(defined@1404)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| ...input | <code>Mixed</code> | 


* * *

<a name="module_jaaJSU..$function..function_MultipleFunction2Function"></a>

#### $function~function\_MultipleFunction2Function(...Functions) ⇒ <code>function</code>
>`function(...Functions){ return function(...){...}; }`

**Kind**: inner method of [<code>$function</code>](#module_jaaJSU..$function) <a name="module_jaaJSU..$function..function_MultipleFunction2Function" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1413" title="jaaJSU.js:1413"><small>(defined@1413)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| ...Functions | <code>function</code> | 


* * *

<a name="module_jaaJSU..$object"></a>

### jaaJSU~$object : <code>object</code>
>This NAMESPACE provides features for Objects.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$object" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1674" title="jaaJSU.js:1674"><small>(defined@1674)</small></a>  
**Category**: namespaces  

* [~$object](#module_jaaJSU..$object) : <code>object</code>
    * _static_
        * [.each(iterable, i_function, scope)](#module_jaaJSU..$object.each) ⇒ <code>Mixed</code>
        * [.eachDynamic(iterable, i_function, scope)](#module_jaaJSU..$object.eachDynamic) ⇒ <code>Mixed</code>
        * [.fromArray(arr, [fun], [default_value])](#module_jaaJSU..$object.fromArray) ⇒ <code>Object</code>
        * [.hasProp(obj, prop)](#module_jaaJSU..$object.hasProp) ⇒ <code>Boolean</code>
        * [.immutable_keys([obj_input])](#module_jaaJSU..$object.immutable_keys) ⇒ <code>Proxy</code>
        * [.method(methodName, ...args)](#module_jaaJSU..$object.method) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
        * [.methodFrom()](#module_jaaJSU..$object.methodFrom)
        * [.pluck(key)](#module_jaaJSU..$object.pluck) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
        * [.pluckFrom()](#module_jaaJSU..$object.pluckFrom)
        * [.setter(setterName, arg)](#module_jaaJSU..$object.setter) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object..function_Object2Object)
        * [.setterFrom()](#module_jaaJSU..$object.setterFrom)
    * _inner_
        * _types description_
            * [~function_Object2Mixed(input_object)](#module_jaaJSU..$object..function_Object2Mixed) ⇒ <code>Mixed</code>
            * [~function_Object2Object(input_object)](#module_jaaJSU..$object..function_Object2Object) ⇒ <code>Object</code>
            * [~IterableObjectCallback(IterableObjectObject)](#module_jaaJSU..$object..IterableObjectCallback) ⇒ <code>Mixed</code> \| <code>Undefined</code>
            * [~IterableObjectObject](#module_jaaJSU..$object..IterableObjectObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$object.each"></a>

#### $object.each(iterable, i_function, scope) ⇒ <code>Mixed</code>
>Function for iterating throught Object `iterable`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.each" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1716" title="jaaJSU.js:1716"><small>(defined@1716)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Object</code> | An object for iterating. |
| i_function | [<code>IterableObjectCallback</code>](#module_jaaJSU..$object..IterableObjectCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$object.eachDynamic"></a>

#### $object.eachDynamic(iterable, i_function, scope) ⇒ <code>Mixed</code>
>Procedure for iterating throught Object `iterable` like [each](#module_jaaJSU..$object.each), but use `for(... in ...)...if(Object.prototype.hasOwnProperty...`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.eachDynamic" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1726" title="jaaJSU.js:1726"><small>(defined@1726)</small></a>  
**Returns**: <code>Mixed</code> - `share`  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Object</code> | An object for iterating. |
| i_function | [<code>IterableObjectCallback</code>](#module_jaaJSU..$object..IterableObjectCallback) |  |
| scope | <code>Object</code> \| <code>undefined</code> | An argument for `i_function.call(*,...)` |


* * *

<a name="module_jaaJSU..$object.fromArray"></a>

#### $object.fromArray(arr, [fun], [default_value]) ⇒ <code>Object</code>
>Function for converting Array `arr` to Object. Uses `fun` for converting.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.fromArray" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1736" title="jaaJSU.js:1736"><small>(defined@1736)</small></a>  
**Returns**: <code>Object</code> - Created object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | Array-like parameter. |
| [fun] | [<code>function\_reduceCallback</code>](#module_jaaJSU..function_reduceCallback) | <code>&#x60;(acc, curr, i)&#x3D;&gt; acc[&quot;&quot;+i]&#x3D; curr&#x60;</code> | Function for converting. In fact, it is wrapper around `Array.reduce`. |
| [default_value] | <code>Object</code> | <code>{}</code> | Initial value. |


* * *

<a name="module_jaaJSU..$object.hasProp"></a>

#### $object.hasProp(obj, prop) ⇒ <code>Boolean</code>
>Wrapper around `Object.prototype.hasOwnProperty`. It is more trustable, because you can sets `var obj= { hasOwnProperty: "gotcha" }`

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.hasProp" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1746" title="jaaJSU.js:1746"><small>(defined@1746)</small></a>  
**Returns**: <code>Boolean</code> - True, if `obj` has property `prop`  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | **Mandatory**. Object where to search `prop`. |
| prop | <code>String</code> | **Mandatory**. Poperty to searching for. |


* * *

<a name="module_jaaJSU..$object.immutable_keys"></a>

#### $object.immutable\_keys([obj_input]) ⇒ <code>Proxy</code>
>Function for creating non-rewritable object

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.immutable_keys" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1755" title="jaaJSU.js:1755"><small>(defined@1755)</small></a>  
**Returns**: <code>Proxy</code> - <br/>getter `Proxy.key_name` Mixed: returns key_name if defined
<br/>getter `Proxy.set(key_name, value)` Function:
<br/>&nbsp;&nbsp;- define `key_name` in object if isn't already defined (**returns True**, else **False**).
<br/>getter `Proxy.keys` Number: Wrapper around `Object.keys(*)`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj_input] | <code>Object</code> | <code>{}</code> | Initial value |


* * *

<a name="module_jaaJSU..$object.method"></a>

#### $object.method(methodName, ...args) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
>Wrapper around `object[methodName](...args)`.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.method" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1794" title="jaaJSU.js:1794"><small>(defined@1794)</small></a>  
**Returns**: [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed) - `(target) => target[key](...args)`  

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
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.methodFrom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1806" title="jaaJSU.js:1806"><small>(defined@1806)</small></a>  
**Example**  
```js
$object.methodFrom(" Hi ")("trim")()====$object.method("trim")(" Hi ");
$object.methodFrom("Hello world")("split")(" ")===$object.method("split", " ")("Hello world");
```

* * *

<a name="module_jaaJSU..$object.pluck"></a>

#### $object.pluck(key) ⇒ [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed)
>Wrapper around `object[key]`, usefull for binding.

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.pluck" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1814" title="jaaJSU.js:1814"><small>(defined@1814)</small></a>  
**Returns**: [<code>function\_Object2Mixed</code>](#module_jaaJSU..$object..function_Object2Mixed) - `(target) => target[key]`  

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
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.pluckFrom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1824" title="jaaJSU.js:1824"><small>(defined@1824)</small></a>  
**Example**  
```js
$object.pluckFrom("Test")("length")===$object.pluck("length")("Test");
```

* * *

<a name="module_jaaJSU..$object.setter"></a>

#### $object.setter(setterName, arg) ⇒ [<code>function\_Object2Object</code>](#module_jaaJSU..$object..function_Object2Object)
>Wrapper around `object[setterName]= arg`

**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.setter" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1831" title="jaaJSU.js:1831"><small>(defined@1831)</small></a>  
**Returns**: [<code>function\_Object2Object</code>](#module_jaaJSU..$object..function_Object2Object) - `object=> (object[setterName]= arg, object)`  

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
**Kind**: static method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object.setterFrom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1842" title="jaaJSU.js:1842"><small>(defined@1842)</small></a>  
**Example**  
```js
$object.setterFrom({ test_key: "test_init_value", other_key: "other_value" })("test_key")("test_value")===$object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });
```

* * *

<a name="module_jaaJSU..$object..function_Object2Mixed"></a>

#### $object~function\_Object2Mixed(input_object) ⇒ <code>Mixed</code>
**Kind**: inner method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object..function_Object2Mixed" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1679" title="jaaJSU.js:1679"><small>(defined@1679)</small></a>  
**Category**: types description  

| Param | Type |
| --- | --- |
| input_object | <code>Object</code> | 


* * *

<a name="module_jaaJSU..$object..function_Object2Object"></a>

#### $object~function\_Object2Object(input_object) ⇒ <code>Object</code>
**Kind**: inner method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object..function_Object2Object" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1687" title="jaaJSU.js:1687"><small>(defined@1687)</small></a>  
**Returns**: <code>Object</code> - Modified version of `input_object` (By reference!)  
**Category**: types description  

| Param | Type |
| --- | --- |
| input_object | <code>Object</code> | 


* * *

<a name="module_jaaJSU..$object..IterableObjectCallback"></a>

#### $object~IterableObjectCallback(IterableObjectObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: inner method of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object..IterableObjectCallback" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1707" title="jaaJSU.js:1707"><small>(defined@1707)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableObjectObject](#module_jaaJSU..$object..IterableObjectObject).  
**Category**: types description  

| Param | Type |
| --- | --- |
| IterableObjectObject | [<code>IterableObjectObject</code>](#module_jaaJSU..$object..IterableObjectObject) | 


* * *

<a name="module_jaaJSU..$object..IterableObjectObject"></a>

#### $object~IterableObjectObject : <code>Object</code>
>Similar to [IterableArrayObject](#module_jaaJSU..IterableArrayObject)

**Kind**: inner typedef of [<code>$object</code>](#module_jaaJSU..$object) <a name="module_jaaJSU..$object..IterableObjectObject" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1695" title="jaaJSU.js:1695"><small>(defined@1695)</small></a>  
**Category**: types description  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| item | <code>Mixed</code> | Nth value for `key` in `iterable`. |
| key | <code>Mixed</code> | Name of key |
| index | <code>Number</code> | Idicies 0...`Object.keys(iterable).length`. |
| last | <code>Boolean</code> | Is setted True, if it is the last element in array. |
| share | <code>Mixed</code> \| <code>Undefined</code> | shared variable - works similar to `*.reduce` method |


* * *

<a name="module_jaaJSU..$optimizier"></a>

### jaaJSU~$optimizier : <code>object</code>
>This NAMESPACE provides features for optimizations.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$optimizier" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1925" title="jaaJSU.js:1925"><small>(defined@1925)</small></a>  
**Category**: namespaces  

* [~$optimizier](#module_jaaJSU..$optimizier) : <code>object</code>
    * [.debounce(func, [wait], [immediate])](#module_jaaJSU..$optimizier.debounce) ⇒ <code>function</code>
    * [.trottle(func, [cycles_leap])](#module_jaaJSU..$optimizier.trottle) ⇒ <code>function</code>
    * [.poll_(fn, [timeout], [interval])](#module_jaaJSU..$optimizier.poll_) ⇒ <code>Promise</code>
    * [.once(fn, context)](#module_jaaJSU..$optimizier.once)
    * [.timeoutAnimationFrame(f, [delay])](#module_jaaJSU..$optimizier.timeoutAnimationFrame)
    * [.requestAnimationFrame_()](#module_jaaJSU..$optimizier.requestAnimationFrame_) ⇒ <code>Promise</code>
    * [.setTimeout_([timeout])](#module_jaaJSU..$optimizier.setTimeout_) ⇒ <code>function</code>
    * [.setIdleValue(initFunction)](#module_jaaJSU..$optimizier.setIdleValue) ⇒ <code>IdleValue</code>
    * [.getIdleValue(idle_value)](#module_jaaJSU..$optimizier.getIdleValue) ⇒ <code>Mixed</code>
    * [.clearIdleValue(idle_value)](#module_jaaJSU..$optimizier.clearIdleValue) ⇒ <code>Mixed</code> \| <code>Undefined</code>


* * *

<a name="module_jaaJSU..$optimizier.debounce"></a>

#### $optimizier.debounce(func, [wait], [immediate]) ⇒ <code>function</code>
>Prevent multiple calling (typically for "onresize" events) - use google for more detail

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.debounce" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1931" title="jaaJSU.js:1931"><small>(defined@1931)</small></a>  
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

<a name="module_jaaJSU..$optimizier.trottle"></a>

#### $optimizier.trottle(func, [cycles_leap]) ⇒ <code>function</code>
>Very similar to [debounce](#module_jaaJSU..$optimizier.debounce), but uses `requestAnimationFrame`

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.trottle" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1964" title="jaaJSU.js:1964"><small>(defined@1964)</small></a>  
**Returns**: <code>function</code> - Trottled function `fun`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  |  |
| [cycles_leap] | <code>Number</code> | <code>1</code> | similar to `wait` - how many times calls `requestAnimationFrame` |


* * *

<a name="module_jaaJSU..$optimizier.poll_"></a>

#### $optimizier.poll\_(fn, [timeout], [interval]) ⇒ <code>Promise</code>
>Calls `.then` when `fn` returns **true**

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.poll_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1992" title="jaaJSU.js:1992"><small>(defined@1992)</small></a>  
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

<a name="module_jaaJSU..$optimizier.once"></a>

#### $optimizier.once(fn, context)
>Prevent multiple calling of `fn`

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.once" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2023" title="jaaJSU.js:2023"><small>(defined@2023)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function which must be called only onetime |
| context | <code>Object</code> | Typically `window` |

**Example**  
```js
console_log= $optimizier.once(()=>console.log("hi"));
console_log();//=hi
console_log();//nothing
```

* * *

<a name="module_jaaJSU..$optimizier.timeoutAnimationFrame"></a>

#### $optimizier.timeoutAnimationFrame(f, [delay])
>Combination of `setTimeout`->`requestAnimationFrame`

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.timeoutAnimationFrame" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2044" title="jaaJSU.js:2044"><small>(defined@2044)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | Function to call later (`delay`+next animation frame) |
| [delay] | <code>Number</code> | <code>150</code> | When call `f` (ms) |


* * *

<a name="module_jaaJSU..$optimizier.requestAnimationFrame_"></a>

#### $optimizier.requestAnimationFrame\_() ⇒ <code>Promise</code>
>Promise wrapper around [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.requestAnimationFrame_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2052" title="jaaJSU.js:2052"><small>(defined@2052)</small></a>  
**Example**  
```js
$optimizier.requestAnimationFrame_().then(()=> console.log("Hi")); //-> "Hi"
Promise.resolve().then($optimiziers.requestAnimationFrame_).then(()=> console.log("Hi")); //-> "Hi"
```

* * *

<a name="module_jaaJSU..$optimizier.setTimeout_"></a>

#### $optimizier.setTimeout\_([timeout]) ⇒ <code>function</code>
>Promise wrapper around `setTimeout`.

Links:
 1) [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
 2) [`setTimeout Arguments`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Arguments)

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.setTimeout_" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2062" title="jaaJSU.js:2062"><small>(defined@2062)</small></a>  
**Returns**: <code>function</code> - <br/>- **(…params)=> \<Promise\>**
<br/>- where `params` are `arg1, ..., argN` arguments for `setTimeout` — see **Links (2)**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>0</code> | <br/>- Optional parameter to sets the time delay in milliseconds <br/>- `delay` argument for `setTimeout` — see **Links (2)** |

**Example**  
```js
$optimizier.setTimeout_(30)("Hi").then(console.log); //-> "Hi" "after 30ms"
Promise.resolve("Hi").then($optimiziers.setTimeout_()).then(console.log); //-> "Hi" "after 0ms"
```

* * *

<a name="module_jaaJSU..$optimizier.setIdleValue"></a>

#### $optimizier.setIdleValue(initFunction) ⇒ <code>IdleValue</code>
>This function creates **\<IdleValue\>**. It is value which is not actually used immediately during assignment but it’s needed later in code. For getting value use [module:jaaJSU~getIdleValue](module:jaaJSU~getIdleValue).

This is infact *idle-until-urgent* evaluation pattern.

Internally uses `requestIdleCallback` (`cancelIdleCallback`), or `setTimeout` (`clearTimeout`) as shim/ponyfill.

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.setIdleValue" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2081" title="jaaJSU.js:2081"><small>(defined@2081)</small></a>  
**Returns**: <code>IdleValue</code> - argument for [module:jaaJSU~getIdleValue](module:jaaJSU~getIdleValue) or [module:jaaJSU~cancelIdleValue](module:jaaJSU~cancelIdleValue).  

| Param | Type | Description |
| --- | --- | --- |
| initFunction | <code>function</code> | this function is called to get value |

**Example**  
```js
const formatter_idled= $optimizier.setIdleValue(()=> new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles' }));
// …
console.log($optimizier.getIdleValue(formatter_idled).format(new Date()));
```

* * *

<a name="module_jaaJSU..$optimizier.getIdleValue"></a>

#### $optimizier.getIdleValue(idle_value) ⇒ <code>Mixed</code>
>Returns result of **\<IdleValue\>**.

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.getIdleValue" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2097" title="jaaJSU.js:2097"><small>(defined@2097)</small></a>  
**Returns**: <code>Mixed</code> - Output of `initFunction` — see [module:jaaJSU~setIdleValue](module:jaaJSU~setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | Output of [module:jaaJSU~setIdleValue](module:jaaJSU~setIdleValue) |


* * *

<a name="module_jaaJSU..$optimizier.clearIdleValue"></a>

#### $optimizier.clearIdleValue(idle_value) ⇒ <code>Mixed</code> \| <code>Undefined</code>
>Stops **\<IdleValue\>** evaluating. Infact calls `cancelIdleCallback` — see [module:jaaJSU~setIdleValue](module:jaaJSU~setIdleValue)

**Kind**: static method of [<code>$optimizier</code>](#module_jaaJSU..$optimizier) <a name="module_jaaJSU..$optimizier.clearIdleValue" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2105" title="jaaJSU.js:2105"><small>(defined@2105)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - returns current value or `undefined` if `initFunction` wasn't called — see see [module:jaaJSU~setIdleValue](module:jaaJSU~setIdleValue)  

| Param | Type | Description |
| --- | --- | --- |
| idle_value | <code>IdleValue</code> | Output of [module:jaaJSU~setIdleValue](module:jaaJSU~setIdleValue) |


* * *

<a name="module_jaaJSU..$string"></a>

### jaaJSU~$string : <code>object</code>
>This NAMESPACE provides features for strings.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$string" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2121" title="jaaJSU.js:2121"><small>(defined@2121)</small></a>  
**Category**: namespaces  

* [~$string](#module_jaaJSU..$string) : <code>object</code>
    * [.clearSpaces(str)](#module_jaaJSU..$string.clearSpaces) ⇒ <code>String</code>
    * [.countChars(str)](#module_jaaJSU..$string.countChars) ⇒ <code>Number</code>
    * [.generateUnique()](#module_jaaJSU..$string.generateUnique) ⇒ <code>String</code>
    * [.getSubstring(str, len, [start])](#module_jaaJSU..$string.getSubstring) ⇒ <code>String</code>
    * [.letterInc(str, [inc], [pos])](#module_jaaJSU..$string.letterInc) ⇒ <code>String</code>
    * [.escapeHTML(str)](#module_jaaJSU..$string.escapeHTML) ⇒ <code>String</code>
    * [.clearHTML(str)](#module_jaaJSU..$string.clearHTML) ⇒ <code>String</code>
    * [.concatLeft(text_right)](#module_jaaJSU..$string.concatLeft) ⇒ <code>function</code>
    * [.concatLeft(text_left)](#module_jaaJSU..$string.concatLeft) ⇒ <code>function</code>
    * [.containsRepeatingChars(str, [quantity])](#module_jaaJSU..$string.containsRepeatingChars) ⇒ <code>Boolean</code>
    * [.containsSequential(str, [quantity])](#module_jaaJSU..$string.containsSequential) ⇒ <code>Boolean</code>
    * [.isEmail(email_candidate)](#module_jaaJSU..$string.isEmail) ⇒ <code>Boolean</code>
    * [.isFilled(str)](#module_jaaJSU..$string.isFilled) ⇒ <code>String</code> \| <code>Boolean</code>
    * [.template(str)](#module_jaaJSU..$string.template) ⇒ <code>Object</code>


* * *

<a name="module_jaaJSU..$string.clearSpaces"></a>

#### $string.clearSpaces(str) ⇒ <code>String</code>
>Clear spaces (`\s+`) in `str`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.clearSpaces" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2127" title="jaaJSU.js:2127"><small>(defined@2127)</small></a>  
**Returns**: <code>String</code> - Cleaned `str`  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.countChars"></a>

#### $string.countChars(str) ⇒ <code>Number</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.countChars" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2138" title="jaaJSU.js:2138"><small>(defined@2138)</small></a>  
**Returns**: <code>Number</code> - Number of chars in `str`  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.generateUnique"></a>

#### $string.generateUnique() ⇒ <code>String</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.generateUnique" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2155" title="jaaJSU.js:2155"><small>(defined@2155)</small></a>  
**Returns**: <code>String</code> - An unique string  

* * *

<a name="module_jaaJSU..$string.getSubstring"></a>

#### $string.getSubstring(str, len, [start]) ⇒ <code>String</code>
>Wrapper around `*.substring(*,*)`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.getSubstring" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2163" title="jaaJSU.js:2163"><small>(defined@2163)</small></a>  
**Returns**: <code>String</code> - Substring of `str`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  |  |
| len | <code>Number</code> |  | How many chars |
| [start] | <code>Number</code> | <code>0</code> |  |


* * *

<a name="module_jaaJSU..$string.letterInc"></a>

#### $string.letterInc(str, [inc], [pos]) ⇒ <code>String</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.letterInc" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2177" title="jaaJSU.js:2177"><small>(defined@2177)</small></a>  
**Returns**: <code>String</code> - New string with "highter" letter on position `pos`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | `[a-zA-z]` at least on position `pos` |
| [inc] | <code>Number</code> | <code>1</code> | `inc=0` is convert to `inc=1` |
| [pos] | <code>Number</code> | <code>str.length-1</code> |  |

**Example**  
```js
console.log($string.letterInc("125"));//="126"
console.log($string.letterInc("125a"));//="125b"
console.log($string.letterInc("HH"));//="HI"
console.log($string.letterInc("Hg", 2, 1));//="Hi"
```

* * *

<a name="module_jaaJSU..$string.escapeHTML"></a>

#### $string.escapeHTML(str) ⇒ <code>String</code>
>Escapes "<", ">", "&", '"', "'"

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.escapeHTML" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2208" title="jaaJSU.js:2208"><small>(defined@2208)</small></a>  
**Returns**: <code>String</code> - Escaped text  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.clearHTML"></a>

#### $string.clearHTML(str) ⇒ <code>String</code>
>Clear tags from `str`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.clearHTML" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2219" title="jaaJSU.js:2219"><small>(defined@2219)</small></a>  
**Returns**: <code>String</code> - Text without HTML tags  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.concatLeft"></a>

#### $string.concatLeft(text_right) ⇒ <code>function</code>
>Curried function for joining text: `text_right=> text_left=> text_left+text_right`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.concatLeft" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2231" title="jaaJSU.js:2231"><small>(defined@2231)</small></a>  
**Returns**: <code>function</code> - Function for adding text to `text_right`  

| Param | Type |
| --- | --- |
| text_right | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.concatLeft"></a>

#### $string.concatLeft(text_left) ⇒ <code>function</code>
>Curried function for joining text: `text_left=> text_right=> text_left+text_right`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.concatLeft" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2239" title="jaaJSU.js:2239"><small>(defined@2239)</small></a>  
**Returns**: <code>function</code> - Function for adding text to `text_left`  

| Param | Type |
| --- | --- |
| text_left | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.containsRepeatingChars"></a>

#### $string.containsRepeatingChars(str, [quantity]) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.containsRepeatingChars" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2247" title="jaaJSU.js:2247"><small>(defined@2247)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| str | <code>String</code> |  | 
| [quantity] | <code>Number</code> | <code>2</code> | 

**Example**  
```js
console.log($string.containsRepeatingChars("AAbcd"));//=false
console.log($string.containsRepeatingChars("AAAbcd"));//=true
console.log($string.containsRepeatingChars("AAAbcd", 3));//=false
```

* * *

<a name="module_jaaJSU..$string.containsSequential"></a>

#### $string.containsSequential(str, [quantity]) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.containsSequential" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2264" title="jaaJSU.js:2264"><small>(defined@2264)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| str | <code>String</code> |  | 
| [quantity] | <code>Number</code> | <code>2</code> | 

**Example**  
```js
console.log($string.containsSequential("ABccc"));//=false
console.log($string.containsSequential("ABCdd"));//=true
console.log($string.containsSequential("ABCdd", 3));//=false
```

* * *

<a name="module_jaaJSU..$string.isEmail"></a>

#### $string.isEmail(email_candidate) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.isEmail" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2306" title="jaaJSU.js:2306"><small>(defined@2306)</small></a>  

| Param | Type |
| --- | --- |
| email_candidate | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.isFilled"></a>

#### $string.isFilled(str) ⇒ <code>String</code> \| <code>Boolean</code>
>Wrapper around `*.trim()`

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.isFilled" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2317" title="jaaJSU.js:2317"><small>(defined@2317)</small></a>  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 


* * *

<a name="module_jaaJSU..$string.template"></a>

#### $string.template(str) ⇒ <code>Object</code>
>Alternative to ` ```text with ${variable}``` ` (like `sprintf()`)

**Kind**: static method of [<code>$string</code>](#module_jaaJSU..$string) <a name="module_jaaJSU..$string.template" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2328" title="jaaJSU.js:2328"><small>(defined@2328)</small></a>  
**Returns**: <code>Object</code> - `{execute, partial, isSubstituted}`
<br/>- String **execute** ( [ `params_obj` ={}] )
<br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
<br/>&nbsp;&nbsp;- **Returns:** String
<br/>&nbsp;&nbsp;&nbsp;&nbsp;- New string with replaced vars
<br/>- String **partial** ( [ `params_obj` ={}] )
<br/>&nbsp;&nbsp;- Replace inside `str`
<br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
<br/>&nbsp;&nbsp;- **Returns:** String
<br/>&nbsp;&nbsp;&nbsp;&nbsp;- `str` with replaced vars
<br/>- Boolean **isSubstituted** ()
<br/>&nbsp;&nbsp;- **Returns:** Boolean
<br/>&nbsp;&nbsp;&nbsp;&nbsp;- If `str` contains `${0}, ${var}, ...`  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | * Text which contains `${0}, ${var}, ...` |

**Example**  
```js
const test1= $string.template("${0}, ${1}, ${2}");
console.log(test1.partial(["A"]));//="A, ${1}, ${2}"
console.log(test1.execute(["B", "C", "D"]));//="A, C, D"
console.log(test1.isSubstituted());//=false
console.log(test1.partial(["_", "B", "C"]));//="A, B, C"
console.log(test1.isSubstituted());//=true

const test2= $string.template("${test0}, ${test1}, ${test2}");
console.log(test2.partial({test0: "A"}));//="A, ${test1}, ${test2}"
console.log(test2.execute({test0: "B", test1: "C", test2: "D"}));//="A, C, D"
console.log(test2.isSubstituted());//=false
console.log(test2.partial({test0: "_", test1: "B", test2: "C"}));//="A, B, C"
console.log(test2.isSubstituted());//=true
```

* * *

<a name="module_jaaJSU..$time"></a>

### jaaJSU~$time : <code>object</code>
>This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$time" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2403" title="jaaJSU.js:2403"><small>(defined@2403)</small></a>  
**Category**: namespaces  
**See**: [https://github.com/jaandrle/dollar_time](https://github.com/jaandrle/dollar_time)  
**Version**: 0.6.0  

* [~$time](#module_jaaJSU..$time) : <code>object</code>
    * _static_
        * [._](#module_jaaJSU..$time._)
        * [.format_objects](#module_jaaJSU..$time.format_objects) : <code>object</code> ℗
        * [.format_arrays](#module_jaaJSU..$time.format_arrays) : <code>object</code> ℗
        * [.Date](#module_jaaJSU..$time.Date) : <code>object</code>
            * [.addDays(days_num)](#module_jaaJSU..$time.Date.addDays) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
            * [.addMonths(months_num)](#module_jaaJSU..$time.Date.addMonths) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
            * [.getWeekDay([type], [toLocaleStringOptions])](#module_jaaJSU..$time.Date.getWeekDay) ⇒ [<code>function\_Date2Number</code>](#module_jaaJSU..$time..function_Date2Number)
            * [.getWeekNumber(date_instance)](#module_jaaJSU..$time.Date.getWeekNumber) ⇒ <code>Number</code>
        * [.formats](#module_jaaJSU..$time.formats) : <code>object</code>
        * [.ordinal_numbers](#module_jaaJSU..$time.ordinal_numbers) ℗
        * [.ary_ianna_time_zones](#module_jaaJSU..$time.ary_ianna_time_zones) ℗
        * [.ary_ianna_time_offsets](#module_jaaJSU..$time.ary_ianna_time_offsets) ℗
        * [.isDateString(date_string)](#module_jaaJSU..$time.isDateString) ⇒ <code>Boolean</code> ℗
        * [.isTimeString(date_string)](#module_jaaJSU..$time.isTimeString) ⇒ <code>Boolean</code> ℗
        * [.fromDate(date_instance)](#module_jaaJSU..$time.fromDate) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
        * [.fromDateArguments(...args)](#module_jaaJSU..$time.fromDateArguments) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
        * [.fromNow()](#module_jaaJSU..$time.fromNow) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
        * [.fromString([timestamp_string], [timezone])](#module_jaaJSU..$time.fromString) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
        * [.toDateArray(timestamp_string)](#module_jaaJSU..$time.toDateArray) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) ℗
        * [.toStringFromObject(format, params_obj)](#module_jaaJSU..$time.toStringFromObject) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String) ℗
        * [.getFormatObject(format_string)](#module_jaaJSU..$time.getFormatObject) ⇒ [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) ℗
        * [.toDate(date_array)](#module_jaaJSU..$time.toDate) ⇒ <code>Date</code>
        * [.toLocaleString([format_object_name], [toLocaleStringOptions])](#module_jaaJSU..$time.toLocaleString) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
        * [.toString([format], [toLocaleStringOptions])](#module_jaaJSU..$time.toString) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
        * [.getTimeZone(date, parameters)](#module_jaaJSU..$time.getTimeZone) ⇒ <code>String</code>
        * [.getCurrentTimeZone(parameters)](#module_jaaJSU..$time.getCurrentTimeZone) ⇒ <code>String</code>
        * [.modify(mod_obj)](#module_jaaJSU..$time.modify) ⇒ [<code>function\_DateArray2DateArray</code>](#module_jaaJSU..$time..function_DateArray2DateArray)
        * [.modifyAdditions(operation, value, dateObject)](#module_jaaJSU..$time.modifyAdditions) ⇒ <code>Date</code> ℗
        * [.double(time)](#module_jaaJSU..$time.double) ⇒ <code>String</code>
        * [.daysInMonth(month, [year])](#module_jaaJSU..$time.daysInMonth) ⇒ <code>Number</code>
        * [.getDaysInMonth([date_array])](#module_jaaJSU..$time.getDaysInMonth) ⇒ <code>Number</code>
        * [.getMonthName(n, [l])](#module_jaaJSU..$time.getMonthName) ⇒ <code>String</code>
        * [.getOrdinalSuffix(n)](#module_jaaJSU..$time.getOrdinalSuffix) ⇒ <code>String</code>
        * [.getTimeStamp([time])](#module_jaaJSU..$time.getTimeStamp) ⇒ <code>String</code>
        * [.getDateStamp([time])](#module_jaaJSU..$time.getDateStamp) ⇒ <code>String</code>
    * _inner_
        * _types descriptions_
            * [~function_DateArray2String(date_array)](#module_jaaJSU..$time..function_DateArray2String) ⇒ <code>String</code>
            * [~function_Date2Date(date_instance)](#module_jaaJSU..$time..function_Date2Date) ⇒ <code>Date</code>
            * [~function_Date2Number(date_instance)](#module_jaaJSU..$time..function_Date2Number) ⇒ <code>Number</code>
            * [~function_DateArray2DateArray(date_array)](#module_jaaJSU..$time..function_DateArray2DateArray) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
            * [~DateArray](#module_jaaJSU..$time..DateArray) : <code>Array</code>
            * [~toLocaleStringOptions](#module_jaaJSU..$time..toLocaleStringOptions) : <code>Object</code>
            * [~ArrayOfOperation](#module_jaaJSU..$time..ArrayOfOperation) : <code>Array</code>


* * *

<a name="module_jaaJSU..$time._"></a>

#### $time.\_
>Alias for `undefined` which can be used to trigger default value of argument.

**Kind**: static property of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time._" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3631" title="jaaJSU.js:3631"><small>(defined@3631)</small></a>  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| _ | <code>Undefined</code> | 

**Example**  
```js
test($time._)==="A"; function test(a= "A"){ return a; }
```

* * *

<a name="module_jaaJSU..$time.format_objects"></a>

#### $time.format\_objects : <code>object</code> ℗
>Internal object holding predefined formating arguments for [toLocaleString](#module_jaaJSU..$time.toLocaleString).

**Kind**: static namespace of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.format_objects" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2413" title="jaaJSU.js:2413"><small>(defined@2413)</small></a>  
**Access**: private  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| time | <code>Object</code> | shows combination of 2-digits hour and minutes |
| time_seconds | <code>Object</code> | shows combination of `time` and seconds |
| date | <code>Object</code> | shows combination of 2-digits day, month and full year |
| date_time | <code>Object</code> | shows combination of `time` and `date` |
| date_time_seconds | <code>Object</code> | shows combination of `date_time` and `seconds` |

**Example**  
```js
format_objects.time==={ hour: "2-digit", minute: "2-digit" }
```

* * *

<a name="module_jaaJSU..$time.format_arrays"></a>

#### $time.format\_arrays : <code>object</code> ℗
>Internal object holding predefined formating arguments for [getFormatObject](#module_jaaJSU..$time.getFormatObject).

**Kind**: static namespace of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.format_arrays" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2437" title="jaaJSU.js:2437"><small>(defined@2437)</small></a>  
**Access**: private  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| SQL_DATE | [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) | Generate format of **"YYYY-MM-DD"** |
| SQL | [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) | Generate format of **"YYYY-MM-DD HH:mm:ss"** |
| SQL_TIME | [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) | Generate format of **"HH:mm:ss"** |

**Example**  
```js
format_arrays.YYYYMMDD=== [ ["year", "numeric"], [ "text", "-" ], ["month", "2-digit"], [ "text", "-" ], ["day", "2-digit"] ]
```

* * *

<a name="module_jaaJSU..$time.Date"></a>

#### $time.Date : <code>object</code>
**Kind**: static namespace of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.Date" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3639" title="jaaJSU.js:3639"><small>(defined@3639)</small></a>  
**Read only**: true  

* [.Date](#module_jaaJSU..$time.Date) : <code>object</code>
    * [.addDays(days_num)](#module_jaaJSU..$time.Date.addDays) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
    * [.addMonths(months_num)](#module_jaaJSU..$time.Date.addMonths) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
    * [.getWeekDay([type], [toLocaleStringOptions])](#module_jaaJSU..$time.Date.getWeekDay) ⇒ [<code>function\_Date2Number</code>](#module_jaaJSU..$time..function_Date2Number)
    * [.getWeekNumber(date_instance)](#module_jaaJSU..$time.Date.getWeekNumber) ⇒ <code>Number</code>


* * *

<a name="module_jaaJSU..$time.Date.addDays"></a>

##### Date.addDays(days_num) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
>This modify given **Date** instance (add days).

**Kind**: static method of [<code>Date</code>](#module_jaaJSU..$time.Date) <a name="module_jaaJSU..$time.Date.addDays" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3435" title="jaaJSU.js:3435"><small>(defined@3435)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| days_num | <code>Number</code> | How many days to add to `date_instance` |


* * *

<a name="module_jaaJSU..$time.Date.addMonths"></a>

##### Date.addMonths(months_num) ⇒ [<code>function\_Date2Date</code>](#module_jaaJSU..$time..function_Date2Date)
>This modify given **Date** instance (add months).

**Kind**: static method of [<code>Date</code>](#module_jaaJSU..$time.Date) <a name="module_jaaJSU..$time.Date.addMonths" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3446" title="jaaJSU.js:3446"><small>(defined@3446)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| months_num | <code>Number</code> | How many months to add to `date_instance` |


* * *

<a name="module_jaaJSU..$time.Date.getWeekDay"></a>

##### Date.getWeekDay([type], [toLocaleStringOptions]) ⇒ [<code>function\_Date2Number</code>](#module_jaaJSU..$time..function_Date2Number)
**Kind**: static method of [<code>Date</code>](#module_jaaJSU..$time.Date) <a name="module_jaaJSU..$time.Date.getWeekDay" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3457" title="jaaJSU.js:3457"><small>(defined@3457)</small></a>  
**Returns**: [<code>function\_Date2Number</code>](#module_jaaJSU..$time..function_Date2Number) - If `type="numeric"`, it returns **0 (Su) - 6 (Sa)**, else it returns **name of week day**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>String</code> | <code>&quot;numeric&quot;</code> | Show week numebr by default or se `weekday` in **MDN** see [toLocaleStringOptions](#module_jaaJSU..$time..toLocaleStringOptions) |
| [toLocaleStringOptions] | [<code>toLocaleStringOptions</code>](#module_jaaJSU..$time..toLocaleStringOptions) |  | Key `declension` is redutant for this function |


* * *

<a name="module_jaaJSU..$time.Date.getWeekNumber"></a>

##### Date.getWeekNumber(date_instance) ⇒ <code>Number</code>
>This return ISO number of week.

**Kind**: static method of [<code>Date</code>](#module_jaaJSU..$time.Date) <a name="module_jaaJSU..$time.Date.getWeekNumber" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3468" title="jaaJSU.js:3468"><small>(defined@3468)</small></a>  
**Returns**: <code>Number</code> - In fact, it calculates no. of thursdays from this week to the first one (January 4 is always in week 1.)  
**Access**: public  

| Param | Type |
| --- | --- |
| date_instance | <code>Date</code> | 


* * *

<a name="module_jaaJSU..$time.formats"></a>

#### $time.formats : <code>object</code>
>Public name of [format_arrays](#module_jaaJSU..$time.format_arrays).

**Kind**: static namespace of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.formats" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3652" title="jaaJSU.js:3652"><small>(defined@3652)</small></a>  
**Read only**: true  

* * *

<a name="module_jaaJSU..$time.ordinal_numbers"></a>

#### $time.ordinal\_numbers ℗
>Internal helper array for [getOrdinalSuffix](#module_jaaJSU..$time.getOrdinalSuffix).

**Kind**: static constant of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.ordinal_numbers" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2465" title="jaaJSU.js:2465"><small>(defined@2465)</small></a>  
**Access**: private  
**Read only**: true  
**Properties**

| Name | Type |
| --- | --- |
| ordinal_numbers | <code>Array</code> | 


* * *

<a name="module_jaaJSU..$time.ary_ianna_time_zones"></a>

#### $time.ary\_ianna\_time\_zones ℗
>This array stores all time zones names (eg. 'Europe/Andorra') supported by `{ timeZone: ... }` in second argument of `Date.prototype.toLocaleString`.

Original from [stackoverflow.com/a/54500197](https://stackoverflow.com/a/54500197).

**Kind**: static constant of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.ary_ianna_time_zones" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2504" title="jaaJSU.js:2504"><small>(defined@2504)</small></a>  
**Access**: private  
**Read only**: true  
**Properties**

| Name | Type |
| --- | --- |
| ary_ianna_time_zones | <code>Array</code> | 


* * *

<a name="module_jaaJSU..$time.ary_ianna_time_offsets"></a>

#### $time.ary\_ianna\_time\_offsets ℗
>This object stores offsets in `ary_ianna_time_zones` (keys) and one corresponding index.

So for exmple, `ary_ianna_time_offsets["CET"]` is equal to **284** which is index of `ary_ianna_time_zones[284]==='Europe/Prague'` (in winter "+01:00" and in summer "+02:00").

Next example is `ary_ianna_time_offsets["-01:00"]` is equal to **238** which is index of `ary_ianna_time_zones[238]==='Atlantic/Cape_Verde'` (always "-01:00").

**IMPORTANT NOTE:** BST, EET, WET hasn't been validated! … idea is to behave the same way like CET

**Kind**: static constant of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.ary_ianna_time_offsets" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2864" title="jaaJSU.js:2864"><small>(defined@2864)</small></a>  
**Access**: private  
**Properties**

| Name | Type |
| --- | --- |
| ary_ianna_time_offsets | <code>Object</code> | 


* * *

<a name="module_jaaJSU..$time.isDateString"></a>

#### $time.isDateString(date_string) ⇒ <code>Boolean</code> ℗
>Very simple test for 'YYYY-MM-DD' pattern. Returns `true` if `date_string` includes **`-`**.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.isDateString" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2467" title="jaaJSU.js:2467"><small>(defined@2467)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| date_string | <code>String</code> \| <code>String</code> | 

**Example**  
```js
isDateString("2019-05-06");//= true
isDateString("06/05/2019");//= false !!!!
```

* * *

<a name="module_jaaJSU..$time.isTimeString"></a>

#### $time.isTimeString(date_string) ⇒ <code>Boolean</code> ℗
>Very simple test for 'T...' pattern. Returns `true` if `date_string` includes **`T`**.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.isTimeString" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2479" title="jaaJSU.js:2479"><small>(defined@2479)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| date_string | <code>String</code> \| <code>String</code> | 

**Example**  
```js
isTimeString("T12:00:00");//= true
isTimeString("12:00:00");//= false !!!
isTimeString("Twrong");//= true !!!!
```

* * *

<a name="module_jaaJSU..$time.fromDate"></a>

#### $time.fromDate(date_instance) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
>Function generates `DateArray` from instance of `Date`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.fromDate" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2908" title="jaaJSU.js:2908"><small>(defined@2908)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| date_instance | <code>Date</code> | instance of `Date` class |


* * *

<a name="module_jaaJSU..$time.fromDateArguments"></a>

#### $time.fromDateArguments(...args) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
>Function generates `DateArray` from arguments to initialize `Date`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.fromDateArguments" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2919" title="jaaJSU.js:2919"><small>(defined@2919)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Mixed</code> | parameters for initialize `Date` class |


* * *

<a name="module_jaaJSU..$time.fromNow"></a>

#### $time.fromNow() ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
>Function generates `DateArray` from current date and time.

**Warning:** Internally uses `toISOString` method so result is always converted to "+00:00": `p($time.fromNow, $time.setTimeZone("+02:00"), $time.toString())()` (`p` is some pipe function) — this returns "2019-07-10T16:48:43+02:00" instead of "2019-07-10T18:48:43+02:00" (current time) … the flow is "2019-07-10T18:48:43+02:00"-`fromNow`->"2019-07-10T16:48:43Z"-`setTimeZone`->"2019-07-10T16:48:43+02:00".

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.fromNow" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2930" title="jaaJSU.js:2930"><small>(defined@2930)</small></a>  
**Access**: public  

* * *

<a name="module_jaaJSU..$time.fromString"></a>

#### $time.fromString([timestamp_string], [timezone]) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
>Function generates `DateArray` from passed string.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.fromString" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2942" title="jaaJSU.js:2942"><small>(defined@2942)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timestamp_string] | <code>String</code> |  | If `undefined` returns result of [fromNow](#module_jaaJSU..$time.fromNow), else it is used [toDateArray](#module_jaaJSU..$time.toDateArray) for parsing. |
| [timezone] | <code>String</code> | <code>internal_zone</code> | Default timezone — uses if is not setted in `timestamp_string` |


* * *

<a name="module_jaaJSU..$time.toDateArray"></a>

#### $time.toDateArray(timestamp_string) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) ℗
>Function generates array in a form `[ date, time, time_zone ]` from 'ISO' like string.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.toDateArray" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2975" title="jaaJSU.js:2975"><small>(defined@2975)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| timestamp_string | <code>String</code> | <br/>- Supported forms are combinations of date ("YYYY-MM-DD", "DD/MM/YYYY"), time ("HH:mm:ss", "HH:mm") and timezone ("CET", "+01:00", "-02:00", ...)  <br/>- Typically: "2019-06-02 12:35:45 +01:00", "2019-06-02T12:35:45+01:00", "12:35:45+01:00 2019-06-02", ... |


* * *

<a name="module_jaaJSU..$time.toStringFromObject"></a>

#### $time.toStringFromObject(format, params_obj) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String) ℗
>Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.toStringFromObject" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3049" title="jaaJSU.js:3049"><small>(defined@3049)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| format | [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) | 
| params_obj | [<code>toLocaleStringOptions</code>](#module_jaaJSU..$time..toLocaleStringOptions) | 

**Example**  
```js
$time.toStringFromObject([ ["day", "2-digit"], [ "text", "/" ], ["month", "2-digit"], [ "text", "/" ], ["year", "numeric"] ],{ locale: "en-GB" })($time.fromNow());//= "05/06/2019"
```

* * *

<a name="module_jaaJSU..$time.getFormatObject"></a>

#### $time.getFormatObject(format_string) ⇒ [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) ℗
>Generates multidimensional array for formatting (eg. "YYYY"=> `[ [ "year", "numeric" ] ]`).

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getFormatObject" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3097" title="jaaJSU.js:3097"><small>(defined@3097)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| format_string | <code>String</code> | supports: <br/>- "YYYY", "YY", <br/>- "MM", "MMM", "MMMM", <br/>- "dddd" (weekday - Monday), "ddd" (shorter weekday - Mon), "dd" (Mo), "d" (0===Sun <> 6===Sat), <br/>- "DD", "D", "Do", <br/>- "HH", "H", <br/>- "mm", "m", <br/>- "SS", "S", <br/>- "W", "Wo" |


* * *

<a name="module_jaaJSU..$time.toDate"></a>

#### $time.toDate(date_array) ⇒ <code>Date</code>
>Function initializes `Date` from `DateArray`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.toDate" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3232" title="jaaJSU.js:3232"><small>(defined@3232)</small></a>  
**Access**: public  

| Param | Type |
| --- | --- |
| date_array | [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) | 


* * *

<a name="module_jaaJSU..$time.toLocaleString"></a>

#### $time.toLocaleString([format_object_name], [toLocaleStringOptions]) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
>It is wrapper arround [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.toLocaleString" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3247" title="jaaJSU.js:3247"><small>(defined@3247)</small></a>  
**Returns**: [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String) - returns result of [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString);  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format_object_name] | <code>String</code> | <code>&quot;date_time&quot;</code> | name of predefined time/date combinations see [format_objects](#module_jaaJSU..$time.format_objects). |
| [toLocaleStringOptions] | [<code>toLocaleStringOptions</code>](#module_jaaJSU..$time..toLocaleStringOptions) |  |  |


* * *

<a name="module_jaaJSU..$time.toString"></a>

#### $time.toString([format], [toLocaleStringOptions]) ⇒ [<code>function\_DateArray2String</code>](#module_jaaJSU..$time..function_DateArray2String)
>Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.toString" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3307" title="jaaJSU.js:3307"><small>(defined@3307)</small></a>  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> \| [<code>Array.&lt;ArrayOfOperation&gt;</code>](#module_jaaJSU..$time..ArrayOfOperation) | <code>$time.formats.SQL</code> | <br/>- Placeholder for replace/generate final string (eg. "MM"===two digits month) — see [getFormatObject](#module_jaaJSU..$time.getFormatObject). <br/>- Or lists of predefined formats — see [formats](#module_jaaJSU..$time.formats). |
| [toLocaleStringOptions] | [<code>toLocaleStringOptions</code>](#module_jaaJSU..$time..toLocaleStringOptions) |  |  |

**Example**  
```js
$time.toString("DD/MM/YYYY HH:mm:SS",{ locale: "en-GB" })($time.fromNow());//= "05/06/2019 09:32:20"
$time.toString($time.formats.SQL)($time.fromNow());//= "2019-06-05 09:32:20"
```

* * *

<a name="module_jaaJSU..$time.getTimeZone"></a>

#### $time.getTimeZone(date, parameters) ⇒ <code>String</code>
**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getTimeZone" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3338" title="jaaJSU.js:3338"><small>(defined@3338)</small></a>  
**Returns**: <code>String</code> - Timezone name/identificator (with offset)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) |  |  |
| parameters | <code>Object</code> |  |  |
| [parameters.locale] | <code>String</code> | <code>internal_locale</code> |  |
| [parameters.description] | <code>String</code> | <code>&quot;long&quot;</code> | The representation of the time zone name. Possible values are: <br/>- `"none"` skip description <br/>- `"long"` (e.g., `British Summer Time`) <br/>- `"short"` (e.g., `GMT+1`) |
| [parameters.offset] | <code>String</code> | <code>false</code> | show offset part: `"UTC+01:00 (…)"` or `"UTC+01:00"` (if `description="none"`) |


* * *

<a name="module_jaaJSU..$time.getCurrentTimeZone"></a>

#### $time.getCurrentTimeZone(parameters) ⇒ <code>String</code>
**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getCurrentTimeZone" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3360" title="jaaJSU.js:3360"><small>(defined@3360)</small></a>  
**Returns**: <code>String</code> - Timezone name/identificator (with offset) for current timezone  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>Object</code> |  |  |
| [parameters.locale] | <code>String</code> | <code>internal_locale</code> |  |
| [parameters.description] | <code>String</code> | <code>&quot;long&quot;</code> | The representation of the time zone name. Possible values are: <br/>- `"none"` skip description <br/>- `"long"` (e.g., `British Summer Time`) <br/>- `"short"` (e.g., `GMT+1`) <br/>- `"ianna"`/`"IANNA"` (e.g. `Europe/Prague`): `locale` has no effect for this |
| [parameters.offset] | <code>String</code> | <code>false</code> | show offset part: `"UTC+01:00 (…)"` or `"UTC+01:00"` (if `description="none"`) |


* * *

<a name="module_jaaJSU..$time.modify"></a>

#### $time.modify(mod_obj) ⇒ [<code>function\_DateArray2DateArray</code>](#module_jaaJSU..$time..function_DateArray2DateArray)
>Curried method, first invocation sets operations (i. e. `{ addDay: 1 }`) and returns `function_DateArray2DateArray`.

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.modify" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3495" title="jaaJSU.js:3495"><small>(defined@3495)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| mod_obj | <code>Object</code> | &nbsp; <br/>- object literal representing requested operations <br/>- use name convention like [setters for `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Setter) (only one argument is allowed) <br/>- supports also *add\** commands with the same notation ("setMonth" => "addMonth") <br/>- **IMPORTANT NOTE:** There are three behaviour changes <br/>&nbsp;&nbsp;&nbsp;&nbsp;- "setMonth" is indexed from 1 (instead of 0) <br/>&nbsp;&nbsp;&nbsp;&nbsp;- for "setDate" there is alias "setDay" <br/>&nbsp;&nbsp;&nbsp;&nbsp;- for "addDate" there is alias "addDays" <br/>- Some operations: **"\*Date"** (or **"setDay"**, **"addDays"**), **"\*Month"**, **"\*FullYear"**, **"\*Hours"**, **"\*Minutes"**, **"\*Seconds"** |


* * *

<a name="module_jaaJSU..$time.modifyAdditions"></a>

#### $time.modifyAdditions(operation, value, dateObject) ⇒ <code>Date</code> ℗
>Helper method for invoking "add*" operations in [`modify`](#methods_modify).

In general `d.set...(d.get...+${value})` (where `d` is instance of `Date`).

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.modifyAdditions" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3525" title="jaaJSU.js:3525"><small>(defined@3525)</small></a>  
**Returns**: <code>Date</code> - returns `dateObject`  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| operation | <code>String</code> | e.g. "addMonth" |
| value | <code>Number</code> | mainly argument (number) for |
| dateObject | <code>Date</code> | instance of `Date` |


* * *

<a name="module_jaaJSU..$time.double"></a>

#### $time.double(time) ⇒ <code>String</code>
>Function adds leading zero to the `time`. [It can be replaced in future: see `padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.double" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3546" title="jaaJSU.js:3546"><small>(defined@3546)</small></a>  
**Returns**: <code>String</code> - * 00, 01, 02, ..., 09, 10, ..., 100, ...  
**Access**: public  

| Param | Type |
| --- | --- |
| time | <code>Number</code> \| <code>String</code> | 


* * *

<a name="module_jaaJSU..$time.daysInMonth"></a>

#### $time.daysInMonth(month, [year]) ⇒ <code>Number</code>
>Returns number of days in given month (and year)

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.daysInMonth" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3559" title="jaaJSU.js:3559"><small>(defined@3559)</small></a>  
**Returns**: <code>Number</code> - total of days  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| month | <code>String</code> \| <code>Number</code> |  | ISO number of month (eg 01 or 1 for January) |
| [year] | <code>String</code> \| <code>Number</code> | <code>&quot;&gt;&gt;current year&lt;&lt;&quot;</code> | ISO nimber of year (eg. 2019) |


* * *

<a name="module_jaaJSU..$time.getDaysInMonth"></a>

#### $time.getDaysInMonth([date_array]) ⇒ <code>Number</code>
>Returns number of days in given month

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getDaysInMonth" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3571" title="jaaJSU.js:3571"><small>(defined@3571)</small></a>  
**Returns**: <code>Number</code> - total of days  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| [date_array] | <code>module:jaaJSU~$time.types~DateArray</code> | <code>&quot;&gt;&gt;current year&lt;&lt;&quot;</code> | 


* * *

<a name="module_jaaJSU..$time.getMonthName"></a>

#### $time.getMonthName(n, [l]) ⇒ <code>String</code>
**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getMonthName" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3583" title="jaaJSU.js:3583"><small>(defined@3583)</small></a>  
**Returns**: <code>String</code> - English month name  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | Month number (typically [1-12]); Works cyclically `13===1, ...` |
| [l] | <code>Number</code> \| <code>Boolean</code> | Length of output Month name |

**Example**  
```js
console.log($time.getMonthName(5));//"May"
console.log($time.getMonthName(24, 4));//"Dece"
```

* * *

<a name="module_jaaJSU..$time.getOrdinalSuffix"></a>

#### $time.getOrdinalSuffix(n) ⇒ <code>String</code>
>See [ordinal_numbers](#module_jaaJSU..$time.ordinal_numbers).

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getOrdinalSuffix" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3605" title="jaaJSU.js:3605"><small>(defined@3605)</small></a>  
**Returns**: <code>String</code> - `n`+English suffix  
**Access**: public  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 

**Example**  
```js
console.log($time.getOrdinalSuffix(1));//"1st"
```

* * *

<a name="module_jaaJSU..$time.getTimeStamp"></a>

#### $time.getTimeStamp([time]) ⇒ <code>String</code>
>Function returns timestamp in the form of "YYYY-MM-DD HH:MM:SS".

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getTimeStamp" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3664" title="jaaJSU.js:3664"><small>(defined@3664)</small></a>  
**Returns**: <code>String</code> - Timestamp  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>Number</code> \| <code>Boolean</code> | Uses as argument for `new Date(*)` |


* * *

<a name="module_jaaJSU..$time.getDateStamp"></a>

#### $time.getDateStamp([time]) ⇒ <code>String</code>
>Function returns timestamp in the form of "YYYY-MM-DD".

**Kind**: static method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time.getDateStamp" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3673" title="jaaJSU.js:3673"><small>(defined@3673)</small></a>  
**Returns**: <code>String</code> - Datestamp  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>Number</code> \| <code>Boolean</code> | Uses as argument for `new Date(*)` |


* * *

<a name="module_jaaJSU..$time..function_DateArray2String"></a>

#### $time~function\_DateArray2String(date_array) ⇒ <code>String</code>
**Kind**: inner method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..function_DateArray2String" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3299" title="jaaJSU.js:3299"><small>(defined@3299)</small></a>  
**Category**: types descriptions  

| Param | Type |
| --- | --- |
| date_array | [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) | 


* * *

<a name="module_jaaJSU..$time..function_Date2Date"></a>

#### $time~function\_Date2Date(date_instance) ⇒ <code>Date</code>
**Kind**: inner method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..function_Date2Date" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3419" title="jaaJSU.js:3419"><small>(defined@3419)</small></a>  
**Category**: types descriptions  

| Param | Type |
| --- | --- |
| date_instance | <code>Date</code> | 


* * *

<a name="module_jaaJSU..$time..function_Date2Number"></a>

#### $time~function\_Date2Number(date_instance) ⇒ <code>Number</code>
**Kind**: inner method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..function_Date2Number" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3427" title="jaaJSU.js:3427"><small>(defined@3427)</small></a>  
**Category**: types descriptions  

| Param | Type |
| --- | --- |
| date_instance | <code>Date</code> | 


* * *

<a name="module_jaaJSU..$time..function_DateArray2DateArray"></a>

#### $time~function\_DateArray2DateArray(date_array) ⇒ [<code>DateArray</code>](#module_jaaJSU..$time..DateArray)
**Kind**: inner method of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..function_DateArray2DateArray" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3486" title="jaaJSU.js:3486"><small>(defined@3486)</small></a>  
**Category**: types descriptions  

| Param | Type |
| --- | --- |
| date_array | [<code>DateArray</code>](#module_jaaJSU..$time..DateArray) | 


* * *

<a name="module_jaaJSU..$time..DateArray"></a>

#### $time~DateArray : <code>Array</code>
>This is in fact output of [toDateArray](#module_jaaJSU..$time.toDateArray).

**Kind**: inner typedef of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..DateArray" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2965" title="jaaJSU.js:2965"><small>(defined@2965)</small></a>  
**Category**: types descriptions  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>String</code> | <code>&quot;&quot;</code> | is always in form of "YYYY-MM-DD" or "" |
| [time] | <code>String</code> | <code>&quot;&quot;</code> | is always in form of "HH:mm:SS" or "HH:mm:00" or "" |
| [time_zone] | <code>String</code> | <code>&quot;&quot;</code> | is always in form of "[+-]\d\d:\d\d" or "CET" or "" |


* * *

<a name="module_jaaJSU..$time..toLocaleStringOptions"></a>

#### $time~toLocaleStringOptions : <code>Object</code>
>It is in fact argument for `options` in [`Date.prototype.toLocaleString` Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#Parameters).

**Kind**: inner typedef of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..toLocaleStringOptions" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3039" title="jaaJSU.js:3039"><small>(defined@3039)</small></a>  
**Category**: types descriptions  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [locale] | <code>String</code> | <code>internal_locale</code> | In which language/national format generate final string |
| [timeZone] | <code>String</code> | <code>internal_zone</code> | Time zone name from [`ary_ianna_time_zones`](#props_ary_ianna_time_zones). |
| [declension] | <code>Boolean</code> | <code>true</code> | Needed for some languages — for example in Czech: "10. července" (`declension=true`), or "10. červenec" (`declension=false`) |


* * *

<a name="module_jaaJSU..$time..ArrayOfOperation"></a>

#### $time~ArrayOfOperation : <code>Array</code>
>This holds information about how show one piece of String output typically for [toString](#module_jaaJSU..$time.toString).

Predefined values can be found at [format_arrays](#module_jaaJSU..$time.format_arrays).

**Kind**: inner typedef of [<code>$time</code>](#module_jaaJSU..$time) <a name="module_jaaJSU..$time..ArrayOfOperation" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3084" title="jaaJSU.js:3084"><small>(defined@3084)</small></a>  
**Category**: types descriptions  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| operation | <code>String</code> | In fact names of keys in [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) (i. e. "weekday", "month") or "text". |
| argument | <code>String</code> | In fact value of given key in [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) (i. e. "2-digit", "numeric"). |
| params | <code>String</code> | Some additional information/modifications like "two_letters", "ordinal_number", …. |


* * *

<a name="module_jaaJSU..function_filterCallback"></a>

### jaaJSU~function\_filterCallback(i_value, i) ⇒ <code>Boolean</code>
>This kind of function is typically used in `Array.prototype.filter`.

**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..function_filterCallback" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L12" title="jaaJSU.js:12"><small>(defined@12)</small></a>  
**Category**: types description  

| Param | Type | Description |
| --- | --- | --- |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="module_jaaJSU..function_reduceCallback"></a>

### jaaJSU~function\_reduceCallback(accumulator, i_value, i) ⇒ <code>Mixed</code>
>This kind of function is typically used in `Array.prototype.reduce`.

**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..function_reduceCallback" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L20" title="jaaJSU.js:20"><small>(defined@20)</small></a>  
**Returns**: <code>Mixed</code> - accumulator  
**Category**: types description  

| Param | Type | Description |
| --- | --- | --- |
| accumulator | <code>Mixed</code> |  |
| i_value | <code>Mixed</code> | Nth value of array. |
| i | <code>Number</code> | Nth key of array. |


* * *

<a name="module_jaaJSU..IterableCallback"></a>

### jaaJSU~IterableCallback(IterableArrayObject) ⇒ <code>Mixed</code> \| <code>Undefined</code>
**Kind**: inner method of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..IterableCallback" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L37" title="jaaJSU.js:37"><small>(defined@37)</small></a>  
**Returns**: <code>Mixed</code> \| <code>Undefined</code> - `share` key of [IterableArrayObject](IterableArrayObject).  
**Category**: types description  

| Param | Type |
| --- | --- |
| IterableArrayObject | [<code>IterableArrayObject</code>](#module_jaaJSU..IterableArrayObject) | 


* * *

<a name="module_jaaJSU..IterableArrayObject"></a>

### jaaJSU~IterableArrayObject : <code>Object</code>
**Kind**: inner typedef of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..IterableArrayObject" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L29" title="jaaJSU.js:29"><small>(defined@29)</small></a>  
**Category**: types description  
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
>Exported name of [$array](#module_jaaJSU..$array) namespace.

**Kind**: global namespace <a name="$array" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L200" title="jaaJSU.js:200"><small>(defined@200)</small></a>  

* * *

<a name="$async"></a>

## $async : <code>object</code>
>Exported name of [$async](#module_jaaJSU..$async) namespace.

**Kind**: global namespace <a name="$async" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L346" title="jaaJSU.js:346"><small>(defined@346)</small></a>  

* * *

<a name="$dom"></a>

## $dom : <code>object</code>
>Exported name of [$dom](#module_jaaJSU..$dom) namespace.

**Kind**: global namespace <a name="$dom" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1357" title="jaaJSU.js:1357"><small>(defined@1357)</small></a>  

* * *

<a name="$function"></a>

## $function : <code>object</code>
>Exported name of [$function](#module_jaaJSU..$function) namespace.

**Kind**: global namespace <a name="$function" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1665" title="jaaJSU.js:1665"><small>(defined@1665)</small></a>  

* * *

<a name="$object"></a>

## $object : <code>object</code>
>Exported name of [$object](#module_jaaJSU..$object) namespace.

**Kind**: global namespace <a name="$object" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L1850" title="jaaJSU.js:1850"><small>(defined@1850)</small></a>  

* * *

<a name="$optimiziers"></a>

## $optimiziers : <code>object</code>
>Exported name of [$optimizier](#module_jaaJSU..$optimizier) namespace.

**Kind**: global namespace <a name="$optimiziers" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2114" title="jaaJSU.js:2114"><small>(defined@2114)</small></a>  

* * *

<a name="$string"></a>

## $string : <code>object</code>
>Exported name of [$string](#module_jaaJSU..$string) namespace.

**Kind**: global namespace <a name="$string" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L2396" title="jaaJSU.js:2396"><small>(defined@2396)</small></a>  

* * *

<a name="$time"></a>

## $time : <code>object</code>
>Exported name of [$time](#module_jaaJSU..$time) namespace.

**Kind**: global namespace <a name="$time" href="https://github.com/jaandrle/jaaJSU/blob/master/undefined/jaaJSU.js#L3684" title="jaaJSU.js:3684"><small>(defined@3684)</small></a>  

* * *

