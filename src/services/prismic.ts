import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const apiEndPoint = process.env.PRISMIC_END_POINT;
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

  const prismic = Prismic.client(apiEndPoint, { req, accessToken });

  return prismic;
}
