using Angular4DotNet.Models.Registration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular4DotNet.App.Courses.Controllers
{
    public class RegistrationController : Controller
    {
        //
        // GET: /Registration/
        private readonly RegistrationVmBuilder _registrationVmBuilder = new RegistrationVmBuilder();
        public ActionResult Index()
        {
            return View(_registrationVmBuilder.GetRegistrations());
        }

    }
}
