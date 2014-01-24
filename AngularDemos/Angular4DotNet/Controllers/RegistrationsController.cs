using Angular4DotNet.Models.Registration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular4DotNet.Controllers
{
    public class RegistrationsController : Controller
    {
        //
        // GET: /Registrations/
        private readonly RegistrationVmBuilder _registrationVmBuilder = new RegistrationVmBuilder();
        public ActionResult Index()
        {
            return View("Index", "", _registrationVmBuilder.GetRegistrations());
        }

    }
}
