
export const GetGif = async (category) => {
  const urlEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=ZibnH83SPe7Ce8dt77UDTX2n287iYEhg&q=${encodeURI(
    category
  )}&limit=20`;


  const get = await fetch(urlEndPoint);
  const { data } = await get.json();


  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  
  return gif;
};
