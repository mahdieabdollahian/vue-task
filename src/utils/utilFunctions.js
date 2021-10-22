export function addSeprator(data) {
  if (data) {
    return data.toLocaleString();
  } else {
    return data;
  }
}

export function redirectToProductDetail(item) {
  const { id } = item;
  this.$router.push({ path: `/product-detail/${id}` });
}
