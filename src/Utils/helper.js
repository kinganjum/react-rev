
export function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())  // here we used toLowerCase to match the search input even if user search in upper or lower case.(2.44.29)
    );
    return filterData;
  }
