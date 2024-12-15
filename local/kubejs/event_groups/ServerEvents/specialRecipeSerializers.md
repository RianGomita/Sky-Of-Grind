# ServerEvents.specialRecipeSerializers

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [SpecialRecipeSerializerManager](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/recipe/special/SpecialRecipeSerializerManager.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| INSTANCE | SpecialRecipeSerializerManager | ✔ |
| EVENT | Event<Runnable> | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| isSpecial | Recipe<?> |  | boolean | ✘ |
| ignoreSpecialFlag | ResourceLocation |  | void | ✘ |
| addSpecialFlag | ResourceLocation |  | void | ✘ |
| ignoreSpecialMod | String |  | void | ✘ |
| addSpecialMod | String |  | void | ✘ |
| reset |  |  | void | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
ServerEvents.specialRecipeSerializers((event) => {
	// This space (un)intentionally left blank
});
```
