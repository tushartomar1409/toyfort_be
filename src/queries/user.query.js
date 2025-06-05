const users = `SELECT id, username, email, created_at FROM users`;

const getSliderImages = `SELECT id, link, image FROM slider`;

const bookImages = `SELECT product_id, image_default FROM images`;

const blogImages = `SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY bp.created_at DESC`;

const blogContent = `
  SELECT bc.name AS category_name,bc.slug AS category_slug,bp.id,bp.image_default,bp.content FROM blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id WHERE bp.id = ? AND bc.slug = ? ORDER BY bp.created_at DESC`;

const blogRelatedImages = `SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY RAND() LIMIT 3`  

module.exports = {
  users,
  getSliderImages,
  bookImages,
  blogImages,
  blogContent,
  blogRelatedImages
};
