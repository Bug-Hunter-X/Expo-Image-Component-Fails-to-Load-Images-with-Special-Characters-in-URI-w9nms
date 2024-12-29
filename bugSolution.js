The solution is to URL encode the URI before passing it to the `Image` component. This ensures that special characters are handled correctly.  Here's an example using the `encodeURIComponent` function:

```javascript
import { Image } from 'expo-image';

const uri = 'https://example.com/image+with+plus.jpg';
const encodedUri = encodeURIComponent(uri);

<Image source={{ uri: encodedUri }} style={{ width: 200, height: 200 }} />
```
This will correctly load the image even with the special characters.