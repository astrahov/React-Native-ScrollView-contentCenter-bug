# ScrollView centerContent bug

## Variants

### Variant 1 - centerContent

```
const ScrollViewScreen1 = () => {
  <ScrollView
    centerContent={true}
    key={'key1'}
    ...
  >
    ...
  </ScrollView>
}

const ScrollViewScreen2 = () => {
  <ScrollView
    centerContent={false}
    key={'key2'}
    ...
  >
    ...
  </ScrollView>
}
```

### Variant 2 - contentContainerStyle

```
const ScrollViewScreen1 = () => {
  <ScrollView
    contentContainerStyle={{
      justifyContent: 'center',
      flex: 1,
    }}
    key={'key1'}
    ...
  >
    ...
  </ScrollView>
}

const ScrollViewScreen2 = () => {
  <ScrollView
    contentContainerStyle={{
      flex: 1,
    }}
    key={'key2'}
    ...
  >
    ...
  </ScrollView>
}
```

## Test

### Parameters

#### Root Component

```
// 1 - without React Navigation (only React Native)
// 2 - with React Navigation
const EXAMPLE_ROOT = 1;
```

#### Variant

```
// 1 - with centerContent (Variant 1)
// 2 - with contentContainerStyle (Variant 2)
const EXAMPLE_CONTENT = 1;
```

#### Content Size

```
// 1 - Content1 size === Content2 size
// 2 - Content1 size !== Content2 size
const EXAMPLE_CONTENT_SIZE = 1;
```

### Results

#### New Architecture

##### iOS

###### With `centerContent`

| RN version | With React Navigation | Save Content Size | Result  |
|------------|-----------------------|-------------------|---------|
| 0.77.2     | false                 | true              | Error   |
| 0.77.2     | false                 | false             | Success |
| 0.77.2     | true                  | true              | Success |
| 0.77.2     | true                  | false             | Success |
| 0.78.2     | false                 | true              | Error   |
| 0.78.2     | false                 | false             | Error   |
| 0.78.2     | true                  | true              | Error   |
| 0.78.2     | true                  | false             | Error   |
| 0.79.1     | false                 | true              | Error   |
| 0.79.1     | false                 | false             | Error   |
| 0.79.1     | true                  | true              | Error   |
| 0.79.1     | true                  | false             | Error   |

###### With `contentContainerStyle`

| RN version | With React Navigation | Save Content Size | Result  |
|------------|-----------------------|-------------------|---------|
| 0.77.2     | false                 | true              | Success |
| 0.77.2     | false                 | false             | Success |
| 0.77.2     | true                  | true              | Success |
| 0.77.2     | true                  | false             | Success |
| 0.78.2     | false                 | true              | Success |
| 0.78.2     | false                 | false             | Success |
| 0.78.2     | true                  | true              | Success |
| 0.78.2     | true                  | false             | Success |
| 0.79.1     | false                 | true              | Success |
| 0.79.1     | false                 | false             | Success |
| 0.79.1     | true                  | true              | Success |
| 0.79.1     | true                  | false             | Success |

#### Old Architecture

##### iOS

###### With `centerContent`

| RN version | With React Navigation | Save Content Size | Result  |
|------------|-----------------------|-------------------|---------|
| 0.77.2     | false                 | true              | Success |
| 0.77.2     | false                 | false             | Success |
| 0.77.2     | true                  | true              | Success |
| 0.77.2     | true                  | false             | Success |
| 0.78.2     | false                 | true              | Success |
| 0.78.2     | false                 | false             | Success |
| 0.78.2     | true                  | true              | Success |
| 0.78.2     | true                  | false             | Success |
| 0.79.1     | false                 | true              | Success |
| 0.79.1     | false                 | false             | Success |
| 0.79.1     | true                  | true              | Success |
| 0.79.1     | true                  | false             | Success |

###### With `contentContainerStyle`

| RN version | With React Navigation | Save Content Size | Result  |
|------------|-----------------------|-------------------|---------|
| 0.77.2     | false                 | true              | Success |
| 0.77.2     | false                 | false             | Success |
| 0.77.2     | true                  | true              | Success |
| 0.77.2     | true                  | false             | Success |
| 0.78.2     | false                 | true              | Success |
| 0.78.2     | false                 | false             | Success |
| 0.78.2     | true                  | true              | Success |
| 0.78.2     | true                  | false             | Success |
| 0.79.1     | false                 | true              | Success |
| 0.79.1     | false                 | false             | Success |
| 0.79.1     | true                  | true              | Success |
| 0.79.1     | true                  | false             | Success |
