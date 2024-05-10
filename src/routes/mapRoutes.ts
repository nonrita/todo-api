import { RequestHandler, Router } from "express";

type HttpMethod = "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head";
const httpMethods: HttpMethod[] = ["all", "get", "post", "put", "delete", "patch", "options", "head"];

interface IRouteObject {
  [key: string]: RequestHandler | IRouteObject;
}

function isHttpMethod(key: string): key is HttpMethod {
  return httpMethods.includes(key as HttpMethod);
}

function mapRoutes(router: Router, a: IRouteObject, route: string = '') {
  for (const key in a) {
    switch (typeof a[key]) {
      case 'object':
        mapRoutes(router, a[key] as IRouteObject, route + key);
        break;
      case 'function':
        if (isHttpMethod(key)) {
          console.log('%s %s', key, route);
          router[key](route, a[key] as RequestHandler);
        }
        break;
    }
  }
}

export default mapRoutes;
