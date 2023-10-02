import API_URL from "./constants";

async function getPosts(category, numOfPage, page) {
  var url =
    API_URL.POST +
    `/?fields=ID,title,featured_image,attachments,post_thumnail,slug&number=${numOfPage}`;

  if (category !== "") {
    url += `&category=${category}`;
  }

  if (page !== "") {
    url += `&page=${page}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

async function getPost(slug) {
  const url =
    API_URL.POST + `/slug:${slug}?fields=ID,title,content,featured_image`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

async function getCategories() {
  const url = API_URL.CATEGORY + "?fields=ID,name,slug";

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

module.exports = {
  getPosts,
  getPost,
  getCategories,
};
