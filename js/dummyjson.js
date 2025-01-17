export async function fetchDummyJSON(){
    try {
        const response = await fetch('https://dummyjson.com/products');

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();
        
        return data.products;
    }
    catch (error) { 
        console.error(error);
    }
}