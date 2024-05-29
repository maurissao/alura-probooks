import React, { useEffect, useState } from 'react';

function useCartCount (initValue = 0) {
    const [cartCount, setCartCount] = useState(initValue);
    const count = () => setCartCount(prevState => prevState + 1);
    return [cartCount, count];
}