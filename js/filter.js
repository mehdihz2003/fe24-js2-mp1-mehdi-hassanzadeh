export function filterByCategory(products, category) {
    products.filter(product => product.GetCategory() == category);
}

export function filterByPrice(products, maxPrice) {
    products.filter(product => product.GetDiscountPrice() <= maxPrice);
}

export function sortByPriceAsc(products) {
    products.sort((a, b) => a.GetDiscountPrice() - b.GetDiscountPrice());
}

export function sortByPriceDesc(products) {
    products.sort((a, b) => b.GetDiscountPrice() - a.GetDiscountPrice());
}

export function sortByRatingAsc(products) {
    products.sort((a, b) => a.GetRating() - b.GetRating());
}

export function sortByRatingDesc(products) {
    products.sort((a, b) => b.GetRating() - a.GetRating());
}

export function filterAndSort(products, filters = {}, sort = {}) {
    let filteredProducts = products;

    if(filters.category) {
        filteredProducts = filterByCategory(filteredProducts, filters.category);
    }

    if (filters.maxPrice) {
        filteredProducts = filterByPrice(filteredProducts, filters.maxPrice);
    }

    if (sort.sortBy === 'pris') {
        if (sort.order === 'asc') {
          filteredProducts = sortByPriceAsc(filteredProducts);
        } 
        else if (sort.order === 'desc') {
          filteredProducts = sortByPriceDesc(filteredProducts);
        }
    } 
    else if (sort.sortBy === 'rating') {
        if (sort.order === 'asc') {
          filteredProducts = sortByRatingAsc(filteredProducts);
        } 
        else if (sort.order === 'desc') {
          filteredProducts = sortByRatingDesc(filteredProducts);
        }
    }
    
    return filteredProducts;
}