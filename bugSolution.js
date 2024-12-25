```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Initial'); // Added another state variable

  useEffect(() => {
    console.log('Count:', count);
    console.log('Name:', name);
  }, [count, name]); // Added 'name' to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Name: {name}</p>
      <button onClick={() => setName('Updated')}>Update Name</button>
    </div>
  );
}

export default MyComponent;
```