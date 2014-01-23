using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Angular4DotNet.Controllers
{
    public class CoursesController : Controller
    {
        //
        // GET: /Hello/

        public ActionResult Index()
        {
            return View("Index", "", GetCourses());
        }

        public string GetCourses()
        {
            var courses = new[]
            {
                new Course {Number= "1", Name = "C#", Instructor= "Scott Allen"},
                new Course {Number= "2", Name = "Angularjs", Instructor= "Joe Eames"},
                new Course {Number= "3", Name = "Javascript", Instructor= "Elijah Manor"}
            };
            var settings = new JsonSerializerSettings{ContractResolver = new CamelCasePropertyNamesContractResolver()};
            return JsonConvert.SerializeObject(courses, Formatting.None, settings);
        }

    }

    public class Course
    {
        public string Number { get; set; }
        public string Name { get; set; }
        public string Instructor { get; set; }
    }

}
