using Angular4DotNet.Models.Courses;
using Angular4DotNet.Models.Registration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Angular4DotNet.Controllers
{
    public class CoursesController : ApiController
    {
        //
        // GET: /Courses/
        private readonly RegistrationVmBuilder _registrationVmBuilder = new RegistrationVmBuilder();
        public CourseVm[] Get()
        {
            return _registrationVmBuilder.GetCourses();
        }

    }
}
