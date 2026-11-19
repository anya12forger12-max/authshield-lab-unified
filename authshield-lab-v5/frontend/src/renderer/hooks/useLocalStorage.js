import { useState, useCallback, useEffect } from 'react';
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window === 'undefined')
                return initialValue;
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch {
            return initialValue;
        }
    });
    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            window.dispatchEvent(new StorageEvent('storage', { key }));
        }
        catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);
    const removeValue = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
            window.dispatchEvent(new StorageEvent('storage', { key }));
        }
        catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key !== key)
                return;
            try {
                const newValue = e.newValue ? JSON.parse(e.newValue) : initialValue;
                setStoredValue(newValue);
            }
            catch {
                setStoredValue(initialValue);
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key, initialValue]);
    return [storedValue, setValue, removeValue];
}
//# sourceMappingURL=useLocalStorage.js.map