export const UI_DISPLAY_NAMES: Record<string, string> = {
  'hotels_and_resorts': 'Hotel Operations',
  'restaurants': 'Restaurant Operations',
  'cinema_operations_pack': 'Multiplex Operations',
  'healthcare_and_hospital_operations': 'Hospital Operations',
  'school_operations_pack': 'School Operations',
  'franchise_operations_pack': 'Franchise Operations',
  'facility_management_blueprint': 'Facilities Operations',
  'supermarket_grocery_retail_pack': 'Grocery Store Operations',
  'fashion_and_apparel_retail': 'Fashion Store Operations',
  'retail_jewellery_operations_pack': 'Jewellery Store Operations',
  'electronics_showroom_pack': 'Electronics Store Operations',
};

export const getDisplayTitle = (id: string, defaultTitle: string) => {
  return UI_DISPLAY_NAMES[id] || defaultTitle;
};
