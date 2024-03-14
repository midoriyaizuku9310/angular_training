import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const socialInterceptor: HttpInterceptorFn = (request, next) => {
  console.log(request)
  console.log(next)

  if (request && (request.url.includes('ghosted'))) {
    // throw new Error ("you cannot search ghost!!")
    const response = new HttpResponse({
      status: 422,
      statusText: 'unauthorised',

    })
    return of(response)


  }
  return next(request);
};







