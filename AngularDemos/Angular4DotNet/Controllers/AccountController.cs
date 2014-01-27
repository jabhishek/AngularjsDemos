using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Angular4DotNet.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/
        [HttpPost]
        public ActionResult Save(Student student)
        {
            // do something
            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
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
