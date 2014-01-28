using Angular4DotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Angular4DotNet.Controllers
{
    public class AccountController : ApiController
    {
        //
        // GET: /Account/
        public HttpResponseMessage Post(HttpRequestMessage request, Student student)
        {
            // do something
            if (ModelState.IsValid)
            {
                return new HttpResponseMessage(HttpStatusCode.OK);
            }

            return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());
        }

        private IEnumerable<string> GetErrorMessages()
        {
            return ModelState.Values.SelectMany(i => i.Errors.Select(e => e.ErrorMessage));
        }

    }




}
