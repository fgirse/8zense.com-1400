import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/", "/contact","/about","/404","/elements","/home" ,"/blog","/privacy-polici", "/authors", "/categories", "/tags"],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', "/blog"],
};
 