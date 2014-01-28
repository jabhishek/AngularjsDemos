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
        public HttpResponseMessage Post(Student student)
        {
            // do something
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

    }

    public class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }


}
