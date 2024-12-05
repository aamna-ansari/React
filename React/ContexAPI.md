# Context API
The Context API in React is a feature that allows you to share data (state) across multiple components in your application without passing props down manually at every level of the component tree. It's particularly useful for managing global state or data that needs to be accessed by many components.

# Why Use Context API?
In React, data is passed from parent to child components using props. When the same data is needed in deeply nested components, you end up with "prop drilling", where props are passed through multiple intermediate components unnecessarily.

The Context API solves this problem by providing a way to:

- **Create a shared context:** Define global data.
- **Provide the context:** Supply data to components.
- **Consume the context:** Access the data in any child component.

# Create the Context:
```ts
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
```
# Provide the Context:
```ts
const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Parent />
    </ThemeContext.Provider>
  );
};
const Parent = () => <Child />;
```

# Consume the Context: Using useContext:
```ts
import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};
```