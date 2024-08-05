using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text;
using Newtonsoft.Json;

namespace AspNetCore.ReCaptcha.RazorPages.Pages;

[ValidateReCaptcha("contact")]
public class ContactModel : PageModel
{

    [BindProperty]
    public MyModel MyModel { get; set; }

    public void OnGet()
    {
    }

    public bool Display { get; set; }

    //public IActionResult OnPost()
    //{
    //    if (!ModelState.IsValid)
    //        return Page();

    //    ////remove recaptcha element from here
    //    TempData["Message"] = "Your form has been sent!";
    //    return Redirect($"https://api.web3forms.com/submit");
    //}

    public async Task<IActionResult> OnPostAsync()
    {
        // Validate the model
        if (!ModelState.IsValid)
        {
            return Page();
        }

        // Create an instance of HttpClient
        using (var client = new HttpClient())
        {
           
            // Serialize the form data to JSON
            var json = JsonConvert.SerializeObject(MyModel);

            // Send a POST request to the external page with the form data
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("https://api.web3forms.com/submit", content);

            // Check the response status code
            if (response.IsSuccessStatusCode)
            {
                return Redirect("contact-success");
            }
            else
            {
                return StatusCode((int)response.StatusCode);
            }
        }
    }
}

public class MyModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public long PhoneNumber { get; set; }
    public string Message { get; set; }
}