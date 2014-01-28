using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Angular4DotNet.Models
{
    public class Student
    {
        [Required(ErrorMessage="Please enter a first name.")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Please enter a last name.")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Please enter an email address.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Please choose a password.")]
        public string Password { get; set; }
    }
}