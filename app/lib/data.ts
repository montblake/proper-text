import { unstable_noStore as noStore } from 'next/cache';

export async function fetchChapters() {
    noStore();
    
    try {
        const res = await fetch('http://localhost:8000/chapters');
        const json = await res.json();
        return json;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch chapters.');
    }
}

