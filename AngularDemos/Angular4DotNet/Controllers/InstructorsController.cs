using Angular4DotNet.Models.Instructors;
using Angular4DotNet.Models.Registration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Angular4DotNet.Controllers
{
    public class InstructorsController : ApiController
    {
        //
        // GET: /Courses/
        private readonly RegistrationVmBuilder _registrationVmBuilder = new RegistrationVmBuilder();
        public InstructorVm[] Get()
        {
            return _registrationVmBuilder.GetInstructors();
        }

    }



}
