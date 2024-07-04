import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'m78u81z1',
  dataset:"production",
  apiVersion:'2022-03-07',
  useCdn:'true',
  token:'skXMo0OqKhsBpqcrvZVv8PNDkm8GdYVUW1SmlfQZgsZCSM7zo7YfgxYyuGEt8TRiVxKV7PgTiNyn7aj4b6zBKZ4n0Nbgzc1k2E1oOcB9g6SbTUmxmTiJ05cG6nyiwLFij7Zg3DmxSZMiTcDjetqZV4p6YTpOlgyrxkELRA4bPxxp6kfGlQ3M'
})
const builder = imageUrlBuilder(client);
export const urlFor = (source)=> builder.image(source);
