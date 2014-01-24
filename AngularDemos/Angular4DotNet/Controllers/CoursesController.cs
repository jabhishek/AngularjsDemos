using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Angular4DotNet.Models.Courses;
using Angular4DotNet.Models.Registration;

namespace Angular4DotNet.Controllers
{
    public class CoursesController : Controller
    {
        //
        // GET: /Hello/
        private readonly RegistrationVmBuilder _registrationVmBuilder = new RegistrationVmBuilder();
        public ActionResult Index()
        {
            return View("Index", "", _registrationVmBuilder.GetCourses());
        }
    }



}
